"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { Mail, Phone, MapPin, CalendarDays } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BookingModal from "@/components/BookingModal";

export default function ContactPage() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    useEffect(() => {
        const handleOpen = () => setIsBookingOpen(true);
        window.addEventListener("open-booking-modal", handleOpen);

        // Check query param
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get("book") === "true") {
            setIsBookingOpen(true);
            window.history.replaceState({}, document.title, window.location.pathname);
        }

        return () => {
            window.removeEventListener("open-booking-modal", handleOpen);
        };
    }, []);

    const buttonVariants = {
        idle: { scale: 1, boxShadow: "none" },
        hover: {
            scale: 1.05,
            boxShadow: "0 0 30px rgba(255, 195, 0, 0.6)",
            transition: { type: "spring", stiffness: 400, damping: 15 }
        }
    } as any;

    const iconVariants = {
        idle: { y: 0, scale: 1 },
        hover: {
            y: [0, -8, 2, -3, 0],
            scale: [1, 1.1, 0.95, 1.02, 1],
            transition: {
                duration: 0.6,
                ease: [0.25, 1, 0.5, 1] // non-linear interpolation
            }
        }
    } as any;

    return (
        <div className="bg-[#000814] min-h-screen">
            <PageHeader
                title="Contacto"
                subtitle="Estamos listos para atender tu próximo proyecto."
                backgroundImage="/images/planta.jpg"
            />

            <div className="container mx-auto px-6 pt-20 pb-0">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                                        <a href="mailto:ventas@aqua-metal.com.mx" className="text-white text-lg hover:text-accent-primary transition-colors">
                                            ventas@aqua-metal.com.mx
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 group">
                                    <div className="p-3 bg-accent-primary/10 rounded-lg text-accent-primary group-hover:bg-accent-primary group-hover:text-black transition-colors">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Teléfono</p>
                                        <a href="https://wa.me/525613440508" className="text-white text-lg hover:text-accent-primary transition-colors">
                                            (+52) 56 1344 0508
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 group">
                                    <div className="p-3 bg-accent-primary/10 rounded-lg text-accent-primary group-hover:bg-accent-primary group-hover:text-black transition-colors">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Número de fábrica</p>
                                        <a href="tel:+525613440508" className="text-white text-lg hover:text-accent-primary transition-colors">
                                            56 1344 0508
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

                    {/* Booking Trigger Button Container */}
                    <div className="bg-card-bg border border-white/10 p-12 md:p-16 rounded-3xl glass-panel relative overflow-hidden flex flex-col items-center justify-center text-center space-y-8 shadow-[0_0_50px_rgba(255,195,0,0.03)] min-h-[350px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent pointer-events-none" />
                        
                        <div className="space-y-3 relative z-10">
                            <h3 className="text-3xl font-display font-bold text-white uppercase tracking-wider">Agendar una Reunión</h3>
                            <p className="text-gray-400 max-w-sm mx-auto leading-relaxed">
                                Selecciona una fecha y hora conveniente para discutir los requisitos de tu proyecto de precisión.
                            </p>
                        </div>

                        <motion.button
                            onClick={() => setIsBookingOpen(true)}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap={{ scale: 0.96 }}
                            initial="idle"
                            animate="idle"
                            className="relative z-10 flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-accent-primary to-[#ffd60a] text-black font-black text-lg uppercase tracking-wider rounded-2xl cursor-pointer"
                        >
                            <motion.span variants={iconVariants} className="flex items-center justify-center">
                                <CalendarDays className="w-6 h-6" />
                            </motion.span>
                            Agendar cita
                        </motion.button>
                    </div>
                </div>
            </div>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    );
}
