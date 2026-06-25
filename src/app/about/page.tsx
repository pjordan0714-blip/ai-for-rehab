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
        description="Built by someone who has actually worked inside clinics, managed teams, and sat through the same meetings you sit through."
      />

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              About the Founder
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              AI for Rehab was created by{" "}
              <span className="font-semibold">Peter Jordan, PT, DPT</span> — a
              physical therapist and healthcare operations leader who has spent
              his career in outpatient rehab.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Peter has managed multi-site clinic operations, built and launched
              de novo clinics, developed new service lines, and led teams
              through the day-to-day realities of running rehab businesses — from
              hiring and onboarding to P&amp;L management, documentation audits,
              payer negotiations, and clinician development. He has built
              onboarding programs from scratch, led leadership development
              initiatives, and worked closely with regional and executive teams
              on growth strategy.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              He started testing AI tools because he kept running into the same
              problems: clinicians charting until 7 PM, directors spending half
              their week on emails and reports, regional leaders who couldn&apos;t
              get to their clinics because they were buried in admin work, and
              communication that was inconsistent from one site to the next.
            </p>
            <p className="text-slate-600 leading-relaxed">
              AI didn&apos;t solve all of those problems. But it made a real
              difference in some of them — and this site is where Peter shares
              what&apos;s working, what isn&apos;t, and what rehab leaders should
              actually pay attention to.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Why This Exists
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Most AI content is written for tech companies. It assumes you have
              an engineering team, a data science budget, and no compliance
              constraints. That does not describe a single rehab company Peter
              has ever worked with.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Rehab leaders need resources that account for HIPAA, payer rules,
              clinician skepticism, limited IT support, and the reality that
              most clinic directors are already working 50-hour weeks before
              you ask them to learn a new tool.
            </p>
            <p className="text-slate-600 leading-relaxed">
              AI for Rehab exists to fill that gap. The goal is not to convince
              you that AI is the future. It&apos;s to help you figure out where
              AI actually helps in your specific role, where it creates more
              problems than it solves, and how to implement it without burning
              trust with your team.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              What This Is Not
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-slate-400 mt-1">—</span>
                This is not a technology company or AI vendor. Nobody here is
                trying to sell you software.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400 mt-1">—</span>
                This site does not accept paid placements, sponsored reviews,
                or affiliate commissions from AI tool companies.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400 mt-1">—</span>
                Nothing on this site is medical, legal, billing, or compliance
                advice. Consult qualified professionals for those areas.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400 mt-1">—</span>
                This site does not claim that AI improves clinical outcomes.
                That is a question for researchers, not an operations blog.
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-slate-600 mb-2">
              Have a question, want to share how you&apos;re using AI in your
              rehab organization, or just want to tell me I&apos;m wrong about
              something? I&apos;m happy to hear it.
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
