import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto — Solicita Cotización de Maquinado CNC",
    description:
        "Solicita una cotización gratuita de maquinado CNC, torneado de precisión o manufactura industrial en México. Respondemos en menos de 24 horas. WhatsApp: +52 55 8698 1654.",
    alternates: { canonical: "https://www.aqua-metal.com/contacto" },
    openGraph: {
        title: "Contacto | Aqua Metal — Solicita tu Cotización",
        description:
            "Cotización gratuita de maquinado CNC. Respuesta en 24h. WhatsApp: +52 55 8698 1654.",
        url: "https://www.aqua-metal.com/contacto",
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
