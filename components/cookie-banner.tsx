"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem("cookies_accepted")
    if (!accepted) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem("cookies_accepted", "true")
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem("cookies_accepted", "false")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-charcoal border-t border-gold/30 px-6 py-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
        <div className="flex-1">
          <p className="text-sm text-parchment/90 font-sans leading-relaxed">
            Utilizamos cookies para mejorar su experiencia en nuestro sitio. Al continuar navegando, acepta nuestra{" "}
            <Link href="/cookies" className="text-gold underline hover:text-gold-light">
              Política de Cookies
            </Link>{" "}
            y{" "}
            <Link href="/privacy" className="text-gold underline hover:text-gold-light">
              Política de Privacidad
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2 border border-gold/40 text-gold/80 hover:border-gold hover:text-gold text-xs tracking-widest uppercase font-sans transition-colors"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 bg-crimson-light hover:bg-crimson text-white text-xs tracking-widest uppercase font-sans transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}
