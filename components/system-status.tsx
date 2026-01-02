"use client"

import { motion } from "framer-motion"

export function SystemStatus() {
  return (
    <div className="py-8 bg-black border-b border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-3 text-sm font-mono">
          <span className="text-muted-foreground">Estatus del Sistema:</span>
          <div className="flex items-center gap-2">
            <span className="text-foreground">Activo</span>
            <motion.span
              animate={{
                opacity: [1, 0.5, 1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="text-[#10b981]"
            >
              🟢
            </motion.span>
          </div>
          <span className="text-muted-foreground">|</span>
          <span className="text-muted-foreground">Versión:</span>
          <span className="text-[#24a1de]">0.0.1</span>
        </div>
      </div>
    </div>
  )
}
