import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import AlcoholBanner from "@/components/alcohol-banner"
import { IMAGES } from "@/lib/media"

const beers = [
  {
    name: "Cerveza Lager",
    subtitle: "El Hit Español",
    image: IMAGES.beer.lager,
    strength: "4,5–5,5",
    strengthNum: 5.5,
    region: "Todo el país",
    color: "Dorado pálido",
    description:
      "La Cerveza Lager es la reina indiscutible de la escena cervecera española. Ligera, limpia y con una carbonatación perfecta, es el acompañante inseparable de las tapas en cualquier bar del país. Mahou, Estrella Damm, San Miguel y Cruzcampo son sus representantes más conocidos.",
    taste: "Sabor neutro y suave con un ligero amargor de lúpulo. Muy refrescante, ideal para el calor español.",
    pairing: "Patatas bravas, jamón ibérico, gambas al ajillo, anchoas.",
    serve: "En vaso cónico de 200–300 ml (caña) bien fría a 4–6°C.",
    alcNote: "Contenido de alcohol: 4,5–5,5% vol. Beber con moderación. Prohibida la venta a menores de 18 años.",
  },
  {
    name: "Cerveza Especial",
    subtitle: "Para el Entendido",
    image: IMAGES.beer.especial,
    strength: "5–6",
    strengthNum: 6,
    region: "Toda España",
    color: "Dorado ámbar",
    description:
      "La Cerveza Especial es la versión premium de la Lager española. Más rica en malta, con mayor cuerpo y un carácter más complejo. Nombres como Mahou 5 Estrellas, Estrella Damm Edición Especial o Alhambra Especial son iconos del mercado nacional.",
    taste: "Malteado pronunciado, cuerpo redondo, amargor elegante. Notas de pan tostado y cereales.",
    pairing: "Quesos curados, embutidos ibéricos, cochinillo asado, carnes a la brasa.",
    serve: "En vaso de pinta o copa tulipa a 5–7°C.",
    alcNote: "Contenido de alcohol: 5–6% vol. Beber con moderación. Prohibida la venta a menores de 18 años.",
  },
  {
    name: "Cerveza Sin Alcohol",
    subtitle: "La Elección Inteligente",
    image: IMAGES.beer.sinAlcohol,
    strength: "0,0–1",
    strengthNum: 0.5,
    region: "Nacional",
    color: "Dorado claro",
    description:
      "España lidera el consumo de cerveza sin alcohol en Europa. En verano, bajo el sol mediterráneo, o al volante en las carreteras españolas, la cerveza sin alcohol es la opción más popular y aceptada socialmente. Marcas como Estrella 0,0 o Mahou Sin llevan décadas en el mercado.",
    taste: "Sorprendentemente cercano a la lager original. Ligero, refrescante, con un punto amargo suave.",
    pairing: "Perfecta con cualquier tapa, snack o comida del día. Sin restricciones.",
    serve: "Muy fría, a 2–4°C, en botella o lata directamente.",
    alcNote: "Contenido de alcohol: 0,0–1% vol. Puede contener trazas de alcohol.",
  },
  {
    name: "Cerveza Artesanal (Craft)",
    subtitle: "La Nueva Ola",
    image: IMAGES.beer.artesanal,
    strength: "5–8+",
    strengthNum: 8,
    region: "Madrid, Barcelona, País Vasco, Galicia",
    color: "Variable",
    description:
      "El movimiento cervecero artesanal lleva una década floreciendo en España. Desde IPAs frutales de Barcelona hasta stouts ahumadas del País Vasco, pasando por saisons gallegas o red ales madrileñas. La craft cerveza española es ya reconocida internacionalmente.",
    taste: "Variable según el estilo: frutal, floral, amargo, ahumado, torrefacto. Gran diversidad de perfiles.",
    pairing: "Depende del estilo: IPA con especiados, stout con chocolate negro, pale ale con mariscos.",
    serve: "En copa tulipa o jarra de cristal a 8–12°C según el estilo.",
    alcNote: "Contenido de alcohol: variable, generalmente 5–8% vol. o más. Beber con moderación. Prohibida la venta a menores de 18 años.",
  },
]

