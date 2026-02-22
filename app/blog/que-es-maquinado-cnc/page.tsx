import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "¿Qué es el Maquinado CNC y Cómo Funciona? — Guía Completa",
    description:
        "El maquinado CNC es el proceso de fabricar piezas usando máquinas controladas por computadora. Te explico los tipos, ventajas, materiales y tolerancias desde nuestra experiencia en planta.",
    keywords: ["qué es maquinado CNC", "control numérico computarizado", "maquinado de precisión", "manufactura CNC México"],
    alternates: { canonical: "https://www.aqua-metal.com/blog/que-es-maquinado-cnc" },
    openGraph: {
        title: "¿Qué es el Maquinado CNC? Guía Completa | Aqua Metal",
        description: "Todo lo que necesitas saber sobre el maquinado CNC desde nuestra planta en México.",
        url: "https://www.aqua-metal.com/blog/que-es-maquinado-cnc",
    },
};

const faqs = [
    { q: "¿Qué es el maquinado CNC?", a: "El maquinado CNC (Control Numérico Computarizado) es un proceso donde herramientas de corte son controladas por computadora para fabricar piezas con alta precisión. Las instrucciones se programan en código G que la máquina ejecuta automáticamente." },
    { q: "¿Cuáles son los tipos de maquinado CNC?", a: "Torneado CNC, fresado CNC, tornos automáticos de levas y centros de maquinado multiejes. Cada proceso tiene ventajas según la geometría y el volumen requerido." },
    { q: "¿Qué tolerancias se logran con el maquinado CNC?", a: "Con equipos modernos alcanzamos ±0.005mm en torneado de precisión. Para producción estándar trabajamos en rangos de ±0.025mm." },
    { q: "¿Qué materiales se pueden maquinar con CNC?", a: "Aluminio, acero inoxidable, acero al carbón, cobre, latón, bronce y nylon. Cada material exige parámetros específicos que ajustamos con base en más de 20 años de experiencia." },
];

const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const articleSchema = {
    "@context": "https://schema.org", "@type": "TechArticle",
    headline: "¿Qué es el Maquinado CNC y Cómo Funciona?",
    author: { "@type": "Organization", name: "Aqua Metal", url: "https://www.aqua-metal.com" },
    publisher: { "@type": "Organization", name: "Aqua Metal" },
    datePublished: "2026-02-21", inLanguage: "es-MX",
    url: "https://www.aqua-metal.com/blog/que-es-maquinado-cnc",
};

