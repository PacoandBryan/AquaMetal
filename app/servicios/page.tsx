"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import MotionWrapper, { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Cog, Wrench, Cpu, Layers, Zap, Shield, Ruler, Users } from "lucide-react";

const services = [
    {
        id: "torneado-cnc",
        icon: <Cog size={32} />,
        title: "Torneado CNC",
        subtitle: "Alta Precisión",
        description: "Operaciones de torneado automatizado para aluminio, acero y metales especiales. Tolerancias de hasta ±0.005mm con alta repetibilidad.",
        specs: [
            "Diámetro máx: 42mm – 250mm",
            "Tolerancia: ±0.005mm",
            "Alto volumen garantizado",
        ],
        image: "/images/img_2103.jpg",
        accent: "#ffc300",
    },
    {
        id: "maquinado-suizo",
        icon: <Cpu size={32} />,
        title: "Maquinado Suizo",
        subtitle: "7 Ejes Simultáneos",
        description: "Geometrías complejas en una sola configuración. Maquinaria INDEX y TRAUB para piezas de alta complejidad con mínimo desperdicio.",
        specs: [
            "Tornos automáticos de levas",
            "7 ejes de movimiento",
            "Volumen de producción alto",
        ],
        image: "/images/img_8882.jpeg",
        accent: "#ffd60a",
    },
    {
        id: "fresado-cnc",
        icon: <Layers size={32} />,
        title: "Centros de Maquinado",
        subtitle: "Fresado Avanzado",
        description: "Centros CNC de alta velocidad para fresado, taladrado y roscado. Mesas de 40×20 pulgadas y 400×400mm para componentes de mayor formato.",
        specs: [
            "Mesa 40 × 20 in",
            "Daewoo 400 × 400mm",
            "Fresado 3-5 ejes",
        ],
        image: "/images/img_8969.jpeg",
        accent: "#ffc300",
    },
    {
        id: "inspeccion-calidad",
        icon: <Shield size={32} />,
        title: "Inspección y Calidad",
        subtitle: "ISO 9001 Certificado",
        description: "Control de calidad integral bajo norma ISO 9001. Cada pieza pasa por protocolos de inspección dimensional para garantizar la conformidad.",
        specs: [
            "Certificación ISO 9001",
            "CMM y calibración",
            "Reporte dimensional completo",
        ],
        image: "/images/img_8884.jpeg",
        accent: "#ffd60a",
    },
    {
        id: "diseno-desarrollo",
        icon: <Ruler size={32} />,
        title: "Diseño y Desarrollo",
        subtitle: "DFM Consulting",
        description: "Asesoría técnica en manufacturabilidad (DFM) desde el diseño de la pieza. Optimizamos geometrías para reducir costos de producción.",
        specs: [
            "Revisión de planos",
            "Rediseño para manufactura",
            "Prototipado rápido",
        ],
        image: "/images/img_8792.jpeg",
        accent: "#ffc300",
    },
    {
        id: "produccion-volumen",
        icon: <Zap size={32} />,
        title: "Producción de Alto Volumen",
        subtitle: "+5,000 pzas / lote",
        description: "Infraestructura de 22+ máquinas operando en dos turnos. Capacidad para procesar más de 5,000 unidades por lote sin comprometer tolerancias.",
        specs: [
            "+5,000 und / lote",
            "Dos turnos productivos",
            "22+ máquinas activas",
        ],
        image: "/images/img_8873.jpeg",
        accent: "#ffd60a",
    },
];

const materials = [
    { name: "Acero Inoxidable", grade: "304, 316, 17-4PH" },
    { name: "Acero al Carbón", grade: "1018, 4140, 12L14" },
    { name: "Aluminio", grade: "6061, 7075, 2024" },
    { name: "Cobre / Latón", grade: "C360, C110" },
    { name: "Bronce", grade: "C932, C954" },
    { name: "Nylon / Plásticos", grade: "Delrin, PEEK, PA6" },
];

