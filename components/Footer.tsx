"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-[#000814] border-t border-white/5 pt-24 pb-12 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* CTA Section */}
                <div className="glass-panel p-8 md:p-12 rounded-3xl mb-24 flex flex-col md:flex-row justify-between items-center gap-8 border border-white/5 bg-white/[0.02]">
                    <div className="max-w-xl">
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            ¿Listo para elevar tu producción?
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Hablemos de cómo nuestra manufactura de precisión puede escalar tus operaciones.
                        </p>
                    </div>
                    <div>
                        <Link href="/contacto">
                            <button className="whitespace-nowrap bg-white text-black px-8 py-4 rounded-full text-base font-bold hover:bg-gray-200 transition-colors flex items-center gap-2">
                                Iniciar Proyecto
                                <ArrowUpRight size={20} />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/5 pb-16">
                    {/* Brand Column */}
                    <div className="md:col-span-5 space-y-6">
                        <Link href="/" className="inline-block group">
                            <div className="flex items-center gap-3">
                                <div className="relative h-10 w-10">
                                    <Image src="/logo.png" alt="Aqua Metal Logo" fill className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <span className="text-2xl font-bold tracking-tight font-display text-white">
                                    Aqua<span className="text-accent-primary">Metal</span>
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                            Estandarizando la excelencia en la manufactura de metal. Proveemos soluciones de alta precisión para el sector industrial con garantía de calidad ISO 9001.
                        </p>
                    </div>

                    {/* Navigation Columns */}
                    <div className="md:col-span-2 md:col-start-7">
                        <h4 className="text-white font-semibold mb-6">Mapa del Sitio</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="/" className="hover:text-accent-primary transition-colors">Inicio</Link></li>
                            <li><Link href="/conocenos" className="hover:text-accent-primary transition-colors">Conócenos</Link></li>
                            <li><Link href="/servicios" className="hover:text-accent-primary transition-colors">Servicios</Link></li>
                            <li><Link href="/procesos" className="hover:text-accent-primary transition-colors">Procesos</Link></li>
                            <li><Link href="/infraestructura" className="hover:text-accent-primary transition-colors">Infraestructura</Link></li>
                            <li><Link href="/galeria" className="hover:text-accent-primary transition-colors">Galería</Link></li>
                            <li><Link href="/blog" className="hover:text-accent-primary transition-colors">Blog</Link></li>
                            <li><Link href="/contacto" className="hover:text-accent-primary transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="text-white font-semibold mb-6">Contacto</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="block w-2 h-2 mt-1.5 rounded-full bg-green-500 shrink-0" />
                                <span>Calidad Certificada ISO 9001</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="block w-2 h-2 mt-1.5 rounded-full bg-accent-primary shrink-0" />
                                <span>Cumplimiento NOM-STPS-035-2018</span>
                            </li>
                            <li className="pt-4 text-white">Jilotzingo, Santa Ana Jilotzingo, Edo. Méx., México</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Aqua Metal. Hecho con precisión.</p>
                    <p className="text-center text-gray-600">
                        Página web hecha por Leonardo Torres Hernández &mdash;{" "}
                        <a href="mailto:leonardo.trres.hernandez@gmail.com" className="hover:text-gray-400 transition-colors">
                            leonardo.trres.hernandez@gmail.com
                        </a>
                        {" "}·{" "}
                        <a href="tel:+525564343543" className="hover:text-gray-400 transition-colors">
                            52 55 64343543
                        </a>
                    </p>
                </div>
            </div>
        </footer >
    );
}
