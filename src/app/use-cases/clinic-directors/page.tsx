'use client';

import Link from "next/link";
import StarterPackCTA from "@/components/StarterPackCTA";
import Callout from "@/components/ui/Callout";
import WorkflowDiagram from "@/components/ui/WorkflowDiagram";
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
      <button onClick={handleCopy} className="absolute top-2 right-2 px-3 py-1 text-xs font-medium bg-white border border-slate-300 rounded hover:bg-slate-50 transition-colors">
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

function DiagnosticBranch({ condition, causes }: { condition: string; causes: string[] }) {
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

export default function ClinicDirectorsPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <Link href="/use-cases" className="text-sm text-teal-700 hover:text-teal-800 mb-4 inline-block">
            &larr; Back to Use Cases
          </Link>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">AI for Clinic Directors</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Clinic directors are pulled in every direction. They are treating patients, managing schedules, coaching staff, watching referrals, trying to keep eval access open, and answering for the clinic&apos;s numbers. AI is not a replacement for leadership. But it can help a clinic director organize the week, spot patterns, prepare better conversations, and turn clinic metrics into action.
          </p>
        </div>
      </div>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-16">

          {/* Core Concept */}
          <Callout type="reminder">
            Clinic metrics are only useful if they change behavior. AI should help you turn numbers into action — not just describe the numbers back to you.
          </Callout>

          {/* 1. Weekly Metrics Review */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Weekly Clinic Metrics Review</h2>
            <p className="text-slate-600 mb-4">
              A clinic director can use AI to review de-identified clinic-level metrics and identify what needs attention this week. The key is asking AI to connect the numbers to clinic behavior — not just summarize a spreadsheet.
            </p>

            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Metrics to include</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
              {["Total visits","Visits per FTE","Evaluations","Evals per therapist","Units per visit","Cancellation rate","No-show rate","Arrival rate","Open slots","Days to be seen","Referral volume","Discharges","Plan of care frequency","Clinician productivity","Front desk conversion","New clinician ramp-up","PTO / staffing changes"].map((m) => (
                <span key={m} className="text-xs bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-600">{m}</span>
              ))}
            </div>

            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">AI should help the director ask</p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-6">
              <ul className="space-y-1.5 text-sm text-slate-600">
                {["Did visits change from last week?","Did evals change?","Did referrals change?","Are patients getting in quickly enough?","Are cancellations or no-shows driving the issue?","Is the clinic staffed correctly for the schedule?","Is a new clinician ramping up?","Is the front desk converting referrals into evals?","Are clinicians scheduling appropriate follow-up frequency?","Is this a temporary issue or a real trend?"].map((q) => (
                  <li key={q} className="flex items-start gap-2"><span className="text-teal-500 mt-0.5 shrink-0">?</span>{q}</li>
                ))}
              </ul>
            </div>

            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Copy/paste prompt</p>
            <CopyablePrompt prompt={`You are helping me review outpatient rehab clinic metrics. Use only the de-identified clinic-level information below. Do not assume patient-specific details.

Clinic context:
- Clinic size: [small, medium, large]
- Staff mix: [PTs, PTAs, OTs, SLPs, ATs, front office]
- Recent changes: [new hire, PTO, open position, weather, schedule change, referral change, new service line, etc.]
- Main concern this week: [low visits, low evals, high cancellations, weak productivity, access issue, etc.]

Weekly metrics:
[paste de-identified clinic-level metrics here]

Please analyze:
1. What changed this week?
2. What looks strong?
3. What looks concerning?
4. Is the main issue most likely referral volume, eval access, scheduling, cancellations/no-shows, clinician productivity, front desk conversion, staffing, or new clinician ramp-up?
5. What evidence supports that?
6. What are the top 3 actions for next week?
7. What should the clinic director do?
8. What should the front desk focus on?
9. What should clinicians focus on?
10. What should be communicated to the regional director?

Output format:
- Brief summary
- Main likely issue
- Evidence from the metrics
- Top 3 actions
- Owner for each action
- Follow-up item for next week

Reminder: Use this as an operational review, not a final judgment. Leadership should verify the root cause.`} />
            <p className="text-sm text-slate-500">
              See also: <Link href="/resources/clinic-director-weekly-metrics-guide" className="text-teal-700 hover:text-teal-800 font-medium">Clinic Director&apos;s Guide to Using AI for Weekly Metrics</Link>
            </p>
          </div>

          {/* 2. Low Visits Diagnostic */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Low Visits Diagnostic Workflow</h2>
            <p className="text-slate-600 mb-6">
              Low visits are not always a referral problem. The root cause depends on what the rest of the numbers look like. Use this diagnostic framework to narrow it down before you act.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <DiagnosticBranch
                condition="Visits low + evals low"
                causes={["Referral volume is down","Referral sources have changed","Front desk is not converting referrals","Eval slots not available at desirable times","Days to be seen is too high","Physician relationships need follow-up"]}
              />
              <DiagnosticBranch
                condition="Evals strong + total visits low"
                causes={["Plan of care frequency is too low","Follow-ups not scheduled consistently at checkout","Cancellations and no-shows are high","Clinician productivity is low","Patients dropping off early","Front desk not filling cancellations"]}
              />
              <DiagnosticBranch
                condition="Visits per FTE is low"
                causes={["Too much open time on clinician schedules","Schedule templates not built well","New clinician ramping slowly","Front desk not backfilling","Director not managing the schedule daily","Clinic overstaffed for current volume"]}
              />
              <DiagnosticBranch
                condition="Days to be seen high + visits low"
                causes={["Eval access is blocked","Schedule has openings but not at the right times","Eval slots protected incorrectly","Front desk not offering enough options","Clinician schedules too rigid","Losing referrals due to access"]}
              />
              <DiagnosticBranch
                condition="Cancellations / no-shows high"
                causes={["Poor expectation setting at evaluation","Weak front desk confirmation process","Patients not understanding plan of care","Scheduling too far out","Not offering ideal times","No clear process for filling openings"]}
              />
            </div>

            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Diagnostic prompt</p>
            <CopyablePrompt prompt={`Help me diagnose why this outpatient rehab clinic has low visits.

Use this clinic-level, de-identified information:
[paste metrics and context]

Walk through these possible causes:
- Referral volume
- Eval access
- Days to be seen
- Front desk conversion
- Schedule utilization
- Cancellations/no-shows
- Plan of care frequency
- Clinician productivity
- New clinician ramp-up
- PTO/staffing issues
- Discharges or patient drop-off

For each possible cause:
1. Tell me whether the data supports it, does not support it, or is unclear.
2. Explain what I should check next.
3. Suggest one practical action.

End with the top 3 most likely causes and a one-week action plan.`} />
          </div>

          {/* 3. Monday Morning Plan */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Monday Morning Clinic Action Plan</h2>
            <p className="text-slate-600 mb-4">
              A director should start the week with a small number of priorities — not ten. AI can help turn last week&apos;s data into a Monday plan.
            </p>

            <WorkflowDiagram
              title="Monday morning structure"
              steps={["Last week's metrics", "Context + concerns", "AI action plan", "Team huddle", "Friday check-in"]}
            />

            <CopyablePrompt prompt={`Create a Monday morning action plan for my outpatient rehab clinic.

Context:
[paste de-identified clinic context]

Last week's metrics:
[paste clinic-level metrics]

Known issues:
[paste issues]

Create:
1. One main clinic focus for the week
2. A front desk focus
3. A clinician focus
4. A director focus
5. A short team huddle message (under 100 words)
6. A measurable goal for Friday
7. What I should review at the end of the week

Keep it short enough to actually use.`} />
          </div>

          {/* 4. Staff Coaching Prep */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Staff Coaching Prep</h2>
            <p className="text-slate-600 mb-4">
              AI can help a director prepare for coaching conversations, but it should not turn into HR language or make decisions for the leader. Common situations: clinician not meeting productivity expectations, front desk not filling openings, new clinician struggling with schedule build, documentation delays, or communication issues.
            </p>

            <CopyablePrompt prompt={`Help me prepare for a coaching conversation in an outpatient rehab clinic.

Situation:
[describe the issue without names or private HR details]

What I have observed:
[paste de-identified observations]

What I want to improve:
[paste desired behavior]

Create:
1. The main coaching theme
2. Questions I should ask first
3. Direct but respectful feedback
4. A simple action plan
5. What success should look like
6. How I should follow up
7. A short recap message I can send afterward

Tone: Supportive, clear, and accountable. Do not make this sound legalistic or corporate.`} />

            <Callout type="careful">
              Use appropriate HR or leadership review for sensitive employment issues. AI can help you organize your thinking, not replace qualified HR guidance.
            </Callout>
          </div>

          {/* 5. Front Desk Script Builder */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Front Desk Script Builder</h2>
            <p className="text-slate-600 mb-4">
              The front desk can make or break access, conversion, cancellation management, and patient experience. Use AI to create scripts for calling new referrals, offering eval times, filling cancellations, explaining attendance importance, reactivating patients who dropped off, and communicating with referral sources.
            </p>

            <CopyablePrompt prompt={`Create front desk scripts for an outpatient rehab clinic.

Scenario:
[describe scenario — e.g., calling a new referral, filling a cancellation, reactivating a patient, explaining attendance expectations]

Goal:
[book evaluation, fill cancellation, reduce no-show, reactivate patient, etc.]

Constraints:
- Keep it friendly and professional
- Do not sound pushy
- Do not include patient-specific medical advice
- Make it natural for a front desk team member to say out loud

Create:
1. Phone script
2. Voicemail script
3. Text message version
4. Email version if appropriate
5. Common patient objections and suggested responses`} />
          </div>

          {/* 6. New Clinician Ramp-Up */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. New Clinician Ramp-Up Tracker</h2>
            <p className="text-slate-600 mb-4">
              New clinicians need help with schedule build, eval flow, documentation habits, communication, and confidence. AI can help directors organize the ramp-up without micromanaging.
            </p>

            <CopyablePrompt prompt={`Create a 30-day ramp-up plan for a new outpatient rehab clinician.

Clinician role: [PT, PTA, OT, SLP, AT]
Clinic context: [paste de-identified clinic context]
Current concerns or goals: [paste goals]

Create:
1. Week 1 expectations
2. Week 2 expectations
3. Week 3 expectations
4. Week 4 expectations
5. Metrics to monitor
6. Questions the clinic director should ask weekly
7. Common barriers to watch for
8. How to support the clinician without overwhelming them`} />
          </div>

          {/* 7. Clinic Meeting Builder */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Clinic Meeting Builder</h2>
            <p className="text-slate-600 mb-4">
              AI can help turn clinic metrics and updates into a meeting your team can actually understand and act on — instead of 30 minutes of numbers nobody remembers.
            </p>

            <CopyablePrompt prompt={`Turn these clinic updates into a short outpatient rehab team meeting.

Clinic updates:
[paste de-identified notes]

Metrics:
[paste clinic-level metrics]

Create:
1. 5-minute huddle version
2. 20-minute team meeting version
3. Wins to recognize
4. Main issue to address
5. One front desk action
6. One clinician action
7. One follow-up item for next week

Keep it practical and not overwhelming.`} />
          </div>

          {/* Common Mistakes */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Common Mistakes</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <ul className="space-y-2 text-sm text-slate-700">
                {[
                  "Asking AI for a generic metric summary instead of an action plan",
                  "Pasting patient-level information into general AI tools",
                  "Treating AI's root cause analysis as fact without verifying",
                  "Ignoring context like PTO, new hires, or weather",
                  "Blaming referral volume before checking access and schedule utilization",
                  "Sharing too many metrics with the team instead of a clear focus",
                  "Creating action plans without owners",
                  "Letting AI soften difficult feedback too much",
                ].map((m) => (
                  <li key={m} className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5 shrink-0">!</span>{m}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Start Here */}
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-teal-800 mb-2">Start Here</h3>
            <p className="text-teal-700">
              Use the Weekly Clinic Metrics Review prompt with last week&apos;s clinic-level numbers. Then choose one action for the front desk, one for clinicians, and one for the director. That is your Monday plan.
            </p>
          </div>

          {/* Related */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold text-slate-800 mb-3">Related Guides</h3>
            <ul className="space-y-2">
              <li><Link href="/resources/clinic-director-weekly-metrics-guide" className="text-teal-700 hover:text-teal-800 text-sm font-medium">Clinic Director&apos;s Guide to Using AI for Weekly Metrics</Link></li>
              <li><Link href="/resources/ai-scribe-rollout-guide" className="text-teal-700 hover:text-teal-800 text-sm font-medium">AI Scribe Rollout Guide for Outpatient Rehab</Link></li>
              <li><Link href="/resources/ai-use-policy-starter-guide" className="text-teal-700 hover:text-teal-800 text-sm font-medium">AI Use Policy Starter Guide</Link></li>
              <li><Link href="/prompts" className="text-teal-700 hover:text-teal-800 text-sm font-medium">Full Prompt Library</Link></li>
            </ul>
          </div>

        </div>
      </section>

      <StarterPackCTA />
    </>
  );
}
