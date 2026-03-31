"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/historia", label: "Historia" },
  { href: "/catalogo", label: "Sidra" },
  { href: "/cerveza", label: "Cerveza" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/90 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-row leading-none">
        <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
          <span className="font-serif text-gold text-xl font-bold tracking-widest uppercase">
            Spanish
          </span>
          <span className="font-serif text-crimson-light text-xl font-black tracking-wider uppercase">
            Sidra Fan
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-parchment/80 hover:text-gold font-sans text-sm tracking-widest uppercase transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gold"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-charcoal border-t border-gold/20 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-parchment/80 hover:text-gold font-sans text-sm tracking-widest uppercase transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
