'use client';

import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import Callout from "@/components/ui/Callout";
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

function ClinicCategory({ label, color }: { label: string; color: string }) {
  return <span className={`text-xs font-medium px-2 py-1 rounded ${color}`}>{label}</span>;
}

export default function RegionalDirectorsPage() {
  return (
    <>
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <Link href="/use-cases" className="text-sm text-teal-700 hover:text-teal-800 mb-4 inline-block">
            &larr; Back to Use Cases
          </Link>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">AI for Regional Directors</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Regional leadership is not just reading reports. It is pattern recognition, follow-up, coaching, prioritization, and knowing which clinic needs what kind of support. AI can help a regional director organize clinic notes, compare de-identified clinic-level trends, prepare for meetings, and create clearer follow-up. The value is not automation. The value is better follow-through.
          </p>
        </div>
      </div>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-16">

          <Callout type="reminder">
            AI is most useful for a regional director when it turns scattered observations into clear priorities. It should not replace field leadership — it should make follow-through more consistent.
          </Callout>

          {/* 1. Multi-Site Review */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Multi-Site Weekly Review</h2>
            <p className="text-slate-600 mb-4">
              Do not treat every clinic the same. Group clinics by what they likely need. One clinic may need referral development. Another may need scheduling discipline. Another may need director coaching. Another may be strong and just needs recognition.
            </p>

            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Clinic performance categories</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <ClinicCategory label="Strong and stable" color="bg-green-100 text-green-800" />
              <ClinicCategory label="Needs monitoring" color="bg-blue-100 text-blue-800" />
              <ClinicCategory label="Referral volume issue" color="bg-yellow-100 text-yellow-800" />
              <ClinicCategory label="Eval access issue" color="bg-yellow-100 text-yellow-800" />
              <ClinicCategory label="Schedule utilization issue" color="bg-orange-100 text-orange-800" />
              <ClinicCategory label="Cancellation / no-show issue" color="bg-orange-100 text-orange-800" />
              <ClinicCategory label="Productivity issue" color="bg-red-100 text-red-800" />
              <ClinicCategory label="Staffing / PTO issue" color="bg-purple-100 text-purple-800" />
              <ClinicCategory label="New clinician ramp-up" color="bg-purple-100 text-purple-800" />
              <ClinicCategory label="Director coaching need" color="bg-slate-100 text-slate-800" />
              <ClinicCategory label="Needs urgent intervention" color="bg-red-100 text-red-800" />
            </div>

            <CopyablePrompt prompt={`Analyze these de-identified clinic-level metrics across multiple outpatient rehab clinics.

Region context:
[paste general context]

Clinic-level data:
[paste de-identified clinic-level metrics only]

For each clinic, identify:
1. Current performance category
2. Main likely issue
3. Evidence from the data
4. What the clinic director should focus on
5. What the regional director should do
6. Whether this clinic needs recognition, monitoring, active support, or urgent intervention

Then group the clinics into:
- Strong and stable
- Needs monitoring
- Needs active support
- Needs urgent intervention

Important: Do not overstate certainty. Use "likely," "possible," or "needs follow-up" when appropriate.`} />
          </div>

          {/* 2. Clinic Visit Follow-Up */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Clinic Visit Follow-Up</h2>
            <p className="text-slate-600 mb-4">
              A clinic visit produces scattered notes — staff concerns, schedule observations, front desk issues, director coaching points, referral needs, metrics concerns, follow-up promises. AI can turn those into a usable follow-up instead of notes that sit in a notebook.
            </p>

            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Use after</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Performance support visit","New director visit","Staffing issue","Referral development visit","Schedule review","New initiative rollout","Documentation support","Team morale concern"].map((t) => (
                <span key={t} className="text-xs bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-600">{t}</span>
              ))}
            </div>

            <CopyablePrompt prompt={`Turn these de-identified clinic visit notes into a practical follow-up summary.

Clinic context:
- Clinic type: [general ortho, sports, neuro, mixed outpatient, etc.]
- Leadership situation: [new director, experienced director, short staffed, growing, struggling, stable]
- Reason for visit: [performance review, support visit, staffing, referral development, new initiative, etc.]

Notes:
[paste de-identified notes]

Create:
1. Brief visit summary
2. What is going well
3. Main concerns
4. Top 3 priorities
5. Commitments made
6. Owner for each action item
7. Follow-up email to the clinic director
8. What I should check on during the next visit

Tone: Supportive, direct, and accountable. Do not sound corporate.`} />
          </div>

          {/* 3. Regional Meeting Prep */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Regional Meeting Prep</h2>
            <p className="text-slate-600 mb-4">
              Regional leaders often know what they want to say, but their notes are scattered across emails, texts, spreadsheets, and visit notes. AI can help turn that into a clean meeting plan.
            </p>

            <CopyablePrompt prompt={`Help me prepare for a regional operations meeting.

Region context:
[paste de-identified context]

Topics I need to cover:
[paste topics]

Clinic updates:
[paste de-identified clinic updates]

Staffing updates:
[paste staffing themes without private HR details]

Metrics concerns:
[paste clinic-level trends]

Create:
1. Clean meeting agenda
2. Most important updates
3. Wins worth recognizing
4. Risks or concerns to raise
5. Decisions needed
6. Follow-up items
7. Concise executive summary

Keep it clear and practical.`} />
          </div>

          {/* 4. Director Coaching */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Clinic Director Coaching Plan</h2>
            <p className="text-slate-600 mb-4">
              Regional directors coach directors differently based on the issue. The problem may be numbers, communication, follow-through, schedule discipline, delegation, front desk partnership, or staff accountability. AI can help you prepare — it should not replace the relationship.
            </p>

            <CopyablePrompt prompt={`Help me prepare for a coaching conversation with a clinic director.

Situation:
[describe the situation without names or private HR details]

Director strengths:
[paste strengths]

Main concerns:
[paste concerns]

Recent metrics or observations:
[paste de-identified information]

Create:
1. Main coaching theme
2. Questions I should ask before giving advice
3. Direct but supportive feedback
4. A 30-day action plan
5. What success should look like
6. What I should inspect or follow up on weekly
7. A short written recap I can send after the conversation

Tone: Respectful, clear, and accountable. Avoid HR/legal language unless requested.`} />

            <Callout type="careful">
              For sensitive performance or employment issues, involve HR before acting. AI can help you organize your thinking, not replace qualified HR guidance.
            </Callout>
          </div>

          {/* 5. Focus Clinic 30-Day Plan */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Focus Clinic 30-Day Action Plan</h2>
            <p className="text-slate-600 mb-4">
              A struggling clinic needs a focused plan, not ten priorities. AI can help organize a 30-day plan around the most likely root cause — whether that is eval access, referral volume, front desk conversion, schedule utilization, cancellations, clinician ramp-up, or director follow-through.
            </p>

            <CopyablePrompt prompt={`Create a 30-day focus clinic action plan for an outpatient rehab clinic.

Clinic context:
[paste de-identified context]

Main issue:
[paste issue]

Metrics:
[paste clinic-level metrics]

Known constraints:
[paste staffing, PTO, access, referral, schedule, or leadership constraints]

Create:
1. Likely root cause
2. What to verify first
3. Week 1 action plan
4. Week 2 action plan
5. Week 3 action plan
6. Week 4 action plan
7. What the clinic director owns
8. What the regional director owns
9. What the front desk owns
10. What clinicians own
11. Metrics to review weekly
12. What success should look like after 30 days

Keep the plan focused. Do not create more than 3 major priorities.`} />
          </div>

          {/* 6. Action Item Tracker */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Regional Action Item Tracker</h2>
            <p className="text-slate-600 mb-4">
              Regional work often fails because follow-up gets scattered across emails, meetings, texts, and clinic visits. AI can turn scattered notes into a structured tracker.
            </p>

            <CopyablePrompt prompt={`Turn these scattered regional follow-up notes into an action item tracker.

Notes:
[paste de-identified follow-up notes]

Create a tracker with:
- Clinic or topic
- Action item
- Owner
- Priority
- Due date if mentioned
- Follow-up question
- Current status
- What I should do next

Also identify:
1. Items that are vague and need clarification
2. Items missing an owner
3. Items that should be escalated
4. Items that can wait`} />
          </div>

          {/* 7. New Initiative Rollout Tracker */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">7. New Initiative Rollout Tracker</h2>
            <p className="text-slate-600 mb-4">
              Regional directors often help roll out new initiatives — AI documentation, new scheduling workflows, new service lines, front desk processes, mentorship programs, or cash-based services. AI can help track adoption, identify barriers, and decide whether to expand, pause, or adjust.
            </p>

            <CopyablePrompt prompt={`Help me review a new initiative rollout across multiple outpatient rehab clinics.

Initiative:
[AI documentation, new scheduling workflow, new service line, front desk process, etc.]

Clinics included:
[paste de-identified list]

Adoption data:
[paste de-identified clinic-level data]

Feedback:
[paste de-identified feedback]

Known issues:
[paste issues]

Create:
1. Rollout summary
2. Strong adopters
3. Low adopters
4. Likely barriers
5. Training needs
6. Quality or compliance concerns
7. Recommended next steps
8. What to communicate to clinic directors
9. What to communicate to leadership
10. Whether to expand, pause, or adjust the rollout

Do not invent results. Use only the information provided.`} />
          </div>

          {/* 8. AI Documentation Adoption */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">8. AI Documentation Adoption Review</h2>
            <p className="text-slate-600 mb-4">
              For AI documentation specifically, adoption alone is not enough. Usage, note quality, clinician feedback, and cost all matter.
            </p>

            <CopyablePrompt prompt={`Analyze this AI documentation adoption data for an outpatient rehab organization.

Context:
[paste de-identified context]

Usage data:
[paste data]

Feedback:
[paste de-identified feedback]

Quality review notes:
[paste de-identified audit themes]

Create:
1. Adoption summary
2. What is working
3. What is concerning
4. Which users or clinics may need support
5. Common barriers
6. Documentation quality risks
7. Training recommendations
8. Leadership summary
9. Next 30-day action plan

Reminder: AI documentation must be reviewed by the treating clinician. Do not treat AI-generated documentation as automatically accurate or compliant.`} />

            <p className="text-sm text-slate-500 mt-2">
              See also: <Link href="/resources/ai-scribe-rollout-guide" className="text-teal-700 hover:text-teal-800 font-medium">AI Scribe Rollout Guide for Outpatient Rehab</Link>
            </p>
          </div>

          {/* Common Mistakes */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Common Mistakes</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <ul className="space-y-2 text-sm text-slate-700">
                {[
                  "Asking AI for long summaries instead of prioritized action",
                  "Treating every clinic the same instead of diagnosing each one",
                  "Ignoring context — staffing, PTO, new hires, access issues",
                  "Pasting patient or employee-sensitive information into unapproved tools",
                  "Letting AI soften coaching feedback until it loses its point",
                  "Creating action plans with no owner or deadline",
                  "Losing track of commitments after clinic visits",
                  "Measuring rollout adoption without measuring quality",
                  "Assuming low adoption means staff are lazy instead of checking workflow, training, trust, and tool fit",
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
              After your next clinic visit, paste de-identified notes into the Clinic Visit Follow-Up prompt. Create a follow-up email, action item list, and next-visit checklist. That one workflow will save you more time than reading about AI for a month.
            </p>
          </div>

          {/* Related */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold text-slate-800 mb-3">Related Guides</h3>
            <ul className="space-y-2">
              <li><Link href="/resources/regional-director-ai-workflow-guide" className="text-teal-700 hover:text-teal-800 text-sm font-medium">Regional Director AI Workflow Guide</Link></li>
              <li><Link href="/resources/ai-scribe-rollout-guide" className="text-teal-700 hover:text-teal-800 text-sm font-medium">AI Scribe Rollout Guide for Outpatient Rehab</Link></li>
              <li><Link href="/resources/ai-use-policy-starter-guide" className="text-teal-700 hover:text-teal-800 text-sm font-medium">AI Use Policy Starter Guide</Link></li>
              <li><Link href="/use-cases/clinic-directors" className="text-teal-700 hover:text-teal-800 text-sm font-medium">AI for Clinic Directors</Link></li>
              <li><Link href="/prompts" className="text-teal-700 hover:text-teal-800 text-sm font-medium">Full Prompt Library</Link></li>
            </ul>
          </div>

        </div>
      </section>

      <Newsletter />
    </>
  );
}
