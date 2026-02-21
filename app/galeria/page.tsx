import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import GalleryLightbox from "@/components/GalleryLightbox";
import { WpMedia } from "@/lib/data";

export const metadata: Metadata = {
    title: "Galería — Maquinado CNC, Tornos y Piezas de Precisión",
    description:
        "Fotos de nuestra planta de manufactura, tornos CNC automáticos, centros de maquinado y piezas de precisión. Evidencia visual de nuestra capacidad industrial y calidad certificada ISO 9001.",
    alternates: { canonical: "https://www.aqua-metal.com/galeria" },
    openGraph: {
        title: "Galería de Manufactura CNC | Aqua Metal",
        description:
            "Imágenes de planta, tornos CNC, maquinado suizo y piezas de precisión. ISO 9001 · Estado de México.",
        url: "https://www.aqua-metal.com/galeria",
    },
};

// Curated 20 best images — editorial selection of facility, machinery & finished parts
const curatedImages: WpMedia[] = [
    {
        id: 1,
        source_url: "/images/img_8882.jpeg",
        slug: "maquinado-suizo",
        title: { rendered: "Maquinado Suizo" },
        alt_text: "Tornos de maquinado suizo en operación",
        media_type: "image",
        media_details: { width: 1920, height: 1080, sizes: { full: { source_url: "/images/img_8882.jpeg" } } },
        toLocalPath: "/images/img_8882.jpeg",
    },
    {
        id: 2,
        source_url: "/images/img_8969.jpeg",
        slug: "planta-maquinaria",
        title: { rendered: "Planta — Maquinaria" },
        alt_text: "Vista de la planta de producción",
        media_type: "image",
        media_details: { width: 1920, height: 1080, sizes: { full: { source_url: "/images/img_8969.jpeg" } } },
        toLocalPath: "/images/img_8969.jpeg",
    },
    {
        id: 3,
        source_url: "/images/img_8873.jpeg",
        slug: "tornos-cnc",
        title: { rendered: "Tornos CNC" },
        alt_text: "Tornos CNC de precisión",
        media_type: "image",
        media_details: { width: 1920, height: 1080, sizes: { full: { source_url: "/images/img_8873.jpeg" } } },
        toLocalPath: "/images/img_8873.jpeg",
    },
    {
        id: 4,
        source_url: "/images/img_2103.jpg",
        slug: "torneado-cnc",
        title: { rendered: "Torneado CNC" },
        alt_text: "Proceso de torneado CNC de precisión",
        media_type: "image",
        media_details: { width: 1920, height: 1080, sizes: { full: { source_url: "/images/img_2103.jpg" } } },
        toLocalPath: "/images/img_2103.jpg",
    },
    {
        id: 5,
        source_url: "/images/img_8884.jpeg",
        slug: "planta-industrial",
        title: { rendered: "Planta Industrial" },
        alt_text: "Interior de la planta industrial",
        media_type: "image",
        media_details: { width: 1920, height: 1080, sizes: { full: { source_url: "/images/img_8884.jpeg" } } },
        toLocalPath: "/images/img_8884.jpeg",
    },
    {
        id: 6,
        source_url: "/images/img_8878.jpeg",
        slug: "operacion-maquinaria",
        title: { rendered: "Operación de Maquinaria" },
        alt_text: "Operación de maquinaria CNC",
        media_type: "image",
        media_details: { width: 1920, height: 1080, sizes: { full: { source_url: "/images/img_8878.jpeg" } } },
        toLocalPath: "/images/img_8878.jpeg",
    },
    {
        id: 7,
        source_url: "/images/img_8968.jpeg",
        slug: "proceso-cnc",
        title: { rendered: "Proceso CNC" },
        alt_text: "Proceso de maquinado CNC",
        media_type: "image",
        media_details: { width: 1920, height: 1080, sizes: { full: { source_url: "/images/img_8968.jpeg" } } },
        toLocalPath: "/images/img_8968.jpeg",
    },
    {
        id: 8,
        source_url: "/images/img_8974.jpeg",
        slug: "cnc-detalle",
        title: { rendered: "Detalle CNC" },
        alt_text: "Detalle de operación CNC de alta precisión",
        media_type: "image",
        media_details: { width: 1920, height: 1080, sizes: { full: { source_url: "/images/img_8974.jpeg" } } },
        toLocalPath: "/images/img_8974.jpeg",
    },
    {
        id: 9,
        source_url: "/images/img_8845.jpeg",
        slug: "maquinaria-linea",
        title: { rendered: "Maquinaria en Línea" },
        alt_text: "Línea de maquinaria industrial",
        media_type: "image",
        media_details: { width: 1920, height: 1080, sizes: { full: { source_url: "/images/img_8845.jpeg" } } },
        toLocalPath: "/images/img_8845.jpeg",
    },
    {
        id: 10,
        source_url: "/images/img_8795.jpeg",
        slug: "piezas-maquinadas",
        title: { rendered: "Piezas Maquinadas" },
        alt_text: "Piezas maquinadas de alta precisión",
        media_type: "image",
        media_details: { width: 1920, height: 1080, sizes: { full: { source_url: "/images/img_8795.jpeg" } } },
        toLocalPath: "/images/img_8795.jpeg",
    },
    {
        id: 11,
        source_url: "/images/img_8793.jpeg",
        slug: "control-calidad",
        title: { rendered: "Control de Calidad" },
        alt_text: "Proceso de control de calidad",
        media_type: "image",
        media_details: { width: 1920, height: 1080, sizes: { full: { source_url: "/images/img_8793.jpeg" } } },
        toLocalPath: "/images/img_8793.jpeg",
    },
    {
        id: 12,
        source_url: "/images/img_8792.jpeg",
        slug: "manufactura-precision",
        title: { rendered: "Manufactura de Precisión" },
        alt_text: "Manufactura de precisión en planta",
        media_type: "image",
        media_details: { width: 1920, height: 1080, sizes: { full: { source_url: "/images/img_8792.jpeg" } } },
        toLocalPath: "/images/img_8792.jpeg",
    },
    {
        id: 13,
        source_url: "/images/img_8802.jpeg",
        slug: "torno-automatico",
        title: { rendered: "Torno Automático" },
        alt_text: "Torno automático de levas en operación",
        media_type: "image",
        media_details: { width: 1920, height: 1080, sizes: { full: { source_url: "/images/img_8802.jpeg" } } },
        toLocalPath: "/images/img_8802.jpeg",
    },
    {
        id: 14,
        source_url: "/images/img_8799.jpeg",
        slug: "piezas-serie",
        title: { rendered: "Piezas en Serie" },
        alt_text: "Piezas metálicas fabricadas en serie",
        media_type: "image",
        media_details: { width: 1920, height: 1080, sizes: { full: { source_url: "/images/img_8799.jpeg" } } },
        toLocalPath: "/images/img_8799.jpeg",
    },
    {
        id: 15,
        source_url: "/images/img_8233.jpeg",
        slug: "maquinado-complejo",
        title: { rendered: "Maquinado Complejo" },
        alt_text: "Maquinado de componentes complejos",
        media_type: "image",
        media_details: { width: 1920, height: 1080, sizes: { full: { source_url: "/images/img_8233.jpeg" } } },
        toLocalPath: "/images/img_8233.jpeg",
    },
    {
        id: 16,
        source_url: "/images/img_8223.jpeg",
        slug: "instalaciones",
        title: { rendered: "Instalaciones" },
        alt_text: "Instalaciones de manufactura",
        media_type: "image",
        media_details: { width: 1920, height: 1080, sizes: { full: { source_url: "/images/img_8223.jpeg" } } },
        toLocalPath: "/images/img_8223.jpeg",
    },
    {
        id: 17,
        source_url: "/images/img_8254.jpeg",
        slug: "equipo-cnc",
        title: { rendered: "Equipo CNC" },
        alt_text: "Equipo de maquinado CNC",
        media_type: "image",
        media_details: { width: 1920, height: 1080, sizes: { full: { source_url: "/images/img_8254.jpeg" } } },
        toLocalPath: "/images/img_8254.jpeg",
    },
    {
        id: 18,
        source_url: "/images/img_8241.jpeg",
        slug: "tornillos-precision",
        title: { rendered: "Tornillos de Precisión" },
        alt_text: "Tornillos de alta precisión",
        media_type: "image",
        media_details: { width: 1920, height: 1080, sizes: { full: { source_url: "/images/img_8241.jpeg" } } },
        toLocalPath: "/images/img_8241.jpeg",
    },
    {
        id: 19,
        source_url: "/images/img_8240.jpeg",
        slug: "componentes-metal",
        title: { rendered: "Componentes de Metal" },
        alt_text: "Componentes metálicos de precisión",
        media_type: "image",
        media_details: { width: 1920, height: 1080, sizes: { full: { source_url: "/images/img_8240.jpeg" } } },
        toLocalPath: "/images/img_8240.jpeg",
    },
    {
        id: 20,
        source_url: "/images/img_7162.jpeg",
        slug: "produccion-industrial",
        title: { rendered: "Producción Industrial" },
        alt_text: "Producción industrial a gran escala",
        media_type: "image",
        media_details: { width: 1920, height: 1080, sizes: { full: { source_url: "/images/img_7162.jpeg" } } },
        toLocalPath: "/images/img_7162.jpeg",
    },
];

export default function GalleryPage() {
    return (
        <div className="bg-[#000814] min-h-screen">
            <PageHeader
                title="Galería"
                subtitle="Nuestra calidad hablada a través de nuestros resultados."
            />

            <div className="container mx-auto px-6 py-20">
                <GalleryLightbox items={curatedImages} />
            </div>
        </div>
    );
}
