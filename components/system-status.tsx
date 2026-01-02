import { Activity, ShieldCheck, Zap } from "lucide-react";

export function SystemStatus() {
  const stats = [
    { label: "Uptime del Sistema", value: "99.98%", icon: <Zap className="w-4 h-4" /> },
    { label: "Latencia de Datos", value: "140ms", icon: <Activity className="w-4 h-4" /> },
    { label: "Seguridad Bancaria", value: "AES-256", icon: <ShieldCheck className="w-4 h-4" /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto -mt-12 px-6 relative z-20">
      {stats.map((s, i) => (
        <div key={i} className="glass-card p-4 rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-telegram bg-telegram/10 p-2 rounded-lg">{s.icon}</div>
            <span className="text-xs text-white/40 font-bold uppercase">{s.label}</span>
          </div>
          <span className="font-mono text-sm text-telegram">{s.value}</span>
        </div>
      ))}
    </div>
  );
}
