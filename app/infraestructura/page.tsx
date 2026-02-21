
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Infraestructura — Planta de Maquinado CNC 1,000m² · 22 Máquinas",
    description:
        "Conoce nuestra planta de 1,000m² con 22 máquinas CNC especializadas: tornos automáticos INDEX y TRAUB, centros de maquinado y tornos de precisión. Capacidad de 1mm a 60mm. ISO 9001.",
    alternates: { canonical: "https://www.aqua-metal.com/infraestructura" },
    openGraph: {
        title: "Infraestructura CNC | Aqua Metal — 22 Máquinas · 1,000m²",
        description:
            "Planta 1,000m², 22 máquinas CNC. Tornos INDEX, TRAUB, Guss & Roch. ISO 9001.",
        url: "https://www.aqua-metal.com/infraestructura",
    },
};

// Hardcoded data based on pages.json content for better control
const machinery = [
    {
        category: "Tornos Automáticos",
        items: [
            { name: "Torno de Levas INDEX", capacity: "42mm", count: 2 },
            { name: "Torno de Levas TRAUB", capacity: "42mm", count: 1 },
            { name: "Torno de Levas TRAUB A25", capacity: "25mm", count: 10 },
            { name: "Torno de Levas INDEX ON", capacity: "12mm", count: 3 },
        ]
    },
    {
        category: "Torno CNC",
        items: [
            { name: "Torno CNC doble Husillo GUSS & ROCH", capacity: "60mm", count: 1 },
            { name: "Torno CNC GUSS & ROCH", capacity: "42mm", count: 1 },
            { name: "Torno Paralelo CNC HEADMAN", capacity: "250mm", count: 1 },
        ]
    },
    {
        category: "Centro de Maquinado",
        items: [
            { name: "Centro de Maquinado CNC", capacity: "40 pulgadas x 20 pulgadas", count: 1 },
            { name: "Centro de maquinado DAEWOO de alta producción doble mesa", capacity: "400mm por 400mm", count: 1 },
        ]
    }
];

export default function InfrastructurePage() {
    return (
        <div className="bg-[#000814] min-h-screen">
            <PageHeader
                title="Infraestructura"
                subtitle="Equipamiento de alta tecnología para satisfacer demandas industriales complejas."
            />

            <div className="container mx-auto px-6 py-20">

                {/* Highlights */}
                {/* Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    <div className="p-8 glass-panel rounded-xl text-center col-span-1 md:col-span-2 lg:col-span-1">
                        <h3 className="text-4xl font-display font-bold text-white mb-2">1mm - 60mm</h3>
                        <p className="text-gray-400 text-sm uppercase tracking-wider">Capacidad de Torneado</p>
                    </div>
                    <div className="p-8 glass-panel rounded-xl text-center">
                        <h3 className="text-4xl font-display font-bold text-white mb-2">ISO 9001</h3>
                        <p className="text-gray-400 text-sm uppercase tracking-wider">Calidad Certificada</p>
                    </div>
                    <div className="p-8 glass-panel rounded-xl text-center">
                        <h3 className="text-4xl font-display font-bold text-white mb-2">24/7</h3>
                        <p className="text-gray-400 text-sm uppercase tracking-wider">Capacidad de Producción</p>
                    </div>
                </div>

                {/* Machinery List */}
                <div className="space-y-16">
                    {machinery.map((section) => (
                        <div key={section.category} className="animate-fade-in">
                            <h3 className="text-2xl font-display font-bold text-white mb-8 pl-4 border-l-4 border-accent-primary">
                                {section.category}
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {section.items.map((machine, idx) => (
                                    <div
                                        key={idx}
                                        className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-accent-primary/50 hover:bg-white/10 transition-all duration-300"
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="bg-accent-primary/10 text-accent-primary px-3 py-1 rounded text-xs font-bold uppercase">
                                                {machine.count} Unidades
                                            </div>
                                            <div className="text-gray-500 text-xs uppercase">Capacidad</div>
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-accent-primary transition-colors">
                                            {machine.name}
                                        </h4>
                                        <p className="text-gray-400 font-mono text-sm border-t border-white/5 pt-3 mt-3">
                                            Max: <span className="text-white">{machine.capacity}</span>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Gallery Preview/Link if needed */}
                <div className="mt-24 p-12 rounded-3xl bg-gradient-to-br from-accent-primary/20 to-transparent border border-accent-primary/20 text-center">
                    <h3 className="text-2xl font-display font-bold text-white mb-4">¿Quieres ver nuestra maquinaria en acción?</h3>
                    <Link href="/galeria" className="inline-block px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                        Ver Galería
                    </Link>
                </div>

            </div>
        </div>
    );
}
