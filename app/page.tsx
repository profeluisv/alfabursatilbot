"use client";
import { StockTicker } from "@/components/StockTicker";
import { TrendingUp, Send, Calendar, ChevronRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-telegram/30 font-sans">
      {/* 1. TICKER (El que ya tienes funcional) */}
      <StockTicker />

      {/* FONDO DE REJILLA Y LUCES */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-telegram/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* NAVBAR */}
        <nav className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-telegram rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(36,161,222,0.5)]">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter">Alfa Bursátil</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
            <a href="#" className="hover:text-white transition-colors">Terminal</a>
            <a href="#" className="hover:text-white transition-colors">Portafolios</a>
            <a href="#" className="hover:text-white transition-colors">Academia</a>
            <button className="bg-white text-black px-6 py-2 rounded-full font-black text-[10px] hover:bg-telegram hover:text-white transition-all">ACCESO VIP</button>
          </div>
        </nav>

        {/* HERO SECTION - CENTRADO ABSOLUTO */}
        <section className="max-w-6xl mx-auto px-6 pt-20 pb-32 text-center">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-telegram/10 border border-telegram/20 mb-10 animate-fade-in">
            <div className="w-2 h-2 bg-telegram rounded-full animate-pulse"></div>
            <span className="text-[10px] font-black text-telegram uppercase tracking-[0.2em]">
              +499.3% Retorno en USD (Anual)
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-[1000] tracking-tight leading-[0.95] mb-8 italic">
            Información en Tiempo Real del <br />
            <span className="text-telegram">Mercado de Valores</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/40 font-medium mb-12">
            Métricas precisas y análisis estratégico directamente en Telegram.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
            <button className="group flex items-center gap-3 bg-telegram hover:scale-105 active:scale-95 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-[0_20px_40px_rgba(36,161,222,0.3)]">
              <Send className="w-5 h-5 fill-current" />
              Iniciar Terminal @AlfaBursatilBot
            </button>
            <button className="flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 px-10 py-5 rounded-2xl font-bold text-lg transition-all">
              <Calendar className="w-5 h-5" />
              Agendar Consultoría
            </button>
          </div>

          {/* STATS CARDS - EL CORAZÓN DEL DISEÑO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="group relative bg-[#050505] border border-white/10 p-12 rounded-[40px] text-left overflow-hidden hover:border-telegram/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-telegram/5 blur-3xl group-hover:bg-telegram/10 transition-all"></div>
              <h3 className="text-6xl font-black text-telegram mb-2 tracking-tighter">+499.3%</h3>
              <p className="text-xs font-bold text-white/30 uppercase tracking-[0.2em]">Retorno Anual en USD</p>
            </div>

            <div className="group relative bg-[#050505] border border-white/10 p-12 rounded-[40px] text-left overflow-hidden hover:border-telegram/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl group-hover:bg-white/10 transition-all"></div>
              <h3 className="text-6xl font-black text-white mb-2 tracking-tighter">+226%</h3>
              <p className="text-xs font-bold text-white/30 uppercase tracking-[0.2em]">Sobre el Índice BVC</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
