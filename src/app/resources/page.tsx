import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Newsletter from "@/components/Newsletter";
import { resourceCategories } from "@/data/resources";
import { articles } from "@/data/articles";

export const metadata = {
  title: "Resource Library — AI for Rehab",
  description:
    "Practical AI guides, policy templates, and workflow breakdowns for rehab professionals.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="Resource Library"
        description="Guides, policy templates, and workflow breakdowns built for rehab operations. Start with the featured articles below, or browse by topic."
      />

      {/* Featured Articles */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">
            Featured Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}`}
                className="block p-6 bg-white border border-slate-200 rounded-xl hover:border-teal-300 hover:shadow-md transition-all"
              >
                <span className="text-xs font-medium text-teal-700 bg-teal-50 px-2 py-1 rounded">
                  {article.category}
                </span>
                <h3 className="text-lg font-semibold text-slate-800 mt-3 mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-600">{article.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">
            Browse by Topic
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceCategories.map((cat) => (
              <div
                key={cat.slug}
                className="p-6 bg-white border border-slate-200 rounded-xl"
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-slate-600">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
