import Link from "next/link";
import { notFound } from "next/navigation";
import Newsletter from "@/components/Newsletter";
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-10">
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
      </section>

      <Newsletter />
    </>
  );
}
