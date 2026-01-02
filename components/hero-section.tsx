import { Send, Calendar } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 px-6 overflow-visible text-center">
      {/* Luces de fondo */}
      <div className="blue-glow top-0 left-1/2 -translate-x-1/2" />
      
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#24a1de]/10 border border-[#24a1de]/20 mb-10">
          <TrendingUp className="w-3 h-3 text-telegram" />
          <span className="text-[10px] font-bold text-telegram uppercase tracking-widest">
            +499.3% Retorno en USD (Anual)
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-[900] tracking-tighter leading-[1.1] mb-6">
          Información en Tiempo Real del <br />
          <span className="bg-gradient-to-r from-telegram to-[#64c9ff] bg-clip-text text-transparent">
            Mercado de Valores de Venezuela
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/40 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
          Métricas precisas y análisis estratégico directamente en Telegram.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button className="group flex items-center gap-3 bg-telegram hover:bg-[#1d86ba] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-[0_10px_40px_rgba(36,161,222,0.3)]">
            <Send className="w-5 h-5 fill-white" />
            Iniciar Terminal @AlfaBursatilBot
          </button>
          <button className="flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all">
            <Calendar className="w-5 h-5" />
            Agendar Consultoría
          </button>
        </div>

        {/* Tarjetas de Estadísticas Estilo v0 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="stats-card p-10 text-left relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-telegram/5 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-telegram/10 transition-colors" />
            <h3 className="text-5xl font-black text-telegram mb-2">+499.3%</h3>
            <p className="text-sm font-bold text-white/40 uppercase tracking-widest">Retorno Anual en USD</p>
          </div>
          
          <div className="stats-card p-10 text-left relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-telegram/5 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-telegram/10 transition-colors" />
            <h3 className="text-5xl font-black text-white mb-2">+226%</h3>
            <p className="text-sm font-bold text-white/40 uppercase tracking-widest">Sobre el Índice BVC</p>
          </div>
        </div>
      </div>
    </section>
  );
}
