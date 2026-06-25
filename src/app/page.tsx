import Link from "next/link";
import Newsletter from "@/components/Newsletter";

const audiences = [
  "Physical Therapists",
  "Clinic Directors",
  "Regional Directors",
  "Rehab Company Owners",
  "OTs & SLPs",
  "Athletic Trainers",
  "Healthcare Ops Leaders",
  "Multi-Site Groups",
];

const features = [
  {
    title: "Resource Library",
    description:
      "Implementation guides, policy templates, and workflow breakdowns — organized by what you actually need to get done.",
    href: "/resources",
  },
  {
    title: "AI Use Cases by Role",
    description:
      "Specific ways clinicians, clinic directors, regional leaders, and executives are putting AI to work in rehab settings right now.",
    href: "/use-cases",
  },
  {
    title: "Prompt Library",
    description:
      "Copy-and-paste prompts built for rehab workflows. Each one has been tested in real clinic and leadership settings.",
    href: "/prompts",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Practical AI for Rehab Professionals
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Tools, workflows, and real-world lessons for physical therapy, rehab
            operations, and clinic leadership — built by someone who actually
            works in this industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources"
              className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors text-lg"
            >
              Explore the Resource Library
            </Link>
            <Link
              href="/use-cases"
              className="px-8 py-4 border-2 border-teal-600 text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition-colors text-lg"
            >
              Start with AI Use Cases
            </Link>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-3 text-center">
            Who This Is For
          </h2>
          <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
            If you work in outpatient rehab and you&apos;ve been wondering where
            AI actually fits — without the hype, the jargon, or the risk — this
            site was built for you.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {audiences.map((a) => (
              <span
                key={a}
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Find Here */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-3 text-center">
            What You&apos;ll Find Here
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            This is not a list of AI prompts with a healthcare label slapped on
            it. It&apos;s a resource hub with implementation guides, leadership
            workflows, tool comparisons, and honest lessons from testing AI in
            real clinic operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <Link
                key={f.href}
                href={f.href}
                className="block p-6 bg-slate-50 border border-slate-200 rounded-xl hover:border-teal-300 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {f.title}
                </h3>
                <p className="text-slate-600">{f.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Use Cases by Role */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-3">
            AI Use Cases by Role
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            A clinic director and a treating PT use AI differently. So do
            regional leaders, owners, and front office staff. Browse use cases
            filtered by your actual role — not generic lists that apply to
            nobody in particular.
          </p>
          <Link
            href="/use-cases"
            className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
          >
            View Use Cases by Role
          </Link>
        </div>
      </section>

      {/* Safety Note */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              A Note on Safety and Compliance
            </h2>
            <p className="text-slate-700 mb-4">
              AI does not get a pass on HIPAA. Do not enter protected health
              information into any AI tool unless your organization has vetted
              the tool, signed a BAA, and established clear usage policies. That
              includes ChatGPT, Claude, Gemini, and any AI scribe platform.
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
          <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
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
              onboarding programs, and spent more hours than he&apos;d like to
              admit in EMR systems.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              He started testing AI tools to solve the problems he kept running
              into: clinicians charting after hours, directors drowning in admin
              work, inconsistent communication across sites, and leadership
              teams that needed better data without hiring analysts. This site
              is where he shares what&apos;s working, what isn&apos;t, and what
              rehab leaders should actually pay attention to.
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
