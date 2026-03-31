import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-sans text-xs tracking-[0.5em] uppercase mb-3">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-parchment mb-4">
            Política de Privacidad
          </h1>
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="text-gold text-lg">✦</span>
          </div>
        </div>

        <div className="flex flex-col gap-8 font-sans text-parchment/80 leading-relaxed">
          <div>
            <p className="text-muted-foreground text-sm mb-6">Última actualización: enero de 2025</p>
            <p>
              FISCUS NOSTRUM FUND SERVICES LIMITED (&ldquo;nosotros&rdquo;, &ldquo;nuestro&rdquo;) opera el sitio web
              <strong className="text-parchment"> spanishsidrafan.com</strong>. Esta Política de Privacidad
              describe cómo recopilamos, usamos y protegemos su información personal.
            </p>
          </div>

          {[
            {
              title: "1. Responsable del Tratamiento",
              content: (
                <address className="not-italic text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-parchment block mb-1">FISCUS NOSTRUM FUND SERVICES LIMITED</strong>
                  Myrianthous Anna<br />
                  Panagioti Kaspi 5A<br />
                  Nicosia 1095, Cyprus
                </address>
              ),
            },
            {
              title: "2. Datos que Recopilamos",
              text: "Podemos recopilar información que usted nos facilita directamente, como su dirección de correo electrónico si utiliza formularios de contacto. También recopilamos datos de uso anónimos a través de herramientas de análisis (Vercel Analytics) como páginas visitadas, tiempo de permanencia y procedencia del tráfico.",
            },
            {
              title: "3. Finalidad del Tratamiento",
              text: "Utilizamos sus datos para: operar y mejorar el sitio web; responder a sus consultas; analizar el comportamiento de los usuarios de forma anónima; cumplir con las obligaciones legales aplicables.",
            },
            {
              title: "4. Base Legal",
              text: "El tratamiento de sus datos se basa en su consentimiento (cuando acepta cookies), en el interés legítimo de mejorar nuestros servicios y en el cumplimiento de obligaciones legales. Usted puede retirar su consentimiento en cualquier momento.",
            },
            {
              title: "5. Conservación de Datos",
              text: "Conservamos sus datos personales únicamente durante el tiempo necesario para cumplir los fines para los que fueron recopilados, o durante el tiempo exigido por la legislación aplicable.",
            },
            {
              title: "6. Derechos del Usuario",
              text: "Tiene derecho a acceder, rectificar, suprimir, oponerse al tratamiento, solicitar la limitación del mismo y la portabilidad de sus datos. Para ejercer estos derechos, contacte con nosotros en la dirección indicada.",
            },
            {
              title: "7. Transferencias Internacionales",
              text: "Sus datos pueden ser transferidos a países fuera del Espacio Económico Europeo, siempre con las garantías adecuadas según el RGPD.",
            },
            {
              title: "8. Modificaciones",
              text: "Nos reservamos el derecho de modificar esta Política de Privacidad. Le notificaremos los cambios significativos a través de un aviso visible en el sitio web.",
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-2xl text-parchment mb-3">{section.title}</h2>
              {"content" in section ? section.content : <p className="text-parchment/80">{section.text}</p>}
            </div>
          ))}

          <div className="corrida-border p-6 text-center">
            <p className="text-sm text-muted-foreground font-sans">
              Si tiene alguna pregunta sobre esta política, puede contactarnos en:<br />
              <strong className="text-gold">FISCUS NOSTRUM FUND SERVICES LIMITED</strong><br />
              Panagioti Kaspi 5A, Nicosia 1095, Cyprus
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </main>
  )
}
