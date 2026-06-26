import { ArrowRightIcon } from "./Icons";

interface WorkflowDiagramProps {
  title?: string;
  steps: string[];
}

export default function WorkflowDiagram({ title, steps }: WorkflowDiagramProps) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
      {title && (
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-5 text-center">{title}</h3>
      )}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 shadow-sm text-center">
              {step}
            </div>
            {i < steps.length - 1 && (
              <ArrowRightIcon className="w-4 h-4 text-teal-500 shrink-0 hidden sm:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
