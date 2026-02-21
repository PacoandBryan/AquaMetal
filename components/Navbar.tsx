"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type NavLink = {
    name: string;
    href: string;
    dropdown?: { name: string; href: string }[];
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks: NavLink[] = [
        { name: "Procesos", href: "/procesos" },
        { name: "Servicios", href: "/servicios" },
        { name: "Infraestructura", href: "/infraestructura" },
        { name: "Galería", href: "/galeria" },
        { name: "Blog", href: "/blog" },
        { name: "Contacto", href: "/contacto" },
    ];

    return (
        <>
            {/* Desktop Floating Pill Nav — lg and above only */}
            <div className="hidden lg:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
                <nav
                    className={twMerge(
                        "flex items-center justify-between px-2 py-2 rounded-full transition-all duration-300",
                        "glass-panel border-white/5 shadow-2xl shadow-black/50 bg-[#000814]/90 backdrop-blur-xl"
                    )}
                >
                    <div className="flex items-center space-x-1 pl-4 pr-6">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 mr-8 group">
                            <div className="relative h-10 w-10 transition-transform group-hover:scale-110 duration-300">
                                <Image src="/logo.png" alt="Aqua Metal Logo" fill className="object-contain drop-shadow-[0_0_10px_rgba(197,160,89,0.3)]" />
                            </div>
                            <span className="font-display font-bold tracking-tight text-white text-lg group-hover:text-white/90 transition-colors">
                                Aqua<span className="text-accent-primary">Metal</span>
                            </span>
                        </Link>

                        {/* Links */}
                        <div className="flex items-center space-x-1 bg-white/5 rounded-full px-1 py-1 border border-white/5">
                            {navLinks.map((link) => (
                                <div
                                    key={link.name}
                                    className="relative group/dropdown"
                                    onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        href={link.href}
                                        className={clsx(
                                            "flex items-center gap-1 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                            pathname === link.href
                                                ? "bg-white/10 text-accent-primary shadow-sm ring-1 ring-white/5"
                                                : "text-gray-400 hover:text-white hover:bg-white/5"
                                        )}
                                    >
                                        {link.name}
                                        {link.dropdown && <ChevronDown size={14} className="group-hover/dropdown:rotate-180 transition-transform" />}
                                    </Link>

                                    {/* Dropdown Menu */}
                                    {link.dropdown && (
                                        <div className="absolute top-full left-0 mt-2 w-48 py-2 bg-[#000814] border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform translate-y-2 group-hover/dropdown:translate-y-0 overflow-hidden">
                                            {link.dropdown.map((dropItem) => (
                                                <Link
                                                    key={dropItem.href}
                                                    href={dropItem.href}
                                                    className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                                                >
                                                    {dropItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Lang & CTA */}
                    <div className="flex items-center gap-4 pl-2 pr-2">
                        <Link href="/contacto">
                            <button className="group flex items-center gap-2 bg-accent-primary text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-accent-secondary transition-colors shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(197,160,89,0.5)]">
                                Cotizar
                                <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                            </button>
                        </Link>
                    </div>
                </nav>
            </div>

            {/* Compact bar — below lg (mobile + tablet) */}
            <div className="lg:hidden fixed top-0 w-full z-50">
                <nav className={twMerge(
                    "flex items-center justify-between px-6 py-4 transition-all duration-300",
                    scrolled ? "glass-nav bg-[#000814]/90" : "bg-transparent"
                )}>
                    <Link href="/" className="text-xl font-bold font-display text-white">
                        Aqua<span className="text-accent-primary">Metal</span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-white/80 hover:text-white transition-colors"
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Overlay */}
                <div className={clsx(
                    "absolute top-full left-0 w-full glass-panel border-t border-white/5 overflow-hidden transition-all duration-500 ease-in-out bg-[#000814]",
                    isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                )}>
                    <div className="flex flex-col p-6 space-y-2">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                <div className="flex justify-between items-center">
                                    <Link
                                        href={link.href}
                                        onClick={() => link.dropdown ? null : setIsOpen(false)}
                                        className={clsx(
                                            "p-4 rounded-xl text-lg font-medium transition-colors border border-transparent w-full flex justify-between items-center",
                                            pathname === link.href
                                                ? "bg-white/5 text-accent-primary border-white/5"
                                                : "text-gray-400 hover:text-white hover:bg-white/5"
                                        )}
                                    >
                                        {link.name}
                                        {link.dropdown && <ChevronDown size={16} />}
                                    </Link>
                                </div>
                                {link.dropdown && (
                                    <div className="pl-6 border-l border-white/5 ml-4 mt-2 mb-4 space-y-2">
                                        {link.dropdown.map(dropItem => (
                                            <Link
                                                key={dropItem.href}
                                                href={dropItem.href}
                                                onClick={() => setIsOpen(false)}
                                                className="block py-2 text-gray-500 hover:text-white transition-colors"
                                            >
                                                {dropItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