export default function ArticleQueEsMaquinadoCNC() {
    return (
        <div className="bg-[#000814] min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

            <div className="relative py-24 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent" />
                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <Link href="/blog" className="text-sm text-gray-500 hover:text-accent-primary transition-colors font-mono mb-6 block">← Volver al Blog</Link>
                    <span className="text-accent-primary text-xs font-mono uppercase tracking-[0.3em] mb-4 block">Fundamentos · 8 min lectura</span>
                    <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 leading-tight">
                        ¿Qué es el Maquinado CNC y Cómo Funciona?
                    </h1>
                    <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
                        Después de más de dos décadas fabricando piezas metálicas, puedo decirte que pocas tecnologías han transformado la industria como el CNC. Te explico desde los fundamentos hasta los detalles que realmente importan cuando eliges un proveedor.
                    </p>
                    <div className="mt-8 flex gap-4 text-sm text-gray-600 font-mono">
                        <span>Por el equipo de Aqua Metal</span><span>·</span>
                        <time dateTime="2026-02-21">21 de febrero, 2026</time>
                    </div>
                </div>
            </div>

            <article className="container mx-auto px-6 py-16 max-w-4xl"><h2 className="text-3xl font-bold font-display text-white mt-12 mb-6">¿Qué significa CNC?</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    <strong className="text-white">CNC</strong> son las siglas de <em>Computer Numerical Control</em> —Control Numérico Computarizado en español. Cuando pienso en este término, recuerdo la diferencia que hay entre depender del pulso de un maquinista experimentado y confiar en un programa que ejecuta el mismo movimiento diez mil veces con variación menor a cinco micrómetros.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                    En mi opinión, la revolución del CNC no fue técnica sino conceptual: trasladó la habilidad de las manos del operador hacia la mente del programador. La precisión dejó de ser un talento individual y se convirtió en un proceso replicable.
                </p>

                <div className="my-10 p-8 rounded-2xl bg-accent-primary/10 border border-accent-primary/20">
                    <p className="text-2xl font-bold text-white font-display">
                        En nuestra planta alcanzamos tolerancias de <span className="text-accent-primary">±0.005mm</span> —el grosor de un cabello humano dividido en 14 partes.
                    </p>
                </div>

                <h2 className="text-3xl font-bold font-display text-white mt-12 mb-6">¿Cómo funciona el maquinado CNC paso a paso?</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Sin duda, entender el proceso completo te ayuda a ser un mejor cliente. Cuando recibes una cotización y sabes qué hay detrás de cada paso, puedes tomar mejores decisiones de diseño. Te lo cuento tal como lo vivimos en planta:
                </p>
                <ol className="space-y-4 mb-8">
                    {[
                        { n: "01", title: "Recepción y revisión DFM", desc: "Analizamos el diseño CAD y hacemos una revisión de fabricabilidad. Si encontramos algo que podría complicar la producción, lo comunicamos antes de arrancar —creo que este paso nos ha ahorrado años de retrabajo a nosotros y a nuestros clientes." },
                        { n: "02", title: "Programación CAM", desc: "Nuestros programadores generan las trayectorias de corte en código G. Este paso define la calidad superficial, los tiempos de ciclo y el desperdicio de material. Honestamente, es donde más tiempo invertimos." },
                        { n: "03", title: "Configuración de la máquina", desc: "Instalamos herramientas, sujetamos el material y cargamos el programa. Hacemos la primera pieza de prueba y la medimos antes de arrancar producción." },
                        { n: "04", title: "Producción automatizada", desc: "La máquina trabaja. Nuestros operadores monitorean parámetros de corte, desgaste de herramienta y temperatura. No es supervisión pasiva: es gestión activa del proceso." },
                        { n: "05", title: "Inspección ISO 9001", desc: "Medimos cada lote con micrómetros y calibres. La trazabilidad es total: si en seis meses necesitas reproducir una pieza exacta, podemos hacerlo." },
                    ].map((step) => (
                        <li key={step.n} className="flex gap-6 items-start">
                            <span className="shrink-0 w-10 h-10 rounded-full bg-accent-primary/20 border border-accent-primary/40 flex items-center justify-center text-accent-primary font-bold font-mono text-sm">{step.n}</span>
                            <div>
                                <strong className="text-white block mb-1">{step.title}</strong>
                                <p className="text-gray-400 text-base">{step.desc}</p>
                            </div>
                        </li>
                    ))}
                </ol><h2 className="text-3xl font-bold font-display text-white mt-12 mb-6">Los tipos de maquinado que usamos en Aqua Metal</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    No todos los procesos CNC son iguales. En mi opinión, elegir el proceso correcto es a veces más importante que la calidad del equipo mismo. Aquí están los que operamos diariamente:
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                    {[
                        { title: "Torneado CNC", desc: "La pieza gira y la herramienta avanza. Nuestro proceso estrella para ejes, bujes y tornillos. Sin duda el más rápido para geometrías cilíndricas.", spec: "1–60mm · ±0.005mm" },
                        { title: "Tornos Automáticos", desc: "Producción eficiente de piezas pequeñas con tornos de levas automáticos. Ideal para componentes de alta precisión y volúmenes masivos.", spec: "1–42mm · Alto volumen" },
                        { title: "Tornos Automáticos de Levas", desc: "Honestamente, cuando necesito millones de piezas sencillas al menor costo posible, estas máquinas no tienen competidor.", spec: "Hasta 42mm · Alto volumen" },
                        { title: "Centro de Maquinado CNC", desc: "La herramienta gira sobre múltiples ejes. Para piezas prismáticas con ranuras y cavidades que el torno no puede alcanzar.", spec: "Hasta 400×400mm" },
                    ].map((type) => (
                        <div key={type.title} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-accent-primary/30 transition-colors">
                            <h3 className="text-lg font-bold text-white mb-2 font-display">{type.title}</h3>
                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">{type.desc}</p>
                            <span className="text-xs font-mono text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full">{type.spec}</span>
                        </div>
                    ))}
                </div>

                <h2 className="text-3xl font-bold font-display text-white mt-12 mb-6">Materiales que procesamos cotidianamente</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Creo que el material define el carácter de una pieza. El aluminio perdona los errores de programación; el acero inoxidable 316L no. He aprendido esto más veces de las que quisiera admitir.
                </p>
                <div className="overflow-x-auto my-8">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="text-left text-gray-400 font-mono uppercase tracking-wider py-3 pr-6">Material</th>
                                <th className="text-left text-gray-400 font-mono uppercase tracking-wider py-3 pr-6">Maquinabilidad</th>
                                <th className="text-left text-gray-400 font-mono uppercase tracking-wider py-3">Aplicaciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[
                                ["Aluminio 6061", "Excelente", "Aeroespacial, automotriz, electrónica"],
                                ["Acero Inoxidable 316", "Moderada — exige paciencia", "Médico, marino, alimentario"],
                                ["Acero al Carbón 1045", "Buena", "Automotriz, maquinaria industrial"],
                                ["Latón / Cobre", "Muy buena", "Eléctrico, neumático, válvulas"],
                                ["Bronce", "Buena", "Rodamientos, bujes de alta carga"],
                                ["Nylon / Delrin", "Fácil — cuidado con el calor", "Prototipos, componentes ligeros"],
                            ].map(([mat, mac, app]) => (
                                <tr key={mat}>
                                    <td className="text-white font-semibold py-3 pr-6">{mat}</td>
                                    <td className="text-gray-400 py-3 pr-6">{mac}</td>
                                    <td className="text-gray-500 py-3">{app}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div><h2 className="text-3xl font-bold font-display text-white mt-12 mb-6">¿Por qué el CNC domina la manufactura moderna?</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Sin duda, la respuesta más honesta es que el CNC combina precisión con escala de una manera que ningún proceso manual puede igualar. Pero hay algo más profundo: el CNC democratizó la confianza. Antes, confiar en una pieza de precisión dependía de encontrar al maquinista correcto. Hoy, confías en el proceso.
                </p>
                <div className="grid md:grid-cols-3 gap-4 my-8">
                    {[
                        { icon: "🎯", title: "Precisión extrema", desc: "±0.005mm reproducibles en cada pieza del lote, no solo en la primera." },
                        { icon: "⚡", title: "Alta velocidad", desc: "Producimos 5,000 unidades por lote. Los compromisos de entrega se cumplen." },
                        { icon: "🔄", title: "Repetibilidad total", desc: "La pieza 1 y la 10,000 son idénticas. Eso es lo que el control de calidad realmente necesita." },
                        { icon: "🌙", title: "Operación continua", desc: "Turnos extendidos. El tiempo no se detiene, y nuestros compromisos de entrega tampoco." },
                        { icon: "🔧", title: "Geometrías complejas", desc: "Perfiles interiores, roscas finas, transiciones tangentes: el CNC los ejecuta sin titubear." },
                        { icon: "📊", title: "Trazabilidad ISO 9001", desc: "Registramos cada parámetro. Si en seis meses necesitas una pieza idéntica, la reproducimos exacta." },
                    ].map((v) => (
                        <div key={v.title} className="p-5 rounded-xl bg-white/5 border border-white/10">
                            <span className="text-2xl mb-3 block">{v.icon}</span>
                            <h3 className="text-white font-bold mb-2 text-sm">{v.title}</h3>
                            <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                        </div>
                    ))}
                </div>

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
                    <h2 className="text-3xl font-display font-bold text-white mb-4">¿Tienes un proyecto de maquinado CNC?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Envíanos tus planos o especificaciones. Te respondemos con una cotización en menos de 24 horas, sin compromiso.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contacto" className="inline-flex items-center gap-2 bg-accent-primary text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(255,195,0,0.3)]">Solicitar Cotización Gratuita →</Link>
                        <Link href="/procesos" className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:border-white/60 transition-all duration-300">Ver Nuestros Procesos</Link>
                    </div>
                </div>

                <div className="mt-16">
                    <h2 className="text-2xl font-bold font-display text-white mb-8">Artículos relacionados</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { slug: "torneado-vs-fresado-cnc", title: "Torneado CNC vs Fresado CNC: ¿Cuál Necesitas?", cat: "Procesos" },
                            { slug: "tolerancias-maquinado-cnc", title: "Tolerancias de Maquinado CNC", cat: "Calidad" },
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
