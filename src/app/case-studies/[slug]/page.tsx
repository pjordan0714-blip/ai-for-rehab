import Link from "next/link";
import { notFound } from "next/navigation";
import Newsletter from "@/components/Newsletter";
import { caseStudies } from "@/data/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const sections = [
    { label: "The Problem", content: study.problem },
    { label: "The Approach", content: study.workflow },
    { label: "Expected Outcomes", content: study.results },
    { label: "Lessons Learned", content: study.lessons },
  ];

  return (
    <>
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <Link
            href="/case-studies"
            className="text-sm text-teal-700 hover:text-teal-800 mb-4 inline-block"
          >
            &larr; Back to Implementation Examples
          </Link>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            {study.title}
          </h1>
          <p className="text-lg text-slate-600 mb-4">{study.summary}</p>
          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-white border border-slate-200 text-slate-600 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-amber-800">
              This is an illustrative implementation example, not a published
              case study. It reflects common patterns and realistic outcomes
              based on operational experience in rehab settings.
            </p>
          </div>

          {sections.map((s) => (
            <div key={s.label}>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                {s.label}
              </h2>
              <p className="text-slate-600 leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
