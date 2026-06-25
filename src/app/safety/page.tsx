import Newsletter from "@/components/Newsletter";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Safety & Compliance — AI for Rehab",
  description:
    "Important guidelines for using AI responsibly in healthcare and rehab settings.",
};

const guidelines = [
  {
    title: "Do Not Enter PHI Into AI Tools",
    content:
      "Protected health information should never be entered into AI tools unless your organization has approved the specific tool and has a signed Business Associate Agreement (BAA) or equivalent data protection agreement in place. This applies to patient names, dates of birth, diagnoses, treatment details, and any other individually identifiable health information.",
  },
  {
    title: "AI Output Must Be Reviewed by a Qualified Human",
    content:
      "All AI-generated content — including clinical documentation, patient communications, billing language, and operational recommendations — must be reviewed, edited, and approved by a qualified professional before use. AI tools generate suggestions, not final products. The responsibility for accuracy, appropriateness, and compliance remains with the human user.",
  },
  {
    title: "Billing and Documentation Rules Vary",
    content:
      "Documentation requirements, billing codes, and compliance rules vary by payer, state, and organization. AI tools do not have access to your specific payer contracts, state regulations, or organizational policies. Never rely on AI to determine billing or documentation compliance. Always verify against your organization's specific requirements.",
  },
  {
    title: "This Site Provides Education, Not Professional Advice",
    content:
      "AI for Rehab provides educational resources about using AI in rehab settings. Nothing on this site constitutes legal advice, billing advice, compliance guidance, medical advice, or clinical recommendations. Consult qualified professionals in each of these areas for advice specific to your situation.",
  },
];

const bestPractices = [
  "Start with non-clinical use cases (emails, meeting prep, training materials) before moving to clinical workflows.",
  "Create clear organizational policies about which AI tools are approved and for what purposes.",
  "Train staff on what data can and cannot be entered into AI tools.",
  "Audit AI-generated content regularly, especially in clinical documentation.",
  "Keep humans in the loop for all decisions that affect patient care, billing, or compliance.",
  "Document your AI use policies and review them regularly as tools and regulations evolve.",
  "When in doubt about whether an AI use case is appropriate, consult your compliance team or legal counsel.",
];

export default function SafetyPage() {
  return (
    <>
      <PageHeader
        title="Safety & Compliance"
        description="Important guidelines for using AI responsibly in healthcare and rehab settings."
      />

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-8">
          {guidelines.map((g) => (
            <div
              key={g.title}
              className="p-6 bg-white border border-slate-200 rounded-xl"
            >
              <h2 className="text-xl font-bold text-slate-800 mb-3">
                {g.title}
              </h2>
              <p className="text-slate-600 leading-relaxed">{g.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">
            Best Practices for Responsible AI Use in Rehab
          </h2>
          <ul className="space-y-4">
            {bestPractices.map((bp) => (
              <li
                key={bp}
                className="flex items-start gap-3 text-slate-600"
              >
                <span className="text-teal-600 mt-1 font-bold">&check;</span>
                {bp}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Disclaimer
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              AI for Rehab is an educational resource. The information provided
              on this website is for general informational purposes only and
              should not be construed as professional advice of any kind.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The use of AI tools in healthcare settings involves risks and
              responsibilities that vary by jurisdiction, organization, and use
              case. Users are solely responsible for ensuring their use of AI
              complies with all applicable laws, regulations, and organizational
              policies.
            </p>
            <p className="text-slate-700 leading-relaxed">
              AI for Rehab does not endorse any specific AI tool or vendor.
              Mentions of tool categories or generic tool descriptions are for
              educational purposes and do not constitute recommendations or
              endorsements.
            </p>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
