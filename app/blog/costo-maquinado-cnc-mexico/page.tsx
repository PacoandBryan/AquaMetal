import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "¿Cuánto Cuesta el Maquinado CNC en México? Guía de Precios 2026",
    description:
        "Los factores reales que determinan el costo de una pieza maquinada en México: material, complejidad, volumen, tolerancias y acabado. Aprende a leer una cotización y obtener el mejor valor.",
    keywords: ["costo maquinado CNC México", "precio torneado CNC", "cotización maquinado industrial", "cuánto cuesta maquinado CNC"],
    alternates: { canonical: "https://www.aqua-metal.com/blog/costo-maquinado-cnc-mexico" },
    openGraph: {
        title: "¿Cuánto Cuesta el Maquinado CNC en México? | Aqua Metal Blog",
        description: "Los factores reales del precio del maquinado CNC, explicados desde adentro por un fabricante.",
        url: "https://www.aqua-metal.com/blog/costo-maquinado-cnc-mexico",
    },
};

const faqs = [
    { q: "¿Cuánto cuesta una pieza maquinada en México?", a: "El precio varía enormemente según el proceso, material, volumen y complejidad. Una pieza simple en aluminio puede costar desde $15–$50 MXN por unidad en producción en serie. Piezas complejas en materiales difíciles pueden superar $500 MXN por unidad. La única forma de saber el precio real es con un plano y una cotización formal." },
    { q: "¿Qué factores más influyen en el costo del maquinado CNC?", a: "El orden de impacto típico es: 1) Volumen (más piezas = menor costo unitario), 2) Complejidad geométrica, 3) Material, 4) Tolerancias requeridas, 5) Acabado superficial. El volumen es casi siempre el mayor palanca de costo." },
    { q: "¿Por qué dos proveedores pueden dar precios tan diferentes?", a: "Diferencias en equipos (amortización), mano de obra, overheads, enfoque de negocio (nicho vs. commodities) y márgenes. Un precio mucho más bajo no siempre es malo, pero sí vale la pena investigar qué se está sacrificando." },
    { q: "¿Cómo puedo reducir el costo de maquinado de mis piezas?", a: "Las tres palancas más efectivas son: (1) aumentar el volumen por orden, (2) revisar el diseño para eliminar operaciones innecesarias (DFM), y (3) ajustar las tolerancias solo donde la función lo exige. Trabajar esto con el proveedor antes de confirmar el diseño final puede reducir costos significativamente." },
];

