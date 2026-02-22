import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import CursorSpotlight from "@/components/CursorSpotlight";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aqua-metal.com"),
  title: {
    default: "Aqua Metal | Maquinado CNC de Precisión en México",
    template: "%s | Aqua Metal",
  },
  description:
    "Empresa mexicana de manufactura metal-mecánica con más de 25 años de experiencia. Torneado CNC de alta precisión, tornos automáticos y centros de maquinado. Certificación ISO 9001. Tolerancias de ±0.005mm.",
  keywords: [
    "maquinado CNC México",
    "torneado CNC",
    "tornos automáticos",
    "manufactura de precisión",
    "ISO 9001 manufactura",
    "proveedor maquinado industrial",
    "piezas CNC aluminio",
    "maquinado acero inoxidable",
  ],
  authors: [{ name: "Aqua Metal" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://www.aqua-metal.com",
    siteName: "Aqua Metal",
    title: "Aqua Metal | Maquinado CNC de Precisión en México",
    description:
      "Torneado CNC, tornos automáticos y manufactura de precisión para la industria en México. ISO 9001 · Tolerancias de ±0.005mm · +25 años de experiencia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqua Metal | Maquinado CNC de Precisión en México",
    description:
      "Torneado CNC, tornos automáticos y manufactura de precisión. ISO 9001 · +25 años.",
  },
  alternates: {
    canonical: "https://www.aqua-metal.com",
  },
};

// Organization + ManufacturingBusiness Schema.org structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ManufacturingBusiness"],
      "@id": "https://www.aqua-metal.com/#organization",
      name: "Aqua Metal",
      url: "https://www.aqua-metal.com",
      description:
        "Empresa mexicana de manufactura metal-mecánica. Especialistas en torneado CNC, tornos automáticos y fresado de precisión con certificación ISO 9001.",
      foundingDate: "2003",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jilotzingo",
        addressRegion: "Estado de México",
        addressCountry: "MX",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: "Spanish",
        telephone: "+52-55-8698-1654",
        contactOption: "TollFree",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Maquinado CNC",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Torneado CNC",
              description:
                "Torneado de alta velocidad para aluminio y acero. Capacidad hasta 60mm, tolerancias de ±0.005mm.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Tornos Automáticos",
              description:
                "Producción masiva de alta eficiencia con tornos de levas automáticos. Capacidad hasta 42mm.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Fresado CNC",
              description:
                "Centro de maquinado CNC para componentes complejos de alta precisión.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.aqua-metal.com/#website",
      url: "https://www.aqua-metal.com",
      name: "Aqua Metal",
      description: "Maquinado CNC de Precisión en México",
      publisher: { "@id": "https://www.aqua-metal.com/#organization" },
      inLanguage: "es-MX",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased min-h-screen flex flex-col`}
      >
        <ScrollProgressBar />
        <CursorSpotlight />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppBubble />
      </body>
    </html>
  );
}
