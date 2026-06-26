import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import StarterPackCTA from "@/components/StarterPackCTA";
import { roleUseCases } from "@/data/useCases";
import { ChartIcon, TeamIcon, ClipboardIcon, PersonIcon, SpeechBubbleIcon, DollarIcon, GraduationIcon } from "@/components/ui/Icons";

export const metadata = {
  title: "AI Use Cases by Role — AI for Rehab",
  description:
    "Practical AI workflows for rehab professionals, organized by role — clinicians, clinic directors, regional directors, front office, and executives.",
};

const featuredRoles = [
  {
    title: "AI for Clinic Directors",
    href: "/use-cases/clinic-directors",
    description: "Turn weekly clinic metrics, staffing context, schedule issues, cancellations, and team communication into a clear action plan. Includes diagnostic frameworks, Monday morning planning, coaching prep, front desk scripts, and new clinician ramp-up.",
    Icon: ChartIcon,
  },
  {
    title: "AI for Regional Directors",
    href: "/use-cases/regional-directors",
    description: "Organize multi-site clinic reviews, director coaching, clinic visit follow-up, focus clinic plans, initiative rollouts, and AI documentation adoption tracking. Built for leaders managing multiple locations.",
    Icon: TeamIcon,
  },
];

const futureRoles = [
  { title: "AI for Clinicians", description: "Patient education, documentation drafting, clinical reasoning, HEP creation, and visit prep.", Icon: ClipboardIcon },
  { title: "AI for Front Office Teams", description: "Phone scripts, scheduling workflows, cancellation management, referral tracking, and patient FAQ.", Icon: PersonIcon },
  { title: "AI for Rehab Executives", description: "Strategic planning, board materials, market analysis, acquisition support, and organization-wide AI adoption.", Icon: TeamIcon },
  { title: "AI for Marketing & Referral Development", description: "Physician outreach, social media content, community engagement, and referral source tracking.", Icon: SpeechBubbleIcon },
  { title: "AI for Cash Services & New Programs", description: "Service line launch checklists, pricing, scripts, staff training, and tracking for dry needling, shockwave, wellness, and performance.", Icon: DollarIcon },
  { title: "AI for Staff Training & Mentorship", description: "Onboarding programs, competency frameworks, residency support, CI workflows, and mentorship tools.", Icon: GraduationIcon },
];

const roleIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "clinician": ClipboardIcon,
  "clinic-director": ChartIcon,
  "regional-director": TeamIcon,
  "owner-executive": TeamIcon,
  "marketing-lead": SpeechBubbleIcon,
  "admin-front-office": PersonIcon,
};

export default function UseCasesPage() {
  return (
    <>
      <PageHeader
        title="AI Use Cases by Role"
        description="AI is most useful in rehab when it is tied to a real role, a real workflow, and a real decision."
      />

      {/* Intro */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-8">
          <p className="text-slate-600 mb-3">
            A clinician, clinic director, regional director, front office team
            member, and executive do not need the same prompts. Start with your
            role. Use de-identified information. Review the output. Then decide
            what actually fits your clinic or organization.
          </p>
        </div>
      </section>

      {/* Practical Workflows */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">Practical Workflows</h2>
          <p className="text-slate-600 mb-6">Problem-focused workflows with copy-and-paste prompts you can use today.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {[
              { title: "Low Visits Diagnostic", href: "/workflows/low-visits-diagnostic", desc: "Diagnose whether low visits are caused by referrals, access, scheduling, cancellations, or ramp-up." },
              { title: "AI Scribe Rollout Checklist", href: "/workflows/ai-scribe-rollout-checklist", desc: "Plan a documentation rollout around adoption, quality, and trust." },
              { title: "Clinic Visit Follow-Up", href: "/workflows/clinic-visit-follow-up", desc: "Turn scattered visit notes into a structured action plan." },
              { title: "New Clinician Ramp-Up", href: "/workflows/new-clinician-ramp-up", desc: "Create a 30-day ramp-up plan with weekly expectations." },
              { title: "Front Desk Scripts", href: "/workflows/front-desk-scripts", desc: "Safe scripts for scheduling, cancellations, and referral follow-up." },
            ].map((w) => (
              <Link key={w.href} href={w.href} className="group p-5 bg-slate-50 border border-slate-200 rounded-xl hover:border-teal-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-slate-800 mb-1 group-hover:text-teal-700 transition-colors text-sm">{w.title}</h3>
                <p className="text-xs text-slate-600">{w.desc}</p>
              </Link>
            ))}
            <Link href="/workflows" className="group p-5 bg-teal-50 border border-teal-200 rounded-xl hover:border-teal-400 hover:shadow-md transition-all flex items-center justify-center">
              <span className="text-sm font-medium text-teal-700 group-hover:text-teal-800">View all workflows &rarr;</span>
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 mb-8">In-Depth Role Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredRoles.map((role) => (
              <Link
                key={role.href}
                href={role.href}
                className="group flex gap-5 p-6 bg-white border-2 border-slate-200 rounded-xl hover:border-teal-400 hover:shadow-md transition-all"
              >
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center">
                    <role.Icon className="w-6 h-6 text-teal-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-teal-700 transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-sm text-slate-600">{role.description}</p>
                  <span className="inline-block mt-3 text-sm font-medium text-teal-700 group-hover:text-teal-800">
                    View full guide &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Roles */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">More Roles Coming Soon</h2>
          <p className="text-slate-600 mb-8">These role-specific guides are in development.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {futureRoles.map((role) => (
              <div
                key={role.title}
                className="p-5 bg-white border border-slate-200 rounded-xl opacity-80"
              >
                <role.Icon className="w-6 h-6 text-slate-400 mb-3" />
                <h3 className="font-semibold text-slate-700 mb-1">{role.title}</h3>
                <p className="text-sm text-slate-500">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Use Cases by Role */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-16">
          <h2 className="text-2xl font-bold text-slate-800">Quick Use Cases by Role</h2>
          {roleUseCases.map((role) => {
            const Icon = roleIconMap[role.slug] || ClipboardIcon;
            return (
              <div key={role.slug}>
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="w-6 h-6 text-teal-600" />
                  <h3 className="text-xl font-bold text-slate-800">{role.role}</h3>
                </div>
                <p className="text-slate-600 mb-5">{role.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {role.useCases.map((uc) => (
                    <div key={uc.title} className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                      <h4 className="font-medium text-slate-800 mb-1 text-sm">{uc.title}</h4>
                      <p className="text-sm text-slate-600">{uc.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <StarterPackCTA />
    </>
  );
}
