"use client"
import React, { useEffect, useState } from "react"
import { TrendingUp, Activity, ShieldCheck } from "lucide-react"

export default function LandingPage() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const TICKERS = ["ABC-A.CR", "BNC.CR", "BPV.CR", "BVCC.CR", "BVL.CR", "CCR.CR", "DOM.CR", "FNC.CR", "GZL.CR", "IVC-A.CR", "MPA.CR", "MVZ-A.CR", "RST.CR", "SVS.CR", "TDV-D.CR"]
      const proxy = "https://corsproxy.io/?"
      try {
        const res = await Promise.all(TICKERS.map(async (s) => {
          const r = await fetch(`${proxy}https://query1.finance.yahoo.com/v8/finance/chart/${s}?interval=1d&range=1d`)
          const j = await r.json()
          const m = j.chart.result[0].meta
          const p = m.regularMarketPrice
          const c = m.chartPreviousClose || m.previousClose || p
          const v = c !== 0 ? ((p - c) / c) * 100 : 0
          return { s: s.split('.')[0], p, v }
        }))
        setData(res.filter(r => r !== null))
      } catch (e) { console.error(e) }
    }
    fetchData(); setInterval(fetchData, 60000)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* CINTA DINÁMICA */}
      <div className="w-full bg-black/90 border-b border-white/10 h-10 flex items-center sticky top-0 z-[100] overflow-hidden backdrop-blur-md">
        <div className="animate-marquee">
          {[...data, ...data].map((item, i) => (
            <div key={i} className="inline-flex items-center px-6 space-x-2 border-r border-white/5 text-white uppercase">
              <span className="font-bold text-[10px] tracking-tighter">{item.s}</span>
              <span className="font-mono text-xs text-slate-300">{item.p.toLocaleString('es-VE', {minimumFractionDigits:2})}</span>
              <span className={`text-[10px] font-bold ${item.v >= 0 ? 'text-emerald-400' : 'text-red-500'}`}>
                {item.v >= 0 ? '▲' : '▼'} {Math.abs(item.v).toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2 text-2xl font-bold tracking-tighter brand-shadow">
          <div className="w-10 h-10 bg-[#24a1de] rounded-xl flex items-center justify-center text-white">AB</div>
          <span>Alfa Bursátil</span>
        </div>
        <button className="bg-[#24a1de] text-white px-6 py-2 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(36,161,222,0.4)]">
          Iniciar Terminal
        </button>
      </nav>

      {/* HERO SECTION */}
      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24 text-center">
        <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-8">
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">+499.3% Retorno en USD (Anual)</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
          Información en Tiempo Real del<br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Mercado de Valores de Venezuela
          </span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-16">
          <div className="p-10 bg-zinc-900/50 border border-white/5 rounded-3xl backdrop-blur-xl">
            <div className="text-5xl font-bold text-white mb-2">+499.3%</div>
            <div className="text-blue-400 text-sm font-bold uppercase">Retorno Anual en USD</div>
          </div>
          <div className="p-10 bg-zinc-900/50 border border-white/5 rounded-3xl backdrop-blur-xl">
            <div className="text-5xl font-bold text-white mb-2">+226%</div>
            <div className="text-blue-400 text-sm font-bold uppercase">Sobre el Índice BVC</div>
          </div>
        </div>
      </main>
    </div>
  )
}
