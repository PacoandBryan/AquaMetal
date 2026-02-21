import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Guía Completa del Maquinado Suizo (Swiss Lathe) — Aqua Metal",
    description:
        "El maquinado suizo permite fabricar piezas de alta complejidad en un solo ciclo. Cómo funciona, qué industrias se benefician más y por qué elegimos este proceso para las piezas más exigentes.",
    keywords: ["maquinado suizo", "swiss lathe México", "torno suizo", "piezas pequeñas complejas CNC"],
    alternates: { canonical: "https://www.aqua-metal.com/blog/guia-maquinado-suizo" },
    openGraph: {
        title: "Guía del Maquinado Suizo | Aqua Metal Blog",
        description: "Todo sobre el maquinado suizo: principio de operación, ventajas y aplicaciones industriales.",
        url: "https://www.aqua-metal.com/blog/guia-maquinado-suizo",
    },
};

const faqs = [
    { q: "¿Qué es el maquinado suizo?", a: "El maquinado suizo es un proceso de torneado donde el material avanza axialmente a través de una guía fija mientras múltiples herramientas atacan simultáneamente. Permite fabricar piezas largas, de diámetro pequeño y geometría compleja con altísima precisión en un solo ciclo." },
    { q: "¿Para qué industrias es ideal el maquinado suizo?", a: "Es especialmente valioso en la industria médica (implantes, tornillos de titanio), aeroespacial (conectores de precisión), electrónica (pines y terminales), automotriz (inyectores y válvulas) e instrumentación de alta gama." },
    { q: "¿Cuál es el diámetro máximo para maquinado suizo?", a: "Generalmente de 1mm a 32mm. En Aqua Metal atendemos rangos de 1mm a 25mm con alta eficiencia, logrando tolerancias de ±0.003mm en las condiciones adecuadas." },
];

