'use client';

import Link from "next/link";
import WorkflowCTA from "@/components/WorkflowCTA";
import Callout from "@/components/ui/Callout";
import PromptDisclaimer from "@/components/ui/PromptDisclaimer";
import { useState } from "react";

function CopyablePrompt({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative my-4">
      <pre className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-700 whitespace-pre-wrap font-mono">{prompt}</pre>
      <button onClick={handleCopy} className="absolute top-2 right-2 px-3 py-1 text-xs font-medium bg-white border border-slate-300 rounded hover:bg-slate-50 transition-colors">{copied ? "Copied!" : "Copy"}</button>
    </div>
  );
}

function Branch({ condition, causes }: { condition: string; causes: string[] }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5">
      <h4 className="font-semibold text-slate-800 mb-3">{condition}</h4>
      <ul className="space-y-1.5">
        {causes.map((c) => (
          <li key={c} className="text-sm text-slate-600 flex items-start gap-2">
            <span className="text-teal-500 mt-0.5 shrink-0">→</span>{c}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function LowVisitsDiagnosticPage() {
  return (
    <>
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <Link href="/workflows" className="text-sm text-teal-700 hover:text-teal-800 mb-4 inline-block">&larr; All Workflows</Link>
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">Practical Workflow</p>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Low Visits Are Not Always a Referral Problem</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            If clinic visits are down, do not immediately assume physicians stopped sending patients. The numbers may point somewhere else entirely. This workflow helps clinic directors use de-identified clinic-level metrics to identify the most likely cause and choose a focused action plan.
          </p>
        </div>
      </div>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Who This Is For</p>
              <p className="text-sm text-slate-700">Clinic directors, assistant directors, and regional directors reviewing weekly clinic performance.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">When to Use This</p>
              <p className="text-sm text-slate-700">When total visits are below target and you need to determine the root cause before acting.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Why This Matters in Rehab</h2>
            <p className="text-slate-600 mb-3">
              Most clinics default to &ldquo;we need more referrals&rdquo; when visits drop. Sometimes that is right. But in outpatient rehab, low visits can be caused by at least a dozen different operational issues — and many of them have nothing to do with referral volume.
            </p>
            <p className="text-slate-600">
              Fixing the wrong cause wastes time, burns credibility with the team, and lets the real problem keep dragging the clinic down. This diagnostic framework helps you narrow the cause before you act.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Diagnostic Decision Tree</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Branch condition="Visits low + evals low" causes={["Referral volume is down","Referral sources have changed","Front desk not converting referrals to evals","Eval slots not available at desirable times","Days to be seen is too high","Physician outreach needs attention"]} />
              <Branch condition="Evals strong + total visits low" causes={["Follow-up visits not scheduled at checkout","Plan of care frequency too low","Cancellations and no-shows eating volume","Clinician productivity is weak","Patients dropping off after 2-3 visits","Front desk not filling cancellation openings"]} />
              <Branch condition="Visits per FTE is low" causes={["Too much open time on clinician schedules","Schedule templates not built correctly","New clinician ramping slowly","Front desk not backfilling","Director not managing the schedule daily","Clinic overstaffed for current volume"]} />
              <Branch condition="Days to be seen high + visits low" causes={["Eval access blocked at desirable times","Openings exist but not when patients want","Eval slots overprotected","Front desk not offering enough options","Losing referrals to clinics with faster access"]} />
              <Branch condition="Cancellations / no-shows high" causes={["Poor expectation setting at evaluation","Weak front desk confirmation process","Patients not understanding plan of care value","Scheduling too far out","No process for filling openings quickly","Population-specific factors (transport, work, school)"]} />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">What to Gather Before Using the Prompt</h2>
            <div className="flex flex-wrap gap-2">
              {["Total visits","Evals","Visits per FTE","Cancellation rate","No-show rate","Days to be seen","Schedule utilization","Referral volume","Discharges","New clinician status","PTO / open positions","Recent changes"].map((m) => (
                <span key={m} className="text-xs bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-600">{m}</span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Copy/Paste Prompt</h2>
            <CopyablePrompt prompt={`Help me diagnose why this outpatient rehab clinic has low visits.

Use only this de-identified clinic-level information:
[paste clinic metrics and context]

Clinic context:
- Clinic size: [small, medium, large]
- Staff mix: [PTs, PTAs, OTs, SLPs, ATs, front office]
- Recent staffing/PTO changes: [describe]
- Recent referral changes: [describe]
- Days to be seen: [number]
- Eval volume: [number]
- Total visits: [number]
- Visits per FTE: [number]
- Cancellation/no-show rate: [number]
- Schedule utilization: [percent if available]
- New clinician ramp-up concerns: [describe]
- Other context: [anything relevant]

Walk through these possible causes:
1. Referral volume
2. Eval access
3. Days to be seen
4. Front desk conversion
5. Schedule utilization
6. Cancellations/no-shows
7. Plan of care frequency
8. Clinician productivity
9. New clinician ramp-up
10. PTO or staffing issues
11. Discharges or patient drop-off

For each possible cause:
- Tell me whether the data supports it, does not support it, or is unclear.
- Explain what I should check next.
- Suggest one practical action.

End with:
- Top 3 most likely causes
- One-week action plan
- What the clinic director owns
- What the front desk owns
- What clinicians own
- What to review next week`} />
            <PromptDisclaimer />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">What Good Output Should Include</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              {["A clear ranking of likely causes — not just a list of everything that could be wrong","Evidence from your data for each conclusion","Specific actions, not vague suggestions like 'improve marketing'","Clear owners for each action (director, front desk, clinicians)","A focused one-week plan — not ten priorities"].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-teal-500 mt-0.5 shrink-0">✓</span>{i}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Common Mistakes</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <ul className="space-y-2 text-sm text-slate-700">
                {["Blaming referral volume before checking access and schedule utilization","Looking at visits without looking at evals separately","Ignoring visits per FTE as a metric","Ignoring PTO, staffing changes, or new hire context","Not checking whether follow-up visits are being scheduled at checkout","Sharing too many metrics with the team instead of one clear weekly focus","Treating AI's root cause analysis as final instead of verifying it"].map((m) => (
                  <li key={m} className="flex items-start gap-2"><span className="text-amber-600 mt-0.5 shrink-0">!</span>{m}</li>
                ))}
              </ul>
            </div>
          </div>

          <Callout type="reminder">
            Use this as an operational thinking tool, not a final judgment. The AI identifies likely patterns — the clinic director verifies the real cause by looking at what is actually happening in the clinic.
          </Callout>

          <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-teal-800 mb-2">Start Here</h3>
            <p className="text-teal-700">Copy the prompt above, paste in last week&apos;s clinic-level metrics, and identify the top 3 most likely causes. Then pick one action for the front desk, one for clinicians, and one for the director. That is your Monday plan.</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold text-slate-800 mb-3">Related</h3>
            <ul className="space-y-2">
              <li><Link href="/resources/clinic-director-weekly-metrics-guide" className="text-teal-700 hover:text-teal-800 text-sm font-medium">Clinic Director&apos;s Guide to Using AI for Weekly Metrics</Link></li>
              <li><Link href="/use-cases/clinic-directors" className="text-teal-700 hover:text-teal-800 text-sm font-medium">AI for Clinic Directors — Full Workflow Guide</Link></li>
              <li><Link href="/resources/ai-use-policy-starter-guide" className="text-teal-700 hover:text-teal-800 text-sm font-medium">AI Use Policy Starter Guide</Link></li>
              <li><Link href="/prompts" className="text-teal-700 hover:text-teal-800 text-sm font-medium">Prompt Library</Link></li>
            </ul>
          </div>

          <WorkflowCTA />
        </div>
      </section>
    </>
  );
}
