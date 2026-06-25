import PageHeader from "@/components/PageHeader";
import Newsletter from "@/components/Newsletter";
import { roleUseCases } from "@/data/useCases";

export const metadata = {
  title: "AI Use Cases by Role — AI for Rehab",
  description:
    "Practical ways rehab professionals are using AI, organized by role.",
};

export default function UseCasesPage() {
  return (
    <>
      <PageHeader
        title="AI Use Cases by Role"
        description="Practical ways rehab professionals are using AI, organized by role. No hype — just real workflows that save time and improve work."
      />

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-16">
          {roleUseCases.map((role) => (
            <div key={role.slug}>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                {role.role}
              </h2>
              <p className="text-slate-600 mb-6">{role.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {role.useCases.map((uc) => (
                  <div
                    key={uc.title}
                    className="p-5 bg-slate-50 border border-slate-200 rounded-lg"
                  >
                    <h3 className="font-semibold text-slate-800 mb-1">
                      {uc.title}
                    </h3>
                    <p className="text-sm text-slate-600">{uc.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
