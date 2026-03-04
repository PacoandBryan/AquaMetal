"use server";

import https from "https";

const FORM_ID = "1736";
const WORDPRESS_IP = "192.0.78.12";
const HOST_HEADER = "aqua-metal.com";

export async function sendContactForm(formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
}) {
    return new Promise((resolve) => {
        try {
            // Prepare the payload
            const boundary = "----NextJsServerAction" + Math.random().toString(16).slice(2);
            let data = "";

            const fields = {
                "your-name": formData.name,
                "your-email": formData.email,
                "your-subject": formData.subject,
                "your-message": formData.message,
                "_wpcf7": FORM_ID,
                "_wpcf7_unit_tag": `wpcf7-f${FORM_ID}-p1-o1`,
                "_wpcf7_locale": "es_ES",
                "_wpcf7_version": "5.9.3",
                "_wpcf7_container_post": "0"
            };

            for (const [key, value] of Object.entries(fields)) {
                data += `--${boundary}\r\n`;
                data += `Content-Disposition: form-data; name="${key}"\r\n\r\n`;
                data += `${value}\r\n`;
            }
            data += `--${boundary}--\r\n`;

            const options = {
                hostname: WORDPRESS_IP,
                port: 443,
                path: `/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
                method: "POST",
                rejectUnauthorized: false, // This is the key to bypass the SSL error
                headers: {
                    "Host": HOST_HEADER, // Tell WordPress which site we are
                    "Content-Type": `multipart/form-data; boundary=${boundary}`,
                    "Content-Length": Buffer.byteLength(data)
                }
            };

            const req = https.request(options, (res) => {
                let chunks = "";
                res.on("data", (chunk) => chunks += chunk);
                res.on("end", () => {
                    try {
                        const json = JSON.parse(chunks);
                        if (json.status === "mail_sent") {
                            resolve({ success: true });
                        } else {
                            resolve({
                                success: false,
                                error: json.message || "WordPress rechazó el mensaje."
                            });
                        }
                    } catch (e) {
                        resolve({ success: false, error: "Respuesta no válida del servidor." });
                    }
                });
            });

            req.on("error", (error) => {
                console.error("HTTPS Request Error:", error);
                resolve({ success: false, error: "No se pudo conectar con WordPress." });
            });

            req.write(data);
            req.end();

        } catch (error) {
            console.error("General Action Error:", error);
            resolve({ success: false, error: "Error interno procesando el formulario." });
        }
    });
}
