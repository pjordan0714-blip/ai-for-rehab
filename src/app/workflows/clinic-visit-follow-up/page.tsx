'use client';

import Link from "next/link";
import WorkflowCTA from "@/components/WorkflowCTA";
import Callout from "@/components/ui/Callout";
import PromptDisclaimer from "@/components/ui/PromptDisclaimer";
import WorkflowDiagram from "@/components/ui/WorkflowDiagram";
import { useState } from "react";

function CopyablePrompt({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => { await navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (<div className="relative my-4"><pre className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-700 whitespace-pre-wrap font-mono">{prompt}</pre><button onClick={handleCopy} className="absolute top-2 right-2 px-3 py-1 text-xs font-medium bg-white border border-slate-300 rounded hover:bg-slate-50 transition-colors">{copied ? "Copied!" : "Copy"}</button></div>);
}

export default function ClinicVisitFollowUpPage() {
  return (
    <>
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <Link href="/workflows" className="text-sm text-teal-700 hover:text-teal-800 mb-4 inline-block">&larr; All Workflows</Link>
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">Practical Workflow</p>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Turn a Clinic Visit Into a Follow-Up Plan</h1>
          <p className="text-lg text-slate-600 leading-relaxed">A clinic visit is only useful if something changes afterward. This workflow helps regional directors turn de-identified visit notes into priorities, commitments, owners, a follow-up email, and a next-visit checklist.</p>
        </div>
      </div>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Who This Is For</p>
              <p className="text-sm text-slate-700">Regional directors, directors of operations, area managers, and senior clinic directors who visit multiple sites.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">When to Use This</p>
              <p className="text-sm text-slate-700">After any clinic visit — performance review, support visit, staffing issue, referral development, new initiative rollout, or team morale check.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Why This Matters in Rehab</h2>
            <p className="text-slate-600 mb-3">Regional directors accumulate scattered information during clinic visits: staff concerns, schedule observations, front desk issues, director coaching points, referral needs, facility problems, and follow-up promises. Most of it stays in a notebook or the back of your mind.</p>
            <p className="text-slate-600">The gap is not observation — it is follow-through. AI can turn messy visit notes into a structured output in minutes, so the visit actually leads to action.</p>
          </div>

          <WorkflowDiagram title="Clinic visit follow-up workflow" steps={["Visit the clinic","Take rough notes","Paste into AI","Get structured follow-up","Send director email","Track action items","Check at next visit"]} />

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">What to Capture During the Visit</h2>
            <div className="flex flex-wrap gap-2">
              {["Staff concerns","Schedule observations","Front desk workflow","Director coaching points","Referral needs","Facility issues","Patient experience","Metrics review","Commitments made","Staffing conversations","Follow-up promises","New initiative status"].map((t) => (
                <span key={t} className="text-xs bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-600">{t}</span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Copy/Paste Prompt</h2>
            <CopyablePrompt prompt={`Turn these de-identified clinic visit notes into a practical follow-up summary.

Clinic context:
- Clinic type: [general ortho, sports, neuro, mixed outpatient, etc.]
- Leadership situation: [new director, experienced director, short staffed, growing, struggling, stable]
- Main reason for visit: [performance review, support visit, staffing, referral development, new initiative, etc.]
- Recent performance concerns: [describe briefly]
- Recent staffing or schedule context: [describe briefly]

Notes:
[paste de-identified notes]

Create:
1. Brief visit summary (3-4 sentences)
2. What is going well
3. Main concerns (prioritized)
4. Top 3 priorities
5. Commitments made — who committed to what
6. Owner for each action item
7. Suggested follow-up email to the clinic director (ready to edit and send)
8. What I should check on during the next visit
9. Any unclear items I need to clarify before next visit

Tone: Supportive, direct, and accountable. Do not sound corporate.`} />
            <PromptDisclaimer />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">What Good Output Should Include</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              {["A follow-up email you can actually send — not a generic template","Clear owners for each commitment, not 'the team'","A next-visit checklist tied to this visit's priorities","Prioritized concerns — not everything, just the most important","A tone that matches your actual leadership style"].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-teal-500 mt-0.5 shrink-0">✓</span>{i}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Common Mistakes</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <ul className="space-y-2 text-sm text-slate-700">
                {["Leaving the visit without clear owners for each action item","Creating too many priorities — a focused list beats a long list","Sending a long summary nobody reads instead of a short email","Letting AI soften feedback until the point is lost","Not tying follow-up items to the next clinic visit","Including employee-sensitive details in an unapproved AI tool"].map((m) => (
                  <li key={m} className="flex items-start gap-2"><span className="text-amber-600 mt-0.5 shrink-0">!</span>{m}</li>
                ))}
              </ul>
            </div>
          </div>

          <Callout type="careful">
            Do not paste employee names, HR-sensitive details, patient information, or confidential company data into unapproved AI tools. Keep visit notes de-identified and focused on operational themes.
          </Callout>

          <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-teal-800 mb-2">Start Here</h3>
            <p className="text-teal-700">After your next clinic visit, paste your de-identified notes into the prompt above. Send the follow-up email within 24 hours. Add the action items to your tracker. Check them at the next visit.</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold text-slate-800 mb-3">Related</h3>
            <ul className="space-y-2">
              <li><Link href="/use-cases/regional-directors" className="text-teal-700 hover:text-teal-800 text-sm font-medium">AI for Regional Directors — Full Workflow Guide</Link></li>
              <li><Link href="/resources/regional-director-ai-workflow-guide" className="text-teal-700 hover:text-teal-800 text-sm font-medium">Regional Director AI Workflow Guide</Link></li>
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
