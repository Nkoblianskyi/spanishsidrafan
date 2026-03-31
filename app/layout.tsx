import type { Metadata } from 'next'
import { Playfair_Display, Crimson_Text } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const crimson = Crimson_Text({
  subsets: ['latin'],
  variable: '--font-crimson',
  weight: ['400', '600'],
})

export const metadata: Metadata = {
  title: 'Spanish Sidra Fan — La Sidra Española Auténtica',
  description: 'Descubre la sidra española auténtica de Asturias y el País Vasco. Historia, tradición y los mejores tipos de sidra y cerveza española.',
  generator: 'v0.app',
  keywords: ['sidra española', 'sidra asturiana', 'escanciado', 'cerveza española', 'sidra natural', 'spanishsidrafan'],
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${crimson.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
