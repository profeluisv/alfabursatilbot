"use client";
import React, { useEffect, useState } from "react";

export function StockTicker() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const TICKERS = ["ABC-A.CR", "ARC-B.CR", "BNC.CR", "BPV.CR", "BVCC.CR", "BVL.CR", "CCP-B.CR", "CCR.CR", "CGQ.CR", "CRM-A.CR", "DOM.CR", "EFE.CR", "ENV.CR", "FNC.CR", "GMC-B.CR", "GZL.CR", "ICP-B.CR", "IVC-A.CR", "IVC-B.CR", "MPA.CR", "MTC-B.CR", "MVZ-A.CR", "MVZ-B.CR", "PCP-B.CR", "PIV-B.CR", "PGR.CR", "PTN.CR", "RST.CR", "RST-B.CR", "SVS.CR", "TDV-D.CR", "TPG.CR"];
      const proxy = "https://corsproxy.io/?";
      try {
        const results = await Promise.all(TICKERS.map(async (s) => {
          const res = await fetch(`${proxy}https://query1.finance.yahoo.com/v8/finance/chart/${s}?interval=1d&range=1d`);
          const j = await res.json();
          const m = j.chart.result[0].meta;
          const p = m.regularMarketPrice;
          const c = m.chartPreviousClose || m.previousClose || p;
          const varP = c !== 0 ? ((p - c) / c) * 100 : 0;
          return { s: s.split('.')[0], p, varP };
        }));
        setData(results.filter(r => r !== null));
      } catch (e) { console.error(e); }
    };
    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black/90 border-b border-white/10 h-10 flex items-center sticky top-0 z-[100] overflow-hidden backdrop-blur-md">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...data, ...data].map((item, i) => (
          <div key={i} className="inline-flex items-center px-6 space-x-2 border-r border-white/5">
            <span className="text-white font-bold text-[10px] uppercase">{item.s}</span>
            <span className="text-slate-300 font-mono text-xs">
              {item.p.toLocaleString('es-VE', {minimumFractionDigits:2})}
            </span>
            <span className={`text-[10px] font-bold ${item.varP >= 0 ? 'text-emerald-400' : 'text-red-500'}`}>
              {item.varP >= 0 ? '▲' : '▼'} {Math.abs(item.varP).toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; animation: marquee 45s linear infinite; }
      `}</style>
    </div>
  );
}
