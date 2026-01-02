import type React from "react"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css" // <-- RUTA CORREGIDA PARA EVITAR DUPLICADOS

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body className={`${montserrat.variable} font-sans antialiased bg-background text-foreground dark`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
