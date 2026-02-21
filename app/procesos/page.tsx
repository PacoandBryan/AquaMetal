"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import MotionWrapper, { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { Check, Settings, PenTool, Users, Zap, Layers, Ruler } from "lucide-react";

export default function ProcessesPage() {
    return (
        <div className="bg-[#000814] min-h-screen">
            <PageHeader
                title="Procesos y Tecnología"
                subtitle="Ingeniería avanzada para transformar materia prima en componentes críticos."
            />

            {/* Intro Stats Section */}
            <section className="py-20 border-b border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-accent-primary/5 [mask-image:radial-gradient(circle_at_center,transparent_0%,black_100%)] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StaggerItem className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-accent-primary/30 transition-colors">
                            <Ruler className="text-accent-primary mb-4" size={32} />
                            <h3 className="text-2xl font-bold text-white mb-2">1mm - 60mm</h3>
                            <p className="text-gray-400">Rango de precisión dimensional para componentes microscópicos y medianos.</p>
                        </StaggerItem>
                        <StaggerItem className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-accent-primary/30 transition-colors">
                            <Layers className="text-accent-primary mb-4" size={32} />
                            <h3 className="text-2xl font-bold text-white mb-2">+5,000 Unidades</h3>
                            <p className="text-gray-400">Especializados en producción de alto volumen con repetibilidad garantizada.</p>
                        </StaggerItem>
                        <StaggerItem className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-accent-primary/30 transition-colors">
                            <Zap className="text-accent-primary mb-4" size={32} />
                            <h3 className="text-2xl font-bold text-white mb-2">22+ Máquinas</h3>
                            <p className="text-gray-400">Parque de maquinaria sincronizado operando en dos turnos productivos.</p>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* Services / Capabilities */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <FadeIn className="mb-16 max-w-2xl">
                        <span className="text-accent-primary text-sm font-mono uppercase tracking-widest mb-4 block">Servicios Integrales</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
                            Del Diseño a la Realidad
                        </h2>
                        <p className="text-gray-400 text-lg">
                            No solo maquinamos; colaboramos. Nuestro enfoque integral asegura que cada proyecto sea optimizado desde su concepción.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <MotionWrapper delay={0.1} className="group">
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-primary group-hover:text-black transition-all duration-300">
                                <PenTool size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Diseño y Desarrollo</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Asesoría técnica para optimizar la manufacturabilidad de sus piezas desde la etapa de diseño, reduciendo costos y tiempos.
                            </p>
                        </MotionWrapper>

                        <MotionWrapper delay={0.2} className="group">
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-primary group-hover:text-black transition-all duration-300">
                                <Settings size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Fabricación de Precisión</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Ejecución impecable en procesos de torneado, fresado y maquinado suizo, cumpliendo las tolerancias más estrictas.
                            </p>
                        </MotionWrapper>

                        <MotionWrapper delay={0.3} className="group">
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-primary group-hover:text-black transition-all duration-300">
                                <Users size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Atención Especializada</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Comunicación directa y transparente. Nos integramos como una extensión de su cadena de suministro.
                            </p>
                        </MotionWrapper>
                    </div>
                </div>
            </section>

            {/* Machinery List - "The Arsenal" */}
            <section className="py-24 bg-[#001d3d]/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#050810] to-transparent pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="md:w-1/3">
                            <FadeIn>
                                <span className="text-accent-secondary text-sm font-mono uppercase tracking-widest mb-4 block">Infraestructura</span>
                                <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
                                    Nuestra Maquinaria
                                </h2>
                                <p className="text-gray-400 mb-8">
                                    Un despliegue tecnológico diseñado para la versatilidad y el alto rendimiento.
                                </p>

                                <div className="space-y-4">
                                    <h4 className="text-white font-bold uppercase tracking-wider text-sm border-b border-white/10 pb-2">Materiales Procesados</h4>
                                    <ul className="grid grid-cols-2 gap-2 text-gray-400 text-sm">
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-primary rounded-full"></div>Acero Inoxidable</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-primary rounded-full"></div>Acero al Carbón</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-primary rounded-full"></div>Aluminio</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-primary rounded-full"></div>Cobre / Latón</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-primary rounded-full"></div>Bronce</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent-primary rounded-full"></div>Nylon / Plásticos</li>
                                    </ul>
                                </div>
                            </FadeIn>
                        </div>

                        <div className="md:w-2/3">
                            <div className="grid gap-6">
                                {/* Category 1 */}
                                <MotionWrapper delay={0.1} className="bg-[#000814] p-8 rounded-xl border border-white/5">
                                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                        <span className="w-8 h-[1px] bg-accent-primary"></span>
                                        Tornos Automáticos de Levas
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex justify-between items-center bg-white/5 p-4 rounded-lg">
                                            <span className="text-gray-300 font-mono">INDEX</span>
                                            <span className="text-accent-primary font-bold text-sm">2 Unidades (42mm)</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-white/5 p-4 rounded-lg">
                                            <span className="text-gray-300 font-mono">TRAUB A25</span>
                                            <span className="text-accent-primary font-bold text-sm">10 Unidades (42mm)</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-white/5 p-4 rounded-lg">
                                            <span className="text-gray-300 font-mono">TRAUB</span>
                                            <span className="text-accent-primary font-bold text-sm">1 Unidad (42mm)</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-white/5 p-4 rounded-lg">
                                            <span className="text-gray-300 font-mono">INDEX ON</span>
                                            <span className="text-accent-primary font-bold text-sm">3 Unidades (12mm)</span>
                                        </div>
                                    </div>
                                </MotionWrapper>

                                {/* Category 2 */}
                                <MotionWrapper delay={0.2} className="bg-[#000814] p-8 rounded-xl border border-white/5">
                                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                        <span className="w-8 h-[1px] bg-accent-secondary"></span>
                                        Tornos CNC de Precisión
                                    </h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center bg-white/5 p-4 rounded-lg border-l-2 border-accent-secondary">
                                            <div>
                                                <span className="block text-white font-bold">Guss & Roch Doble Husillo</span>
                                                <span className="text-xs text-gray-500 uppercase tracking-wider">Alta Productividad</span>
                                            </div>
                                            <span className="text-white font-mono">2 Unidades (60mm)</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-white/5 p-4 rounded-lg">
                                            <span className="text-gray-300">Guss & Roch Estándar</span>
                                            <span className="text-white font-mono">1 Unidad (42mm)</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-white/5 p-4 rounded-lg">
                                            <span className="text-gray-300">Torno Paralelo CNC Headman</span>
                                            <span className="text-white font-mono">1 Unidad (250mm)</span>
                                        </div>
                                    </div>
                                </MotionWrapper>

                                {/* Category 3 */}
                                <MotionWrapper delay={0.3} className="bg-[#000814] p-8 rounded-xl border border-white/5">
                                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                        <span className="w-8 h-[1px] bg-blue-500"></span>
                                        Centros de Maquinado
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="bg-white/5 p-4 rounded-lg">
                                            <span className="block text-gray-300 font-mono text-sm mb-1">Centro CNC</span>
                                            <span className="block text-white font-bold">40 x 20 in</span>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-lg">
                                            <span className="block text-gray-300 font-mono text-sm mb-1">Daewoo</span>
                                            <span className="block text-white font-bold">400 x 400 mm</span>
                                        </div>
                                    </div>
                                </MotionWrapper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
