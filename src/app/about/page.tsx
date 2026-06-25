import Newsletter from "@/components/Newsletter";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "About — AI for Rehab",
  description:
    "Built by a rehab professional, for rehab professionals.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About AI for Rehab"
        description="Built by a rehab professional, for rehab professionals."
      />

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              About the Founder
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              AI for Rehab was created by Peter Jordan, PT, DPT — a physical
              therapist and healthcare operations leader with experience across
              multi-site clinic operations, leadership development,
              documentation workflows, outpatient growth, and new business line
              implementation.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Peter started exploring AI tools to solve real problems in rehab
              settings: reducing after-hours documentation time, improving
              leadership communication, streamlining clinic operations, and
              helping teams work more efficiently without adding headcount.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This site is the result of that work — a collection of practical
              resources, tested workflows, and honest assessments built for
              rehab professionals who want to use AI responsibly and
              effectively.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Why This Exists
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Most AI resources are built for tech audiences. They assume you
              have engineering support, unlimited time to experiment, and no
              compliance constraints. That does not describe most rehab
              organizations.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              AI for Rehab fills that gap. Every resource on this site is
              designed for people who work in clinics, manage teams, and operate
              under the realities of healthcare — payer rules, HIPAA
              requirements, limited budgets, and skeptical stakeholders.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The goal is not to convince you that AI is the future. The goal is
              to help you figure out where it actually helps, where it does not,
              and how to implement it without creating new problems.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              What This Is Not
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-slate-400 mt-1">—</span>
                This is not a technology company or AI vendor.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400 mt-1">—</span>
                This site does not sell AI products or accept paid placements.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400 mt-1">—</span>
                This is not medical, legal, billing, or compliance advice.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400 mt-1">—</span>
                This site does not claim that AI improves clinical outcomes —
                that is an area for future research.
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-slate-600 mb-2">
              Have a question, suggestion, or want to share how you are using AI
              in your rehab organization?
            </p>
            <p className="text-teal-700 font-medium">
              contact@aiforrehab.com
            </p>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
