"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, DollarSign, Droplets, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    icon: BarChart3,
    command: "/index",
    title: "Análisis de Sentimiento",
    description: "Métricas de volumen y momentum para evaluar tendencias del mercado venezolano",
  },
  {
    icon: TrendingUp,
    command: "/rentabilidad",
    title: "Cálculo de Sharpe Ratio",
    description: "Evaluación de retorno ajustado por riesgo de cada activo en tiempo real",
  },
  {
    icon: Droplets,
    command: "/liquidez",
    title: "Métricas de Volumen",
    description: "Análisis de liquidez del mercado y detección de oportunidades de entrada/salida",
  },
  {
    icon: DollarSign,
    command: "/ath",
    title: "Arbitraje de Precios",
    description: "Identificación de activos cerca de máximos históricos con potencial de ruptura",
  },
]

export function FeaturesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground">Monitor de Mercado</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Herramientas de análisis financiero mediante comandos simples en Telegram
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.command}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(36, 161, 222, 0.3)", // Updated to Telegram blue
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur transition-all hover:border-primary/50 h-full">
                    <CardHeader>
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#24a1de]/10 text-[#24a1de] transition-colors group-hover:bg-[#24a1de] group-hover:text-primary-foreground">
                        <Icon className="h-6 w-6" />
                      </div>
                      <code className="text-sm font-mono text-[#24a1de] mb-2 block">{feature.command}</code>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}