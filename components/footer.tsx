import { AlertTriangle, Phone, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const institutionalLinks = [
    {
      name: "Bolsa de Valores de Caracas",
      url: "https://www.bolsadecaracas.com",
    },
    {
      name: "Caja Venezolana de Valores",
      url: "https://www.cajavenezolana.com/cvvweb/",
    },
    {
      name: "Superintendencia Nacional de Valores",
      url: "https://www.sunaval.gob.ve",
    },
    {
      name: "Banco Central de Venezuela",
      url: "https://www.bcv.org.ve",
    },
  ]

  return (
    <footer className="border-t border-border/50 bg-black py-12">
      <div className="container mx-auto px-6">
        {/* Institutional links */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Sitios de Interés</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {institutionalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 p-4 rounded-lg border border-border/30 bg-card/20 hover:bg-card/40 hover:border-[#24a1de]/50 transition-all group"
              >
                <span className="text-sm font-medium text-muted-foreground group-hover:text-[#24a1de] transition-colors">
                  {link.name}
                </span>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-[#24a1de] transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="mb-8 rounded-xl border border-destructive/30 bg-destructive/5 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
            <div className="text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Aviso Legal:</strong> Al usar este bot aceptas que la información aquí
              es estrictamente informativa y educativa. No constituye recomendación de inversión ni asesoría financiera.
              El mercado bursátil conlleva riesgos; rendimientos pasados no garantizan futuros. Invierte
              responsablemente.
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alfa Bursátil. Todos los derechos reservados.
          </div>

          <Link
            href="https://wa.me/584126780566"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <Phone className="h-4 w-4" />
            WhatsApp: +58 412-6780566
          </Link>
        </div>
      </div>
    </footer>
  )
}