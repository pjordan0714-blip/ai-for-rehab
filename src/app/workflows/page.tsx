import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Newsletter from "@/components/Newsletter";
import { ChartIcon, LaptopIcon, TeamIcon, PersonIcon, GraduationIcon } from "@/components/ui/Icons";

export const metadata = {
  title: "Practical Workflows — AI for Rehab",
  description: "Specific, problem-focused AI workflows for rehab clinic directors, regional directors, and front office teams.",
};

const workflows = [
  {
    title: "Low Visits Are Not Always a Referral Problem",
    description: "A diagnostic framework for clinic directors to identify whether low visits are caused by referral volume, access, scheduling, cancellations, productivity, or ramp-up.",
    href: "/workflows/low-visits-diagnostic",
    Icon: ChartIcon,
    linkedin: "\"If clinic visits are down, do not immediately assume physicians stopped sending patients.\"",
  },
  {
    title: "AI Scribe Rollouts Fail When They Are Treated Like Software Installs",
    description: "A rollout checklist covering champions, guardrails, training, adoption tracking, note quality, and the decision to expand or pause.",
    href: "/workflows/ai-scribe-rollout-checklist",
    Icon: LaptopIcon,
    linkedin: "\"If your AI scribe rollout is failing, it may not be the software.\"",
  },
  {
    title: "Turn a Clinic Visit Into a Follow-Up Plan",
    description: "A workflow for regional directors to convert scattered visit notes into priorities, commitments, a follow-up email, and a next-visit checklist.",
    href: "/workflows/clinic-visit-follow-up",
    Icon: TeamIcon,
    linkedin: "\"Regional leadership breaks down when follow-up lives in scattered notes.\"",
  },
  {
    title: "New Clinician Ramp-Up Should Not Be Guesswork",
    description: "A 30-day structured plan for new clinician schedule build, documentation, mentorship, and weekly check-ins.",
    href: "/workflows/new-clinician-ramp-up",
    Icon: GraduationIcon,
    linkedin: "\"New clinician ramp-up should not be vibes-based.\"",
  },
  {
    title: "Front Desk AI Workflows That Do Not Require Patient Data",
    description: "Scripts for scheduling, cancellation follow-up, no-show recovery, reactivation, and referral source communication — zero PHI required.",
    href: "/workflows/front-desk-scripts",
    Icon: PersonIcon,
    linkedin: "\"Front desk teams are one of the best low-risk AI use cases in rehab.\"",
  },
];

export default function WorkflowsPage() {
  return (
    <>
      <PageHeader
        title="Practical Workflows"
        description="Specific, problem-focused AI workflows for rehab clinics. Each one starts with a real problem and gives you a prompt, checklist, or decision framework you can use today."
      />

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-8">
          <p className="text-slate-600">
            These workflows are designed to be landing pages — one specific problem, one practical tool. Each includes a copy-and-paste prompt, what information to gather first, what good output looks like, common mistakes, and related guides. Use de-identified information only.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
          <div className="space-y-6">
            {workflows.map((w) => (
              <Link
                key={w.href}
                href={w.href}
                className="group flex gap-5 p-6 bg-white border-2 border-slate-200 rounded-xl hover:border-teal-400 hover:shadow-md transition-all block"
              >
                <div className="shrink-0 hidden sm:block">
                  <div className="w-12 h-12 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center">
                    <w.Icon className="w-6 h-6 text-teal-600" />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-400 italic mb-2">{w.linkedin}</p>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-teal-700 transition-colors">
                    {w.title}
                  </h3>
                  <p className="text-sm text-slate-600">{w.description}</p>
                  <span className="inline-block mt-3 text-sm font-medium text-teal-700 group-hover:text-teal-800">
                    Open workflow &rarr;
                  </span>
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
