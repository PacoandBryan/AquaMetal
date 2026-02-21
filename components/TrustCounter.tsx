"use client";

import { useInView, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = `${Math.floor(latest)}${suffix}`;
            }
        });
    }, [springValue, suffix]);

    return (
        <div className="flex flex-col items-center text-center p-6 glass-panel rounded-2xl border border-white/5 hover:border-accent-primary/20 transition-colors duration-500">
            <span
                ref={ref}
                className="text-5xl md:text-6xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-2"
            >
                0
            </span>
            <span className="text-sm md:text-base text-accent-primary uppercase tracking-widest font-medium">
                {label}
            </span>
        </div>
    );
}

export default function TrustCounter() {
    return (
        <section className="relative py-24 bg-[#000814]">
            {/* Decorative Background Grid */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(197,160,89,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(197,160,89,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

            <div className="container relative z-10 mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Counter value={25} label="Años de Experiencia" suffix="+" />
                    <Counter value={5000} label="Unidades por Lote" suffix="+" />
                    <Counter value={22} label="Máquinas Especializadas" suffix="+" />
                </div>
            </div>
        </section>
    );
}
