import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import AlcoholBanner from "@/components/alcohol-banner"

const timeline = [
  {
    period: "Siglo X",
    title: "Los Orígenes Monásticos",
    text: "Los primeros registros escritos de la sidra asturiana aparecen en documentos de monasterios benedictinos. Los monjes fermentaban el zumo de manzana autóctona como alternativa al vino, difícil de producir en el húmedo norte de España. La sidra era parte de la dieta cotidiana monástica y se repartía también entre los campesinos.",
  },
  {
    period: "Siglo XII–XIV",
    title: "La Bebida del Pueblo",
    text: "Con la expansión de los manzanales en Asturias y el País Vasco, la sidra se convierte en la bebida del pueblo llano. Los señores feudales cobran impuestos en forma de sidra. Los registros históricos de la Catedral de Oviedo mencionan la sidra como moneda de cambio habitual.",
  },
  {
    period: "Siglo XVI–XVII",
    title: "Los Conquistadores y la Sidra",
    text: "Los marineros y conquistadores asturianos llevaron la manzana sidrera a América. La sidra fue el compañero de viaje de muchos barcos españoles que cruzaban el Atlántico. En este período se consolida el cultivo de más de cien variedades autóctonas de manzana asturiana.",
  },
  {
    period: "Siglo XIX",
    title: "La Industrialización",
    text: "Las primeras llagaras (llangas en asturiano, lagares en castellano) industriales aparecen en Asturias. El proceso de fermentación se estandariza. Las sidrerías (chigres) proliferan en todo el norte de España. La sidra pasa de bebida doméstica a producto comercial de primer orden.",
  },
  {
    period: "Siglo XX",
    title: "La Denominación de Origen",
    text: "En 1999 se establece la Denominación de Origen Protegida Sidra de Asturias, garantizando la calidad y el origen de la sidra asturiana. En 2002 nace oficialmente la categoría Sidra de Nueva Expresión, abriendo el camino a los mercados internacionales.",
  },
  {
    period: "Hoy",
    title: "Patrimonio Cultural",
    text: "Asturias produce el 80% de toda la sidra española y exporta a más de 40 países. El escanciado es Bien de Interés Cultural desde 2017. Cada año, el Festival de la Sidra de Nava reúne a miles de amantes del espumoso dorado bajo el cielo verde del Principado.",
  },
]

const facts = [
  { number: "80%", label: "de la sidra española se produce en Asturias" },
  { number: "100+", label: "variedades autóctonas de manzana asturiana" },
  { number: "40+", label: "países importan sidra asturiana" },
  { number: "Siglo X", label: "primeros registros escritos de sidra en España" },
]

export default function HistoriaPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <AlcoholBanner />

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/history-bg.jpg"
            alt="Bodega histórica de sidra asturiana"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-gold font-sans text-xs tracking-[0.5em] uppercase mb-4">Desde el año 1000</p>
          <h1 className="font-serif text-5xl md:text-7xl font-black text-parchment text-balance mb-6">
            Historia de la<br />
            <span className="text-crimson-light">Sidra Española</span>
          </h1>
          <div className="ornament-divider max-w-xs mx-auto mb-8">
            <span className="text-gold text-xl">✦</span>
          </div>
          <p className="text-parchment/80 text-lg md:text-xl font-sans leading-relaxed max-w-2xl mx-auto text-pretty">
            Más de mil años de tradición ininterrumpida. La historia de la sidra española es también
            la historia del alma del norte de España.
          </p>
        </div>
      </section>

      {/* Key facts */}
      <section className="py-16 px-6 bg-charcoal-mid">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {facts.map((fact) => (
            <div key={fact.label} className="text-center corrida-border p-6">
              <div className="font-serif text-3xl md:text-4xl font-black text-gold mb-2">{fact.number}</div>
              <p className="text-muted-foreground font-sans text-xs leading-relaxed">{fact.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="ornament-divider mb-10">
          <span className="text-gold text-xl">✦</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-parchment mb-6">
              El Norte Verde de España
            </h2>
            <p className="text-parchment/80 font-sans leading-relaxed mb-4">
              El clima atlántico de Asturias y el País Vasco, con sus lluvias generosas y temperaturas suaves, 
              crea las condiciones ideales para el cultivo del manzanal. Lo que en el sur de España es tierra 
              de viña, en el norte es tierra de manzana.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Más de cien variedades autóctonas de manzana — algunas con nombres tan evocadores como 
              &ldquo;Regona&rdquo;, &ldquo;Verdialona&rdquo; o &ldquo;Blanquina&rdquo; — crecen únicamente en los valles 
              asturianos, dando a la sidra local un carácter único e irrepetible.
            </p>
          </div>
          <div className="relative h-72 overflow-hidden corrida-border">
            <Image
              src="/images/sidra-natural.jpg"
              alt="Escanciado tradicional de sidra asturiana"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl font-bold text-parchment text-balance mb-4">
            Cronología de la Sidra
          </h2>
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="text-gold text-xl">✦</span>
          </div>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gold/20 hidden md:block" />

          <div className="flex flex-col gap-12">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-8 items-start">
                {/* Period marker */}
                <div className="hidden md:flex flex-col items-center shrink-0 w-16">
                  <div className="w-4 h-4 rounded-full bg-crimson-light border-2 border-gold mt-1 z-10" />
                </div>
                <div className="flex-1 corrida-border p-6 hover:border-gold/50 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-gold font-sans text-xs tracking-widest uppercase">{item.period}</span>
                    <div className="h-px flex-1 bg-gold/20" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-parchment mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-sans leading-relaxed text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Escanciado section */}
      <section className="py-20 px-6 bg-charcoal-mid">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold font-sans text-xs tracking-[0.5em] uppercase mb-3">El Ritual</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-parchment text-balance mb-4">
              El Arte del Escanciado
            </h2>
            <div className="ornament-divider max-w-xs mx-auto">
              <span className="text-gold text-xl">✦</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 corrida-border overflow-hidden">
              <Image
                src="/images/sidra-espumosa.jpg"
                alt="El ritual del escanciado"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-charcoal/30" />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-parchment/80 font-sans leading-relaxed">
                El <strong className="text-gold">escanciado</strong> es mucho más que una forma de servir sidra: 
                es un rito de identidad cultural. El escanciador levanta la botella por encima de la cabeza con 
                el brazo extendido, y el vaso lo sostiene a la altura de la cadera, con el brazo también extendido. 
                La sidra cae en una fina línea cristalina.
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed text-sm">
                El impacto de la sidra contra el vaso la airea, libera sus aromas y crea una espuma 
                característica. Se sirven unos 200 ml de golpe — el &ldquo;culín&rdquo; — que deben beberse 
                inmediatamente antes de que la espuma desaparezca.
              </p>
              <div className="corrida-border p-4">
                <p className="text-gold font-sans text-xs tracking-widest uppercase mb-2">El Dicho Asturiano</p>
                <blockquote className="font-serif text-lg text-parchment italic">
                  &ldquo;La sidra nun ye pa beber, ye pa tomar.&rdquo;
                </blockquote>
                <p className="text-muted-foreground text-xs font-sans mt-1">
                  (La sidra no es para beber, es para tomar.)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="ornament-divider max-w-xs mx-auto mb-8">
            <span className="text-gold text-xl">✦</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-parchment mb-6 text-balance">
            Descubre todos los tipos de sidra
          </h2>
          <Link
            href="/catalogo"
            className="inline-block px-10 py-4 bg-crimson-light hover:bg-crimson text-white font-sans text-xs tracking-[0.4em] uppercase transition-colors"
          >
            Ver Catálogo
          </Link>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </main>
  )
}
