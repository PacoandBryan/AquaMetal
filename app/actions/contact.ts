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

export async function sendBookingEmail(bookingData: {
    name: string;
    email: string;
    purpose: string;
    website: string;
    date: string;
    time: string;
}): Promise<ContactResponse> {
    console.log("--- Starting sendBookingEmail Server Action ---");
    console.log("Booking Data:", bookingData);

    const RESEND_API_KEY = "re_UhWbb96U_4kKz5du58CNTeGad2DbeiMN4";

    try {
        // 1. Send confirmation email to the user
        const userEmailBody = `
            <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #e0e0e0; border-radius: 12px; color: #333333; background-color: #ffffff;">
                <div style="text-align: center; border-bottom: 2px solid #ffc300; padding-bottom: 20px; margin-bottom: 30px;">
                    <h1 style="color: #000814; margin: 0; font-size: 24px;">Confirmación de Solicitud de Cita</h1>
                    <p style="color: #555555; margin: 5px 0 0 0; font-size: 14px;">Aqua Metal - Manufactura de Precisión</p>
                </div>
                
                <p>Hola <strong>${bookingData.name}</strong>,</p>
                <p>Hemos recibido tu solicitud para agendar una cita. A continuación, te compartimos los detalles registrados:</p>
                
                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc300;">
                    <p style="margin: 5px 0;"><strong>Fecha sugerida:</strong> ${bookingData.date}</p>
                    <p style="margin: 5px 0;"><strong>Hora sugerida:</strong> ${bookingData.time}</p>
                    <p style="margin: 5px 0;"><strong>Propósito:</strong> ${bookingData.purpose}</p>
                    ${bookingData.website ? `<p style="margin: 5px 0;"><strong>Sitio Web:</strong> ${bookingData.website}</p>` : ''}
                </div>
                
                <p style="line-height: 1.6;">Un miembro del equipo de <strong>Aqua Metal</strong> se pondrá en contacto contigo para confirmar la disponibilidad y formalizar la reunión. El tiempo de respuesta estimado es de <strong>una semana laboral a un mes</strong>.</p>
                
                <p style="margin-top: 30px;">Atentamente,<br><strong>El equipo de Aqua Metal</strong></p>
                
                <hr style="border: none; border-top: 1px solid #eeeeee; margin: 30px 0;" />
                
                <div style="font-size: 12px; color: #777777; line-height: 1.5; text-align: center;">
                    <p style="margin: 0; font-weight: bold;">Aqua Metal</p>
                    <p style="margin: 4px 0;">Jilotzingo, Santa Ana Jilotzingo, Edo. Méx., México</p>
                    <p style="margin: 4px 0;">Tel: (+52) 56 1344 0508 | Email: ventas@aqua-metal.com.mx</p>
                    <p style="margin: 10px 0 0 0; font-size: 10px; color: #aaaaaa;">&copy; ${new Date().getFullYear()} Aqua Metal. Todos los derechos reservados.</p>
                </div>
            </div>
        `;

        const userRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${RESEND_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                from: "Aqua Metal <onboarding@resend.dev>",
                to: bookingData.email,
                subject: "Confirmación de solicitud de cita - Aqua Metal",
                html: userEmailBody
            })
        });
        const userData = await userRes.json();
        console.log("Resend User Email Status:", userData);

        // 2. Send notification email to AquaMetal team (ventas@aqua-metal.com.mx)
        const teamEmailBody = `
            <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #ffc300; border-radius: 12px; color: #333333; background-color: #fcfcfc;">
                <div style="background-color: #ffe699; padding: 10px; border-radius: 6px; text-align: center; margin-bottom: 20px; font-weight: bold; color: #806000; border: 1px solid #ffd65c;">
                    [CORREO AUTOMÁTICO / AUTOMATED EMAIL]
                </div>
                
                <div style="text-align: center; margin-bottom: 25px; border-bottom: 2px solid #000814; padding-bottom: 20px;">
                    <img src="https://api.dicebear.com/7.x/initials/png?seed=${encodeURIComponent(bookingData.name)}&backgroundColor=ffc300&textColor=000814" width="80" height="80" style="border-radius: 50%; border: 3px solid #ffc300; display: inline-block; margin-bottom: 10px;" alt="${bookingData.name}" />
                    <h2 style="color: #000814; margin: 0; font-size: 20px;">Nueva Solicitud de Cita Recibida</h2>
                </div>
                
                <p>Se ha recibido una nueva solicitud de cita a través de la página web. Aquí están los detalles:</p>
                
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                    <tr style="border-bottom: 1px solid #eeeeee;">
                        <td style="padding: 10px 0; font-weight: bold; width: 35%;">Nombre del cliente:</td>
                        <td style="padding: 10px 0;">${bookingData.name}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eeeeee;">
                        <td style="padding: 10px 0; font-weight: bold;">Email de contacto:</td>
                        <td style="padding: 10px 0;"><a href="mailto:${bookingData.email}">${bookingData.email}</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eeeeee;">
                        <td style="padding: 10px 0; font-weight: bold;">Propósito:</td>
                        <td style="padding: 10px 0;">${bookingData.purpose}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eeeeee;">
                        <td style="padding: 10px 0; font-weight: bold;">Sitio Web:</td>
                        <td style="padding: 10px 0;">${bookingData.website ? `<a href="${bookingData.website}" target="_blank">${bookingData.website}</a>` : 'No proporcionado'}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eeeeee;">
                        <td style="padding: 10px 0; font-weight: bold;">Fecha sugerida:</td>
                        <td style="padding: 10px 0; font-weight: bold; color: #001d3d;">${bookingData.date}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eeeeee;">
                        <td style="padding: 10px 0; font-weight: bold;">Hora sugerida:</td>
                        <td style="padding: 10px 0; font-weight: bold; color: #001d3d;">${bookingData.time}</td>
                    </tr>
                </table>
                
                <p style="font-size: 13px; color: #666666; font-style: italic; margin-top: 30px; text-align: center;">
                    Por favor responda directamente al cliente a su correo electrónico para confirmar o reprogramar la cita.
                </p>
            </div>
        `;

        const teamRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${RESEND_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                from: "Aqua Metal System <onboarding@resend.dev>",
                to: "ventas@aqua-metal.com.mx",
                subject: `[AUTOMÁTICO] Nueva Cita de ${bookingData.name}`,
                html: teamEmailBody
            })
        });
        const teamData = await teamRes.json();
        console.log("Resend Team Email Status:", teamData);

        return { success: true };
    } catch (error) {
        console.error("Booking Email Error:", error);
        return { success: false, error: "Error de conexión al enviar el correo." };
    }
}
