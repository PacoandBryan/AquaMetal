"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";



export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    // TODO: ¡IMPORTANTE! Reemplaza '1234' con el número que ves en la URL de tu WordPress (ej. post=1234)
    // El ID debe ser SOLO NÚMEROS. "44259ff" no funcionará.
    const FORM_ID = "1736";
    const WORDPRESS_URL = "https://aqua-metal.com";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        try {
            const body = new FormData();
            body.append("your-name", formData.name);
            body.append("your-email", formData.email);
            body.append("your-subject", formData.subject);
            body.append("your-message", formData.message);
            // CF7 required fields for validation in newer versions
            body.append("_wpcf7_unit_tag", `wpcf7-f${FORM_ID}-p1-o1`);
            body.append("_wpcf7", FORM_ID);
            body.append("_wpcf7_locale", "es_ES");
            body.append("_wpcf7_version", "5.9.3"); // Example version, generally safe to be static
            body.append("_wpcf7_container_post", "0");

            const res = await fetch(`${WORDPRESS_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`, {
                method: "POST",
                body: body
            });

            const json = await res.json();

            if (json.status === "mail_sent") {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("error");
                setErrorMessage(json.message || "Hubo un error al enviar el mensaje.");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
            setErrorMessage("Error de conexión. Por favor intenta de nuevo.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    return (
        <div className="bg-[#000814] min-h-screen">
            <PageHeader
                title="Contacto"
                subtitle="Estamos listos para atender tu próximo proyecto."
                backgroundImage="/images/planta.jpg"
            />

            <div className="container mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-display font-bold text-white mb-6 uppercase">Información Directa</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4 group">
                                    <div className="p-3 bg-accent-primary/10 rounded-lg text-accent-primary group-hover:bg-accent-primary group-hover:text-black transition-colors">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Email</p>
                                        <a href="mailto:ventas@aqua-metal.com" className="text-white text-lg hover:text-accent-primary transition-colors">
                                            ventas@aqua-metal.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 group">
                                    <div className="p-3 bg-accent-primary/10 rounded-lg text-accent-primary group-hover:bg-accent-primary group-hover:text-black transition-colors">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Teléfono</p>
                                        <a href="https://wa.me/5613440508" className="text-white text-lg hover:text-accent-primary transition-colors">
                                            (+52) 56 1344 0508
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 group">
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Jilotzingo%2C+Santa+Ana+Jilotzingo%2C+Edo.+M%C3%A9x.%2C+M%C3%A9xico"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-accent-primary/10 rounded-lg text-accent-primary group-hover:bg-accent-primary group-hover:text-black transition-colors"
                                    >
                                        <MapPin size={24} />
                                    </a>
                                    <div>
                                        <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Ubicación</p>
                                        <a
                                            href="https://www.google.com/maps/search/?api=1&query=Jilotzingo%2C+Santa+Ana+Jilotzingo%2C+Edo.+M%C3%A9x.%2C+M%C3%A9xico"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white text-lg hover:text-accent-primary transition-colors block"
                                        >
                                            Jilotzingo, Santa Ana Jilotzingo, Edo. Méx., México
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
                            <h4 className="text-xl font-bold text-white mb-2">Horario de Atención</h4>
                            <p className="text-gray-400">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-card-bg border border-white/10 p-8 md:p-12 rounded-2xl glass-panel relative overflow-hidden">

                        {/* Status Overlay */}
                        {status === "success" && (
                            <div className="absolute inset-0 z-20 bg-[#000814] flex flex-col items-center justify-center p-8 text-center animate-fade-in">
                                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4 text-green-500">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                                <p className="text-gray-400 mb-6">Gracias por contactarnos. Te responderemos a la brevedad posible.</p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        )}

                        <h3 className="text-2xl font-display font-bold text-white mb-8 uppercase">Envíanos un mensaje</h3>
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Nombre</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors"
                                        placeholder="ejemplo@correo.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Asunto</label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors"
                                    placeholder="Cotización / Información"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300">Mensaje</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors resize-none"
                                    placeholder="¿En qué podemos ayudarte?"
                                />
                            </div>

                            {status === "error" && (
                                <div className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
                                    <AlertCircle size={20} />
                                    <p className="text-sm">{errorMessage}</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full bg-accent-primary text-black font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {status === "submitting" ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        Enviar Mensaje
                                        <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
