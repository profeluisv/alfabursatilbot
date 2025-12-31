"use client";
import React, { useEffect, useState } from "react";

export default function HomePage() {
  const [datos, setDatos] = useState<any[]>([]);
  useEffect(() => {
    const f = async () => {
      const T = ["ABC-A.CR", "ARC-B.CR", "BNC.CR", "BPV.CR", "BVCC.CR", "BVL.CR", "CCP-B.CR", "CCR.CR", "CGQ.CR", "CRM-A.CR", "DOM.CR", "EFE.CR", "ENV.CR", "FNC.CR", "GMC-B.CR", "GZL.CR", "ICP-B.CR", "IVC-A.CR", "IVC-B.CR", "MPA.CR", "MTC-B.CR", "MVZ-A.CR", "MVZ-B.CR", "PCP-B.CR", "PIV-B.CR", "PGR.CR", "PTN.CR", "RST.CR", "RST-B.CR", "SVS.CR", "TDV-D.CR", "TPG.CR"];
      try {
        const res = await Promise.all(T.map(async (s) => {
          const r = await fetch(`https://corsproxy.io/?https://query1.finance.yahoo.com/v8/finance/chart/${s}?interval=1d&range=1d`);
          const j = await r.json();
          const m = j.chart.result[0].meta;
          const p = m.regularMarketPrice;
          const c = m.chartPreviousClose || m.previousClose || p;
          return { s: s.split('.')[0], p, v: c !== 0 ? ((p - c) / c) * 100 : 0 };
        }));
        setDatos(res.filter(r => r !== null));
      } catch (e) { console.log(e); }
    };
    f(); setInterval(f, 60000);
  }, []);

  return (
    <div style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
      <div style={{ width: '100%', backgroundColor: 'black', borderBottom: '1px solid #333', height: '40px', display: 'flex', alignItems: 'center', overflow: 'hidden', position: 'fixed', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'marquee 40s linear infinite' }}>
          {[...datos, ...datos].map((d, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '0 20px', borderRight: '1px solid #222' }}>
              <span style={{ fontWeight: 'bold', fontSize: '11px' }}>{d.s}</span>
              <span style={{ margin: '0 10px', fontSize: '13px', color: '#ccc' }}>{d.p.toLocaleString('es-VE')}</span>
              <span style={{ color: d.v >= 0 ? '#10b981' : '#f43f5e', fontSize: '11px' }}>
                {d.v >= 0 ? '▲' : '▼'} {Math.abs(d.v).toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ textAlign: 'center', padding: '150px 20px' }}>
        <h1 style={{ fontSize: '60px', fontWeight: 'bold' }}>Alfa Bursátil</h1>
        <p style={{ color: '#94a3b8', fontSize: '20px' }}>Monitor de Acciones de la BVC en Tiempo Real</p>
      </div>
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}
