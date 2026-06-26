interface CalloutProps {
  type: "reminder" | "best-use" | "careful";
  children: React.ReactNode;
}

const styles = {
  reminder: {
    border: "border-teal-200",
    bg: "bg-teal-50",
    label: "Clinician Reminder",
    labelColor: "text-teal-700",
    icon: "💡",
  },
  "best-use": {
    border: "border-blue-200",
    bg: "bg-blue-50",
    label: "Best Use",
    labelColor: "text-blue-700",
    icon: "✦",
  },
  careful: {
    border: "border-amber-200",
    bg: "bg-amber-50",
    label: "Be Careful",
    labelColor: "text-amber-700",
    icon: "⚠",
  },
};

export default function Callout({ type, children }: CalloutProps) {
  const s = styles[type];
  return (
    <div className={`${s.bg} ${s.border} border rounded-xl p-5`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">{s.icon}</span>
        <span className={`text-sm font-semibold ${s.labelColor} uppercase tracking-wider`}>{s.label}</span>
      </div>
      <p className="text-slate-700 text-sm leading-relaxed">{children}</p>
    </div>
  );
}
