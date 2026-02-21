"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function MachineStroke() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="fixed top-0 left-6 md:left-12 h-screen w-[2px] z-40 mix-blend-screen pointer-events-none hidden md:block">
            {/* Track */}
            <div className="absolute top-0 left-0 w-full h-full bg-white/5" />

            {/* The "Tool Head" Progress Line */}
            <motion.div
                className="absolute top-0 left-0 w-full bg-accent-primary shadow-[0_0_15px_var(--color-accent-primary)]"
                style={{ height: "100%", scaleY, transformOrigin: "top" }}
            >
                {/* Tool Head Tip */}
                <div className="absolute bottom-0 -left-[3px] w-2 h-4 bg-white rounded-full shadow-[0_0_10px_white]" />
            </motion.div>
        </div>
    );
}
