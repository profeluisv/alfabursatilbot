"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Crown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const benefits = [
  "Sesión de implementación de 1 hora",
  "Entrega de asignación de activos óptima",
  "Acceso exclusivo a Alfa Bursátil Pro: Canal de alertas tempranas para estrategia de trading diario",
  "Rebalanceo trimestral incluido",
]

export function PremiumSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-4xl"
        >
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 50px rgba(36, 161, 222, 0.4)", // Updated to Telegram blue glow
            }}
            transition={{ duration: 0.4 }}
          >
            <Card className="border-primary/30 bg-gradient-to-br from-card via-card/80 to-primary/5 glow-telegram">
              <CardHeader className="text-center pb-8">
                <div className="mb-4 inline-flex justify-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Crown className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold mb-2">Consultoría Premium: Portafolio Óptimo Alfa</CardTitle>
                <CardDescription className="text-lg">
                  Servicio profesional de optimización de portafolio personalizado
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-8">
                <div className="text-center">
                  <div>
                    <span className="text-5xl font-bold text-primary">$100</span>
                    <span className="ml-2 text-xl text-muted-foreground">USD</span>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + index * 0.1,
                        ease: "easeOut",
                      }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-0.5 rounded-full bg-primary/10 p-1 shrink-0">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm leading-relaxed text-balance">
                        {benefit.includes("exclusivo") ? (
                          <>
                            {benefit.split("exclusivo")[0]}
                            <span className="font-semibold text-primary">exclusivo</span>
                            {benefit.split("exclusivo")[1]}
                          </>
                        ) : (
                          benefit
                        )}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary via-[#2FB5F0] to-primary hover:from-[#2FB5F0] hover:to-primary text-primary-foreground font-semibold text-base h-12 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/40"
                  >
                    <Link href="https://wa.me/584126780566" target="_blank" rel="noopener noreferrer">
                      Solicitar Consultoría Ahora
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
