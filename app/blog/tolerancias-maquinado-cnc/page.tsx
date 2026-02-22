import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Tolerancias de Maquinado CNC: Tabla de Referencia ISO — Aqua Metal",
    description:
        "Guía práctica sobre tolerancias dimensionales en maquinado CNC. Tabla por proceso, norma ISO 2768 y cómo especificar tolerancias sin encarecer tu pieza innecesariamente.",
    keywords: ["tolerancias maquinado CNC", "tabla ISO tolerancias", "tolerancias dimensionales CNC", "precisión maquinado"],
    alternates: { canonical: "https://www.aqua-metal.com/blog/tolerancias-maquinado-cnc" },
    openGraph: {
        title: "Tolerancias de Maquinado CNC | Aqua Metal Blog",
        description: "Tabla de referencia de tolerancias CNC y guía práctica para especificarlas correctamente.",
        url: "https://www.aqua-metal.com/blog/tolerancias-maquinado-cnc",
    },
};

const faqs = [
    { q: "¿Qué tolerancia estándar tiene el maquinado CNC?", a: "La tolerancia estándar en torneado CNC es ±0.025mm. Con equipos de alta precisión alcanzamos ±0.005mm." },
    { q: "¿Por qué las tolerancias ajustadas encarecen la pieza?", a: "Requieren herramientas más finas, velocidades de avance menores, mayor frecuencia de inspección y a veces operaciones adicionales de acabado. Todo eso impacta el costo por pieza." },
    { q: "¿Cómo especifico las tolerancias en mi plano?", a: "Usa ISO 2768 como base y coloca tolerancias estrictas solo donde la función lo exija. Comparte el plano con tu proveedor antes de aprobarlo —esa revisión puede ahorrarte costos significativos." },
];

