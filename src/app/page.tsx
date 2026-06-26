import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import PromptComparison from "@/components/ui/PromptComparison";
import PromptExampleCard from "@/components/ui/PromptExampleCard";
import WorkflowDiagram from "@/components/ui/WorkflowDiagram";
import Callout from "@/components/ui/Callout";
import { ClipboardIcon, LaptopIcon, PersonIcon, ChartIcon, ShieldIcon, SpeechBubbleIcon, TeamIcon, DollarIcon, GraduationIcon, ChecklistIcon } from "@/components/ui/Icons";

const audiences = [
  "Physical Therapists",
  "Occupational Therapists",
  "Speech-Language Pathologists",
  "Athletic Trainers",
  "Clinic Directors",
  "Regional Directors",
  "Rehab Company Owners",
  "Front Office Teams",
];

const categories = [
  { title: "Documentation", description: "Draft clearer assessments, organize objective changes, and reduce blank-page thinking — while the clinician owns the final note.", href: "/prompts", Icon: ClipboardIcon },
  { title: "Patient Education", description: "Create plain-language handouts, explain conditions without fear-based wording, and build materials patients actually read.", href: "/prompts", Icon: PersonIcon },
  { title: "Clinic Leadership", description: "Meeting agendas, staff emails, onboarding plans, coaching prep, and metrics analysis — the admin work that eats your day.", href: "/use-cases", Icon: TeamIcon },
  { title: "Clinical Reasoning", description: "Use AI as a thinking partner for differential questions, treatment planning, and evidence review — without replacing your judgment.", href: "/use-cases", Icon: ChartIcon },
  { title: "Compliance & Safety", description: "PHI rules, AI use policies, scribe guardrails, and the \"do not paste\" list every rehab team needs.", href: "/safety", Icon: ShieldIcon },
  { title: "Prompt Writing Basics", description: "Learn the difference between a vague prompt and a useful one. Context, specificity, and tone change everything.", href: "#better-prompting", Icon: SpeechBubbleIcon },
  { title: "Cash Services & Programs", description: "Launch checklists, pricing frameworks, scripts, and marketing plans for dry needling, shockwave, wellness, and performance.", href: "/prompts", Icon: DollarIcon },
  { title: "Students & Mentorship", description: "Case review frameworks, clinical reasoning templates, and mentorship tools for CIs and residency programs.", href: "/use-cases", Icon: GraduationIcon },
];

