import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Newsletter from "@/components/Newsletter";
import { caseStudies } from "@/data/caseStudies";

export const metadata = {
  title: "Implementation Examples — AI for Rehab",
  description:
    "Illustrative examples of AI adoption in rehab organizations — what works, what doesn't, and what to watch for.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        title="Implementation Examples"
        description="These are illustrative scenarios based on common patterns in rehab operations — not published case studies with verified data. They are designed to help you think through what AI adoption actually looks like in practice."
      />

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-10">
            <p className="text-sm text-slate-600">
              <span className="font-semibold">Note:</span> These examples are
              illustrative, not published research. They reflect common
              scenarios and realistic outcomes based on operational experience
              in rehab settings. Specific numbers are representative estimates,
              not verified results from a single organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="block p-6 bg-white border border-slate-200 rounded-xl hover:border-teal-300 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {study.title}
                </h3>
                <p className="text-slate-600 mb-4">{study.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
