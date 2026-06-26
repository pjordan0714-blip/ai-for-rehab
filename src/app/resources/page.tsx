import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import StarterPackCTA from "@/components/StarterPackCTA";
import Callout from "@/components/ui/Callout";
import { resourceCategories } from "@/data/resources";
import { articles } from "@/data/articles";
import { ShieldIcon, LaptopIcon, ChartIcon, TeamIcon, ChecklistIcon, ClipboardIcon, PersonIcon, SpeechBubbleIcon, BandIcon, GraduationIcon, DollarIcon, WhiteboardIcon } from "@/components/ui/Icons";

export const metadata = {
  title: "Resource Library — AI for Rehab",
  description:
    "Practical AI guides, policy templates, and workflow breakdowns for rehab professionals.",
};

const featuredArticles = articles.filter((a) => a.featured);
const otherArticles = articles.filter((a) => !a.featured);

const guideIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "ai-use-policy-starter-guide": ShieldIcon,
  "ai-scribe-rollout-guide": LaptopIcon,
  "clinic-director-weekly-metrics-guide": ChartIcon,
  "regional-director-ai-workflow-guide": TeamIcon,
  "what-rehab-teams-should-never-put-into-ai": ChecklistIcon,
};

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "documentation": ClipboardIcon,
  "clinic-operations": ChartIcon,
  "leadership": TeamIcon,
  "marketing": SpeechBubbleIcon,
  "patient-education": PersonIcon,
  "staff-training": GraduationIcon,
  "ai-tools": LaptopIcon,
  "compliance-safety": ShieldIcon,
  "prompt-library": WhiteboardIcon,
  "case-studies": ClipboardIcon,
};

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
          <p className="text-slate-600">
            Start here if you are trying to create basic AI rules, roll out an
            AI scribe, review clinic metrics with AI, support multiple clinic
            locations, or train staff on what should never be entered into AI
            tools.
          </p>
        </div>
      </section>

      {/* Callout */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <Callout type="reminder">
            AI can save time, but it should not replace clinical judgment,
            documentation review, compliance oversight, or leadership
            accountability. Every output should be reviewed by a qualified human.
          </Callout>
        </div>
      </section>

      {/* Cornerstone Guides */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">
            Cornerstone Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredArticles.map((article) => {
              const Icon = guideIcons[article.slug] || ClipboardIcon;
              return (
                <Link
                  key={article.slug}
                  href={`/resources/${article.slug}`}
                  className="group flex gap-5 p-6 bg-white border-2 border-slate-200 rounded-xl hover:border-teal-400 hover:shadow-md transition-all"
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-teal-600" />
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                      {article.category}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-800 mt-2 mb-2 group-hover:text-teal-700 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-slate-600">{article.summary}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* More Guides */}
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
                  className="group block p-5 bg-white border border-slate-200 rounded-xl hover:border-teal-300 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                    {article.category}
                  </span>
                  <h3 className="text-base font-semibold text-slate-800 mt-2 mb-2 group-hover:text-teal-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-600">{article.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Browse by Topic */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">
            Browse by Topic
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resourceCategories.map((cat) => {
              const Icon = categoryIcons[cat.slug] || ClipboardIcon;
              return (
                <div
                  key={cat.slug}
                  className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl"
                >
                  <div className="shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-slate-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-slate-600">{cat.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <StarterPackCTA />
    </>
  );
}
