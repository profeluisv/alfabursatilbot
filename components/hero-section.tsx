"use client"

import { Button } from "@/components/ui/button"
import { TrendingUp } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-44 md:pt-52 pb-20">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#24A1DE08_1px,transparent_1px),linear-gradient(to_bottom,#24A1DE08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/30 animate-pulse-glow"
          >
            <TrendingUp className="h-4 w-4" />
            +499.3% Retorno en USD (Anual)
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-balance"
          >
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Información en Tiempo Real del{" "}
            </span>
            <span className="text-primary">Mercado de Valores de Venezuela</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mb-12 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Métricas precisas y análisis estratégico directamente en Telegram.
          </motion.p>

          {/* Stats cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mb-12 grid gap-4 md:grid-cols-2 max-w-2xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(36, 161, 222, 0.4)" }}
              transition={{ duration: 0.3 }}
              className="glass-card glow-telegram rounded-2xl p-6 text-left cursor-pointer"
            >
              <div className="text-5xl font-bold text-primary mb-2">+499.3%</div>
              <div className="text-sm font-medium text-muted-foreground">Retorno Anual en USD</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(91, 192, 235, 0.4)" }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-6 text-left border-primary/20 cursor-pointer glow-cyan"
            >
              <div className="text-5xl font-bold text-primary mb-2">+226%</div>
              <div className="text-sm font-medium text-muted-foreground">Sobre el Índice BVC</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary via-[#2FB5F0] to-primary hover:from-[#2FB5F0] hover:to-primary text-white font-bold text-base px-8 h-12 w-full sm:w-auto sm:flex-1 transition-all hover:scale-105 shadow-[0_0_20px_rgba(36,161,222,0.5)] hover:shadow-[0_0_30px_rgba(36,161,222,0.7)]"
            >
              <Link
                href="https://t.me/AlfaBursatilBot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Send className="mr-2 h-5 w-5" />
                Iniciar Terminal @AlfaBursatilBot
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary/70 text-primary hover:bg-primary/10 hover:border-primary font-bold text-base px-8 h-12 bg-transparent w-full sm:w-auto sm:flex-1 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              <Link
                href="https://wa.me/584126780566"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                Agendar Consultoría
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
