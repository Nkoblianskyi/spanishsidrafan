import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import AlcoholBanner from "@/components/alcohol-banner"

const sidras = [
  {
    id: "natural",
    name: "Sidra Natural",
    subtitle: "La Auténtica Tradición",
    strength: "4–6%",
    region: "Asturias, País Vasco",
    image: "/images/sidra-natural.jpg",
    badge: "La Más Tradicional",
    badgeColor: "bg-crimson-light",
    description:
      "La Sidra Natural es el alma de la cultura sidrera asturiana. Elaborada exclusivamente con manzanas autóctonas, sin azúcares añadidos ni gas artificial, experimenta una fermentación completamente espontánea en grandes toneles de madera o acero inoxidable.",
    taste:
      "Seca y refrescante, con una acidez vibrante que recuerda a la manzana verde recién cortada. Notas terrosas, ligeras matices de levadura y un final limpio y prolongado.",
    pairing: "Queso Cabrales, chorizo asturiano, callos a la madrileña, percebes.",
    ritual:
      "Se sirve exclusivamente mediante el escanciado: vertida desde lo alto (unos 70 cm) en un vaso ancho para airearla y despertar sus aromas. Solo se sirve un pequeño trago a la vez.",
    history:
      "Documentada en Asturias desde el siglo X. Los monjes benedictinos la producían para consumo propio. En el siglo XIX se convirtió en la bebida popular por excelencia del norte de España.",
    alcoholNote: "Contenido de alcohol: 4–6% vol. Beber con moderación. Prohibida la venta a menores de 18 años.",
  },
  {
    id: "espumosa",
    name: "Sidra Espumosa",
    subtitle: "La Festiva y Elegante",
    strength: "5–7%",
    region: "Todo el país",
    image: "/images/sidra-espumosa.jpg",
    badge: "La Más Fuerte",
    badgeColor: "bg-gold text-charcoal",
    description:
      "La Sidra Espumosa es la versión más festiva y accesible de la sidra española. Carbonatada de forma artificial o mediante segunda fermentación en botella, recuerda a un vino espumoso y ha conquistado al público joven y a los turistas.",
    taste:
      "Ligeramente más dulce que la Natural, con burbujas persistentes y un perfil aromático más limpio y floral. Notas de manzana madura, pera y una pizca de vainilla.",
    pairing: "Mariscos, salmón ahumado, quesos suaves, aperitivos variados.",
    ritual:
      "Se sirve fría en copa de flauta, como el cava o el champán. No requiere escanciado. Ideal como aperitivo o para celebraciones.",
    history:
      "Surge en el siglo XX como respuesta a la demanda de una sidra más accesible para consumidores no habituados al estilo natural. Hoy es la más vendida fuera de Asturias.",
    alcoholNote: "Contenido de alcohol: 5–7% vol. Beber con moderación. Prohibida la venta a menores de 18 años.",
  },
  {
    id: "nueva",
    name: "Sidra Nueva Expresión",
    subtitle: "La Vanguardia Sidrera",
    strength: "5–6%",
    region: "Asturias",
    image: "/images/sidra-nueva.jpg",
    badge: "La Más Moderna",
    badgeColor: "bg-charcoal-mid border border-gold/50",
    description:
      "La Sidra de Nueva Expresión nació a principios del siglo XXI como resultado de la innovación técnica en las sidrerías asturianas. Fermentación controlada a baja temperatura, filtrado fino y embotellado cuidadoso dan como resultado un producto más predecible y versátil.",
    taste:
      "Más suave y menos ácida que la Natural, con un perfil aromático más limpio y frutal. Destacan las notas de manzana golden, melocotón y flores blancas.",
    pairing: "Pescados a la plancha, arroces con verduras, sushi, quesos frescos.",
    ritual:
      "Se sirve fría en copa de vino blanco, sin escanciado. Temperatura recomendada: 6–8°C. Puede conservarse abierta hasta 24 horas.",
    history:
      "Creada en 2002 por la Denominación de Origen Protegida Sidra de Asturias como categoría propia. Representa el esfuerzo del sector por conquistar nuevos mercados internacionales.",
    alcoholNote: "Contenido de alcohol: 5–6% vol. Beber con moderación. Prohibida la venta a menores de 18 años.",
  },
]

