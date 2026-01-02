import type React from "react"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body className={`${montserrat.variable} font-sans bg-background text-foreground dark antialiased`}>
        {children}
      </body>
    </html>
  )
}
