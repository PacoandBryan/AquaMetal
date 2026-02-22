"use client";

import Hero from "@/components/Hero";
import TrustCounter from "@/components/TrustCounter";
import MachineStroke from "@/components/MachineStroke";
import TextScramble from "@/components/TextScramble";
import Link from "next/link";
import Image from "next/image";
import MotionWrapper, { FadeIn } from "@/components/MotionWrapper";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const services = [
    { id: "torneado-cnc", label: "Torneado CNC", tag: "±0.005mm", color: "#ffc300" },
    { id: "tornos-automaticos", label: "Tornos Automáticos", tag: "Index/Traub", color: "#ffd60a" },
    { id: "centros-maquinado", label: "Centros de Maquinado", tag: "3-5 Ejes", color: "#ffc300" },
    { id: "inspeccion-calidad", label: "Inspección de Calidad", tag: "ISO 9001", color: "#ffd60a" },
    { id: "diseno-desarrollo", label: "Diseño y DFM", tag: "Consulting", color: "#ffc300" },
    { id: "produccion-volumen", label: "Alto Volumen", tag: "+5,000 pzas", color: "#ffd60a" },
];

const marqueeItems = [...services, ...services, ...services];

// ── ANIMATION 4: 3D Tilt Card ────────────────────────────────
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });
    const glowX = useTransform(x, [-0.5, 0.5], [0, 100]);
    const glowY = useTransform(y, [-0.5, 0.5], [0, 100]);

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const reset = () => { x.set(0); y.set(0); };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
            className={className}
        >
            {/* Dynamic glare */}
            <motion.div
                className="absolute inset-0 z-30 rounded-2xl pointer-events-none"
                style={{
                    background: useTransform(
                        [glowX, glowY],
                        ([gx, gy]) =>
                            `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,195,0,0.08) 0%, transparent 60%)`
                    ),
                }}
            />
            {children}
        </motion.div>
    );
}

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-[#000814] text-white overflow-hidden font-sans">
            <MachineStroke />
            <Hero />
            <TrustCounter />

            {/* ── Services Marquee Loop ── */}
            <section className="py-20 border-y border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#000814] via-transparent to-[#000814] z-10 pointer-events-none" />
                <div className="container mx-auto px-6 mb-10 relative z-20">
                    <FadeIn className="flex items-center justify-between">
                        <div>
                            <span className="text-accent-primary text-sm font-mono uppercase tracking-[0.3em] mb-2 block">Servicios</span>
                            <h2 className="text-2xl md:text-3xl font-bold font-display text-white">
                                <TextScramble text="Capacidades de Manufactura" playOnMount />
                            </h2>
                        </div>
                        <Link href="/servicios" className="hidden md:inline-flex items-center gap-2 text-sm text-gray-400 hover:text-accent-primary transition-colors group">
                            Ver todos los servicios
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </FadeIn>
                </div>

                <div className="relative flex overflow-hidden gap-6 group">
                    <div className="flex gap-6 animate-marquee group-hover:animate-marquee-paused shrink-0" style={{ "--marquee-duration": "28s" } as React.CSSProperties}>
                        {marqueeItems.map((s, i) => (
                            <Link key={`a-${i}`} href="/servicios"
                                className="flex-shrink-0 group/card relative flex flex-col justify-between min-w-[260px] h-[140px] rounded-2xl border border-white/5 bg-[#001d3d]/40 hover:border-accent-primary/50 hover:bg-[#001d3d]/70 transition-all duration-300 overflow-hidden px-7 py-6 cursor-pointer">
                                <div className="absolute inset-0 opacity-0 group-hover/card:opacity-10 transition-opacity duration-300 rounded-2xl" style={{ background: `radial-gradient(circle at 50% 50%, ${s.color}, transparent 70%)` }} />
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-full" style={{ color: s.color, background: `${s.color}20`, border: `1px solid ${s.color}40` }}>{s.tag}</span>
                                    <span className="text-white/20 group-hover/card:text-white/60 transition-colors text-lg">→</span>
                                </div>
                                <h3 className="text-white font-bold font-display text-lg group-hover/card:text-accent-primary transition-colors">{s.label}</h3>
                            </Link>
                        ))}
                    </div>
                    <div className="flex gap-6 animate-marquee2 group-hover:animate-marquee-paused shrink-0" style={{ "--marquee-duration": "28s" } as React.CSSProperties}>
                        {marqueeItems.map((s, i) => (
                            <Link key={`b-${i}`} href="/servicios"
                                className="flex-shrink-0 group/card relative flex flex-col justify-between min-w-[260px] h-[140px] rounded-2xl border border-white/5 bg-[#001d3d]/40 hover:border-accent-primary/50 hover:bg-[#001d3d]/70 transition-all duration-300 overflow-hidden px-7 py-6 cursor-pointer">
                                <div className="absolute inset-0 opacity-0 group-hover/card:opacity-10 transition-opacity duration-300 rounded-2xl" style={{ background: `radial-gradient(circle at 50% 50%, ${s.color}, transparent 70%)` }} />
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-full" style={{ color: s.color, background: `${s.color}20`, border: `1px solid ${s.color}40` }}>{s.tag}</span>
                                    <span className="text-white/20 group-hover/card:text-white/60 transition-colors text-lg">→</span>
                                </div>
                                <h3 className="text-white font-bold font-display text-lg group-hover/card:text-accent-primary transition-colors">{s.label}</h3>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="container mx-auto px-6 mt-8 relative z-20 md:hidden">
                    <Link href="/servicios" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-accent-primary transition-colors group">
                        Ver todos los servicios <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </section>

            {/* ── Capabilities Section with 3D Tilt Cards ── */}
            <section id="capabilities" className="py-32 relative">
                <div className="container mx-auto px-6 relative z-10">
                    <MotionWrapper className="mb-24 max-w-4xl">
                        <span className="text-accent-primary text-sm font-mono uppercase tracking-[0.3em] mb-4 block">Procesos</span>
                        <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
                            Desde 1mm hasta{" "}
                            <TextScramble text="60mm" className="text-accent-primary" />
                            .
                        </h2>
                        <p className="text-gray-400 text-xl font-light leading-relaxed max-w-2xl">
                            Maquinado de precisión para componentes complejos. Manejamos los detalles microscópicos que impulsan a las industrias macroscópicas.
                        </p>
                    </MotionWrapper>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* ── ANIMATION 4: 3D Tilt Card 1 ── */}
                        <TiltCard className="group relative h-[40vh] min-h-[320px] max-h-[540px] rounded-2xl overflow-hidden border border-white/5 bg-[#001d3d]">
                            <div className="absolute inset-0 bg-gray-900/50 z-10 group-hover:bg-gray-900/30 transition-colors" />
                            <Image src="/images/img_2103.jpg" alt="CNC Lathe" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent z-20">
                                <h3 className="text-2xl font-bold text-white mb-2 font-display">Torneado CNC</h3>
                                <p className="text-gray-400 text-sm mb-6">Torneado de alta velocidad para aluminio y acero.</p>
                                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <div>
                                        <div className="text-[10px] text-accent-primary uppercase tracking-wider font-mono">Diámetro Máx</div>
                                        <div className="text-white font-mono">42mm</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-accent-primary uppercase tracking-wider font-mono">Tolerancia</div>
                                        <div className="text-white font-mono">±0.005mm</div>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>

                        {/* ── Tornos Automáticos Card ── */}
                        <TiltCard className="group relative h-[40vh] min-h-[320px] max-h-[540px] rounded-2xl overflow-hidden border border-white/5 bg-[#001d3d]">
                            <div className="absolute inset-0 bg-gray-900/50 z-10 group-hover:bg-gray-900/30 transition-colors" />
                            <Image src="/images/img_8882.jpeg" alt="Tornos Automáticos" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent z-20">
                                <h3 className="text-2xl font-bold text-white mb-2 font-display">Tornos Automáticos</h3>
                                <p className="text-gray-400 text-sm mb-6">Producción de alta velocidad para componentes de precisión.</p>
                                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <div>
                                        <div className="text-[10px] text-accent-primary uppercase tracking-wider font-mono">Diámetro Máx</div>
                                        <div className="text-white font-mono">42mm</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-accent-primary uppercase tracking-wider font-mono">Volumen</div>
                                        <div className="text-white font-mono">Alto</div>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    </div>
                </div>
            </section>

            {/* The Plant Section */}
            <section className="py-32 bg-[#001d3d]/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-primary/5 -skew-x-12" />
                <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <FadeIn>
                            <span className="text-accent-secondary text-sm font-mono uppercase tracking-[0.2em] mb-4 block">Infraestructura</span>
                            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
                                La Planta. <br />
                                <span className="text-gray-500">1,000m² de Potencia.</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                Nuestra instalación procesa más de 5,000 unidades por lote con 22 máquinas especializadas trabajando al unísono.
                                Un ecosistema sincronizado de eficiencia industrial.
                            </p>
                            <Link href="/infraestructura" className="text-white border-b border-accent-primary pb-1 hover:text-accent-primary transition-colors">
                                Tour Virtual →
                            </Link>
                        </FadeIn>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-2 gap-4">
                        <MotionWrapper delay={0.1} className="relative h-[38vh] min-h-[200px] max-h-[300px] bg-[#001d3d] rounded-lg overflow-hidden border border-white/5">
                            <Image src="/images/img_8969.jpeg" fill className="object-cover opacity-60 hover:opacity-100 transition-opacity duration-500" alt="Plant 1" />
                        </MotionWrapper>
                        <MotionWrapper delay={0.2} className="relative h-[38vh] min-h-[200px] max-h-[300px] bg-[#001d3d] rounded-lg overflow-hidden border border-white/5 mt-6 md:mt-8">
                            <Image src="/images/img_8884.jpeg" fill className="object-cover opacity-60 hover:opacity-100 transition-opacity duration-500" alt="Plant 2" />
                        </MotionWrapper>
                    </div>
                </div>
            </section>

            {/* Vision 2030 */}
            <section id="vision-2030" className="py-24 relative">
                <div className="container mx-auto px-6 text-center">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
                            <TextScramble text="Visión 2030" playOnMount delay={0.5} />
                        </h2>
                        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
                            En 2030 seremos una empresa líder, a nivel nacional, de la industria metalmecánica impulsados por la mejora continua, compromiso, talento y experiencia de nuestros colaboradores, infraestructura sólida y finanzas sanas.
                        </p>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
