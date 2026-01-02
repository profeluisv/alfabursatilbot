import { StockTicker } from "@/components/StockTicker";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/HeroSection";

export default function Page() {
  return (
    <main className="relative min-h-screen">
      {/* Ticker Dinámico Funcional (Copia Exacta solicitada) */}
      <StockTicker />
      
      <Navbar />
      
      <div className="relative z-10">
        <HeroSection />
      </div>

      {/* Footer Minimalista */}
      <footer className="mt-20 py-10 border-t border-white/5 flex flex-col items-center gap-4">
        <div className="text-[10px] font-bold text-white/20 tracking-[0.5em] uppercase">
          Built with Precision for BVC
        </div>
      </footer>
    </main>
  );
}
