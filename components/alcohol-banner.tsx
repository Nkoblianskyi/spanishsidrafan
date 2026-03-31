import React from "react"

type AlcoholBannerSize = "default" | "large"

export default function AlcoholBanner({ size = "default" }: { size?: AlcoholBannerSize }) {
  const isLarge = size === "large"

  return (
    <div
      className={[
        "bg-charcoal-mid border-y border-gold/20 px-6",
        isLarge ? "py-5 md:py-6" : "py-3",
      ].join(" ")}
      role="note"
      aria-label="Aviso de alcohol 18+"
    >
      <p
        className={[
          "text-center font-sans text-parchment/70 tracking-wide",
          isLarge ? "text-sm md:text-base" : "text-xs",
        ].join(" ")}
      >
        <span
          className={[
            "text-gold font-black mr-2 inline-flex items-center justify-center border border-gold/30",
            isLarge ? "text-base md:text-lg px-2.5 py-1 rounded-sm" : "text-xs px-2 py-0.5 rounded",
          ].join(" ")}
        >
          18+
        </span>
        El alcohol está permitido únicamente para mayores de 18 años. Consuma con moderación y responsabilidad.
        <span className="mx-2 text-gold/40">|</span>
        Beber y conducir es peligroso.
      </p>
    </div>
  )
}