const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function ArticleCostoMaquinadoCNCMexico() {
    return (
        <div className="bg-[#000814] min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="relative py-24 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent" />
                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <Link href="/blog" className="text-sm text-gray-500 hover:text-accent-primary transition-colors font-mono mb-6 block">← Volver al Blog</Link>
                    <span className="text-accent-primary text-xs font-mono uppercase tracking-[0.3em] mb-4 block">Industria · 9 min lectura</span>
                    <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 leading-tight">
                        ¿Cuánto Cuesta el Maquinado CNC en México?
                    </h1>
                    <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
                        Esta es la pregunta que más intentan responder los clientes buscando en Google, y honestamente entiendo por qué: nadie quiere cotizar a ciegas. El problema es que la respuesta genérica no te sirve. Te voy a explicar los factores reales que mueven el precio, desde adentro.
                    </p>
                    <div className="mt-8 flex gap-4 text-sm text-gray-600 font-mono">
                        <span>Por el equipo de Aqua Metal</span><span>·</span>
                        <time dateTime="2026-02-21">21 de febrero, 2026</time>
                    </div>
                </div>
            </div>

            <article className="container mx-auto px-6 py-16 max-w-4xl"><h2 className="text-3xl font-bold font-display text-white mt-12 mb-6">La verdad sobre los precios de maquinado CNC</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Voy a ser completamente honesto: no existe un precio promedio de maquinado CNC que te ayude a presupuestar. La pieza más sencilla que fabricamos y la más compleja pueden diferir en precio por un factor de 50 o más, incluso si las dos pesan igual y usan el mismo material.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                    En mi opinión, la mejor inversión que puede hacer un comprador es entender qué mueve el precio, no buscar una tabla de referencia genérica. Con ese entendimiento, puedes influir activamente en el costo desde el diseño —y eso vale mucho dinero.
                </p>

                <div className="my-10 p-8 rounded-2xl bg-accent-primary/10 border border-accent-primary/20">
                    <p className="text-xl font-bold text-white font-display mb-2">El dato que más me sorprende compartir:</p>
                    <p className="text-gray-300">En más de 20 años de experiencia, hemos reducido el costo por pieza de clientes en un 30–50% simplemente revisando el diseño antes de arrancar producción —sin cambiar el material ni el proceso.</p>
                </div>

                <h2 className="text-3xl font-bold font-display text-white mt-12 mb-6">Los 6 factores que determinan el precio</h2>
                <div className="space-y-6 my-8">
                    {[
                        {
                            n: "01", title: "Volumen: el factor más poderoso",
                            desc: "Sin duda, el volumen es el palanca de precio más potente en maquinado CNC. El costo de setup (preparar la máquina, cargar el programa, hacer la primera pieza de prueba) es fijo. Ese costo se divide entre el número de piezas. Si hago 10 piezas, el setup vale 10× más por unidad que si hago 10,000. Un cliente que me pide 50 piezas puede llegar a pagar 5–8 veces más por unidad que uno que me pide 5,000 de la misma pieza.",
                            highlight: "Estrategia: consolida órdenes. Dos órdenes de 500 cuestan más que una orden de 1,000."
                        },
                        {
                            n: "02", title: "Complejidad geométrica",
                            desc: "Una pieza simple —un cilindro con un agujero central— puede maquinarse en 30 segundos. Una pieza con 12 geometrías distintas, ranuras, roscas internas y externas, y transiciones tangentes puede tomar 8 minutos. El tiempo de máquina es dinero directo. Y honestamente, muchas veces la complejidad adicional no viene del cliente: viene de un diseño que no fue pensado para fabricarse.",
                            highlight: "Estrategia: cada operación adicional tiene un costo. Pregúntate si cada característica geométrica tiene una función real."
                        },
                        {
                            n: "03", title: "Material",
                            desc: "El aluminio 6061 es el material más económico de maquinar: es blando, corta rápido, no desgasta herramientas. El acero inoxidable 316L es 3–5× más caro de maquinar porque exige herramientas premium, velocidades más bajas y enfriamiento constante. El costo del material en sí también importa, pero creo que muchos subestiman el impacto en el tiempo de ciclo.",
                            highlight: null
                        },
                        {
                            n: "04", title: "Tolerancias requeridas",
                            desc: "Una pieza en tolerancia estándar (±0.025mm) puede producirse a alta velocidad con herramientas convencionales. Una pieza en tolerancia especial (±0.005mm) puede requerir velocidades menores, herramientas más finas, más mediciones durante el proceso y mayor porcentaje de inspección al final. En mi experiencia, pasar de tolerancia estándar a fina puede aumentar el costo por pieza entre un 30% y un 70%.",
                            highlight: "Estrategia: tolera solo donde la función lo exige. El artículo sobre tolerancias en nuestro blog te ayuda a entender cuándo es necesario."
                        },
                        {
                            n: "05", title: "Acabado superficial",
                            desc: "El acabado de mecanizado estándar (Ra 3.2µm) sale directo de la máquina. Si necesitas Ra 0.8µm o menor, agrega una operación de rectificado o pulido que tiene su propio costo de setup y ciclo. Si además el cliente necesita un acabado anodizado, galvanizado o fosfatado, eso implica un proveedor externo con su propio lead time y costo.",
                            highlight: null
                        },
                        {
                            n: "06", title: "Lead time",
                            desc: "Honestamente, este es el factor que más varía entre proveedores sin que el cliente se dé cuenta. Un lead time urgente puede costar un 20–40% adicional porque implica interrumpir programas de producción ya planificados, hacer horas extra o usar equipos fuera de su turno normal.",
                            highlight: "Estrategia: planificar con anticipación es una de las formas más fáciles de ahorrar en maquinado."
                        },
                    ].map((item) => (
                        <div key={item.n} className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <div className="flex items-start gap-4 mb-3">
                                <span className="shrink-0 w-10 h-10 rounded-full bg-accent-primary/20 border border-accent-primary/40 flex items-center justify-center text-accent-primary font-bold font-mono text-sm">{item.n}</span>
                                <h3 className="text-white font-bold text-lg font-display pt-1">{item.title}</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-3">{item.desc}</p>
                            {item.highlight && (
                                <p className="text-accent-primary text-xs font-mono border-l-2 border-accent-primary/40 pl-4">{item.highlight}</p>
                            )}
                        </div>
                    ))}
                </div><h2 className="text-3xl font-bold font-display text-white mt-12 mb-6">¿Cómo leer una cotización de maquinado?</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Cuando recibo una cotización de un proveedor (sí, a veces también compramos servicios), lo primero que reviso es si el precio por pieza baja con el volumen y en qué proporción. Una curva de volumen-precio te dice mucho sobre cómo trabaja el proveedor.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Lo segundo que reviso: ¿el proveedor especifica exactamente qué tolerancias está cotizando? Una cotización que no menciona tolerancias es ambigua por diseño —y esa ambigüedad termina costando cara cuando llegan las primeras piezas.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                    En mi opinión, un proveedor que hace preguntas antes de cotizar es mejor que uno que manda precio en 10 minutos sin revisar el plano. Las preguntas muestran que entendieron el proyecto; la rapidez sin preguntas generalmente significa que cotizaron algo genérico.
                </p>

                <h2 className="text-3xl font-bold font-display text-white mt-12 mb-6">Las 3 estrategias que más reducen el costo</h2>
                <div className="grid md:grid-cols-3 gap-5 my-8">
                    {[
                        { icon: "📦", title: "Consolida volumen", desc: "Ordena más piezas por lote. El costo de setup se reparte más y el precio unitario baja significativamente. En muchos casos, duplicar el volumen reduce el precio por pieza un 25–40%." },
                        { icon: "📐", title: "Revisa el diseño (DFM)", desc: "Antes de congelar el diseño, pide una revisión de fabricabilidad. En Aqua Metal la hacemos sin costo. Eliminar una característica geométrica innecesaria puede reducir el ciclo de maquinado a la mitad." },
                        { icon: "🎯", title: "Ajusta las tolerancias", desc: "Especifica tolerancias estrictas solo donde la función lo requiere. En una pieza promedio, sin duda el 70–80% de las cotas puede estar en tolerancia estándar sin afectar el desempeño." },
                    ].map((s) => (
                        <div key={s.title} className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
                            <span className="text-3xl mb-4 block">{s.icon}</span>
                            <h3 className="text-white font-bold mb-3">{s.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div><h2 className="text-3xl font-bold font-display text-white mt-12 mb-8">Preguntas Frecuentes</h2>
                <div className="space-y-5">
                    {faqs.map((faq) => (
                        <div key={faq.q} className="border border-white/10 rounded-xl p-6">
                            <h3 className="text-white font-bold mb-3">{faq.q}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-10 rounded-3xl bg-gradient-to-br from-accent-primary/20 via-accent-primary/5 to-transparent border border-accent-primary/20 text-center">
                    <h2 className="text-3xl font-display font-bold text-white mb-4">¿Listo para cotizar tu proyecto?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Mándanos tus planos. Revisamos el diseño, te recomendamos optimizaciones y te enviamos una cotización detallada en menos de 24 horas —sin compromiso.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contacto" className="inline-flex items-center gap-2 bg-accent-primary text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(255,195,0,0.3)]">
                            Solicitar Cotización Gratuita →
                        </Link>
                        <Link href="/procesos" className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:border-white/60 transition-all duration-300">
                            Ver Nuestros Procesos
                        </Link>
                    </div>
                </div>

                <div className="mt-16">
                    <h2 className="text-2xl font-bold font-display text-white mb-8">Artículos relacionados</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { slug: "tolerancias-maquinado-cnc", title: "Tolerancias de Maquinado CNC: Tabla ISO", cat: "Calidad" },
                            { slug: "que-es-maquinado-cnc", title: "¿Qué es el Maquinado CNC y Cómo Funciona?", cat: "Fundamentos" },
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
