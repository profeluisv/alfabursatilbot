import { PieChart, Globe, Briefcase, Zap } from "lucide-react";

const features = [
  { title: "Dashboard Real-time", desc: "Datos de la BVC con actualización de baja latencia.", icon: <Zap /> },
  { title: "Análisis Fundamental", desc: "Métricas financieras exclusivas y proyecciones de EBITDA.", icon: <PieChart /> },
  { title: "Portafolios Modelo", desc: "Estrategias de inversión optimizadas por algoritmos Alfa.", icon: <Briefcase /> },
  { title: "Mercados Globales", desc: "Correlación entre el ADR y el mercado local en tiempo real.", icon: <Globe /> },
];

export function FeaturesGrid() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-4">INGENIERÍA FINANCIERA</h2>
        <div className="w-20 h-1 bg-telegram mx-auto rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div key={i} className="glass-card p-8 rounded-3xl group">
            <div className="w-12 h-12 bg-telegram/10 rounded-2xl flex items-center justify-center text-telegram mb-6 group-hover:scale-110 transition-transform">
              {f.icon}
            </div>
            <h3 className="font-bold mb-3 tracking-tight">{f.title}</h3>
            <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
