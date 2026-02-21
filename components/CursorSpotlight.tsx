"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorSpotlight() {
    const mouseX = useMotionValue(-500);
    const mouseY = useMotionValue(-500);

    const springX = useSpring(mouseX, { stiffness: 80, damping: 20, mass: 0.5 });
    const springY = useSpring(mouseY, { stiffness: 80, damping: 20, mass: 0.5 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden hidden md:block"
            aria-hidden="true"
        >
            <motion.div
                className="absolute rounded-full"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                    width: 600,
                    height: 600,
                    background:
                        "radial-gradient(circle, rgba(255,195,0,0.055) 0%, rgba(255,195,0,0.02) 40%, transparent 70%)",
                }}
            />
        </motion.div>
    );
}
