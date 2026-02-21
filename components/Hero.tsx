"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RevealText, FadeIn } from "@/components/MotionWrapper";

// Engineering data floating in background
const PARTICLES = [
    "±0.005mm", "CNC", "7-AXIS", "ISO 9001", "Ø42mm",
    "G-CODE", "TRAUB", "60mm", "NOM-035", "INDEX",
    "Ø12mm", "FEED", "RPM", "PASS", "ALLOY",
    "1μm", "M6×1", "Ø6.35", "STEP", "QC",
];

// Deterministic pseudo-random from index (avoids SSR mismatch)
function seededRand(seed: number, max: number, offset = 0) {
    return ((seed * 9301 + offset * 49297 + 233) % max);
}

export default function Hero() {
    const { scrollY } = useScroll();
    const rotate = useTransform(scrollY, [0, 500], [0, 45]);
    const y = useTransform(scrollY, [0, 500], [0, 100]);

    // SVG gauge constants
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const arcFraction = 0.75; // 270° sweep
    const visibleLength = circumference * arcFraction;

    return (
        <section className="hero-min-h relative min-h-[100svh] w-full overflow-hidden flex items-center bg-[#000814]">
            {/* Background "Vacuum" */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--color-surface)_0%,_#000814_70%)] opacity-40" />

            {/* Subtle Grid */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(circle_at_center,black_40%,transparent_100%)]" />

            {/* ── ANIMATION 6: Floating Engineering Particles ── */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
                {PARTICLES.map((label, i) => {
                    const left = seededRand(i, 90, 1) + 2;
                    const top = seededRand(i, 88, 2) + 2;
                    const dur = 12 + seededRand(i, 18, 3);
                    const del = seededRand(i, 10, 4);
                    return (
                        <span
                            key={label + i}
                            className="absolute font-mono text-[10px] text-accent-primary"
                            style={{
                                left: `${left}%`,
                                top: `${top}%`,
                                opacity: 0.06,
                                animation: `floatParticle ${dur}s ease-in-out ${del}s infinite`,
                            }}
                        >
                            {label}
                        </span>
                    );
                })}
            </div>

            <div className="container relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full pt-20 lg:pt-0 pb-10 lg:pb-0">

                {/* Left: Content */}
                <div className="flex flex-col items-start text-left space-y-8">
                    <FadeIn delay={0.2} className="inline-flex items-center gap-3">
                        <span className="h-[1px] w-12 bg-accent-primary" />
                        <span className="text-sm font-mono text-accent-primary tracking-[0.2em] uppercase">Desde 2000</span>
                    </FadeIn>

                    <h1 className="max-w-4xl text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tighter text-white leading-none">
                        <span className="block text-gray-400 text-4xl md:text-5xl lg:text-6xl mb-4 font-light">Somos</span>
                        <span className="block text-accent-primary drop-shadow-[0_0_20px_rgba(255,195,0,0.3)]">
                            Precisión.
                        </span>
                        <div className="text-3xl md:text-4xl lg:text-5xl mt-4 text-white font-light tracking-wide">
                            <RevealText text="Ingeniería de Alta Precisión." delay={0.8} />
                        </div>
                    </h1>

                    <FadeIn delay={1.2} className="max-w-xl text-lg text-gray-400 font-light leading-relaxed border-l-2 border-white/5 pl-6">
                        Fabricando componentes metálicos estratégicos para la industria global desde el año 2000.
                        Especializados en maquinado CNC de 1mm a 60mm.
                    </FadeIn>

                    <FadeIn delay={1.4} className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                        <Link
                            href="/contacto"
                            className="group relative px-8 py-4 bg-accent-primary text-black rounded-full font-bold uppercase tracking-wide flex items-center gap-2 shadow-[0_0_20px_rgba(255,195,0,0.3)] hover:shadow-[0_0_40px_rgba(255,195,0,0.6)] hover:bg-accent-secondary transition-all"
                        >
                            Cotizar
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/#capabilities"
                            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase"
                        >
                            Ver Especificaciones
                            <span className="block h-[1px] w-8 bg-gray-600 group-hover:w-16 transition-all duration-300" />
                        </Link>
                    </FadeIn>
                </div>

                {/* Right: Visual with Precision Gauge (Animation 3) */}
                <div className="relative h-[40vh] sm:h-[50vh] lg:h-[80vh] w-full flex items-center justify-center">
                    <motion.div
                        style={{ rotate, y }}
                        className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                    >
                        {/* Orbit rings */}
                        <div className="absolute inset-0 rounded-full border border-accent-primary/20 animate-[spin_20s_linear_infinite]" />
                        <div className="absolute inset-4 rounded-full border border-white/10 animate-[spin_15s_linear_infinite_reverse]" />
                        <div className="absolute inset-12 rounded-full border border-accent-primary/40 border-dashed animate-[spin_30s_linear_infinite]" />

                        {/* Center object */}
                        <div className="absolute inset-0 m-auto w-48 h-48 bg-gradient-to-br from-gray-800 to-black rounded-xl rotate-45 border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565457596008-012001597843?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50 grayscale contrast-125 mix-blend-overlay" />
                            <div className="text-accent-primary/20 font-mono text-xs">CNC-60MM</div>
                        </div>

                        {/* ── ANIMATION 3: SVG Precision Gauge ── */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.5 }}
                            className="absolute -right-16 top-1/4 glass-panel p-4 rounded-xl border border-accent-primary/20"
                        >
                            {/* Gauge SVG */}
                            <svg width="90" height="72" viewBox="0 0 120 96" className="block mb-1">
                                {/* Track arc */}
                                <circle
                                    cx="60" cy="64" r={radius}
                                    fill="none"
                                    stroke="rgba(255,195,0,0.12)"
                                    strokeWidth="6"
                                    strokeDasharray={`${visibleLength} ${circumference}`}
                                    strokeDashoffset={circumference * 0.125}
                                    strokeLinecap="round"
                                    transform="rotate(135 60 64)"
                                />
                                {/* Animated fill arc */}
                                <motion.circle
                                    cx="60" cy="64" r={radius}
                                    fill="none"
                                    stroke="url(#gaugeGrad)"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                    strokeDasharray={`${visibleLength} ${circumference}`}
                                    strokeDashoffset={circumference * 0.125}
                                    transform="rotate(135 60 64)"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 2, delay: 1.8, ease: "easeOut" }}
                                />
                                <defs>
                                    <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#ffc300" />
                                        <stop offset="100%" stopColor="#ffd60a" />
                                    </linearGradient>
                                </defs>
                                {/* Center value */}
                                <motion.text
                                    x="60" y="62" textAnchor="middle"
                                    fill="#ffc300"
                                    fontSize="14"
                                    fontFamily="monospace"
                                    fontWeight="bold"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 2.5 }}
                                >
                                    60mm
                                </motion.text>
                                <text x="60" y="76" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="monospace">
                                    Ø máx
                                </text>
                            </svg>
                            <div className="font-mono text-[10px] text-accent-primary uppercase tracking-wider text-center">Diámetro</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.8 }}
                            className="absolute -left-4 bottom-1/4 glass-panel p-4 rounded-lg border border-white/10"
                        >
                            <div className="font-mono text-xs text-gray-400">Tolerancia</div>
                            <div className="text-xl text-white font-bold">±0.005</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
