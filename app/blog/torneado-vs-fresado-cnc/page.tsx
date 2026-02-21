import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Torneado CNC vs Fresado CNC: ¿Cuál Necesitas? — Guía Práctica",
    description:
        "¿No sabes si tu pieza necesita torneado o fresado CNC? Te explico las diferencias clave, geometrías ideales para cada proceso y cómo tomamos esa decisión en nuestra planta en México.",
    keywords: ["torneado CNC vs fresado", "diferencia torneado fresado", "cuándo usar torno CNC", "fresado CNC México"],
    alternates: { canonical: "https://www.aqua-metal.com/blog/torneado-vs-fresado-cnc" },
    openGraph: {
        title: "Torneado vs Fresado CNC | Aqua Metal Blog",
        description: "Las diferencias reales entre torneado y fresado CNC desde la experiencia en planta.",
        url: "https://www.aqua-metal.com/blog/torneado-vs-fresado-cnc",
    },
};

const faqs = [
    { q: "¿Cuál es la diferencia entre torneado y fresado CNC?", a: "En el torneado CNC la pieza gira y la herramienta avanza —ideal para geometrías cilíndricas. En el fresado CNC la herramienta gira y la mesa se mueve en múltiples ejes —ideal para piezas prismáticas con ranuras, cavidades y perfiles." },
    { q: "¿Qué proceso es más económico, el torneado o el fresado?", a: "El torneado suele ser más económico para piezas cilíndricas en serie por sus menores tiempos de ciclo. El fresado es necesario cuando la geometría no puede producirse en torno, y su costo depende de la complejidad." },
    { q: "¿Puedo combinar torneado y fresado en la misma pieza?", a: "Sí, y es muy común. Contamos con tornos con herramientas vivas que permiten operaciones de fresado sin mover la pieza del mandril, reduciendo tiempos de setup y mejorando la concentricidad." },
];

