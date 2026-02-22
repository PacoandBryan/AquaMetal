import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog — Recursos de Maquinado CNC y Manufactura Industrial",
    description:
        "Guías, artículos técnicos y recursos sobre maquinado CNC, torneado de precisión, materiales y manufactura industrial en México. Aprende de expertos con +25 años de experiencia.",
    alternates: { canonical: "https://www.aqua-metal.com/blog" },
    openGraph: {
        title: "Blog de Maquinado CNC | Aqua Metal",
        description:
            "Recursos técnicos sobre maquinado CNC, materiales y manufactura industrial desde México.",
        url: "https://www.aqua-metal.com/blog",
    },
};

// Blog posts data — expand this array as new articles are written
const blogPosts = [
    {
        slug: "que-es-maquinado-cnc",
        title: "¿Qué es el Maquinado CNC y Cómo Funciona?",
        excerpt:
            "El Control Numérico Computarizado (CNC) es la tecnología que impulsa la manufactura moderna. Descubre cómo funciona, qué tipos existen y por qué es la opción más precisa para fabricar piezas metálicas.",
        date: "2026-02-21",
        category: "Fundamentos",
        readTime: "8 min",
        keywords: "maquinado CNC, control numérico computarizado, manufactura de precisión",
    },
    {
        slug: "torneado-vs-fresado-cnc",
        title: "Torneado CNC vs Fresado CNC: ¿Cuál Necesitas?",
        excerpt:
            "Dos de los procesos de maquinado más utilizados en la industria. Te explicamos sus diferencias, aplicaciones ideales y cómo elegir el proceso correcto para tu pieza.",
        date: "2026-02-21",
        category: "Procesos",
        readTime: "6 min",
        keywords: "torneado CNC, fresado CNC, diferencias maquinado",
    },

    {
        slug: "tolerancias-maquinado-cnc",
        title: "Tolerancias de Maquinado CNC: Tabla de Referencia ISO",
        excerpt:
            "Entender las tolerancias es crítico para diseñar piezas que se puedan fabricar. Te presentamos una tabla de referencia con las tolerancias estándar ISO para maquinado CNC.",
        date: "2026-02-21",
        category: "Calidad",
        readTime: "7 min",
        keywords: "tolerancias maquinado CNC, ISO tolerancias, precisión dimensional",
    },
    {
        slug: "costo-maquinado-cnc-mexico",
        title: "¿Cuánto Cuesta el Maquinado CNC en México? (Guía 2026)",
        excerpt:
            "Factores que determinan el precio del maquinado CNC: material, complejidad, volumen y acabado. Aprende a interpretar una cotización y obtener el mejor valor.",
        date: "2026-02-21",
        category: "Industria",
        readTime: "9 min",
        keywords: "costo maquinado CNC México, precio torneado CNC, cotización maquinado",
    },
];

export default function BlogPage() {
    return (
        <div className="bg-[#000814] min-h-screen">
            {/* Hero */}
            <div className="relative py-32 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent" />
                <div className="container mx-auto px-6 relative z-10">
                    <span className="text-accent-primary text-sm font-mono uppercase tracking-[0.3em] mb-4 block">
                        Recursos Técnicos
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-6">
                        Blog de<br />
                        <span className="text-accent-primary">Maquinado CNC</span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
                        Guías técnicas, comparativas de materiales y mejores prácticas de manufactura industrial.
                        Desde nuestra planta en México para la industria global.
                    </p>
                </div>
            </div>

            {/* Posts Grid */}
            <div className="container mx-auto px-6 py-20">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post) => (
                        <article
                            key={post.slug}
                            className="group relative flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-accent-primary/40 transition-all duration-300 hover:bg-white/8"
                        >
                            {/* Category Badge */}
                            <div className="p-8 pb-0">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-mono uppercase tracking-wider text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full">
                                        {post.category}
                                    </span>
                                    <span className="text-xs text-gray-500 font-mono">{post.readTime} lectura</span>
                                </div>
                                <h2 className="text-xl font-bold text-white mb-3 font-display group-hover:text-accent-primary transition-colors leading-snug">
                                    <Link href={`/blog/${post.slug}`} className="stretched-link">
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-gray-400 text-sm leading-relaxed">{post.excerpt}</p>
                            </div>

                            <div className="mt-auto p-8 pt-6 flex items-center justify-between border-t border-white/5 mt-6">
                                <time className="text-xs text-gray-600 font-mono">
                                    {new Date(post.date).toLocaleDateString("es-MX", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </time>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="text-xs text-accent-primary font-mono uppercase tracking-wider hover:underline flex items-center gap-1"
                                >
                                    Leer →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-24 p-12 rounded-3xl bg-gradient-to-br from-accent-primary/20 via-accent-primary/5 to-transparent border border-accent-primary/20 text-center">
                    <h2 className="text-3xl font-display font-bold text-white mb-4">
                        ¿Tienes un proyecto de maquinado?
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Contáctanos con tus planos o especificaciones técnicas. Respondemos cotizaciones en menos de 24 horas.
                    </p>
                    <Link
                        href="/contacto"
                        className="inline-flex items-center gap-3 bg-accent-primary text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(255,195,0,0.3)]"
                    >
                        Solicitar Cotización Gratuita →
                    </Link>
                </div>
            </div>
        </div>
    );
}