const featuredGuides = [
  { title: "AI Use Policy Starter Guide", description: "Create clear rules for your team before someone pastes PHI into ChatGPT.", href: "/resources/ai-use-policy-starter-guide", Icon: ShieldIcon },
  { title: "AI Scribe Rollout Guide", description: "A practical framework for piloting and scaling AI documentation in rehab clinics.", href: "/resources/ai-scribe-rollout-guide", Icon: LaptopIcon },
  { title: "Weekly Metrics with AI", description: "Turn your clinic dashboard into a clear action plan in 10 minutes.", href: "/resources/clinic-director-weekly-metrics-guide", Icon: ChartIcon },
  { title: "What Not to Put Into AI", description: "The \"do not paste\" list every rehab team member should see before day one.", href: "/resources/what-rehab-teams-should-never-put-into-ai", Icon: ChecklistIcon },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-4">
              Practical AI for Rehab Professionals
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Better documentation. Better patient education. Better clinical
              thinking. Without losing the human part of care.
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              AI tools, prompts, and practical guides for PTs, OTs, SLPs,
              athletic trainers, clinic directors, and rehab leaders who want to
              work more efficiently — not hand their judgment to a machine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/resources"
                className="px-7 py-3.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors text-center"
              >
                Explore the Resource Library
              </Link>
              <Link
                href="/prompts"
                className="px-7 py-3.5 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-teal-400 hover:text-teal-700 transition-colors text-center"
              >
                Browse the Prompt Library
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How AI Fits */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <WorkflowDiagram
            title="How AI fits into clinical work"
            steps={[
              "Clinician expertise",
              "AI drafts & organizes",
              "Clinician reviews & edits",
              "Patient-specific final version",
            ]}
          />
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            Who This Is For
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl">
            If you work in outpatient rehab and you have been wondering where
            AI actually fits — without the hype, the jargon, or the risk —
            this site was built for you.
          </p>
          <div className="flex flex-wrap gap-3">
            {audiences.map((a) => (
              <span
                key={a}
                className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            What You&apos;ll Find Here
          </h2>
          <p className="text-slate-600 mb-10 max-w-2xl">
            Not a list of AI prompts with a healthcare label. A resource hub
            with implementation guides, leadership workflows, tool comparisons,
            and honest lessons from real clinic operations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-teal-300 hover:shadow-md transition-all"
              >
                <c.Icon className="w-7 h-7 text-teal-600 mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-teal-700 transition-colors">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {c.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Prompt Example Cards */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            See How Rehab Professionals Use AI
          </h2>
          <p className="text-slate-600 mb-10 max-w-2xl">
            Real prompt examples from clinic operations, patient education, and
            documentation workflows.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PromptExampleCard
              useCase="Patient Education"
              prompt="Explain rotator cuff-related shoulder pain to a 52-year-old patient who is worried that pain means damage. Use plain language, avoid fear-based wording, and include 3 things they can safely do this week."
              helpsWith="Patient understanding, reassurance, pain education, home instructions"
              reminder="Review for accuracy and adjust to the patient's actual exam findings."
            />
            <PromptExampleCard
              useCase="Documentation"
              prompt="Help me draft an assessment paragraph for a patient with improving right shoulder pain. Active elevation improved from 115° to 145°, less pain with overhead reaching, but still has weakness with resisted ER. Make it clear skilled PT is still needed."
              helpsWith="Assessment writing, medical necessity language, objective documentation"
              reminder="Verify all measurements and clinical details match your actual findings."
            />
            <PromptExampleCard
              useCase="Clinic Operations"
              prompt="My clinic's visits per FTE dropped this week but eval volume is strong. Analyze these metrics and tell me whether the issue is likely cancellations, scheduling, plan of care frequency, or clinician ramp-up."
              helpsWith="Metric analysis, root cause identification, weekly action planning"
              reminder="Use aggregate clinic data only. Do not include patient-identifying information."
            />
          </div>
        </div>
      </section>

      {/* What Better Prompting Looks Like */}
      <section id="better-prompting" className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            What Better Prompting Looks Like
          </h2>
          <p className="text-slate-600 mb-10 max-w-2xl">
            The difference between a useless AI output and a genuinely helpful
            one almost always comes down to the prompt. Context, specificity,
            and tone change everything.
          </p>

          <div className="space-y-8">
            <PromptComparison
              bad="Write a note for shoulder pain."
              better="Act as an outpatient physical therapist. Help me draft an assessment paragraph for a patient with improving right shoulder pain consistent with rotator cuff-related pain. The patient has improved active elevation from 115° to 145°, reports less pain with reaching overhead, but still has weakness with resisted external rotation. Keep the tone professional and make it clear that skilled PT is still needed to restore strength and function."
              why="It gives context, objective changes, clinical reasoning, current limitations, and the intended documentation style."
            />
            <PromptComparison
              bad="Give me exercises for knee pain."
              better="Create a beginner home exercise plan for a 63-year-old patient with knee osteoarthritis who has pain with stairs, weak quads, and low confidence with movement. Use 4 exercises, include simple instructions, and explain how to modify if symptoms increase. Avoid promising a cure."
              why="It includes the diagnosis, patient age, key limitations, emotional barrier, exercise count, safety instructions, and tone."
            />
            <PromptComparison
              bad="Explain back pain."
              better="Write a plain-language explanation for a patient with acute low back pain who is afraid they slipped a disc. Explain that pain can be high even when serious injury is unlikely, encourage gentle movement, and give 3 warning signs that would require medical follow-up. Keep it calm and reassuring."
              why="It gives the patient's fear, the education goal, the tone, and safety boundaries."
            />
            <PromptComparison
              bad="Make this sound better."
              better="Rewrite this patient education paragraph so it sounds clear, warm, and easy to understand at a 7th-grade reading level. Keep the medical meaning the same. Do not add claims that are not already supported by the text."
              why="It tells AI what to improve, what reading level to target, and what not to change."
            />
          </div>
        </div>
      </section>

      {/* Workflow Diagram */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <WorkflowDiagram
              title="From vague prompt to useful output"
              steps={["Weak prompt", "Add context", "Better output", "Safer patient education"]}
            />
            <WorkflowDiagram
              title="AI-assisted documentation workflow"
              steps={["Clinical problem", "Specific prompt", "Review AI draft", "Edit with judgment"]}
            />
          </div>
        </div>
      </section>

      {/* Callout boxes */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Callout type="reminder">
              AI can help draft, organize, and simplify. It should not replace
              clinical reasoning, patient-specific judgment, or documentation
              accuracy.
            </Callout>
            <Callout type="best-use">
              Use AI when you already know the clinical direction but need help
              explaining, organizing, rewriting, or generating options.
            </Callout>
            <Callout type="careful">
              Do not ask AI to diagnose without your exam findings. Do not copy
              outputs directly into notes without reviewing and editing them.
            </Callout>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            Start with These Guides
          </h2>
          <p className="text-slate-600 mb-10 max-w-2xl">
            Practical, field-tested guides for the most common AI questions in
            rehab settings.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredGuides.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-teal-300 hover:shadow-md transition-all"
              >
                <g.Icon className="w-7 h-7 text-teal-600 mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-teal-700 transition-colors">
                  {g.title}
                </h3>
                <p className="text-sm text-slate-600">{g.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Note */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              A Note on Safety and Compliance
            </h2>
            <p className="text-slate-700 mb-4">
              AI does not get a pass on HIPAA. Do not enter protected health
              information into any AI tool unless your organization has vetted
              the tool, signed a BAA, and established clear usage policies.
            </p>
            <p className="text-slate-700 mb-6">
              Every AI output — whether it&apos;s a clinical note, a patient
              handout, or a staff email — must be reviewed by a qualified human
              before it goes anywhere. AI drafts. You decide.
            </p>
            <Link
              href="/safety"
              className="text-teal-700 font-semibold hover:text-teal-800"
            >
              Read our full safety guidelines &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* About Founder */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Built by a Rehab Professional
          </h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
            <p className="text-slate-700 leading-relaxed mb-4">
              AI for Rehab was created by{" "}
              <span className="font-semibold">Peter Jordan, PT, DPT</span> — a
              physical therapist and healthcare operations leader with hands-on
              experience in multi-site outpatient rehab.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Peter has worked across clinic operations, leadership development,
              documentation workflows, de novo clinic launches, and new service
              line implementation. He has led teams, managed P&amp;Ls, built
              onboarding programs, and spent more hours than he would like to
              admit in EMR systems.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              He started testing AI tools to solve the problems he kept running
              into: clinicians charting after hours, directors drowning in admin
              work, inconsistent communication across sites, and leadership
              teams that needed better data without hiring analysts. This site
              is where he shares what is working, what is not, and what rehab
              leaders should actually pay attention to.
            </p>
            <Link
              href="/about"
              className="text-teal-700 font-semibold hover:text-teal-800"
            >
              More about the project &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