const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function ArticleToleranciasMaquinadoCNC() {
    return (
        <div className="bg-[#000814] min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="relative py-24 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent" />
                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <Link href="/blog" className="text-sm text-gray-500 hover:text-accent-primary transition-colors font-mono mb-6 block">← Volver al Blog</Link>
                    <span className="text-accent-primary text-xs font-mono uppercase tracking-[0.3em] mb-4 block">Calidad · 7 min lectura</span>
                    <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 leading-tight">
                        Tolerancias de Maquinado CNC: Tabla de Referencia ISO
                    </h1>
                    <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
                        Cuando veo un plano con ±0.001mm en todas sus cotas, sé inmediatamente que algo no está bien. Una tolerancia innecesariamente ajustada multiplica el costo sin añadir valor funcional. Te explico cómo entender las tolerancias y cómo especificarlas de manera inteligente.
                    </p>
                    <div className="mt-8 flex gap-4 text-sm text-gray-600 font-mono">
                        <span>Por el equipo de Aqua Metal</span><span>·</span>
                        <time dateTime="2026-02-21">21 de febrero, 2026</time>
                    </div>
                </div>
            </div>

            <article className="container mx-auto px-6 py-16 max-w-4xl"><h2 className="text-3xl font-bold font-display text-white mt-12 mb-6">¿Qué es una tolerancia dimensional?</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Una tolerancia es el margen de variación permitido en una dimensión. Si especifico 25mm ±0.05mm, acepto cualquier pieza entre 24.95mm y 25.05mm. Esos 0.10mm son la banda de tolerancia total.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                    En mi opinión, lo que muchos diseñadores subestiman es que la tolerancia no es solo un número en un plano: es una restricción que define el proceso, las herramientas, la frecuencia de inspección y el costo final. Honestamente, la mayoría de las veces que he visto proyectos encarecer innecesariamente, la causa ha sido exactamente esta: tolerancias más ajustadas de lo que la función requiere.
                </p>

                <div className="my-10 p-8 rounded-2xl bg-accent-primary/10 border border-accent-primary/20">
                    <p className="text-xl font-bold text-white font-display mb-2">Mi regla de oro:</p>
                    <p className="text-gray-300">Tolera solo lo que la función requiere. Una tolerancia dos veces más ajustada de lo necesario puede triplicar el costo por pieza. Sin duda, este es el ajuste de diseño con mayor impacto en el costo de manufactura.</p>
                </div>

                <h2 className="text-3xl font-bold font-display text-white mt-12 mb-6">Tabla de tolerancias alcanzables por proceso</h2>
                <div className="overflow-x-auto my-8">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="text-left text-gray-400 font-mono uppercase tracking-wider py-3 pr-4">Proceso</th>
                                <th className="text-left text-accent-primary font-mono uppercase tracking-wider py-3 pr-4">Estándar</th>
                                <th className="text-left text-gray-400 font-mono uppercase tracking-wider py-3 pr-4">Fina</th>
                                <th className="text-left text-gray-500 font-mono uppercase tracking-wider py-3">Especial*</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[
                                ["Torneado CNC", "±0.025 mm", "±0.010 mm", "±0.005 mm"],

                                ["Fresado CNC 3 ejes", "±0.050 mm", "±0.025 mm", "±0.010 mm"],
                                ["Centro maquinado 5 ejes", "±0.025 mm", "±0.010 mm", "±0.005 mm"],
                                ["Torno automático de levas", "±0.050 mm", "±0.025 mm", "±0.015 mm"],
                            ].map(([proc, std, fine, sp]) => (
                                <tr key={proc}>
                                    <td className="text-white font-semibold py-4 pr-4">{proc}</td>
                                    <td className="text-accent-primary font-mono py-4 pr-4">{std}</td>
                                    <td className="text-gray-400 font-mono py-4 pr-4">{fine}</td>
                                    <td className="text-gray-500 font-mono py-4">{sp}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-gray-600 text-xs font-mono">* Condiciones controladas e inspección 100%. Consultar disponibilidad y costo adicional.</p><h2 className="text-3xl font-bold font-display text-white mt-12 mb-6">La norma ISO 2768: el lenguaje común</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Cuando recibo un plano sin tolerancias específicas en todas las cotas, trabajo bajo ISO 2768. Creo que esta norma es una de las cosas más prácticas que la industria ha estandarizado: define un lenguaje base que todos entendemos.
                </p>
                <div className="grid md:grid-cols-2 gap-4 my-8">
                    {[
                        { cls: "f — Fina", uso: "Piezas de precisión con ensamble ajustado. Úsala donde la función lo exige, no por defecto. En mi opinión, menos del 20% de las cotas en un plano promedio la necesitan." },
                        { cls: "m — Media", uso: "El estándar de manufactura general. La clase que aplicamos cuando el cliente no especifica otra. Sin duda la más común y económica." },
                        { cls: "c — Gruesa", uso: "Piezas estructurales o de soporte donde la precisión no es crítica." },
                        { cls: "v — Muy gruesa", uso: "Fundición o forja aproximada. Raro en maquinado CNC de precisión." },
                    ].map((item) => (
                        <div key={item.cls} className="p-5 rounded-xl bg-white/5 border border-white/10">
                            <h3 className="text-accent-primary font-bold font-mono mb-2">{item.cls}</h3>
                            <p className="text-gray-400 text-sm">{item.uso}</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-3xl font-bold font-display text-white mt-12 mb-6">Los errores más comunes que veo en los planos</h2>
                <ol className="space-y-5 mb-8">
                    {[
                        ["Tolerancia uniforme en todo el plano", "±0.005mm en el chaflán decorativo es dinero sin retorno. Creo que este es el error más costoso y también el más evitable."],
                        ["No considerar el apilamiento de tolerancias", "Cuatro cotas en cadena con ±0.01mm acumulan ±0.04mm. Para ensambles críticos, trabaja con GD&T y análisis de tolerancias."],
                        ["Olvidar la rugosidad superficial (Ra)", "Una pieza puede estar dentro de tolerancia dimensional y fallar en su función si el acabado superficial no es el correcto. Honestamente, esto se olvida con demasiada frecuencia."],
                        ["No consultar al maquinista antes de finalizar el diseño", "Sin duda, el mejor momento para ajustar tolerancias es durante el diseño. No cuando ya tienes rechazos en control de calidad."],
                    ].map(([title, desc], i) => (
                        <li key={i} className="flex gap-4 items-start">
                            <span className="shrink-0 text-accent-primary font-bold font-mono">{i + 1}.</span>
                            <div>
                                <strong className="text-white block mb-1">{title}</strong>
                                <p className="text-gray-400 text-sm">{desc}</p>
                            </div>
                        </li>
                    ))}
                </ol>

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
                    <h2 className="text-3xl font-display font-bold text-white mb-4">¿Dudas sobre las tolerancias de tu pieza?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Mándanos el plano. Revisión DFM sin costo y recomendación de tolerancias óptimas para tu presupuesto y función.</p>
                    <Link href="/contacto" className="inline-flex items-center gap-2 bg-accent-primary text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(255,195,0,0.3)]">
                        Enviar Plano para Revisión →
                    </Link>
                </div>

                <div className="mt-16">
                    <h2 className="text-2xl font-bold font-display text-white mb-8">Artículos relacionados</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { slug: "que-es-maquinado-cnc", title: "¿Qué es el Maquinado CNC y Cómo Funciona?", cat: "Fundamentos" },
                            { slug: "costo-maquinado-cnc-mexico", title: "¿Cuánto Cuesta el Maquinado CNC en México?", cat: "Industria" },
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
