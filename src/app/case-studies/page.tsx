import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Newsletter from "@/components/Newsletter";
import { caseStudies } from "@/data/caseStudies";

export const metadata = {
  title: "Case Studies — AI for Rehab",
  description:
    "Real-world examples of AI adoption in rehab organizations.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        title="Case Studies"
        description="Real-world examples of AI adoption in rehab organizations. What worked, what didn't, and what we learned."
      />

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
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
