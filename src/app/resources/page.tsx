import PageHeader from "@/components/PageHeader";
import Newsletter from "@/components/Newsletter";
import { resourceCategories } from "@/data/resources";

export const metadata = {
  title: "Resource Library — AI for Rehab",
  description:
    "Browse practical AI resources organized by topic for rehab professionals.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="Resource Library"
        description="Browse practical AI resources organized by topic. Each category contains guides, templates, and workflows tested in real rehab settings."
      />

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceCategories.map((cat) => (
              <div
                key={cat.slug}
                className="p-6 bg-white border border-slate-200 rounded-xl hover:border-teal-300 hover:shadow-md transition-all"
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
