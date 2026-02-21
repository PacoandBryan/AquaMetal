"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789±./μ";

interface TextScrambleProps {
    text: string;
    className?: string;
    /** If true, scramble plays on mount. If false (default), plays on hover. */
    playOnMount?: boolean;
    delay?: number;
}

export default function TextScramble({ text, className, playOnMount = false, delay = 0 }: TextScrambleProps) {
    const [display, setDisplay] = useState(playOnMount ? "" : text);
    const frameRef = useRef<number | null>(null);
    const hasPlayed = useRef(false);

    const scramble = () => {
        if (frameRef.current) cancelAnimationFrame(frameRef.current);
        const chars = text.split("");
        const totalFrames = chars.length * 3 + 12;
        let frame = 0;

        const tick = () => {
            const out = chars.map((ch, i) => {
                if (ch === " ") return " ";
                const resolved = frame >= i * 3 + 10;
                if (resolved) return ch;
                return CHARS[Math.floor(Math.random() * CHARS.length)];
            });
            setDisplay(out.join(""));
            frame++;
            if (frame < totalFrames) {
                frameRef.current = requestAnimationFrame(tick);
            } else {
                setDisplay(text);
            }
        };
        frameRef.current = requestAnimationFrame(tick);
    };

    useEffect(() => {
        if (playOnMount && !hasPlayed.current) {
            hasPlayed.current = true;
            const t = setTimeout(scramble, delay * 1000);
            return () => clearTimeout(t);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
    }, []);

    return (
        <span
            className={className}
            onMouseEnter={playOnMount ? undefined : scramble}
            style={{ cursor: playOnMount ? undefined : "default" }}
        >
            {display}
        </span>
    );
}
