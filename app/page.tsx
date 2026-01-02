import { StockTicker } from "@/components/StockTicker";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { SystemStatus } from "@/components/system-status";
import { FeaturesGrid } from "@/components/features-grid";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <StockTicker />
      <Navbar />
      <HeroSection />
      <SystemStatus />
      <FeaturesGrid />
      
      {/* Premium Section - Inline para completar la landing */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-telegram/5">
        <div className="max-w-4xl mx-auto glass-card rounded-[40px] p-12 text-center border-telegram/20">
          <h2 className="text-4xl font-black mb-6 italic">MEMBRESÍA QUANT</h2>
          <p className="text-white/60 mb-10 max-w-md mx-auto">
            Únete al círculo exclusivo de inversores que operan con datos, no con emociones.
          </p>
          <button className="bg-white text-black px-12 py-4 rounded-full font-black hover:bg-telegram hover:text-white transition-all">
            SOLICITAR ACCESO
          </button>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-white/20 text-xs tracking-widest uppercase">
          © 2025 ALFA BURSÁTIL • TERMINAL DE DATOS FINANCIEROS
        </p>
      </footer>
    </main>
  );
}