const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function ArticleTorneadoVsFresado() {
    return (
        <div className="bg-[#000814] min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="relative py-24 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent" />
                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <Link href="/blog" className="text-sm text-gray-500 hover:text-accent-primary transition-colors font-mono mb-6 block">← Volver al Blog</Link>
                    <span className="text-accent-primary text-xs font-mono uppercase tracking-[0.3em] mb-4 block">Procesos · 6 min lectura</span>
                    <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 leading-tight">
                        Torneado CNC vs Fresado CNC: ¿Cuál Necesitas?
                    </h1>
                    <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
                        Esta es posiblemente la pregunta que más me hacen cuando un cliente llega con un plano nuevo. La respuesta depende de la geometría de tu pieza, no del proceso que más te suena o del que ya conoces. Te explico cómo lo decidimos en planta.
                    </p>
                    <div className="mt-8 flex gap-4 text-sm text-gray-600 font-mono">
                        <span>Por el equipo de Aqua Metal</span><span>·</span>
                        <time dateTime="2026-02-21">21 de febrero, 2026</time>
                    </div>
                </div>
            </div>

            <article className="container mx-auto px-6 py-16 max-w-4xl"><h2 className="text-3xl font-bold font-display text-white mt-12 mb-6">El principio fundamental de cada proceso</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Cuando explico esto a clientes no ingenieros, simplifico con una imagen: en el <strong className="text-white">torneado</strong>, la pieza baila y la herramienta trabaja. En el <strong className="text-white">fresado</strong>, la herramienta baila y la pieza espera.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                    En el torneado CNC, el material gira a alta velocidad mientras una herramienta remueve material progresivamente. El resultado natural es una forma cilíndrica. En el fresado CNC, una fresa giratoria se desplaza en múltiples ejes sobre una pieza fija. El resultado natural es una forma prismática.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Honestamente, esta distinción parece obvia cuando la explico, pero me sorprende cuántos planos recibo donde la elección de proceso no fue considerada desde el diseño, y ese pequeño descuido puede encarecer una pieza hasta en un 40%.
                </p>

                <div className="my-10 grid md:grid-cols-2 gap-6">
                    <div className="p-8 rounded-2xl bg-accent-primary/10 border border-accent-primary/20">
                        <h3 className="text-xl font-bold text-white mb-4 font-display">Torneado CNC</h3>
                        <p className="text-gray-300 mb-4 text-sm">La pieza gira. Ideal para simetría rotacional.</p>
                        <ul className="space-y-2 text-sm text-gray-400">
                            {["Ejes y flechas", "Bujes y casquillos", "Tornillos y roscas", "Niples y conectores", "Pasadores y pernos"].map((i) => (
                                <li key={i} className="flex items-center gap-2"><span className="text-accent-primary">→</span> {i}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-4 font-display">Fresado CNC</h3>
                        <p className="text-gray-300 mb-4 text-sm">La herramienta gira. Ideal para formas prismáticas.</p>
                        <ul className="space-y-2 text-sm text-gray-400">
                            {["Placas y bridas", "Cuerpos con cavidades", "Ranuras y chaveteros", "Moldes y matrices", "Perfiles complejos"].map((i) => (
                                <li key={i} className="flex items-center gap-2"><span className="text-accent-secondary">→</span> {i}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <h2 className="text-3xl font-bold font-display text-white mt-12 mb-6">Cómo tomo la decisión en planta</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Cuando recibo un plano, lo primero que busco es el eje de simetría. Si la pieza tiene simetría rotacional —si puedo imaginarla girando alrededor de un punto central y que tenga sentido geométrico— el torneado es mi primera opción.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Sin duda, el factor económico también pesa: el torneado en serie tiene un costo por ciclo mucho menor que el fresado, porque la remoción de material es más eficiente. Creo que muchos diseñadores subestiman cuánto les puede ahorrar diseñar una pieza pensando en el proceso desde el inicio.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Si la pieza tiene caras planas, ranuras, agujeros fuera del eje central o perfiles irregulares, entran los centros de maquinado. A veces la solución es una combinación: torneamos la geometría base y luego fresamos las características adicionales.
                </p><h2 className="text-3xl font-bold font-display text-white mt-12 mb-6">Comparativa directa</h2>
                <div className="overflow-x-auto my-8">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="text-left text-gray-400 font-mono uppercase tracking-wider py-3 pr-6">Criterio</th>
                                <th className="text-left text-accent-primary font-mono uppercase tracking-wider py-3 pr-6">Torneado CNC</th>
                                <th className="text-left text-accent-secondary font-mono uppercase tracking-wider py-3">Fresado CNC</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[
                                ["Geometría ideal", "Cilíndrica / rotacional", "Prismática / irregular"],
                                ["Velocidad de ciclo", "Muy alta", "Media (según complejidad)"],
                                ["Costo por pieza en serie", "Menor", "Mayor"],
                                ["Tolerancias alcanzables", "±0.005mm", "±0.010mm–±0.025mm"],
                                ["Setup time", "Menor", "Mayor (más operaciones)"],
                            ].map(([crit, torn, fres]) => (
                                <tr key={crit}>
                                    <td className="text-white font-semibold py-3 pr-6">{crit}</td>
                                    <td className="text-gray-400 py-3 pr-6">{torn}</td>
                                    <td className="text-gray-400 py-3">{fres}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h2 className="text-3xl font-bold font-display text-white mt-12 mb-6">Mi recomendación práctica</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    En mi opinión, si hay alguna duda entre los dos procesos, la respuesta casi siempre está en el plano. Honestamente, el mejor momento para tomar esta decisión es antes de finalizar el diseño —no cuando ya tienes la primera muestra y te das cuenta de que el proceso encarece la pieza más de lo esperado.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Si tienes un plano y no estás seguro qué proceso es el correcto, mándanoslo. Sin duda, hacemos la revisión DFM sin costo y te decimos cuál es la ruta más eficiente.
                </p>

                <h2 className="text-3xl font-bold font-display text-white mt-12 mb-8">Preguntas Frecuentes</h2>
                <div className="space-y-5">
                    {faqs.map((faq) => (
                        <div key={faq.q} className="border border-white/10 rounded-xl p-6">
                            <h3 className="text-white font-bold mb-3">{faq.q}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-10 rounded-3xl bg-gradient-to-br from-accent-primary/20 via-accent-primary/5 to-transparent border border-accent-primary/20 text-center">
                    <h2 className="text-3xl font-display font-bold text-white mb-4">¿No sabes qué proceso necesita tu pieza?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Mándanos tus planos. Revisamos la geometría, te decimos el proceso más eficiente y te enviamos cotización en 24 horas.
                    </p>
                    <Link href="/contacto" className="inline-flex items-center gap-2 bg-accent-primary text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(255,195,0,0.3)]">
                        Enviar mis Planos →
                    </Link>
                </div>

                <div className="mt-16">
                    <h2 className="text-2xl font-bold font-display text-white mb-8">Artículos relacionados</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { slug: "que-es-maquinado-cnc", title: "¿Qué es el Maquinado CNC y Cómo Funciona?", cat: "Fundamentos" },
                            { slug: "guia-maquinado-suizo", title: "Guía Completa del Maquinado Suizo", cat: "Procesos" },
                        ].map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-accent-primary/40 transition-colors group">
                                <span className="text-xs font-mono text-accent-primary uppercase tracking-wider mb-2 block">{post.cat}</span>
                                <h3 className="text-white font-bold group-hover:text-accent-primary transition-colors">{post.title}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    );
}
