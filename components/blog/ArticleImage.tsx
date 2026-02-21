"use client";
import Image from "next/image";

interface ArticleImageProps {
    src: string;
    alt: string;
    caption?: string;
    className?: string;
}

/**
 * Reusable article image with a zoom + overlay hover effect.
 * Used across all blog articles.
 */
export default function ArticleImage({ src, alt, caption, className = "" }: ArticleImageProps) {
    return (
        <figure className={`my-10 ${className}`}>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#001d3d]">
                {/* The image wrapper — fixed aspect ratio */}
                <div className="relative h-[320px] md:h-[420px] w-full">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover opacity-80 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-105"
                    />
                    {/* Gradient overlay that fades on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
                    {/* Accent border glow on hover */}
                    <div className="absolute inset-0 rounded-2xl ring-0 ring-accent-primary/0 transition-all duration-500 group-hover:ring-1 group-hover:ring-accent-primary/40" />
                </div>
            </div>
            {caption && (
                <figcaption className="mt-3 text-center text-xs text-gray-600 font-mono italic">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}
