"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const WHATSAPP_NUMBER = "5613440508";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function WhatsAppBubble() {
    const bubbleRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        // Small entrance animation delay
        const el = bubbleRef.current;
        if (el) {
            el.style.opacity = "0";
            el.style.transform = "scale(0.5) translateY(20px)";
            setTimeout(() => {
                el.style.transition = "opacity 0.5s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
                el.style.opacity = "1";
                el.style.transform = "scale(1) translateY(0)";
            }, 1200);
        }
    }, []);

    return (
        <Link
            ref={bubbleRef}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="whatsapp-bubble fixed bottom-6 right-6 z-[9999] group"
        >
            {/* Outer pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 whatsapp-pulse pointer-events-none" />

            {/* Main button */}
            <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_8px_32px_rgba(37,211,102,0.45)] whatsapp-bounce group-hover:scale-110 group-hover:shadow-[0_12px_40px_rgba(37,211,102,0.65)] transition-all duration-300 ease-out">
                {/* WhatsApp SVG icon */}
                <svg
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.374-5.03c0-5.429 4.417-9.846 9.846-9.846 2.63 0 5.101 1.025 6.961 2.884 1.859 1.859 2.885 4.331 2.885 6.961 0 5.429-4.417 9.846-9.846 9.846M12.051.48c-6.383 0-11.573 5.192-11.573 11.572 0 2.041.531 4.035 1.539 5.799l-1.637 5.976 6.131-1.608a11.528 11.528 0 005.54 1.43c6.383 0 11.573-5.191 11.573-11.572S18.434.48 12.051.48" />
                </svg>
            </span>

            {/* Tooltip */}
            <span className="absolute right-16 bottom-2 bg-[#001d3d] text-white text-sm font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 shadow-lg pointer-events-none border border-white/10">
                Chatea con nosotros
            </span>
        </Link>
    );
}