function StrengthBar({ value, max = 10 }: { value: number; max?: number }) {
  const pct = Math.min((value / max) * 100, 100)
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
        <div
          className="h-full strength-bar rounded-full"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export default function CervezaPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <AlcoholBanner />

      {/* Hero */}
      <section className="relative pt-32 pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/beer-bg.jpg"
            alt="Cerveza española en bar de tapas"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-charcoal/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-gold font-sans text-xs tracking-[0.5em] uppercase mb-4">Cerveza Española</p>
          <h1 className="font-serif text-5xl md:text-7xl font-black text-parchment text-balance mb-6">
            La Cerveza que<br />
            <span className="text-crimson-light">Refresca España</span>
          </h1>
          <div className="ornament-divider max-w-xs mx-auto mb-8">
            <span className="text-gold text-xl">✦</span>
          </div>
          <p className="text-parchment/80 text-lg font-sans leading-relaxed max-w-2xl mx-auto text-pretty">
            Bajo el sol implacable de España, la cerveza es mucho más que una bebida: es el ritual 
            de la caña y las tapas, el encuentro social en torno a una barra de mármol, el sabor 
            inconfundible del verano mediterráneo.
          </p>
        </div>
      </section>

      {/* Historia rápida */}
      <section className="py-20 px-6 bg-charcoal-mid">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold font-sans text-xs tracking-[0.5em] uppercase mb-3">Tradición</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-parchment mb-6 text-balance">
              Historia de la Cerveza en España
            </h2>
            <p className="text-parchment/80 font-sans leading-relaxed mb-4">
              Aunque la historia de la cerveza en España comienza con los romanos, fue en el siglo XIX 
              cuando la industria cervecera moderna echó raíces. Las primeras grandes cervecerías se 
              instalaron en Barcelona (Damm, 1876) y Madrid (Mahou, 1890).
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed text-sm">
              El boom cervecero del siglo XX consolidó marcas regionales con fuerte identidad local: 
              Cruzcampo en Andalucía, Estrella Galicia en Galicia, Alhambra en Granada, San Miguel 
              en Málaga. Hoy España es el quinto productor de cerveza de la Unión Europea.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "1876", label: "Damm, primera gran cervecería catalana" },
              { num: "1890", label: "Mahou, icono madrileño desde el siglo XIX" },
              { num: "5.°", label: "productor de cerveza en la Unión Europea" },
              { num: "N.°1", label: "en consumo de cerveza sin alcohol en Europa" },
            ].map((stat) => (
              <div key={stat.num} className="corrida-border p-5 text-center">
                <div className="font-serif text-2xl font-black text-gold mb-2">{stat.num}</div>
                <p className="text-muted-foreground text-xs font-sans leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beer catalog */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {/* Photo */}
        <div className="relative overflow-hidden corrida-border mb-14">
          <Image
            src="/images/beer-bg.jpg"
            alt="Cerveza española con tapas"
            width={1400}
            height={520}
            className="w-full h-56 md:h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/35 to-transparent" />
          <div className="absolute inset-0 flex items-end px-8 pb-6">
            <p className="text-parchment/80 font-sans text-sm md:text-base max-w-xl">
              La caña perfecta, bien fría, y una tapa — el dúo más español.
            </p>
          </div>
        </div>

        <div className="text-center mb-14">
          <p className="text-gold font-sans text-xs tracking-[0.5em] uppercase mb-3">Guía completa</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-parchment text-balance mb-4">
            Los Estilos Principales
          </h2>
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="text-gold text-xl">✦</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {beers.map((beer, i) => (
            <article key={beer.name} className="corrida-border p-8 hover:border-gold/50 transition-colors flex flex-col gap-5">
              <div className="relative overflow-hidden rounded-sm border border-gold/15">
                <Image
                  src={beer.image ?? "/images/beer-bg.jpg"}
                  alt={beer.name}
                  width={900}
                  height={420}
                  className="w-full h-40 md:h-44 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/15 to-transparent" />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-gold font-sans text-xs tracking-[0.4em] uppercase mb-1">{beer.subtitle}</p>
                  <h3 className="font-serif text-3xl font-bold text-parchment">{beer.name}</h3>
                  <p className="text-muted-foreground font-sans text-xs mt-1">{beer.region} — Color: {beer.color}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-crimson-light font-sans text-xs tracking-wide uppercase block">Graduación</span>
                  <span className="text-gold font-serif font-bold text-xl">{beer.strength}% vol.</span>
                </div>
              </div>

              {/* Strength bar */}
              <div>
                <p className="text-xs font-sans text-muted-foreground tracking-widest uppercase mb-2">Nivel de alcohol</p>
                <StrengthBar value={beer.strengthNum} max={10} />
              </div>

              <div className="h-px bg-border" />

              <p className="text-parchment/80 font-sans leading-relaxed text-sm">{beer.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <p className="text-gold font-sans text-xs tracking-widest uppercase mb-1">Sabor</p>
                  <p className="text-muted-foreground text-xs font-sans leading-relaxed">{beer.taste}</p>
                </div>
                <div>
                  <p className="text-gold font-sans text-xs tracking-widest uppercase mb-1">Maridaje</p>
                  <p className="text-muted-foreground text-xs font-sans leading-relaxed">{beer.pairing}</p>
                </div>
                <div>
                  <p className="text-gold font-sans text-xs tracking-widest uppercase mb-1">Servicio</p>
                  <p className="text-muted-foreground text-xs font-sans leading-relaxed">{beer.serve}</p>
                </div>
              </div>

              <div className="border border-gold/20 px-3 py-2">
                <p className="text-xs text-muted-foreground/60 font-sans italic">{beer.alcNote}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Tapas culture */}
      <section className="py-20 px-6 bg-charcoal-mid">
        <div className="max-w-4xl mx-auto text-center">
          <div className="ornament-divider max-w-xs mx-auto mb-8">
            <span className="text-gold text-xl">✦</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-parchment mb-6 text-balance">
            La Cultura de la Caña
          </h2>
          <p className="text-parchment/80 font-sans leading-relaxed text-lg mb-4 text-pretty">
            En España no se bebe una cerveza, se &ldquo;toma una caña&rdquo;. La diferencia es crucial: 
            la caña — un vaso pequeño de unos 200 ml — garantiza que la cerveza llegue siempre fría 
            y fresca a los labios.
          </p>
          <p className="text-muted-foreground font-sans leading-relaxed mb-8">
            El tapeo, ir de bar en bar tomando una caña con una pequeña tapa gratuita, es uno de los 
            rituales sociales más queridos del país. En ciudades como Sevilla, Granada o San Sebastián, 
            esta tradición tiene categoría de arte de vivir.
          </p>
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="text-gold text-xl">✦</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-parchment mb-6 text-balance">
            ¿Y la sidra?
          </h2>
          <p className="text-muted-foreground font-sans mb-8">
            Descubre el otro gran tesoro líquido del norte de España: la sidra asturiana auténtica.
          </p>
          <Link
            href="/catalogo"
            className="inline-block px-10 py-4 bg-crimson-light hover:bg-crimson text-white font-sans text-xs tracking-[0.4em] uppercase transition-colors"
          >
            Ver Catálogo de Sidras
          </Link>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </main>
  )
}