export default function ServiciosPage() {
    return (
        <div className="bg-[#000814] min-h-screen">
            <PageHeader
                title="Servicios"
                subtitle="Manufactura de metal de precisión — desde el diseño hasta la entrega."
            />

            {/* Stats Banner */}
            <section className="py-16 border-b border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ffc300]/5 via-transparent to-[#ffd60a]/5 pointer-events-none" />
                <div className="container mx-auto px-6">
                    <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: "22+", label: "Máquinas CNC" },
                            { value: "±0.005mm", label: "Tolerancia" },
                            { value: "+5,000", label: "Unidades / Lote" },
                            { value: "ISO 9001", label: "Certificación" },
                        ].map((stat) => (
                            <StaggerItem key={stat.label} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold font-display text-accent-primary mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-500 text-sm uppercase tracking-widest font-mono">
                                    {stat.label}
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <FadeIn className="mb-16 max-w-2xl">
                        <span className="text-accent-primary text-sm font-mono uppercase tracking-widest mb-4 block">
                            Capacidades
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
                            Nuestros Servicios
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Soluciones completas de maquinado CNC con infraestructura de clase mundial y certificación ISO 9001.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, i) => (
                            <MotionWrapper
                                key={service.id}
                                id={service.id}
                                delay={i * 0.1}
                                className="group relative rounded-2xl overflow-hidden border border-white/5 bg-[#001d3d]/30 hover:border-accent-primary/30 transition-all duration-500"
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000814]/50 to-[#000814] z-10" />
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                                    />
                                    {/* Icon badge */}
                                    <div
                                        className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full flex items-center justify-center text-black"
                                        style={{ backgroundColor: service.accent }}
                                    >
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 -mt-4 relative z-20">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <span className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-1 block">
                                                {service.subtitle}
                                            </span>
                                            <h3 className="text-2xl font-bold text-white font-display">
                                                {service.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {service.specs.map((spec) => (
                                            <li key={spec} className="flex items-center gap-3 text-sm text-gray-300">
                                                <Check size={14} className="text-accent-primary shrink-0" />
                                                {spec}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </MotionWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* Materials Section */}
            <section className="py-24 bg-[#001d3d]/20 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <FadeIn className="mb-16 text-center">
                        <span className="text-accent-secondary text-sm font-mono uppercase tracking-widest mb-4 block">
                            Materiales
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
                            Metales que Procesamos
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            Experiencia comprobada con una amplia gama de materiales metálicos y plásticos de ingeniería.
                        </p>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {materials.map((mat) => (
                            <StaggerItem
                                key={mat.name}
                                className="p-6 rounded-xl bg-[#000814] border border-white/5 hover:border-accent-primary/30 transition-colors group"
                            >
                                <div className="w-2 h-2 rounded-full bg-accent-primary mb-4 group-hover:scale-150 transition-transform" />
                                <h4 className="text-white font-bold mb-1">{mat.name}</h4>
                                <p className="text-gray-500 text-sm font-mono">{mat.grade}</p>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <FadeIn className="mb-16 max-w-2xl">
                        <span className="text-accent-primary text-sm font-mono uppercase tracking-widest mb-4 block">
                            Flujo de Trabajo
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
                            Del Diseño a la Entrega
                        </h2>
                    </FadeIn>

                    <div className="relative">
                        {/* Connecting line */}
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent hidden md:block" />

                        <div className="space-y-12">
                            {[
                                {
                                    step: "01",
                                    title: "Recepción de Planos",
                                    desc: "Analizamos su diseño y realizamos una revisión DFM para identificar oportunidades de optimización antes de iniciar.",
                                },
                                {
                                    step: "02",
                                    title: "Programación CNC",
                                    desc: "Nuestros ingenieros programan las trayectorias de corte, seleccionan herramientas y configuran los parámetros óptimos.",
                                },
                                {
                                    step: "03",
                                    title: "Producción",
                                    desc: "Ejecución en nuestras 22+ máquinas CNC operando en turnos, asegurando tiempos de entrega competitivos.",
                                },
                                {
                                    step: "04",
                                    title: "Inspección de Calidad",
                                    desc: "Cada pieza es inspeccionada bajo norma ISO 9001. Reportes dimensionales disponibles a petición del cliente.",
                                },
                                {
                                    step: "05",
                                    title: "Entrega",
                                    desc: "Embalaje industrial y logística coordinada. Seguimiento en tiempo real del embarque hasta su destino.",
                                },
                            ].map((step, i) => (
                                <MotionWrapper key={step.step} delay={i * 0.1} className="flex gap-8 items-start">
                                    <div className="relative shrink-0">
                                        <div className="w-16 h-16 rounded-full bg-[#001d3d] border border-accent-primary/40 flex items-center justify-center z-10 relative">
                                            <span className="text-accent-primary font-bold font-mono text-lg">{step.step}</span>
                                        </div>
                                    </div>
                                    <div className="pt-3">
                                        <h3 className="text-xl font-bold text-white mb-3 font-display">{step.title}</h3>
                                        <p className="text-gray-400 leading-relaxed max-w-2xl">{step.desc}</p>
                                    </div>
                                </MotionWrapper>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#001d3d]/20 border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
                            ¿Tienes un proyecto en mente?
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
                            Contáctanos con tus planos o especificaciones y te enviamos una cotización en 24h.
                        </p>
                        <Link href="/contacto">
                            <button className="group inline-flex items-center gap-3 bg-accent-primary text-black px-8 py-4 rounded-full text-base font-bold hover:bg-accent-secondary transition-all duration-300 shadow-[0_0_30px_rgba(255,195,0,0.3)] hover:shadow-[0_0_50px_rgba(255,195,0,0.5)]">
                                Solicitar Cotización
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
