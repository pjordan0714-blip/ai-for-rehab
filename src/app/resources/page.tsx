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

const featuredArticles = articles.filter((a) => a.featured);
const otherArticles = articles.filter((a) => !a.featured);

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="Resource Library"
        description="Practical guides, policy templates, and workflow breakdowns built for rehab operations — not generic AI advice."
      />

      {/* Intro */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-8">
          <p className="text-slate-600 mb-3">
            The AI for Rehab Resource Library is built for practical,
            de-identified workflows in rehab settings. These guides are
            designed to help clinicians, clinic directors, regional leaders,
            and rehab organizations use AI more clearly and safely.
          </p>
          <p className="text-slate-600 mb-3">
            Start here if you are trying to create basic AI rules, roll out an
            AI scribe, review clinic metrics with AI, support multiple clinic
            locations, or train staff on what should never be entered into AI
            tools.
          </p>
          <p className="text-slate-600">
            AI can save time, but it should not replace clinical judgment,
            documentation review, compliance oversight, or leadership
            accountability.
          </p>
        </div>
      </section>

      {/* Featured Cornerstone Guides */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">
            Cornerstone Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}`}
                className="block p-6 bg-white border-2 border-slate-200 rounded-xl hover:border-teal-400 hover:shadow-md transition-all"
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

      {/* Additional Guides */}
      {otherArticles.length > 0 && (
        <section className="bg-slate-50 border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">
              More Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/resources/${article.slug}`}
                  className="block p-6 bg-white border border-slate-200 rounded-xl hover:border-teal-300 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-teal-700 bg-teal-50 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <h3 className="text-base font-semibold text-slate-800 mt-3 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-600">{article.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Browse by Category */}
      <section className={otherArticles.length > 0 ? "bg-white" : "bg-slate-50 border-y border-slate-200"}>
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
