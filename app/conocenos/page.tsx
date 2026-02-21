
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Conócenos — Empresa Mexicana de Maquinado ISO 9001",
    description:
        "Más de 20 años fabricando piezas metálicas de alta precisión en México. Certificación ISO 9001 y cumplimiento NOM-STPS-035. Sustituyendo importaciones con manufactura nacional de calidad.",
    alternates: { canonical: "https://www.aqua-metal.com/conocenos" },
    openGraph: {
        title: "Aqua Metal — Empresa de Maquinado ISO 9001 en México",
        description:
            "Más de 20 años en manufactura metal-mecánica. ISO 9001 · NOM-STPS-035 · Socio estratégico de la industria nacional.",
        url: "https://www.aqua-metal.com/conocenos",
    },
};



export default function ConocenosPage() {
    // In a dynamic world we'd fetch this, but for a "clone and fix" with known content, 
    // we can structure it nicely while using the original text.


    return (
        <div className="bg-[#000814] min-h-screen">
            <PageHeader
                title="Conócenos"
                subtitle="Más de 20 años de experiencia en el sector metal-mecánico."
            />

            <div className="container mx-auto px-6 py-20">
                {/* Intro */}
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                        En <span className="text-white font-semibold">Aqua Metal</span> somos una empresa mexicana del sector metal-mecánico con más de 20 años de experiencia. Nos especializamos en la fabricación de piezas metálicas de alta precisión para clientes que buscan calidad, confiabilidad y cumplimiento en cada entrega.
                    </p>
                    <div className="mt-8 flex flex-col md:flex-row justify-center gap-4 text-center">
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Contamos con certificación <span className="text-accent-primary">ISO 9001</span> y cumplimos con la <span className="text-accent-primary">NOM-STPS-035-2018</span>, para asegurar la calidad de nuestros productos y servicios, y la integridad de cada colaborador.
                        </p>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <div className="order-2 md:order-1 relative h-[40vh] min-h-[260px] max-h-[500px] rounded-2xl overflow-hidden border border-white/10 group">
                        {/* Placeholder or specific image from media if we can map it. using a generic one for now or from the list */}
                        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                        {/* Ideally we use one of the downloaded images here, e.g. a machine or factory floor */}
                        <Image
                            src="/images/img_8223-3.jpeg"
                            alt="Misión"
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-display font-bold text-white mb-6 uppercase">
                            <span className="text-accent-primary">I.</span> Misión
                        </h2>
                        <div className="space-y-6 text-gray-300 leading-relaxed text-lg font-light">
                            <p>
                                Nuestra empresa fue creada para ayudar a cubrir las necesidades de fabricación y ensamble de partes de metal que tiene la industria en general en nuestro país, sustituyendo importaciones de otros países, para ser un socio estratégico de la industria nacional.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Vision Section */}
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-display font-bold text-white mb-6 uppercase">
                            <span className="text-accent-primary">II.</span> Visión
                        </h2>
                        <div className="space-y-6 text-gray-300 leading-relaxed text-lg font-light">
                            <p>
                                En 2030 seremos una empresa Líder, a nivel nacional, de la industria metalmecánica impulsados por la mejora continua, compromiso, talento y experiencia de nuestros colaboradores, infraestructura sólida y finanzas sanas.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[40vh] min-h-[260px] max-h-[500px] rounded-2xl overflow-hidden border border-white/10 group">
                        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                        <Image
                            src="/images/img_8168.jpeg"
                            alt="Visión"
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
