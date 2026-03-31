import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-sans text-xs tracking-[0.5em] uppercase mb-3">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-parchment mb-4">
            Política de Cookies
          </h1>
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="text-gold text-lg">✦</span>
          </div>
        </div>

        <div className="flex flex-col gap-8 font-sans text-parchment/80 leading-relaxed">
          <div>
            <p className="text-muted-foreground text-sm mb-6">
              Última actualización: enero de 2025
            </p>
            <p>
              Este sitio web <strong className="text-parchment">spanishsidrafan.com</strong>, operado por
              FISCUS NOSTRUM FUND SERVICES LIMITED, utiliza cookies y tecnologías similares para mejorar
              su experiencia de navegación, analizar el tráfico y personalizar el contenido.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-parchment mb-3">¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador,
              tablet o teléfono móvil) cuando visita un sitio web. Permiten que el sitio recuerde sus
              acciones y preferencias durante un período de tiempo.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-parchment mb-4">Tipos de cookies que utilizamos</h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  tipo: "Cookies Estrictamente Necesarias",
                  desc: "Estas cookies son imprescindibles para el funcionamiento del sitio web. Sin ellas, el sitio no puede funcionar correctamente. No requieren su consentimiento.",
                },
                {
                  tipo: "Cookies de Preferencias",
                  desc: "Permiten recordar sus elecciones (como el idioma o la región) y proporcionar funciones mejoradas y más personales.",
                },
                {
                  tipo: "Cookies Analíticas",
                  desc: "Nos ayudan a entender cómo los visitantes interactúan con el sitio, recopilando y reportando información de forma anónima. Utilizamos Vercel Analytics para este fin.",
                },
                {
                  tipo: "Cookies de Marketing",
                  desc: "Se utilizan para rastrear a los visitantes en los sitios web. La intención es mostrar anuncios relevantes y atractivos para el usuario individual.",
                },
              ].map((item) => (
                <div key={item.tipo} className="corrida-border p-5">
                  <h3 className="font-serif text-lg text-gold mb-2">{item.tipo}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-parchment mb-3">¿Cómo gestionar las cookies?</h2>
            <p className="mb-3">
              Puede controlar y gestionar las cookies de varias maneras. Tenga en cuenta que eliminar o
              bloquear las cookies puede afectar a su experiencia de usuario y es posible que no pueda
              acceder a ciertas zonas o funciones de nuestro sitio web.
            </p>
            <p>
              La mayoría de los navegadores le permiten ver, gestionar, eliminar y bloquear las cookies de
              un sitio web. Para más información, visite la sección de ayuda de su navegador.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-parchment mb-3">Contacto</h2>
            <address className="not-italic text-sm text-muted-foreground leading-relaxed">
              <strong className="text-parchment block mb-1">FISCUS NOSTRUM FUND SERVICES LIMITED</strong>
              Myrianthous Anna<br />
              Panagioti Kaspi 5A<br />
              Nicosia 1095, Cyprus
            </address>
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </main>
  )
}
