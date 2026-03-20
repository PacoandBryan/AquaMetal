"use server";

import https from "https";

const FORM_ID = "1736";
const WORDPRESS_IP = "192.0.78.12";
const HOST_HEADER = "aqua-metal.com";

export interface ContactResponse {
    success: boolean;
    error?: string;
}

export async function sendContactForm(formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
}): Promise<ContactResponse> {
    console.log("--- Starting sendContactForm Server Action ---");
    console.log("Form Data:", formData);

    // --- Resend Backup (Temporary) ---
    try {
        const resendRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Authorization": `Bearer re_UhWbb96U_4kKz5du58CNTeGad2DbeiMN4`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                from: "Aqua Metal <onboarding@resend.dev>",
                to: "l.arjona@aqua-metal.com.mx",
                subject: `Nueva Cotización: ${formData.subject}`,
                html: `
                    <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                        <h2 style="color: #0066cc;">Nueva solicitud de contacto</h2>
                        <p><strong>Nombre:</strong> ${formData.name}</p>
                        <p><strong>Email:</strong> ${formData.email}</p>
                        <p><strong>Asunto:</strong> ${formData.subject}</p>
                        <p><strong>Mensaje:</strong></p>
                        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
                            ${formData.message.replace(/\n/g, '<br>')}
                        </div>
                        <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
                        <p style="font-size: 12px; color: #999;">Este es un respaldo automático enviado desde Vercel.</p>
                    </div>
                `
            })
        });
        const resendData = await resendRes.json();
        console.log("Resend Backup Status:", resendData);
    } catch (error) {
        console.error("Resend Backup Error:", error);
    }

    return new Promise<ContactResponse>((resolve) => {
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
                    "User-Agent": "Node.js/Next.js Server Action (Aqua Metal)",
                    "Accept": "*/*",
                    "Content-Type": `multipart/form-data; boundary=${boundary}`,
                    "Content-Length": Buffer.byteLength(data)
                }
            };

            console.log("Request Options:", { ...options, headers: { ...options.headers } });

            const req = https.request(options, (res) => {
                console.log("WordPress Status Code:", res.statusCode);
                console.log("WordPress Headers:", res.headers);

                let chunks = "";
                res.on("data", (chunk) => chunks += chunk);
                res.on("end", () => {
                    console.log("WordPress raw response:", chunks);
                    try {
                        const json = JSON.parse(chunks);
                        if (json.status === "mail_sent") {
                            console.log("Success: Mail Sent");
                            resolve({ success: true });
                        } else {
                            console.log("Failure: WordPress returned status", json.status);
                            resolve({
                                success: false,
                                error: json.message || "WordPress rechazó el mensaje."
                            });
                        }
                    } catch (e) {
                        console.error("JSON Parse Error:", e);
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
