import PageHeader from "@/components/PageHeader";
import Newsletter from "@/components/Newsletter";
import { toolCategories } from "@/data/tools";

export const metadata = {
  title: "AI Tools for Rehab — AI for Rehab",
  description:
    "A practical comparison of AI tool categories relevant to rehab settings — what they do, what they cost, and whether they're worth your time.",
};

const rehabFitColors: Record<string, string> = {
  Strong: "bg-green-100 text-green-800",
  Moderate: "bg-yellow-100 text-yellow-800",
  Limited: "bg-slate-100 text-slate-600",
};

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        title="AI Tools for Rehab"
        description="A practical look at the AI tool categories that matter for rehab operations. No sponsored placements, no affiliate links — just an honest assessment of what's useful and what's not worth your time yet."
      />

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-16">
          {toolCategories.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                {cat.category}
              </h2>
              <p className="text-slate-600 mb-6">{cat.description}</p>

              <div className="space-y-6">
                {cat.tools.map((tool) => (
                  <div
                    key={tool.type}
                    className="bg-white border border-slate-200 rounded-xl overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <h3 className="text-lg font-semibold text-slate-800">
                          {tool.type}
                        </h3>
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${rehabFitColors[tool.rehabFit]}`}
                        >
                          Rehab Fit: {tool.rehabFit}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="bg-slate-50 rounded-lg p-3">
                          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                            Best For
                          </p>
                          <p className="text-sm text-slate-700">
                            {tool.bestFor}
                          </p>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-3">
                          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                            PHI Safe?
                          </p>
                          <p className="text-sm text-slate-700">
                            {tool.phiSafe}
                          </p>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-3">
                          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                            Cost Range
                          </p>
                          <p className="text-sm text-slate-700">
                            {tool.costRange}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-slate-600">{tool.notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold text-slate-800 mb-2">
              About these comparisons
            </h3>
            <p className="text-sm text-slate-600">
              This page compares tool categories, not specific products. AI for
              Rehab does not accept paid placements, sponsored reviews, or
              affiliate commissions. Cost ranges are approximate and change
              frequently. &quot;PHI Safe&quot; reflects general availability of
              BAAs and HIPAA-compliant configurations — always verify with your
              compliance team before using any tool with patient data.
            </p>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
