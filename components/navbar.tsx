import { cn } from "@/lib/utils";
import { Shield, TrendingUp, Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-10 z-50">
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-8 h-8 bg-telegram rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
          <TrendingUp className="text-white w-5 h-5" />
        </div>
        <span className="font-bold text-xl tracking-tighter uppercase">Alfa Bursátil</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60 uppercase tracking-widest">
        <a href="#" className="hover:text-telegram transition-colors">Terminal</a>
        <a href="#" className="hover:text-telegram transition-colors">Portafolios</a>
        <a href="#" className="hover:text-telegram transition-colors">Academia</a>
        <button className="bg-telegram text-white px-5 py-2 rounded-full font-bold hover:scale-105 active:scale-95 transition-all">
          Acceso VIP
        </button>
      </div>
      <Menu className="md:hidden text-white" />
    </nav>
  );
}