function StrengthBar({ value }: { value: string }) {
  const max = 8
  const num = parseFloat(value.split("–")[1] ?? value)
  const pct = Math.min((num / max) * 100, 100)
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
        <div
          className="h-full strength-bar rounded-full"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-gold font-serif font-bold text-sm w-16 text-right">{value}% vol.</span>
    </div>
  )
}

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <AlcoholBanner />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/catalog-bg.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-gold font-sans text-xs tracking-[0.5em] uppercase mb-4">Guía completa</p>
          <h1 className="font-serif text-5xl md:text-6xl font-black text-parchment text-balance mb-6">
            Catálogo de Sidras
          </h1>
          <div className="ornament-divider max-w-xs mx-auto mb-6">
            <span className="text-gold text-xl">✦</span>
          </div>
          <p className="text-muted-foreground font-sans leading-relaxed text-pretty">
            Tres estilos que definen la cultura sidrera española. Historia, carácter, graduación y el arte
            de disfrutarlas como manda la tradición.
          </p>
        </div>
      </section>

      {/* Sidras */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-24">
          {sidras.map((sidra, index) => (
            <article
              key={sidra.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden corrida-border group">
                <div className="relative h-80 md:h-[480px]">
                  <Image
                    src={sidra.image}
                    alt={sidra.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                  <div className={`absolute top-5 left-5 px-3 py-1.5 ${sidra.badgeColor}`}>
                    <span className="font-sans text-xs tracking-widest uppercase text-white">{sidra.badge}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-gold font-sans text-xs tracking-[0.5em] uppercase mb-2">{sidra.region}</p>
                  <h2 className="font-serif text-4xl md:text-5xl font-bold text-parchment mb-1">{sidra.name}</h2>
                  <p className="text-muted-foreground font-sans italic text-lg">{sidra.subtitle}</p>
                </div>

                {/* Strength */}
                <div>
                  <p className="text-xs font-sans text-muted-foreground tracking-widest uppercase mb-2">Graduación alcohólica</p>
                  <StrengthBar value={sidra.strength} />
                </div>

                <div className="h-px bg-border" />

                <p className="text-parchment/80 font-sans leading-relaxed">{sidra.description}</p>

                {/* Details grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <p className="text-gold font-sans text-xs tracking-widest uppercase mb-2">Sabor y Aroma</p>
                    <p className="text-muted-foreground text-sm font-sans leading-relaxed">{sidra.taste}</p>
                  </div>
                  <div>
                    <p className="text-gold font-sans text-xs tracking-widest uppercase mb-2">Maridaje</p>
                    <p className="text-muted-foreground text-sm font-sans leading-relaxed">{sidra.pairing}</p>
                  </div>
                  <div>
                    <p className="text-gold font-sans text-xs tracking-widest uppercase mb-2">Cómo Disfrutarla</p>
                    <p className="text-muted-foreground text-sm font-sans leading-relaxed">{sidra.ritual}</p>
                  </div>
                  <div>
                    <p className="text-gold font-sans text-xs tracking-widest uppercase mb-2">Historia</p>
                    <p className="text-muted-foreground text-sm font-sans leading-relaxed">{sidra.history}</p>
                  </div>
                </div>

                <div className="border border-gold/20 px-4 py-3">
                  <p className="text-xs text-muted-foreground/70 font-sans italic">{sidra.alcoholNote}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-charcoal-mid mt-12">
        <div className="max-w-2xl mx-auto">
          <div className="ornament-divider max-w-xs mx-auto mb-8">
            <span className="text-gold text-xl">✦</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-parchment mb-4 text-balance">
            ¿Quieres saber de dónde viene todo esto?
          </h2>
          <p className="text-muted-foreground font-sans mb-8 leading-relaxed">
            Descubre la historia milenaria de la sidra española, sus orígenes medievales y el camino
            hasta convertirse en uno de los símbolos culturales de España.
          </p>
          <Link
            href="/historia"
            className="inline-block px-10 py-4 bg-crimson-light hover:bg-crimson text-white font-sans text-xs tracking-[0.4em] uppercase transition-colors"
          >
            Ver Historia
          </Link>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </main>
  )
}
