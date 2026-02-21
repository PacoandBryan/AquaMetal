"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
    const scrollProgress = useMotionValue(0);
    const scaleX = useSpring(scrollProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            scrollProgress.set(docHeight > 0 ? scrollTop / docHeight : 0);
        };
        window.addEventListener("scroll", updateProgress, { passive: true });
        return () => window.removeEventListener("scroll", updateProgress);
    }, [scrollProgress]);

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 z-[9999] h-[2px] origin-left"
            style={{
                scaleX,
                background: "linear-gradient(90deg, #ffc300, #ffd60a)",
                boxShadow: "0 0 10px rgba(255,195,0,0.6)",
            }}
        />
    );
}
