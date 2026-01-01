import { StockTicker } from "@/components/StockTicker";
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SystemStatus } from "@/components/system-status"
import { FeaturesGrid } from "@/components/features-grid"
import { PremiumSection } from "@/components/premium-section"
import { Footer } from "@/components/footer"
import { StockTicker } from "@/components/StockTicker";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <StockTicker />
      <Navbar />
      <HeroSection />
      <SystemStatus />
      <FeaturesGrid />
      <PremiumSection />
      <Footer />
    </main>
  )
}
