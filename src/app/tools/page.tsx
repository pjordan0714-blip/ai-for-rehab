import PageHeader from "@/components/PageHeader";
import Newsletter from "@/components/Newsletter";
import { aiTools } from "@/data/tools";

export const metadata = {
  title: "AI Tools for Rehab — AI for Rehab",
  description:
    "Reviews and observations on AI tools relevant to rehab settings.",
};

const statusColors: Record<string, string> = {
  Tested: "bg-green-100 text-green-800",
  Watching: "bg-yellow-100 text-yellow-800",
  "Not Yet Tested": "bg-slate-100 text-slate-600",
};

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        title="AI Tools for Rehab"
        description="Reviews and observations on AI tools relevant to rehab settings. Status reflects our direct experience — not endorsements."
      />

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiTools.map((tool) => (
              <div
                key={tool.slug}
                className="p-6 bg-white border border-slate-200 rounded-xl"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-slate-500">{tool.category}</p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded ${statusColors[tool.status]}`}
                  >
                    {tool.status}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  <span className="font-medium">Best for:</span>{" "}
                  {tool.bestFor}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-green-700 mb-2">
                      Pros
                    </h4>
                    <ul className="space-y-1">
                      {tool.pros.map((pro) => (
                        <li
                          key={pro}
                          className="text-sm text-slate-600 flex items-start gap-2"
                        >
                          <span className="text-green-500 mt-0.5">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-amber-700 mb-2">
                      Cautions
                    </h4>
                    <ul className="space-y-1">
                      {tool.cautions.map((c) => (
                        <li
                          key={c}
                          className="text-sm text-slate-600 flex items-start gap-2"
                        >
                          <span className="text-amber-500 mt-0.5">!</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-xl text-center">
            <p className="text-sm text-slate-600">
              Tool names are kept generic intentionally. AI for Rehab does not
              accept paid placements or endorsements. Status reflects direct
              experience only.
            </p>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
