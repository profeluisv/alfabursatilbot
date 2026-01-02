import { TrendingUp } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-8 relative z-50">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-tr from-[#24a1de] to-[#1d86ba] rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(36,161,222,0.5)]">
          <TrendingUp className="text-white w-6 h-6" strokeWidth={2.5} />
        </div>
        <span className="text-2xl font-black tracking-tighter italic">Alfa Bursátil</span>
      </div>
      <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
        <a href="#" className="hover:text-telegram transition-colors">Terminal</a>
        <a href="#" className="hover:text-telegram transition-colors">Portafolios</a>
        <a href="#" className="hover:text-telegram transition-colors">Academia</a>
        <button className="bg-white/5 border border-white/10 px-5 py-2 rounded-full hover:bg-white/10 transition-all">
          Acceso VIP
        </button>
      </div>
    </nav>
  );
}
