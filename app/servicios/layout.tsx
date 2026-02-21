import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Servicios — Manufactura Metal-Mecánica Industrial en México",
    description:
        "Servicios de maquinado CNC, ensamble y manufactura de piezas metálicas para la industria automotriz, aeroespacial y médica en México. Certificación ISO 9001. Producción de alto volumen.",
    alternates: { canonical: "https://www.aqua-metal.com/servicios" },
    openGraph: {
        title: "Servicios de Maquinado Industrial | Aqua Metal",
        description:
            "Manufactura CNC para industria automotriz, aeroespacial y médica. ISO 9001 · Alto volumen · México.",
        url: "https://www.aqua-metal.com/servicios",
    },
};

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