const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function ArticleGuiaMaquinadoSuizo() {
    return (
        <div className="bg-[#000814] min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="relative py-24 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent" />
                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <Link href="/blog" className="text-sm text-gray-500 hover:text-accent-primary transition-colors font-mono mb-6 block">← Volver al Blog</Link>
                    <span className="text-accent-primary text-xs font-mono uppercase tracking-[0.3em] mb-4 block">Procesos · 10 min lectura</span>
                    <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 leading-tight">
                        Guía Completa del Maquinado Suizo
                    </h1>
                    <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
                        La primera vez que vi un torno suizo en operación me quedé paralizado. La pieza avanzaba sola, siete herramientas atacaban en simultáneo y en segundos nacía un componente que en cualquier otro equipo habría requerido tres operaciones distintas. Hoy te cuento todo lo que sé sobre esta tecnología.
                    </p>
                    <div className="mt-8 flex gap-4 text-sm text-gray-600 font-mono">
                        <span>Por el equipo de Aqua Metal</span><span>·</span>
                        <time dateTime="2026-02-21">21 de febrero, 2026</time>
                    </div>
                </div>
            </div>

            <article className="container mx-auto px-6 py-16 max-w-4xl"><h2 className="text-3xl font-bold font-display text-white mt-12 mb-6">¿Qué distingue al torno suizo de un torno CNC convencional?</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    En un torno convencional, el material está sujetado en un extremo y las herramientas trabajan sobre él. Si la pieza es larga y delgada, se crea deflexión: el material se flexiona bajo la presión de corte, arruinando la tolerancia dimensional.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                    El torno suizo resuelve esto con una idea elegante: guía el material a través de una <strong className="text-white">boquilla</strong> ubicada justo donde están las herramientas. El punto de corte siempre está cerca del soporte. Sin duda, este principio es lo que hace especial al suizo: no importa qué tan larga sea la pieza, nunca hay deflexión.
                </p>

                <div className="my-10 p-8 rounded-2xl bg-accent-primary/10 border border-accent-primary/20">
                    <p className="text-xl font-bold text-white font-display">
                        En mi opinión, el principio del maquinado suizo es uno de los más elegantes en ingeniería de manufactura: <span className="text-accent-primary">soportar donde se corta, no donde se sujeta.</span>
                    </p>
                </div>

                <h2 className="text-3xl font-bold font-display text-white mt-12 mb-6">Cómo funciona el ciclo paso a paso</h2>
                <ol className="space-y-4 mb-8">
                    {[
                        { n: "01", title: "Alimentación de la barra", desc: "Una barra de material —aluminio, acero, latón, titanio— se carga en el cabezal principal. El equipo la alimenta de forma controlada hacia la zona de corte." },
                        { n: "02", title: "Guía en la boquilla", desc: "La barra pasa a través de la guía, que la sostiene con tolerancia muy ajustada. Aquí se elimina la deflexión: el soporte y el corte ocurren en el mismo punto." },
                        { n: "03", title: "Operaciones simultáneas", desc: "Múltiples herramientas trabajan al mismo tiempo: un inserto tornea el exterior, una fresa hace una ranura, una broca perfora. Todo en un solo ciclo. Creo que esto es lo que más impresiona a quien lo ve por primera vez." },
                        { n: "04", title: "Contracabezal y operaciones traseras", desc: "El contracabezal agarra la pieza, la separa de la barra y permite trabajar la parte trasera sin resujetarla. Operación completa en un ciclo." },
                        { n: "05", title: "Corte y reinicio", desc: "Un inserto de tronzado separa la pieza terminada. El ciclo se reinicia inmediatamente. Los tiempos muertos son mínimos." },
                    ].map((step) => (
                        <li key={step.n} className="flex gap-6 items-start">
                            <span className="shrink-0 w-10 h-10 rounded-full bg-accent-primary/20 border border-accent-primary/40 flex items-center justify-center text-accent-primary font-bold font-mono text-sm">{step.n}</span>
                            <div>
                                <strong className="text-white block mb-1">{step.title}</strong>
                                <p className="text-gray-400 text-base">{step.desc}</p>
                            </div>
                        </li>
                    ))}
                </ol><h2 className="text-3xl font-bold font-display text-white mt-12 mb-6">¿Para qué industrias recomiendo el maquinado suizo?</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    No exagero cuando digo que hay piezas que simplemente no pueden fabricarse de otra manera con la misma eficiencia. Me refiero a componentes que combinan tres características: <strong className="text-white">diámetro pequeño, longitud importante y geometría compleja</strong>.
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                    {[
                        { industry: "Industria Médica", desc: "Tornillos de titanio, agujas de biopsia, cánulas, implantes. La tolerancia exigida (±0.003mm en algunos casos) hace del suizo la única opción práctica.", icon: "🏥" },
                        { industry: "Aeroespacial", desc: "Conectores de señal, pines de precisión, actuadores miniatura. El sector aeroespacial no negocia tolerancias: las especifica y las audita.", icon: "✈️" },
                        { industry: "Automotriz", desc: "Inyectores de combustible, válvulas de distribución, pasadores de suspensión de alta precisión. Piezas donde la repetibilidad no es negociable.", icon: "🚗" },
                        { industry: "Electrónica", desc: "Pines de conectores, terminales, piezas de sensores. A veces la pieza mide 2mm de diámetro y tiene cinco geometrías distintas. Para eso nació el suizo.", icon: "⚡" },
                    ].map((item) => (
                        <div key={item.industry} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-accent-primary/30 transition-colors">
                            <span className="text-3xl mb-4 block">{item.icon}</span>
                            <h3 className="text-lg font-bold text-white mb-2">{item.industry}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-3xl font-bold font-display text-white mt-12 mb-6">Siendo honesto: los retos del maquinado suizo</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Honestamente, el maquinado suizo no es para todos los proyectos. La inversión en programación inicial es mayor. El setup tarda más que en un torno convencional. Y creo que dominar el suizo toma años de práctica, no semanas —hay una curva de aprendizaje real que no conviene minimizar.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Por eso, cuando un cliente me trae una pieza que técnicamente "cabría" en el suizo pero cuya geometría es simple, a veces recomiendo el torno convencional. En mi opinión, el objetivo nunca es impresionar con la tecnología: es darte el costo por pieza más competitivo sin comprometer la calidad.
                </p><h2 className="text-3xl font-bold font-display text-white mt-12 mb-8">Preguntas Frecuentes</h2>
                <div className="space-y-5">
                    {faqs.map((faq) => (
                        <div key={faq.q} className="border border-white/10 rounded-xl p-6">
                            <h3 className="text-white font-bold mb-3">{faq.q}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-10 rounded-3xl bg-gradient-to-br from-accent-primary/20 via-accent-primary/5 to-transparent border border-accent-primary/20 text-center">
                    <h2 className="text-3xl font-display font-bold text-white mb-4">¿Tienes una pieza que necesita maquinado suizo?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Evaluamos cada proyecto para recomendar el proceso con mejor relación calidad-precio. Cotización en 24 horas.</p>
                    <Link href="/contacto" className="inline-flex items-center gap-2 bg-accent-primary text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(255,195,0,0.3)]">Solicitar Cotización →</Link>
                </div>

                <div className="mt-16">
                    <h2 className="text-2xl font-bold font-display text-white mb-8">Artículos relacionados</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { slug: "torneado-vs-fresado-cnc", title: "Torneado CNC vs Fresado CNC: ¿Cuál Necesitas?", cat: "Procesos" },
                            { slug: "tolerancias-maquinado-cnc", title: "Tolerancias de Maquinado CNC: Tabla ISO", cat: "Calidad" },
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
