"use client";
import React, { useEffect, useState } from "react";

export function StockTicker() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const TICKERS = ["ABC-A.CR", "BNC.CR", "BPV.CR", "BVCC.CR", "BVL.CR", "CCR.CR", "DOM.CR", "FNC.CR", "GZL.CR", "IVC-A.CR", "MPA.CR", "MVZ-A.CR", "RST.CR", "SVS.CR", "TDV-D.CR"];
      const proxy = "https://corsproxy.io/?";
      try {
        const res = await Promise.all(TICKERS.map(async (s) => {
          const r = await fetch(`${proxy}https://query1.finance.yahoo.com/v8/finance/chart/${s}?interval=1d&range=1d`);
          const j = await r.json();
          const m = j.chart.result[0].meta;
          const p = m.regularMarketPrice;
          const c = m.chartPreviousClose || m.previousClose || p;
          const v = c !== 0 ? ((p - c) / c) * 100 : 0;
          return { s: s.split('.')[0], p, v };
        }));
        setData(res.filter(r => r !== null));
      } catch (e) { console.error(e); }
    };
    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  if (data.length === 0) return null;

  return (
    <div className="w-full bg-black/90 border-b border-white/10 h-10 flex items-center sticky top-0 z-[100] overflow-hidden backdrop-blur-md">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...data, ...data].map((item, i) => (
          <div key={i} className="inline-flex items-center px-6 space-x-2 border-r border-white/5 text-white uppercase tracking-tighter">
            <span className="font-bold text-[10px]">{item.s}</span>
            <span className="font-mono text-xs text-slate-300">{item.p.toLocaleString('es-VE', {minimumFractionDigits:2})}</span>
            <span className={`text-[10px] font-bold ${item.v >= 0 ? 'text-emerald-400' : 'text-red-500'}`}>
              {item.v >= 0 ? '▲' : '▼'} {Math.abs(item.v).toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: max-content; animation: marquee 50s linear infinite; }
      `}</style>
    </div>
  );
}
