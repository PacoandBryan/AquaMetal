"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Mail, Globe, MessageSquare, X, ArrowLeft, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { sendBookingEmail } from "@/app/actions/contact";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// ────────────────────────────────────────────────────────────────────────
// 3D IOS GEAR COMPONENT
// ────────────────────────────────────────────────────────────────────────
interface GearSelectorProps {
    items: string[];
    selectedValue: string;
    onChange: (value: string) => void;
}

function IOS3DGear({ items, selectedValue, onChange }: GearSelectorProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const startY = useRef(0);
    const currentRotation = useRef(0);
    const [rotation, setRotation] = useState(0);

    const itemHeight = 36; // px
    const visibleCount = 9; // Number of items in half cylinder
    const radius = 70; // px (defines the cylinder depth)
    const anglePerItem = 360 / 20; // degree separation

    // Find index of selected item
    const selectedIndex = items.indexOf(selectedValue);

    const stateRef = useRef({ selectedIndex, items, onChange, isDragging, rotation });
    useEffect(() => {
        stateRef.current = { selectedIndex, items, onChange, isDragging, rotation };
    });

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const handleWheelNative = (e: WheelEvent) => {
            e.preventDefault();
            const { selectedIndex: sIdx, items: currentItems, onChange: changeFn } = stateRef.current;
            const direction = e.deltaY > 0 ? 1 : -1;
            const nextIndex = Math.min(Math.max(sIdx + direction, 0), currentItems.length - 1);
            changeFn(currentItems[nextIndex]);
        };

        const handleTouchMoveNative = (e: TouchEvent) => {
            e.preventDefault();
        };

        el.addEventListener("wheel", handleWheelNative, { passive: false });
        el.addEventListener("touchmove", handleTouchMoveNative, { passive: false });

        return () => {
            el.removeEventListener("wheel", handleWheelNative);
            el.removeEventListener("touchmove", handleTouchMoveNative);
        };
    }, []);

    useEffect(() => {
        if (!isDragging) {
            const targetRotation = -selectedIndex * anglePerItem;
            setRotation(targetRotation);
            currentRotation.current = targetRotation;
        }
    }, [selectedIndex, isDragging]);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        startY.current = e.clientY;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const deltaY = e.clientY - startY.current;
        const deltaRotation = (deltaY / itemHeight) * anglePerItem;
        const newRot = currentRotation.current + deltaRotation;
        setRotation(newRot);

        // Map rotation back to closest item index
        const rawIndex = -newRot / anglePerItem;
        const clampedIndex = Math.min(Math.max(Math.round(rawIndex), 0), items.length - 1);
        if (items[clampedIndex] !== selectedValue) {
            onChange(items[clampedIndex]);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        const snappedIndex = Math.min(Math.max(Math.round(-rotation / anglePerItem), 0), items.length - 1);
        onChange(items[snappedIndex]);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        startY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const deltaY = e.touches[0].clientY - startY.current;
        const deltaRotation = (deltaY / itemHeight) * anglePerItem;
        const newRot = currentRotation.current + deltaRotation;
        setRotation(newRot);

        const rawIndex = -newRot / anglePerItem;
        const clampedIndex = Math.min(Math.max(Math.round(rawIndex), 0), items.length - 1);
        if (items[clampedIndex] !== selectedValue) {
            onChange(items[clampedIndex]);
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        const snappedIndex = Math.min(Math.max(Math.round(-rotation / anglePerItem), 0), items.length - 1);
        onChange(items[snappedIndex]);
    };

    return (
        <div
            ref={containerRef}
            className="relative h-[220px] w-[90px] bg-black/40 rounded-xl overflow-hidden cursor-ns-resize select-none flex items-center justify-center border border-white/5"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ perspective: "1000px", touchAction: "none" }}
        >
            {/* Top and Bottom Fade Shadows */}
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />

            {/* Selection indicator highlight overlay */}
            <div className="absolute inset-x-0 h-[36px] bg-accent-primary/10 border-y border-accent-primary/30 pointer-events-none" />

            {/* Cylindrical Drum container */}
            <div
                className="relative w-full h-[36px]"
                style={{
                    transformStyle: "preserve-3d",
                    transform: `rotateX(${rotation}deg)`,
                    transition: isDragging ? "none" : "transform 0.4s cubic-bezier(0.1, 0.8, 0.25, 1.0)",
                }}
            >
                {items.map((item, idx) => {
                    const itemAngle = idx * anglePerItem;
                    
                    // The actual angle of this item in the viewport (front is 0 degrees)
                    let angle = itemAngle + rotation;
                    // Normalize angle to [-180, 180] range
                    angle = ((angle + 180) % 360) - 180;
                    if (angle < -180) angle += 360;

                    // If it is on the back half of the cylinder, don't render it
                    if (Math.abs(angle) > 90) return null;

                    // Calculate opacity based on the angle (closer to center = higher opacity)
                    const opacity = Math.max(0.1, 1 - Math.abs(angle) / 90);

                    return (
                        <div
                            key={idx}
                            className="absolute inset-0 flex items-center justify-center text-sm font-bold tracking-wider font-mono transition-all duration-200"
                            style={{
                                transform: `rotateX(${itemAngle}deg) translateZ(${radius}px)`,
                                transformStyle: "preserve-3d",
                                backfaceVisibility: "hidden",
                                opacity: opacity,
                                color: idx === selectedIndex ? "#ffc300" : "rgba(255,255,255,0.4)",
                            }}
                        >
                            {item}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// ────────────────────────────────────────────────────────────────────────
// INFINITE CALENDAR LOGIC
// ────────────────────────────────────────────────────────────────────────
interface MonthData {
    year: number;
    month: number; // 0-indexed
    days: (Date | null)[];
}

const WEEKDAYS = ["D", "L", "M", "M", "J", "V", "S"];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        purpose: "",
        website: "",
    });

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    // iOS Time Picker State
    const hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));
    const minutes = Array.from({ length: 12 }, (_, i) => String(i * 5).padStart(2, "0")); // 5 min increments
    const ampm = ["AM", "PM"];

    const [selectedHour, setSelectedHour] = useState("09");
    const [selectedMinute, setSelectedMinute] = useState("00");
    const [selectedAmpm, setSelectedAmpm] = useState("AM");

    // Infinite Calendar State
    const [months, setMonths] = useState<MonthData[]>([]);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const today = new Date();
    const currentDayOfWeek = today.getDay(); // 0 (Sun) to 6 (Sat)

    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    // Initialize 6 months centered around today
    useEffect(() => {
        if (!isOpen) return;
        const initialMonths: MonthData[] = [];
        for (let i = -2; i <= 6; i++) {
            initialMonths.push(generateMonthData(today.getFullYear(), today.getMonth() + i));
        }
        setMonths(initialMonths);
        setStep(1);
        setStatus("idle");
        setSelectedDate(null);
    }, [isOpen]);

    // Handle Infinite Scrolling detection
    const handleScroll = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const { scrollTop, scrollHeight, clientHeight } = container;

        // Near the bottom: load more future months
        if (scrollHeight - scrollTop - clientHeight < 150) {
            setMonths((prev) => {
                const last = prev[prev.length - 1];
                const nextYear = last.month === 11 ? last.year + 1 : last.year;
                const nextMonth = last.month === 11 ? 0 : last.month + 1;
                return [...prev, generateMonthData(nextYear, nextMonth)];
            });
        }

        // Near the top: load more past/previous months
        if (scrollTop < 100) {
            setMonths((prev) => {
                const first = prev[0];
                const prevYear = first.month === 0 ? first.year - 1 : first.year;
                const prevMonth = first.month === 0 ? 11 : first.month - 1;
                // Prepend month and adjust scroll position to prevent jump
                setTimeout(() => {
                    if (container) container.scrollTop += 260; // Approximate height of one month header + grid
                }, 0);
                return [generateMonthData(prevYear, prevMonth), ...prev];
            });
        }
    };

    const generateMonthData = (year: number, month: number): MonthData => {
        // Adjust for month values out of bounds (JS Date does this, but we handle it clean)
        const date = new Date(year, month, 1);
        const actualYear = date.getFullYear();
        const actualMonth = date.getMonth();

        const firstDayIndex = new Date(actualYear, actualMonth, 1).getDay();
        const totalDays = new Date(actualYear, actualMonth + 1, 0).getDate();

        const days: (Date | null)[] = [];
        // Pad initial empty days
        for (let i = 0; i < firstDayIndex; i++) {
            days.push(null);
        }
        // Add dates
        for (let day = 1; day <= totalDays; day++) {
            days.push(new Date(actualYear, actualMonth, day));
        }

        return { year: actualYear, month: actualMonth, days };
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.purpose) return;
        setStep(2);
    };

    const handleDateSelect = (date: Date) => {
        // Disable past dates
        const compareToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        if (date < compareToday) return;

        setSelectedDate(date);
        setStep(3);
    };

    const handleFinalSubmit = async () => {
        if (!selectedDate) return;
        setStatus("submitting");
        setErrorMsg("");

        const formattedDate = selectedDate.toLocaleDateString("es-MX", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        const formattedTime = `${selectedHour}:${selectedMinute} ${selectedAmpm}`;

        try {
            const res = await sendBookingEmail({
                ...formData,
                date: formattedDate,
                time: formattedTime,
            });

            if (res.success) {
                setStatus("success");
            } else {
                setStatus("error");
                setErrorMsg(res.error || "No se pudo programar tu cita.");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
            setErrorMsg("Error de red. Intenta nuevamente.");
        }
    };

    const getMonthName = (monthIdx: number) => {
        const names = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];
        return names[monthIdx];
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Dark Blurred Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/85 backdrop-blur-md"
                    />

                    {/* Modal Window */}
                    <motion.div
                        initial={{ scale: 0.95, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.95, y: 20, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                        className="relative w-full max-w-lg bg-[#000d1a] border border-white/10 rounded-3xl overflow-hidden glass-panel shadow-[0_0_50px_rgba(255,195,0,0.1)] z-10"
                    >
                        {/* Gold Border Highlight */}
                        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent-primary to-transparent" />

                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/5">
                            <div className="flex items-center gap-3">
                                {step > 1 && status !== "success" && (
                                    <button
                                        onClick={() => setStep(step - 1)}
                                        className="text-gray-400 hover:text-white p-1 hover:bg-white/5 rounded-lg transition-all"
                                    >
                                        <ArrowLeft size={20} />
                                    </button>
                                )}
                                <h3 className="text-lg font-bold font-display text-white tracking-wider uppercase">
                                    {step === 1 && "Información de Registro"}
                                    {step === 2 && "Selecciona una Fecha"}
                                    {step === 3 && "Selecciona una Hora"}
                                    {status === "success" && "¡Listo!"}
                                </h3>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-white p-1 hover:bg-white/5 rounded-full transition-all"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Progress Indicator */}
                        {status !== "success" && (
                            <div className="px-6 py-2 flex items-center justify-between text-xs font-mono text-gray-500 border-b border-white/5">
                                <span>Paso {step} de 3</span>
                                <div className="flex gap-1.5">
                                    <div className={`h-1.5 w-8 rounded-full transition-all ${step >= 1 ? "bg-accent-primary" : "bg-white/10"}`} />
                                    <div className={`h-1.5 w-8 rounded-full transition-all ${step >= 2 ? "bg-accent-primary" : "bg-white/10"}`} />
                                    <div className={`h-1.5 w-8 rounded-full transition-all ${step >= 3 ? "bg-accent-primary" : "bg-white/10"}`} />
                                </div>
                            </div>
                        )}

                        {/* Content Area */}
                        <div className="p-6">
                            <AnimatePresence mode="wait">
                                {/* STEP 1: INITIAL SIGN UP FORM */}
                                {step === 1 && (
                                    <motion.form
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        onSubmit={handleFormSubmit}
                                        className="space-y-4"
                                    >
                                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                            Ingresa tus datos para iniciar el agendamiento.
                                        </p>
                                        
                                        <div className="space-y-2">
                                            <label className="text-xs font-mono uppercase tracking-wider text-gray-400 block">Nombre Completo</label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    placeholder="Tu nombre"
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-all font-sans"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-mono uppercase tracking-wider text-gray-400 block">Correo Electrónico</label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                                <input
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    placeholder="ejemplo@correo.com"
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-all font-sans"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-mono uppercase tracking-wider text-gray-400 block">Sitio Web de la Empresa</label>
                                            <div className="relative">
                                                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                                <input
                                                    type="url"
                                                    value={formData.website}
                                                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                                    placeholder="https://empresa.com"
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-all font-sans"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-mono uppercase tracking-wider text-gray-400 block">Propósito de la Reunión</label>
                                            <div className="relative">
                                                <MessageSquare className="absolute left-3 top-3 text-gray-500" size={18} />
                                                <textarea
                                                    required
                                                    rows={3}
                                                    value={formData.purpose}
                                                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                                                    placeholder="¿En qué consiste tu proyecto?"
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-all font-sans resize-none"
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-accent-primary to-[#ffd60a] text-black font-bold uppercase tracking-widest py-4 rounded-xl hover:shadow-[0_0_20px_rgba(255,195,0,0.4)] transition-all duration-300 mt-6 flex items-center justify-center gap-2 cursor-pointer"
                                        >
                                            Continuar
                                            <ArrowRight size={18} />
                                        </button>
                                    </motion.form>
                                )}

                                {/* STEP 2: INFINITE SCROLLING CALENDAR */}
                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="flex flex-col h-[380px]"
                                    >
                                        {/* Weekdays Header */}
                                        <div className="grid grid-cols-7 text-center font-mono text-xs font-bold text-gray-500 border-b border-white/5 pb-2 mb-2">
                                            {WEEKDAYS.map((day, idx) => {
                                                const isHighlighted = idx === currentDayOfWeek;
                                                return (
                                                    <span
                                                        key={idx}
                                                        className={`transition-colors py-1 ${isHighlighted ? "text-accent-primary font-black scale-110" : ""}`}
                                                    >
                                                        {day}
                                                    </span>
                                                );
                                            })}
                                        </div>

                                        {/* Scrollable Month list */}
                                        <div
                                            ref={scrollContainerRef}
                                            onScroll={handleScroll}
                                            className="flex-1 overflow-y-auto pr-1 space-y-8 scrollbar-thin scrollbar-thumb-white/10"
                                        >
                                            {months.map((m, mIdx) => (
                                                <div key={`${m.year}-${m.month}`} className="space-y-3">
                                                    <h4 className="text-sm font-bold font-mono uppercase tracking-wider text-accent-primary sticky top-0 bg-[#000d1a]/90 py-1 z-10">
                                                        {getMonthName(m.month)} {m.year}
                                                    </h4>

                                                    <div className="grid grid-cols-7 gap-1 text-center">
                                                        {m.days.map((day, dIdx) => {
                                                            if (!day) return <div key={`empty-${dIdx}`} />;

                                                            const isToday =
                                                                day.getDate() === today.getDate() &&
                                                                day.getMonth() === today.getMonth() &&
                                                                day.getFullYear() === today.getFullYear();

                                                            const isSelected =
                                                                selectedDate &&
                                                                day.getDate() === selectedDate.getDate() &&
                                                                day.getMonth() === selectedDate.getMonth() &&
                                                                day.getFullYear() === selectedDate.getFullYear();

                                                            const isPast = day < new Date(today.getFullYear(), today.getMonth(), today.getDate());

                                                            return (
                                                                <button
                                                                    key={`day-${day.getTime()}`}
                                                                    disabled={isPast}
                                                                    onClick={() => handleDateSelect(day)}
                                                                    className={`
                                                                        h-9 w-9 rounded-full mx-auto flex items-center justify-center text-xs font-mono font-bold transition-all cursor-pointer
                                                                        ${isPast ? "text-gray-700 cursor-not-allowed opacity-30" : ""}
                                                                        ${!isPast && !isSelected && !isToday ? "text-gray-300 hover:bg-white/10 hover:text-white" : ""}
                                                                        ${isToday && !isSelected ? "border border-accent-primary text-accent-primary" : ""}
                                                                        ${isSelected ? "bg-accent-primary text-black scale-110 shadow-[0_0_12px_rgba(255,195,0,0.5)]" : ""}
                                                                    `}
                                                                >
                                                                    {day.getDate()}
                                                                </button>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* STEP 3: 3D CLOCK GEAR SELECTOR */}
                                {step === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <p className="text-gray-400 text-sm text-center">
                                            Selecciona la hora
                                        </p>

                                        <div className="flex items-center justify-center gap-4 bg-black/20 py-8 px-4 rounded-3xl border border-white/5 relative [perspective:1000px]">

                                            {/* Hours */}
                                            <div className="flex flex-col items-center">
                                                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Hora</span>
                                                <IOS3DGear items={hours} selectedValue={selectedHour} onChange={setSelectedHour} />
                                            </div>

                                            {/* Minutes */}
                                            <div className="flex flex-col items-center">
                                                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Min</span>
                                                <IOS3DGear items={minutes} selectedValue={selectedMinute} onChange={setSelectedMinute} />
                                            </div>

                                            {/* AM/PM */}
                                            <div className="flex flex-col items-center">
                                                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">M</span>
                                                <IOS3DGear items={ampm} selectedValue={selectedAmpm} onChange={setSelectedAmpm} />
                                            </div>
                                        </div>

                                        {selectedDate && (
                                            <div className="text-center font-mono text-xs text-gray-400 bg-white/5 p-4 rounded-2xl border border-white/5">
                                                <div>Fecha: <span className="text-white font-bold">{selectedDate.toLocaleDateString("es-MX", { weekday: 'long', day: 'numeric', month: 'long' })}</span></div>
                                                <div className="mt-1">Hora: <span className="text-accent-primary font-bold">{selectedHour}:{selectedMinute} {selectedAmpm}</span></div>
                                            </div>
                                        )}

                                        {status === "error" && (
                                            <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-xs text-center font-mono">
                                                {errorMsg}
                                            </div>
                                        )}

                                        <button
                                            disabled={status === "submitting"}
                                            onClick={handleFinalSubmit}
                                            className="w-full bg-gradient-to-r from-accent-primary to-[#ffd60a] text-black font-bold uppercase tracking-widest py-4 rounded-xl hover:shadow-[0_0_20px_rgba(255,195,0,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {status === "submitting" ? (
                                                <>
                                                    <Loader2 className="animate-spin" size={18} />
                                                    Procesando...
                                                </>
                                            ) : (
                                                <>
                                                    Confirmar y Enviar
                                                    <CheckCircle2 size={18} />
                                                </>
                                            )}
                                        </button>
                                    </motion.div>
                                )}

                                {/* STATUS: SUCCESS */}
                                {status === "success" && (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-8 space-y-4"
                                    >
                                        <div className="mx-auto w-16 h-16 rounded-full bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center text-accent-primary">
                                            <CheckCircle2 size={40} className="animate-pulse" />
                                        </div>
                                        <h2 className="text-2xl font-bold font-display text-white">¡Cita Solicitada!</h2>
                                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
                                            Te hemos enviado un correo de confirmación. <br />
                                            El equipo de <strong>Aqua Metal</strong> te contactará en un plazo de una semana laboral a un mes para confirmar los detalles.
                                        </p>
                                        <button
                                            onClick={onClose}
                                            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-bold tracking-wider transition-colors mt-6 cursor-pointer"
                                        >
                                            Cerrar Ventana
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
