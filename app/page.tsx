import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import AlcoholBanner from "@/components/alcohol-banner"


const sidraPreview = [
  {
    name: "Sidra Natural",
    subtitle: "La auténtica",
    strength: "4–6%",
    image: "/images/sidra-natural.jpg",
    desc: "Fermentación natural sin azúcares añadidos. Seca, refrescante, con vibrante acidez de manzana.",
    href: "/catalogo",
    featured: true,
  },
  {
    name: "Sidra Espumosa",
    subtitle: "La festiva",
    strength: "5–7%",
    image: "/images/sidra-espumosa.jpg",
    desc: "Burbujeante y elegante. Popular entre jóvenes y turistas, ligeramente más dulce.",
    href: "/catalogo",
    featured: false,
  },
  {
    name: "Sidra Nueva Expresión",
    subtitle: "La moderna",
    strength: "5–6%",
    image: "/images/sidra-nueva.jpg",
    desc: "Estilo contemporáneo, filtrada y suave. Mantiene el carácter de manzana asturiana.",
    href: "/catalogo",
    featured: false,
  },
]

const beers = [
  { name: "Cerveza Lager", strength: "4,5–5,5%", desc: "Ligera, limpia e increíblemente refrescante. El hit absoluto español." },
  { name: "Cerveza Especial", strength: "5–6%", desc: "Lager más rico y con carácter malteado. La elección de los verdaderos entendidos." },
  { name: "Cerveza Sin Alcohol", strength: "0,0–1%", desc: "Enormemente popular en España, especialmente en verano y al volante." },
  { name: "Cerveza Artesanal", strength: "hasta 8%", desc: "El movimiento craft florece: IPAs frutales, ales ligeras y mucho más." },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Plaza de toros — arena de corrida española"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-charcoal/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Ornament top */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gold/60" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase font-sans">Spanishsidrafan.com</span>
            <div className="h-px w-16 bg-gold/60" />
          </div>

          <p className="text-gold font-sans text-xs tracking-[0.5em] uppercase mb-4">Asturias · País Vasco · España</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-parchment leading-none tracking-wide text-balance mb-6">
            El Alma de la{" "}
            <span className="text-crimson-light">Sidra</span>{" "}
            Española
          </h1>
          <p className="text-parchment/80 text-lg md:text-xl font-sans leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
            Descubre la bebida que lleva siglos nutriendo el espíritu del norte de España. Desde los manzanares
            asturianos hasta las sidrerías del País Vasco — tradición, pasión y el ritual del <em className="text-gold">escanciado</em>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/catalogo"
              className="px-8 py-4 bg-crimson-light hover:bg-crimson text-white font-sans text-xs tracking-[0.3em] uppercase transition-colors duration-200"
            >
              Ver Sidra
            </Link>
            <Link
              href="/historia"
              className="px-8 py-4 border border-gold/50 hover:border-gold text-gold hover:text-gold-light font-sans text-xs tracking-[0.3em] uppercase transition-colors duration-200"
            >
              Conocer la Historia
            </Link>
          </div>

          {/* Scroll arrow */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <div className="h-8 w-px bg-gold/50" />
            <div className="h-2 w-2 border-b border-r border-gold/50 rotate-45" />
          </div>
        </div>
      </section>

      <AlcoholBanner size="large" />

      {/* SIDRA TYPES PREVIEW — strongest featured */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold font-sans text-xs tracking-[0.5em] uppercase mb-3">Selección</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-parchment text-balance mb-4">
            Los Tipos de Sidra
          </h2>
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="text-gold text-lg">✦</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured strongest sidra — larger card */}
          {sidraPreview.map((sidra, i) => (
            <Link
              key={sidra.name}
              href={sidra.href}
              className={`group relative overflow-hidden corrida-border hover:border-gold/70 transition-all duration-300 ${
                i === 0 ? "lg:col-span-1 lg:row-span-1" : ""
              }`}
            >
              <div className="relative overflow-hidden h-96">
                <Image
                  src={sidra.image}
                  alt={sidra.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />

                {i === 0 && (
                  <div className="absolute top-4 left-4 bg-crimson-light px-3 py-1">
                    <span className="text-white font-sans text-xs tracking-widest uppercase">La Más Fuerte</span>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-gold font-sans text-xs tracking-widest uppercase mb-1">{sidra.subtitle}</p>
                  <h3 className="font-serif text-2xl font-bold text-parchment mb-2">{sidra.name}</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-sans text-crimson-light tracking-wide uppercase">Graduación:</span>
                    <span className="text-gold font-serif font-bold text-sm">{sidra.strength} vol.</span>
                  </div>
                  <p className="text-parchment/70 text-sm font-sans leading-relaxed">{sidra.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/catalogo"
            className="inline-block px-10 py-4 border border-gold/50 hover:border-gold text-gold hover:text-gold-light font-sans text-xs tracking-[0.4em] uppercase transition-colors duration-200"
          >
            Ver Catálogo Completo
          </Link>
        </div>
      </section>

      {/* HISTORY PREVIEW */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/history-bg.jpg"
            alt="Bodega histórica de sidra asturiana"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold font-sans text-xs tracking-[0.5em] uppercase mb-4">Desde el siglo X</p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-parchment text-balance mb-6">
            Una Historia Milenaria
          </h2>
          <div className="ornament-divider max-w-xs mx-auto mb-8">
            <span className="text-gold text-lg">✦</span>
          </div>
          <p className="text-parchment/80 text-lg font-sans leading-relaxed mb-4">
            Los monjes asturianos de la Edad Media ya fermentaban manzanas en sus monasterios. Lo que empezó
            como alimento cotidiano se convirtió en símbolo de identidad regional y orgullo nacional.
          </p>
          <p className="text-parchment/60 text-base font-sans leading-relaxed mb-10">
            Asturias produce el <strong className="text-gold">80% de toda la sidra española</strong> y cultiva más de 
            cien variedades autóctonas de manzana. El ritual del escanciado — verter desde lo alto — no es solo 
            espectáculo: airea la bebida y despierta sus aromas más profundos.
          </p>
          <Link
            href="/historia"
            className="inline-block px-10 py-4 bg-crimson-light hover:bg-crimson text-white font-sans text-xs tracking-[0.4em] uppercase transition-colors"
          >
            Descubrir la Historia Completa
          </Link>
        </div>
      </section>

      {/* CATALOG PREVIEW */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold font-sans text-xs tracking-[0.5em] uppercase mb-3">Nuestro</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-parchment text-balance mb-4">
            Catálogo de Sidras
          </h2>
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="text-gold text-lg">✦</span>
          </div>
        </div>

        <div className="relative overflow-hidden corrida-border">
          <Image
            src="/images/catalog-bg.jpg"
            alt="Colección de sidras españolas"
            width={1400}
            height={600}
            className="w-full h-72 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/50 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16 max-w-lg">
            <p className="text-gold font-sans text-xs tracking-[0.4em] uppercase mb-3">Tres estilos únicos</p>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-parchment mb-4 text-balance">
              Sidra Natural, Espumosa y Nueva Expresión
            </h3>
            <p className="text-parchment/70 font-sans text-sm leading-relaxed mb-6">
              Cada variedad con su historia, graduación, maridaje ideal y el secreto de sus aromas. 
              Guía completa para el amante de la sidra auténtica.
            </p>
            <Link
              href="/catalogo"
              className="inline-block px-8 py-3 bg-crimson-light hover:bg-crimson text-white font-sans text-xs tracking-[0.3em] uppercase transition-colors self-start"
            >
              Explorar Catálogo
            </Link>
          </div>
        </div>
      </section>

      {/* BEER SECTION */}
      <section className="py-24 px-6 bg-charcoal-mid">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold font-sans text-xs tracking-[0.5em] uppercase mb-3">También</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-parchment text-balance mb-4">
              Cerveza Española
            </h2>
            <div className="ornament-divider max-w-xs mx-auto mb-6">
              <span className="text-gold text-lg">✦</span>
            </div>
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto text-pretty">
              En la calurosa España, la cerveza es el acompañante inseparable de las tapas. 
              Desde lagers refrescantes hasta cervezas artesanales de alta graduación.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {beers.map((beer) => (
              <div key={beer.name} className="corrida-border p-6 hover:border-gold/60 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-px flex-1 bg-gold/20" />
                  <span className="mx-3 text-gold text-xs">✦</span>
                  <div className="h-px flex-1 bg-gold/20" />
                </div>
                <h3 className="font-serif text-xl font-bold text-parchment mb-2">{beer.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-sans text-crimson-light uppercase tracking-wide">Graduación:</span>
                  <span className="text-gold font-serif font-bold text-sm">{beer.strength} vol.</span>
                </div>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed">{beer.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/cerveza"
              className="inline-block px-10 py-4 border border-gold/50 hover:border-gold text-gold hover:text-gold-light font-sans text-xs tracking-[0.4em] uppercase transition-colors"
            >
              Descubrir la Cerveza Española
            </Link>
          </div>
        </div>
      </section>

      {/* ESCANCIADO RITUAL BANNER */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="ornament-divider mb-8">
            <span className="text-gold text-xl">✦</span>
          </div>
          <blockquote className="font-serif text-2xl md:text-3xl text-parchment font-medium leading-relaxed text-balance mb-6">
            &ldquo;El escanciado no es solo verter sidra. Es un ritual de bienvenida, un gesto de generosidad
            y el abrazo líquido del norte de España.&rdquo;
          </blockquote>
          <cite className="text-gold font-sans text-xs tracking-widest uppercase not-italic">
            — Tradición Asturiana
          </cite>
          <div className="ornament-divider mt-8">
            <span className="text-gold text-xl">✦</span>
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </main>
  )
}
