"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
    id: number;
    title: { rendered: string };
    source_url?: string;
    toLocalPath?: string;
    media_details: { width: number; height: number };
    alt_text?: string;
}

interface GalleryLightboxProps {
    items: GalleryItem[];
}

export default function GalleryLightbox({ items }: GalleryLightboxProps) {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const selectedItem = items.find((item) => item.id === selectedId);
    const selectedIndex = items.findIndex((item) => item.id === selectedId);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedId(items[(selectedIndex + 1) % items.length].id);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedId(items[(selectedIndex - 1 + items.length) % items.length].id);
    };

    // Touch swipe support
    const onTouchStart = (e: React.TouchEvent) => {
        const startX = e.touches[0].clientX;
        const onEnd = (ev: TouchEvent) => {
            const dx = ev.changedTouches[0].clientX - startX;
            if (Math.abs(dx) > 50) {
                if (dx < 0) setSelectedId(items[(selectedIndex + 1) % items.length].id);
                else setSelectedId(items[(selectedIndex - 1 + items.length) % items.length].id);
            }
            window.removeEventListener("touchend", onEnd);
        };
        window.addEventListener("touchend", onEnd, { once: true });
    };

    return (
        <>
            {/* Masonry grid — 1 col on xs, 2 on sm, 3 on md, 4 on xl */}
            <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
                {items.map((item) => (
                    <motion.div
                        key={item.id}
                        layoutId={`gallery-item-${item.id}`}
                        className="relative break-inside-avoid rounded-xl overflow-hidden group mb-3 md:mb-4 cursor-pointer bg-gray-900 border border-white/5"
                        onClick={() => setSelectedId(item.id)}
                        whileHover={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                        <Image
                            src={item.toLocalPath || '/placeholder.png'}
                            alt={item.alt_text || item.title.rendered}
                            width={item.media_details.width || 800}
                            height={item.media_details.height || 600}
                            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                            <p className="text-white text-xs md:text-sm font-medium truncate w-full">
                                {item.title.rendered}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox — uses 100dvh so it always fills the visible screen */}
            <AnimatePresence>
                {selectedId && selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                        onTouchStart={onTouchStart}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
                        style={{ height: "100dvh" }}
                    >
                        {/* Close */}
                        <button
                            onClick={() => setSelectedId(null)}
                            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/50 hover:text-white transition-colors z-[110] bg-white/10 hover:bg-white/20 rounded-full p-2"
                            aria-label="Cerrar"
                        >
                            <X size={24} />
                        </button>

                        {/* Counter */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/40 text-xs font-mono z-[110]">
                            {selectedIndex + 1} / {items.length}
                        </div>

                        {/* Prev */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-[110] bg-black/60 hover:bg-black/80 p-2 md:p-3 rounded-full"
                            aria-label="Anterior"
                        >
                            <ChevronLeft size={28} />
                        </button>

                        {/* Next */}
                        <button
                            onClick={handleNext}
                            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-[110] bg-black/60 hover:bg-black/80 p-2 md:p-3 rounded-full"
                            aria-label="Siguiente"
                        >
                            <ChevronRight size={28} />
                        </button>

                        {/* Image — constrained to viewport with safe-area padding */}
                        <motion.div
                            layoutId={`gallery-item-${selectedId}`}
                            className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl mx-12 md:mx-20"
                            style={{
                                width: "min(90vw, 1100px)",
                                height: "min(80dvh, 800px)",
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedItem.toLocalPath || '/placeholder.png'}
                                alt={selectedItem.alt_text || selectedItem.title.rendered}
                                fill
                                className="object-contain bg-black"
                                sizes="min(90vw, 1100px)"
                            />
                            <div className="absolute bottom-0 left-0 w-full px-4 py-3 bg-gradient-to-t from-black/80 to-transparent text-white text-center">
                                <h3 className="text-sm md:text-base font-display truncate">{selectedItem.title.rendered}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
