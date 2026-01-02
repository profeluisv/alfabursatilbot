import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "700", "900"] });

export const metadata: Metadata = {
  title: "Alfa Bursátil | Inteligencia de Mercado BVC",
  description: "Terminal financiera líder para la Bolsa de Valores de Caracas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
