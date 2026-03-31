import Link from "next/link"
import { MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-gold/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="font-serif text-gold text-xl font-bold tracking-widest uppercase block">Spanish</span>
              <span className="font-serif text-crimson-light text-3xl font-black tracking-wider uppercase -mt-1 block">Sidra Fan</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed font-sans">
              La guía definitiva de la sidra española auténtica. Tradición, historia y pasión desde Asturias.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-gold font-serif text-lg tracking-widest uppercase">Navegación</h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "Inicio" },
                { href: "/historia", label: "Historia de la Sidra" },
                { href: "/catalogo", label: "Catálogo de Sidras" },
                { href: "/cerveza", label: "Cerveza Española" },
                { href: "/cookies", label: "Política de Cookies" },
                { href: "/privacy", label: "Política de Privacidad" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-gold text-sm font-sans transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company address */}
          <div className="flex flex-col gap-4">
            <h4 className="text-gold font-serif text-lg tracking-widest uppercase">Contacto</h4>
            <div className="flex gap-3">
              <MapPin size={16} className="text-crimson-light mt-1 shrink-0" />
              <address className="text-muted-foreground text-sm not-italic leading-relaxed font-sans">
                <span className="text-parchment font-semibold block">FISCUS NOSTRUM FUND SERVICES LIMITED</span>
                Myrianthous Anna<br />
                Panagioti Kaspi 5A<br />
                Nicosia 1095<br />
                Cyprus
              </address>
            </div>
          </div>
        </div>

        {/* Ornament */}
        <div className="ornament-divider mb-8">
          <span className="text-gold text-xl">✦</span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-sans">
          <p>© {new Date().getFullYear()} SpanishSidraFan.com — Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/cookies" className="hover:text-gold transition-colors">Cookies</Link>
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacidad</Link>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground/50 mt-4 font-sans">
          Este sitio web contiene información sobre bebidas alcohólicas. Acceso solo para mayores de 18 años.
        </p>
      </div>
    </footer>
  )
}
