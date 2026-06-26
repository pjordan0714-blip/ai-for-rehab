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

export default function NewClinicianRampUpPage() {
  return (
    <>
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <Link href="/workflows" className="text-sm text-teal-700 hover:text-teal-800 mb-4 inline-block">&larr; All Workflows</Link>
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">Practical Workflow</p>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">New Clinician Ramp-Up Should Not Be Guesswork</h1>
          <p className="text-lg text-slate-600 leading-relaxed">A new clinician may be clinically strong and still struggle with schedule build, documentation flow, patient communication, or clinic rhythm. This workflow helps clinic directors create a structured ramp-up plan without micromanaging.</p>
        </div>
      </div>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Who This Is For</p>
              <p className="text-sm text-slate-700">Clinic directors, regional directors, CIs, and mentors responsible for onboarding new clinicians in outpatient rehab.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">When to Use This</p>
              <p className="text-sm text-slate-700">When a new clinician is starting, when a ramp-up feels off track, or when you want to set clearer expectations before day one.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Why This Matters in Rehab</h2>
            <p className="text-slate-600 mb-3">Most clinics handle new clinician ramp-up informally. The new hire shadows for a few days, starts seeing patients, and the director checks in &ldquo;when they can.&rdquo; If productivity does not build quickly enough, it becomes a problem — but by then, the clinician may be frustrated, and the director may not know whether the issue is confidence, caseload, documentation, scheduling, or something else entirely.</p>
            <p className="text-slate-600">A simple ramp-up plan with weekly expectations, check-in questions, and warning signs prevents the most common problems. AI can help you build one in minutes.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">What to Track During Ramp-Up</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {["Weekly visit count","Eval volume","Documentation completion","Same-day note rate","Units per visit","Schedule confidence","Patient communication","Plan of care carryover","Team integration","Mentorship needs","Questions and barriers","Comfort with evals"].map((m) => (
                <span key={m} className="text-xs bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-600">{m}</span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Copy/Paste Prompt</h2>
            <CopyablePrompt prompt={`Create a structured ramp-up plan for a new outpatient rehab clinician.

Clinician role: [PT, PTA, OT, SLP, AT]
Experience level: [new grad, 1-3 years, experienced but new to this setting]
Clinic context: [paste de-identified clinic context — size, volume, payer mix, team]
Current goals or concerns: [paste goals — e.g., schedule build, documentation speed, eval confidence, patient communication]

Create:
1. Week 1 expectations — what they should focus on, realistic daily volume, key learning priorities
2. Week 2 expectations — increased volume, documentation targets, mentorship check-in
3. Week 3 expectations — closer to full caseload, independence markers, director check-in
4. Week 4 expectations — near-target productivity, same-day documentation, self-assessment
5. 30-day review criteria — what success looks like
6. 60-day and 90-day milestones
7. Metrics to monitor weekly
8. Questions the clinic director should ask at each weekly check-in
9. Warning signs that the ramp-up is off track
10. How to support the clinician without overwhelming them
11. Mentorship plan — who, how often, what to cover

Keep it realistic. Not a wish list — an actual plan a busy clinic director would use.`} />
            <PromptDisclaimer />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">What Good Output Should Include</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              {["Realistic daily volume progression — not day-one full caseload","Specific check-in questions, not just 'how are you doing'","Documentation expectations by week","Clear warning signs with suggested responses","A mentorship structure, not just 'shadow someone'","Distinction between new grad and experienced-but-new-to-setting"].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-teal-500 mt-0.5 shrink-0">✓</span>{i}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Common Mistakes</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <ul className="space-y-2 text-sm text-slate-700">
                {["Waiting until there is a problem to create structure","Only tracking visits and ignoring documentation, communication, or confidence","Not checking whether the clinician is comfortable with evals specifically","Not giving a clear weekly target the clinician can see","Assuming slow ramp-up means poor effort — it often means unclear expectations","Failing to connect mentorship to actual workflow barriers, not just clinical questions"].map((m) => (
                  <li key={m} className="flex items-start gap-2"><span className="text-amber-600 mt-0.5 shrink-0">!</span>{m}</li>
                ))}
              </ul>
            </div>
          </div>

          <Callout type="reminder">
            Do not include private employee details, medical information, or HR-sensitive content in an unapproved AI tool. Keep the plan focused on role expectations and operational milestones.
          </Callout>

          <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-teal-800 mb-2">Start Here</h3>
            <p className="text-teal-700">Before the new clinician starts — or this week if they have already started — paste the prompt above and create a 30-day plan. Share it with the clinician so they know exactly what is expected.</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold text-slate-800 mb-3">Related</h3>
            <ul className="space-y-2">
              <li><Link href="/use-cases/clinic-directors" className="text-teal-700 hover:text-teal-800 text-sm font-medium">AI for Clinic Directors — Full Workflow Guide</Link></li>
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
