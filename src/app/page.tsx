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
      "Guides, templates, and workflows organized by topic — from documentation to marketing.",
    href: "/resources",
  },
  {
    title: "AI Use Cases by Role",
    description:
      "Practical ways clinicians, directors, and executives are using AI in rehab settings.",
    href: "/use-cases",
  },
  {
    title: "Prompt Library",
    description:
      "Ready-to-use prompts tested in real rehab workflows. Copy, customize, and go.",
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
            operations, and clinic leadership.
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
            Built for rehab professionals who want to use AI practically and
            responsibly — not chase hype.
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
            This is not a collection of AI prompts. It&apos;s a practical
            resource hub with implementation guides, leadership workflows, case
            studies, and tools tested in real clinics.
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
            Whether you&apos;re a treating clinician, a clinic director, or a
            regional leader, there are practical ways AI can help you work more
            efficiently — without replacing your judgment.
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
              AI is a powerful tool, but it comes with real responsibilities in
              healthcare settings. Never enter protected health information into
              AI tools unless your organization has approved the tool and has
              appropriate agreements in place.
            </p>
            <p className="text-slate-700 mb-6">
              All AI output should be reviewed by a qualified professional
              before use in clinical, billing, or compliance contexts.
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Built by a Rehab Professional
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-6">
            AI for Rehab was created by Peter Jordan, PT, DPT — a physical
            therapist and healthcare operations leader who is actively testing
            AI tools in real rehab settings. This isn&apos;t theory. It&apos;s
            field-tested.
          </p>
          <Link
            href="/about"
            className="text-teal-700 font-semibold hover:text-teal-800"
          >
            Learn more about the project &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
