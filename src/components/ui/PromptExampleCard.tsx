interface PromptExampleCardProps {
  useCase: string;
  prompt: string;
  helpsWith: string;
  reminder?: string;
}

export default function PromptExampleCard({ useCase, prompt, helpsWith, reminder }: PromptExampleCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      <div className="bg-teal-600 px-5 py-2">
        <span className="text-xs font-semibold text-teal-100 uppercase tracking-wider">{useCase}</span>
      </div>
      <div className="p-5 space-y-4">
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
          <p className="text-sm text-slate-700 font-mono leading-relaxed">{prompt}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Helps with</p>
          <p className="text-sm text-slate-600">{helpsWith}</p>
        </div>
        {reminder && (
          <div className="bg-amber-50 border border-amber-100 rounded-lg px-4 py-2">
            <p className="text-xs text-amber-700">{reminder}</p>
          </div>
        )}
      </div>
    </div>
  );
}
