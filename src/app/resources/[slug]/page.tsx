import Link from "next/link";
import { notFound } from "next/navigation";
import StarterPackCTA from "@/components/StarterPackCTA";
import { articles } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <Link
            href="/resources"
            className="text-sm text-teal-700 hover:text-teal-800 mb-4 inline-block"
          >
            &larr; Back to Resource Library
          </Link>
          <span className="block text-sm font-medium text-teal-700 mb-2">
            {article.category}
          </span>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            {article.title}
          </h1>
          <p className="text-lg text-slate-600">{article.summary}</p>
        </div>
      </div>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          {/* Metadata bar */}
          {(article.whoFor || article.whenToUse) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {article.whoFor && (
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Who This Is For
                  </p>
                  <p className="text-sm text-slate-700">{article.whoFor}</p>
                </div>
              )}
              {article.whenToUse && (
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    When to Use This
                  </p>
                  <p className="text-sm text-slate-700">{article.whenToUse}</p>
                </div>
              )}
            </div>
          )}

          {/* Article sections */}
          <div className="space-y-10">
            {article.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">
                  {section.heading}
                </h2>
                <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Next step + Safety note */}
          {(article.nextStep || article.safetyNote) && (
            <div className="mt-12 space-y-4">
              {article.nextStep && (
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-teal-800 mb-2">
                    Start Here
                  </h3>
                  <p className="text-teal-700">{article.nextStep}</p>
                </div>
              )}
              {article.safetyNote && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-amber-800 mb-2">
                    Safety Note
                  </h3>
                  <p className="text-sm text-amber-700">{article.safetyNote}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <StarterPackCTA />
    </>
  );
}
