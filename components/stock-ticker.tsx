"use client";
import React, { useEffect, useState } from "react";

export function StockTicker() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const f = async () => {
      const T = ["ABC-A.CR", "ARC-B.CR", "BNC.CR", "BPV.CR", "BVCC.CR", "BVL.CR", "CCP-B.CR", "CCR.CR", "CGQ.CR", "CRM-A.CR", "DOM.CR", "EFE.CR", "ENV.CR", "FNC.CR", "GMC-B.CR", "GZL.CR", "ICP-B.CR", "IVC-A.CR", "IVC-B.CR", "MPA.CR", "MTC-B.CR", "MVZ-A.CR", "MVZ-B.CR", "PCP-B.CR", "PIV-B.CR", "PGR.CR", "PTN.CR", "RST.CR", "RST-B.CR", "SVS.CR", "TDV-D.CR", "TPG.CR"];
      const proxy = "https://corsproxy.io/?";
      try {
        const res = await Promise.all(T.map(async (s) => {
          const r = await fetch(`${proxy}https://query1.finance.yahoo.com/v8/finance/chart/${s}?interval=1d&range=1d`);
          const j = await r.json();
          const m = j.chart.result[0].meta;
          const p = m.regularMarketPrice;
          const c = m.chartPreviousClose || m.previousClose || p;
          return { s: s.split('.')[0], p, v: c !== 0 ? ((p - c) / c) * 100 : 0 };
        }));
        setData(res.filter(r => r !== null));
      } catch (e) { console.log(e); }
    };
    f(); setInterval(f, 60000);
  }, []);

  return (
    <div className="w-full bg-black/80 border-b border-white/10 h-10 flex items-center sticky top-0 z-[100] overflow-hidden backdrop-blur-md">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...data, ...data].map((d, i) => (
          <div key={i} className="inline-flex items-center px-6 space-x-2 border-r border-white/5 text-white">
            <span className="font-bold text-[10px] uppercase tracking-tighter">{d.s}</span>
            <span className="font-mono text-xs">{d.p.toLocaleString('es-VE', {minimumFractionDigits: 2})}</span>
            <span className={`text-[10px] font-bold ${d.v >= 0 ? 'text-emerald-400' : 'text-red-500'}`}>
              {d.v >= 0 ? '▲' : '▼'} {Math.abs(d.v).toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; animation: marquee 40s linear infinite; }
      `}</style>
    </div>
  );
}
