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

export default function AIScribeRolloutPage() {
  return (
    <>
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <Link href="/workflows" className="text-sm text-teal-700 hover:text-teal-800 mb-4 inline-block">&larr; All Workflows</Link>
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">Practical Workflow</p>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">AI Scribe Rollouts Fail When They Are Treated Like Software Installs</h1>
          <p className="text-lg text-slate-600 leading-relaxed">An AI scribe can reduce documentation burden, but only if the rollout is managed well. The tool is the easy part. Adoption, trust, note quality, compliance, and leadership follow-up are what make it work — or kill it.</p>
        </div>
      </div>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Who This Is For</p>
              <p className="text-sm text-slate-700">Rehab company leaders, clinic directors, regional directors, compliance leaders, and documentation champions.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">When to Use This</p>
              <p className="text-sm text-slate-700">Before launching an AI scribe, during a pilot that is not going well, or when you need to decide whether to expand or pause.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Why This Matters in Rehab</h2>
            <p className="text-slate-600 mb-3">Most AI scribe rollouts fail for the same reasons: leadership buys a tool, sends a training link, and expects clinicians to start using it. Clinicians resist because nobody asked them, the tool does not fit their workflow, and they have been burned by &ldquo;innovations&rdquo; before.</p>
            <p className="text-slate-600">The issue is rarely the software. It is the rollout process — champions, training, guardrails, adoption tracking, note quality monitoring, and coaching for low adopters.</p>
          </div>

          <WorkflowDiagram title="AI scribe rollout process" steps={["Define the problem","Choose pilot users","Pick champions","Set guardrails","Train the workflow","Track adoption + quality","Coach and adjust","Expand or pause"]} />

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Rollout Checklist</h2>
            <div className="space-y-6">
              {[
                { phase: "Before Launch", items: ["Define the documentation problem you are solving — not just 'we bought a scribe'","Confirm BAA, compliance review, and data handling policies","Decide which note types are included (evals, dailies, progress, discharges)","Choose 2-3 pilot clinics with a mix of adopter types","Identify one champion per site — trusted by peers, not just tech-savvy","Create patient-facing explanation language","Write clinician review expectations: AI drafts, you review and sign","Build a documentation quality audit process"] },
                { phase: "During Pilot (4-6 weeks)", items: ["Track active users weekly — not just logins","Review sample notes for medical necessity, skilled language, and accuracy","Collect clinician feedback directly — do not rely on usage data alone","Identify common AI errors (laterality, generic plans, hallucinated details)","Coach low adopters — find out if the issue is comfort, training, or workflow","Share practical tips from high adopters across the pilot group"] },
                { phase: "After Pilot", items: ["Compare results to your defined success metrics","Document what needs to change before scaling","Update training materials based on pilot lessons","Decide who gets access next","Set up ongoing quality monitoring — do not stop auditing after launch","Create a communication plan for the next wave of users"] },
              ].map((section) => (
                <div key={section.phase}>
                  <h3 className="font-semibold text-slate-800 mb-3">{section.phase}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-teal-500 mt-0.5 shrink-0">☐</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Copy/Paste Prompt</h2>
            <CopyablePrompt prompt={`Help me plan an AI scribe rollout for an outpatient rehab organization.

Context:
[paste de-identified organization or clinic context]

Current documentation problem:
[paste problem — e.g., after-hours charting, slow evals, note completion delays]

Pilot users:
[paste roles or clinic types, no names]

Known concerns:
[paste concerns around compliance, adoption, workflow, documentation quality, staff trust, or cost]

Create:
1. Pilot goals — what success looks like
2. First user group recommendation
3. Champion role — what they should do
4. Training plan — workflow, not just software
5. Clinician review expectations
6. Documentation quality review process
7. Adoption metrics to track weekly
8. Common barriers to watch for
9. Communication plan for staff
10. 30-day rollout checklist
11. Decision criteria for expanding, pausing, or adjusting`} />
            <PromptDisclaimer />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Common Mistakes</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <ul className="space-y-2 text-sm text-slate-700">
                {["Rolling out to everyone before the pilot is stable","Measuring usage but not note quality","Ignoring clinician trust and feedback","Not training clinic directors on how to coach adoption","Letting low adoption go unaddressed for weeks","Assuming a polished-sounding AI note is an accurate note","Treating champion selection as a popularity contest instead of a credibility decision"].map((m) => (
                  <li key={m} className="flex items-start gap-2"><span className="text-amber-600 mt-0.5 shrink-0">!</span>{m}</li>
                ))}
              </ul>
            </div>
          </div>

          <Callout type="careful">
            AI-generated documentation is a draft. The treating clinician remains responsible for the accuracy, completeness, medical necessity, and compliance of the final signed note. Do not treat AI output as automatically correct.
          </Callout>

          <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-teal-800 mb-2">Start Here</h3>
            <p className="text-teal-700">Pick one clinic, one champion, one clear success metric, and one quality review process. Run a 4-6 week pilot. Then decide whether to expand based on evidence, not enthusiasm.</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold text-slate-800 mb-3">Related</h3>
            <ul className="space-y-2">
              <li><Link href="/resources/ai-scribe-rollout-guide" className="text-teal-700 hover:text-teal-800 text-sm font-medium">AI Scribe Rollout Guide — Full Version</Link></li>
              <li><Link href="/resources/ai-use-policy-starter-guide" className="text-teal-700 hover:text-teal-800 text-sm font-medium">AI Use Policy Starter Guide</Link></li>
              <li><Link href="/resources/what-rehab-teams-should-never-put-into-ai" className="text-teal-700 hover:text-teal-800 text-sm font-medium">What Rehab Teams Should Never Put Into AI</Link></li>
            </ul>
          </div>

          <WorkflowCTA />
        </div>
      </section>
    </>
  );
}
