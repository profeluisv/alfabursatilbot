export function HeroSection() {
  return (
    <section className="relative pt-20 pb-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-telegram/10 blur-[120px] rounded-full" />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full border border-telegram/30 bg-telegram/5 text-telegram text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
          Sistemas Quant de Alta Precisión
        </span>
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
          EL ALFA DEL <br />
          <span className="text-gradient">MERCADO LIBRE</span>
        </h1>
        <p className="max-w-2xl mx-auto text-white/50 text-lg md:text-xl font-light mb-12">
          Inteligencia avanzada y análisis cuantitativo para la Bolsa de Caracas. 
          Ejecución institucional al alcance del inversor privado.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-10 py-4 bg-telegram rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(36,161,222,0.4)] transition-all">
            Abrir Terminal Alfa
          </button>
          <button className="px-10 py-4 glass-card rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
            Explorar Datos
          </button>
        </div>
      </div>
    </section>
  );
}
