'use client';

import Link from "next/link";
import WorkflowCTA from "@/components/WorkflowCTA";
import Callout from "@/components/ui/Callout";
import PromptDisclaimer from "@/components/ui/PromptDisclaimer";
import { useState } from "react";

function CopyablePrompt({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => { await navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (<div className="relative my-4"><pre className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-700 whitespace-pre-wrap font-mono">{prompt}</pre><button onClick={handleCopy} className="absolute top-2 right-2 px-3 py-1 text-xs font-medium bg-white border border-slate-300 rounded hover:bg-slate-50 transition-colors">{copied ? "Copied!" : "Copy"}</button></div>);
}

export default function FrontDeskScriptsPage() {
  return (
    <>
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <Link href="/workflows" className="text-sm text-teal-700 hover:text-teal-800 mb-4 inline-block">&larr; All Workflows</Link>
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">Practical Workflow</p>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Front Desk AI Workflows That Do Not Require Patient Data</h1>
          <p className="text-lg text-slate-600 leading-relaxed">The front desk shapes access, attendance, referral conversion, and patient experience. AI can help create clearer scripts and workflows — and it is one of the safest places in the clinic to start using AI, because none of these workflows require PHI.</p>
        </div>
      </div>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Who This Is For</p>
              <p className="text-sm text-slate-700">Clinic directors, front desk leads, and admin teams who want to improve scheduling, reduce cancellations, and communicate more consistently.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">When to Use This</p>
              <p className="text-sm text-slate-700">When building new scripts, training new front desk staff, improving cancellation follow-up, or standardizing patient communication across clinics.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Why This Matters in Rehab</h2>
            <p className="text-slate-600 mb-3">In outpatient rehab, the front desk directly impacts how many referrals convert to evaluations, how many patients stay on their plan of care, how quickly cancellations get filled, and how patients feel about the clinic. Most front desk communication is informal — each person handles it differently.</p>
            <p className="text-slate-600">AI can help create consistent, natural-sounding scripts that front desk teams can customize to their style. And because these scripts do not involve patient-specific medical information, they are one of the lowest-risk AI use cases in the clinic.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Script Scenarios</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: "New referral call", desc: "First contact after receiving a referral — set the tone, gather basics, book the eval." },
                { title: "Voicemail after missed call", desc: "Short, warm message that makes the patient want to call back." },
                { title: "Cancellation reschedule", desc: "Try to reschedule instead of just accepting the cancellation." },
                { title: "No-show follow-up", desc: "Check in without being confrontational. Offer a new time." },
                { title: "Reactivation outreach", desc: "Reach out to patients who dropped off before completing their plan of care." },
                { title: "Attendance expectations", desc: "Explain why consistent attendance matters — at eval or during the first few visits." },
                { title: "Referral source follow-up", desc: "Thank you and update to the referring provider's office." },
                { title: "Text after missed call", desc: "Quick text to a new referral who did not answer the phone." },
              ].map((s) => (
                <div key={s.title} className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <h4 className="font-medium text-slate-800 mb-1 text-sm">{s.title}</h4>
                  <p className="text-xs text-slate-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Copy/Paste Prompt</h2>
            <CopyablePrompt prompt={`Create front desk scripts for an outpatient rehab clinic.

Scenario:
[describe — e.g., calling a new referral, following up after a no-show, filling a cancellation, reactivating a patient, explaining attendance expectations, following up with a referral source]

Goal:
[book evaluation, fill cancellation slot, reduce no-shows, reactivate patient, explain plan of care importance, thank referral source, etc.]

Clinic context:
[clinic name placeholder, typical first visit duration, direct access state yes/no, any special instructions]

Constraints:
- Keep it friendly and professional
- Do not sound pushy or scripted — it should sound natural when spoken out loud
- Do not include patient-specific medical advice
- Do not include PHI
- Include a warm opening and a clear ask

Create:
1. Phone script (full conversation flow)
2. Voicemail script (under 30 seconds when spoken)
3. Text message version (under 160 characters if possible)
4. Email version if appropriate
5. Common patient objections and suggested responses
6. What not to say`} />
            <PromptDisclaimer />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">What Good Output Should Include</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              {["Scripts that sound like a real person talking — not a robot reading a form","A clear ask in every script (schedule the appointment, reschedule, call back)","Variations for common objections (cost, time, not sure if they need PT)","A voicemail short enough to leave in under 30 seconds","Text and email versions that match the phone tone","Guidance on what the front desk should NOT say (clinical advice, guarantees, pressure)"].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-teal-500 mt-0.5 shrink-0">✓</span>{i}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Common Mistakes</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <ul className="space-y-2 text-sm text-slate-700">
                {["Making scripts too robotic — staff will not use them if they feel unnatural","Forgetting to include a clear ask for the appointment","Accepting cancellations without attempting to reschedule","Giving clinical advice from the front desk (scope issue)","Using patient-specific details in AI prompts","Not training staff on how to adjust the script to their own voice"].map((m) => (
                  <li key={m} className="flex items-start gap-2"><span className="text-amber-600 mt-0.5 shrink-0">!</span>{m}</li>
                ))}
              </ul>
            </div>
          </div>

          <Callout type="best-use">
            Front desk scripts are one of the best low-risk AI use cases in rehab. No PHI required. No compliance risk. Just better, more consistent communication that helps patients get scheduled and stay on their plan of care.
          </Callout>

          <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-teal-800 mb-2">Start Here</h3>
            <p className="text-teal-700">Pick one scenario — the one your front desk struggles with most — and generate a script. Print it. Have the team practice it once. Then adjust based on what feels natural.</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold text-slate-800 mb-3">Related</h3>
            <ul className="space-y-2">
              <li><Link href="/resources/what-rehab-teams-should-never-put-into-ai" className="text-teal-700 hover:text-teal-800 text-sm font-medium">What Rehab Teams Should Never Put Into AI</Link></li>
              <li><Link href="/use-cases/clinic-directors" className="text-teal-700 hover:text-teal-800 text-sm font-medium">AI for Clinic Directors</Link></li>
              <li><Link href="/prompts" className="text-teal-700 hover:text-teal-800 text-sm font-medium">Prompt Library</Link></li>
              <li><Link href="/resources/ai-use-policy-starter-guide" className="text-teal-700 hover:text-teal-800 text-sm font-medium">AI Use Policy Starter Guide</Link></li>
            </ul>
          </div>

          <WorkflowCTA />
        </div>
      </section>
    </>
  );
}
