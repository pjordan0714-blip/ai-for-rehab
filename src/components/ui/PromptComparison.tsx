interface PromptComparisonProps {
  bad: string;
  better: string;
  why: string;
}

export default function PromptComparison({ bad, better, why }: PromptComparisonProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="rounded-xl border-2 border-red-200 bg-red-50/50 p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">✕</span>
          <span className="text-sm font-semibold text-red-700 uppercase tracking-wider">Vague prompt</span>
        </div>
        <p className="text-slate-700 text-sm italic">&ldquo;{bad}&rdquo;</p>
      </div>
      <div className="rounded-xl border-2 border-green-200 bg-green-50/50 p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold">✓</span>
          <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">Better prompt</span>
        </div>
        <p className="text-slate-700 text-sm italic">&ldquo;{better}&rdquo;</p>
      </div>
      <div className="md:col-span-2 bg-slate-50 border border-slate-200 rounded-lg px-5 py-3">
        <p className="text-sm text-slate-600"><span className="font-semibold text-slate-700">Why it&apos;s better:</span> {why}</p>
      </div>
    </div>
  );
}
