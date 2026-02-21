
import React from "react";
import { twMerge } from "tailwind-merge";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    backgroundImage?: string;
}

export function PageHeader({ title, subtitle, className, backgroundImage }: PageHeaderProps) {
    return (
        <div className={twMerge("relative py-16 md:py-24 lg:py-32 bg-[#000814] overflow-hidden landscape-compact", className)}>
            {backgroundImage ? (
                <>
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 transform scale-105"
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#001d3d]/90 via-[#000814]/80 to-[#000814] z-0" />
                </>
            ) : (
                <div className="absolute inset-0 bg-gradient-to-b from-[#001d3d] to-[#000814] z-0" />
            )}
            <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-primary via-transparent to-transparent" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold font-display text-white uppercase tracking-tighter mb-4 animate-fade-in">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                )}
                <div className="h-1 w-20 bg-accent-primary mx-auto rounded-full mt-8"></div>
            </div>
        </div>
    );
}

export default function PageLayout({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <main className={twMerge("min-h-screen", className)}>
            {children}
        </main>
    );
}
