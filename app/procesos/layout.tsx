import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Procesos — Torneado CNC y Maquinado Suizo de Precisión",
    description:
        "Torneado CNC de alta velocidad y maquinado suizo con tolerancias de ±0.005mm. Capacidad de 1mm hasta 60mm en aluminio, acero inoxidable, latón y más. Planta en México.",
    alternates: { canonical: "https://www.aqua-metal.com/procesos" },
    openGraph: {
        title: "Procesos de Maquinado CNC | Aqua Metal",
        description:
            "Torneado CNC y maquinado suizo. Tolerancias ±0.005mm. Capacidad 1–60mm. ISO 9001.",
        url: "https://www.aqua-metal.com/procesos",
    },
};

export default function ProcesosLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
