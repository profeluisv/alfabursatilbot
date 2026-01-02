import { TrendingUp, Send } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      
      {/* 1. LOGO */}
      <div className="flex items-center gap-3 mb-16">
        <div className="w-12 h-12 bg-[#24a1de] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(36,161,222,0.4)]">
          <TrendingUp className="text-white w-7 h-7" />
        </div>
        <h1 className="text-4xl font-black tracking-tighter">Alfa Bursátil</h1>
      </div>

      {/* 2. BADGE */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#24a1de]/10 border border-[#24a1de]/20 mb-8">
        <TrendingUp className="w-3 h-3 text-[#24a1de]" />
        <span className="text-[11px] font-bold text-[#24a1de] uppercase tracking-widest">
          +499.3% Retorno en USD (Anual)
        </span>
      </div>

      {/* 3. TITULAR PRINCIPAL */}
      <h2 className="text-5xl md:text-7xl font-black text-center max-w-5xl leading-[1.1] mb-6 tracking-tight">
        Información en Tiempo Real del <br />
        <span className="text-[#24a1de]">Mercado de Valores de Venezuela</span>
      </h2>

      <p className="text-white/40 text-lg md:text-xl font-medium mb-16 text-center">
        Métricas precisas y análisis estratégico directamente en Telegram.
      </p>

      {/* 4. TARJETAS DE ESTADÍSTICAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mb-16">
        <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 p-10 rounded-[32px] glow-shadow">
          <div className="text-5xl font-black text-[#24a1de] mb-2">+499.3%</div>
          <div className="text-[12px] font-bold text-white/40 uppercase tracking-widest">Retorno Anual en USD</div>
        </div>
        
        <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 p-10 rounded-[32px]">
          <div className="text-5xl font-black text-white mb-2">+226%</div>
          <div className="text-[12px] font-bold text-white/40 uppercase tracking-widest">Sobre el Índice BVC</div>
        </div>
      </div>

      {/* 5. BOTONES DE ACCIÓN */}
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
        <button className="flex items-center gap-3 bg-[#24a1de] hover:bg-[#1d86ba] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all w-full sm:w-auto justify-center">
          <Send className="w-5 h-5 fill-white" />
          Iniciar Terminal @AlfaBursatilBot
        </button>
        <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all w-full sm:w-auto">
          Agendar Consultoría
        </button>
      </div>

    </main>
  );
}
