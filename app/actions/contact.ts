"use server";

const FORM_ID = "1736";
// Trigger re-build for Vercel
// Use the WordPress IP directly to bypass Vercel's DNS interception
const WORDPRESS_IP = "http://192.0.78.12";
const HOST_HEADER = "aqua-metal.com";

export async function sendContactForm(formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
}) {
    try {
        const body = new FormData();
        body.append("your-name", formData.name);
        body.append("your-email", formData.email);
        body.append("your-subject", formData.subject);
        body.append("your-message", formData.message);

        // CF7 required fields for validation
        body.append("_wpcf7_unit_tag", `wpcf7-f${FORM_ID}-p1-o1`);
        body.append("_wpcf7", FORM_ID);
        body.append("_wpcf7_locale", "es_ES");
        body.append("_wpcf7_version", "5.9.3");
        body.append("_wpcf7_container_post", "0");

        const res = await fetch(`${WORDPRESS_IP}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`, {
            method: "POST",
            body: body,
            headers: {
                "Host": HOST_HEADER,
            },
        });

        if (!res.ok) {
            throw new Error(`WordPress responded with ${res.status}`);
        }

        const json = await res.json();

        if (json.status === "mail_sent") {
            return { success: true };
        } else {
            return {
                success: false,
                error: json.message || "Hubo un error al enviar el mensaje por parte de WordPress."
            };
        }
    } catch (error) {
        console.error("Error in sendContactForm server action:", error);
        return {
            success: false,
            error: "No se pudo establecer conexión con el servidor de correos. Intenta de nuevo."
        };
    }
}
