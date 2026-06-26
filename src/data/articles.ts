export interface ArticleSection {
  heading: string;
  content: string;
}

export interface Article {
  title: string;
  slug: string;
  category: string;
  summary: string;
  whoFor?: string;
  whenToUse?: string;
  nextStep?: string;
  safetyNote?: string;
  featured?: boolean;
  sections: ArticleSection[];
}

export const articles: Article[] = [
  // === 5 CORNERSTONE GUIDES (featured) ===

  {
    title: "AI Use Policy Starter Guide for Rehab Clinics",
    slug: "ai-use-policy-starter-guide",
    category: "Compliance and Safety",
    summary: "A practical starting point for creating clear AI rules around approved tools, PHI, documentation, staff training, and human review.",
    whoFor: "Clinic directors, regional directors, rehab owners, compliance leaders, operations leaders, and anyone responsible for helping staff use AI safely.",
    whenToUse: "Use this when your team is already using AI informally, wants to start using AI, or is rolling out an AI tool such as an AI scribe, meeting assistant, general AI assistant, or admin workflow tool.",
    nextStep: "Start with a one-page AI use policy. Do not wait for the perfect version. A clear first version is better than staff guessing.",
    safetyNote: "This guide is general education, not legal advice. Rehab organizations should involve compliance, legal, IT, and leadership before approving AI tools for patient-specific or sensitive workflows.",
    featured: true,
    sections: [
      {
        heading: "Why You Need a Policy Before You Need a Tool",
        content: "Most rehab companies start using AI the wrong way: someone downloads ChatGPT, starts pasting in notes, and nobody in compliance knows it is happening. By the time leadership finds out, they are playing catch-up.\n\nYou need a written AI use policy before you buy a single tool. It does not have to be 40 pages. It needs to be clear, specific, and short enough that people will actually read it.\n\nThe goal is not to scare staff away from AI. The goal is to give them enough structure that they can use it safely."
      },
      {
        heading: "Define Approved and Unapproved Tools",
        content: "Start by separating tools into three groups.\n\nApproved tools: These are tools the organization has reviewed and approved for specific uses. For example, an AI scribe approved for documentation support, or an internal AI assistant approved for non-PHI administrative work.\n\nConditionally approved tools: These may be allowed for limited uses — writing staff emails, brainstorming patient education topics, creating checklists, improving internal communication — but only when no PHI or sensitive company information is included.\n\nNot approved tools: These should not be used for patient information, confidential company data, billing disputes, HR issues, payer negotiations, or anything that could create compliance risk.\n\nSuggested policy language: \"Staff may only use AI tools for approved purposes. If a tool has not been reviewed or approved by the organization, staff should not enter patient information, protected health information, confidential business information, employee information, payer details, or other sensitive content.\""
      },
      {
        heading: "Create a Clear PHI Rule",
        content: "This needs to be painfully obvious.\n\nStaff should not enter:\n- Patient names\n- Dates of birth\n- Addresses or phone numbers\n- Email addresses\n- Insurance IDs or claim numbers\n- Medical record numbers\n- Full evaluation notes or daily notes copied from the EMR\n- Screenshots from the EMR\n- Appointment schedules with patient identifiers\n- Referral documents or physician orders\n- Anything that could reasonably identify a patient\n\nSafer alternative: Use de-identified summaries.\n\nDo not paste: \"John Smith, DOB 4/12/1958, referred by Dr. Adams after right TKA on 5/2.\"\n\nUse instead: \"Create a simple home exercise education handout for an older adult recovering from total knee replacement. Avoid medical advice beyond general education.\"\n\nSuggested policy language: \"Do not enter PHI into any AI tool unless the organization has approved that specific tool for PHI use and appropriate agreements, safeguards, and workflows are in place.\""
      },
      {
        heading: "Make Clinical Judgment Non-Negotiable",
        content: "AI can help draft, organize, and simplify. It should not make clinical decisions.\n\nAI should not independently decide:\n- Whether a patient is appropriate for therapy\n- Whether treatment is medically necessary\n- What diagnosis should be used\n- What CPT codes should be billed\n- Whether a patient should be discharged\n- Whether a patient needs imaging, referral, or medical follow-up\n- Whether a plan of care is compliant\n- Whether a payer appeal is valid\n\nSuggested policy language: \"AI-generated output must be reviewed by a qualified human before use. AI does not replace clinical reasoning, professional judgment, documentation review, payer requirements, or compliance processes.\""
      },
      {
        heading: "Separate Safe Use Cases from Risky Use Cases",
        content: "Generally safer uses:\n- Drafting a staff announcement\n- Turning meeting notes into action items\n- Creating a checklist\n- Brainstorming referral outreach ideas\n- Simplifying non-patient-specific education\n- Creating a clinic meeting agenda\n- Drafting a leadership update\n- Summarizing de-identified trends\n- Creating onboarding outlines\n- Rewriting internal messages for clarity\n\nHigher-risk uses (require compliance review):\n- Direct patient documentation\n- Billing and coding\n- Appeals and payer disputes\n- HR discipline\n- Legal documents or contract language\n- Patient-specific medical recommendations\n- Anything involving PHI\n- Anything involving confidential business strategy"
      },
      {
        heading: "AI Documentation and Scribe Rules",
        content: "AI scribes require a separate level of review.\n\nFor AI documentation tools, a rehab organization should define:\n- Whether the tool is approved for clinical documentation\n- Whether there is a BAA or other required agreement\n- Whether patient consent or notification is required\n- Who reviews the note before signing\n- Whether clinicians must edit before signing\n- How documentation quality will be audited\n- What happens if a note is inaccurate\n- Which note types are included (evals, daily notes, progress notes, discharges)\n\nSuggested policy language: \"AI-assisted documentation is a draft support tool. The treating clinician remains responsible for the accuracy, completeness, medical necessity, and compliance of the final signed note.\""
      },
      {
        heading: "Create a Staff Training Expectation",
        content: "A policy is not useful if staff never understand it.\n\nTraining should include:\n- What AI is good at and what AI is bad at\n- What not to paste into AI\n- How to de-identify information\n- Which tools are approved\n- How to review AI output\n- How to report concerns\n- Examples of safe and unsafe use\n\nDo not just email a PDF. Present it in a team meeting. Give real examples. Make it part of onboarding for new hires. Review and update it every 6 months as tools and regulations change."
      },
      {
        heading: "Add Monitoring Without Creating Fear",
        content: "Do not turn the policy into a threat. The best adoption happens when staff feel supported and safe asking questions.\n\nTrack:\n- Who is using approved tools\n- Common questions from staff\n- Documentation quality trends\n- Note completion patterns\n- Staff feedback on the tools\n- Any safety or compliance concerns\n- Time savings, if measurable\n- Whether the tool is actually helping people do better work"
      },
      {
        heading: "Common Mistakes",
        content: "- Waiting too long to create basic rules\n- Only talking about AI after something goes wrong\n- Assuming staff understand PHI risk without training\n- Letting every clinic create its own rules\n- Approving a tool without defining the workflow around it\n- Focusing only on the software instead of staff behavior\n- Making the policy so strict that nobody asks questions\n- Not reviewing and updating the policy as tools change"
      },
      {
        heading: "AI Use Policy Starter Checklist",
        content: "Before staff use AI, define:\n\n[ ] Which AI tools are approved\n[ ] Which tools are not approved\n[ ] Whether any tool is approved for PHI\n[ ] What staff are allowed to use AI for\n[ ] What staff are not allowed to use AI for\n[ ] What information should never be pasted into AI\n[ ] Who reviews AI-generated clinical content\n[ ] Who reviews AI-generated billing or payer content\n[ ] Whether AI documentation tools require special consent, notice, or agreements\n[ ] How staff should report concerns\n[ ] How new AI tools will be reviewed\n[ ] How staff will be trained\n[ ] How the policy will be updated"
      },
    ]
  },

  {
    title: "AI Scribe Rollout Guide for Outpatient Rehab",
    slug: "ai-scribe-rollout-guide",
    category: "AI Implementation",
    summary: "A field-tested framework for piloting and scaling AI documentation tools without ignoring adoption, note quality, compliance, or staff trust.",
    whoFor: "Rehab company leaders, clinic directors, regional directors, compliance leaders, documentation leaders, and AI scribe champions.",
    whenToUse: "Use this before launching an AI scribe, during a pilot, or when adoption is inconsistent and you need to course-correct.",
    nextStep: "Pick one clinic, one champion, one clear success metric, and one quality review process before expanding.",
    safetyNote: "AI scribes should only be used under the organization's approved privacy, compliance, and documentation policies. The treating clinician remains responsible for the final signed note.",
    featured: true,
    sections: [
      {
        heading: "An AI Scribe Is a Behavior Change Project",
        content: "AI scribes can reduce documentation burden, but they do not succeed just because the software works. The rollout matters.\n\nIn outpatient rehab, the hard part is rarely just \"Can the tool write a note?\" The harder questions are:\n- Will clinicians use it consistently?\n- Will notes still support medical necessity?\n- Will documentation quality improve, stay the same, or drift?\n- Will staff trust the tool?\n- Will clinic leaders know how to coach adoption?\n- Will the company know if it is actually worth the cost?"
      },
      {
        heading: "Define the Problem First",
        content: "Do not start with \"We bought an AI scribe.\" Start with the problem.\n\nCommon problems AI scribes can address:\n- Clinicians documenting after hours\n- Evaluations taking too long to complete\n- Staff burnout from documentation\n- Delayed note completion\n- Low documentation quality\n- Difficulty opening eval access because clinicians are buried in notes\n- New clinicians struggling with documentation flow\n- Clinicians spending too much time typing instead of treating\n\nBefore rollout, define what success means. Examples: reduce after-hours documentation, improve same-day note completion, improve clinician satisfaction, improve eval access, maintain or improve documentation quality, help new clinicians ramp faster."
      },
      {
        heading: "Choose the First Users Carefully",
        content: "Do not start with everyone if you cannot support everyone.\n\nGood first users:\n- Clinicians with high documentation burden\n- Clinicians with high eval volume\n- Strong communicators who will give useful feedback\n- Clinic directors who can model adoption\n- Clinicians who are open to trying new workflows\n- A mix of disciplines (PT, OT, SLP, PTA, AT) if applicable\n\nBe careful starting only with your most tech-comfortable staff. They may not represent the real workflow challenges of the larger team."
      },
      {
        heading: "Pick Champions",
        content: "Each rollout needs champions.\n\nA champion should:\n- Use the tool consistently\n- Understand the documentation standard\n- Be trusted by peers\n- Share practical tips, not just enthusiasm\n- Surface problems early and honestly\n- Help leadership separate software issues from workflow issues\n\nA champion is not just someone who likes technology. It should be someone other clinicians trust. The clinician who has been treating for 15 years and says \"this actually helps\" will move the room more than the new grad who is excited about everything."
      },
      {
        heading: "Create Guardrails Before Launch",
        content: "Before anyone uses the scribe, define:\n- Which note types are allowed (evals, daily notes, progress notes, discharges)\n- Whether patient consent or notification is needed\n- What language staff should use when introducing the tool to patients\n- Whether audio is recorded, stored, or processed\n- How the tool handles PHI\n- Who reviews the final note\n- What should never be dictated\n- What to do when the AI gets something wrong\n\nClinician reminder to distribute: \"The AI-generated note is a draft. You are responsible for reviewing, editing, and signing an accurate final note.\""
      },
      {
        heading: "Train the Workflow, Not Just the Software",
        content: "Bad rollout: \"Here is the login. Watch this video.\"\n\nBetter rollout:\n- Show how to introduce the tool to patients\n- Show how to structure the visit conversation so the scribe captures useful content\n- Show examples of strong and weak AI-generated notes\n- Show how to edit efficiently without re-writing the entire note\n- Show how to catch common errors (incorrect laterality, hallucinated details, generic language)\n- Show how to document medical necessity clearly even when the AI drafts the note\n- Show how to use the tool differently for evals, daily notes, progress notes, and discharges"
      },
      {
        heading: "Track Adoption",
        content: "If nobody tracks adoption, leadership will rely on vibes.\n\nTrack:\n- Number of active users per week\n- Notes completed with the tool vs. without\n- Average time per note, if available\n- Same-day note completion rates\n- After-hours documentation trends\n- Clinician feedback (ask directly, do not just look at usage data)\n- Support tickets or recurring issues\n- Whether usage drops after the first few weeks\n\nKey question: Are clinicians not using it because the tool is bad, because the workflow is unclear, because they are uncomfortable, or because nobody is holding the process accountable?"
      },
      {
        heading: "Track Quality",
        content: "Time savings do not matter if documentation gets worse.\n\nReview notes for:\n- Medical necessity language\n- Objective measures and functional progress\n- Skilled intervention details\n- Plan of care accuracy\n- Payer-specific requirements\n- Goal updates\n- Missing details\n- Overly generic language\n- Hallucinated or incorrect content\n\nCommon AI scribe risks in rehab:\n- Notes that sound polished but say very little\n- Overstated patient progress\n- Missing skilled intervention details\n- Copy-forward style language\n- Incorrect laterality or visit details\n- Generic plans that do not reflect the actual treatment\n- Weak medical necessity\n- Clinicians signing without careful review"
      },
      {
        heading: "Coach by User Group",
        content: "Different clinicians will need different coaching.\n\nHigh adopters: Help them improve efficiency and note quality. Make sure they are not just accepting AI drafts without review.\n\nLow adopters: Find out whether the issue is comfort, training, workflow, or skepticism. Solve the root cause.\n\nNew clinicians: Use the tool to support documentation structure, but do not let it replace learning how to document well.\n\nExperienced clinicians: Focus on time savings without losing their clinical voice in the notes.\n\nClinic directors: Give them adoption summaries so they can coach locally."
      },
      {
        heading: "Decide Whether the Rollout Is Working",
        content: "Do not judge the tool after two days. Do not ignore bad adoption for six months either.\n\nUseful questions:\n- Are clinicians actually using it consistently?\n- Is documentation faster?\n- Are notes still clinically strong?\n- Are clinicians less burdened?\n- Are directors seeing better note completion habits?\n- Is eval access improving because documentation takes less time?\n- Does the cost make sense relative to the results?"
      },
      {
        heading: "Common Mistakes",
        content: "- Buying the tool before defining the workflow\n- Assuming login equals adoption\n- Not training clinic directors on how to coach adoption\n- Measuring usage but not quality\n- Measuring quality but not staff experience\n- Ignoring low adoption and hoping it resolves itself\n- Letting clinicians sign AI notes without careful review\n- Rolling it out to everyone before the pilot is stable\n- Treating champions as tech support instead of peer leaders"
      },
      {
        heading: "AI Scribe Rollout Checklist",
        content: "Before launch:\n[ ] Define the problem you are trying to solve\n[ ] Define success metrics\n[ ] Confirm privacy, compliance, and contract requirements\n[ ] Decide which users will start first\n[ ] Pick clinic or regional champions\n[ ] Create patient-facing explanation language\n[ ] Create clinician review expectations\n[ ] Decide which note types are included\n[ ] Create a documentation quality audit process\n\nDuring pilot:\n[ ] Track active users weekly\n[ ] Track note volume with and without AI\n[ ] Review sample notes for quality\n[ ] Collect clinician feedback directly\n[ ] Identify common errors\n[ ] Coach low adopters\n[ ] Share practical tips from high adopters\n\nAfter pilot:\n[ ] Compare results to success metrics\n[ ] Decide what needs to change before scaling\n[ ] Update training materials\n[ ] Clarify rules based on pilot lessons\n[ ] Decide who gets access next\n[ ] Continue monitoring adoption and quality"
      },
    ]
  },

  {
    title: "Clinic Director's Guide to Using AI for Weekly Metrics",
    slug: "clinic-director-weekly-metrics-guide",
    category: "Clinic Operations",
    summary: "A practical guide for turning clinic-level numbers into clear action around visits, evals, access, cancellations, productivity, and staffing.",
    whoFor: "Clinic directors, assistant directors, regional directors, operations leaders, and new leaders learning how to read clinic numbers.",
    whenToUse: "Use this weekly when reviewing clinic performance, preparing for a meeting, identifying problems, or creating an action plan.",
    nextStep: "Take last week's clinic-level metrics and ask AI to identify the top three action items. Then review the output and adjust it based on what you know about the clinic.",
    safetyNote: "Do not use patient-level information in general AI tools. AI-generated operational summaries should be reviewed by clinic or regional leadership before being shared.",
    featured: true,
    sections: [
      {
        heading: "Clinic Metrics Are Only Useful If They Change Behavior",
        content: "Most clinic leaders already have access to numbers. The problem is not the spreadsheet. The problem is turning the numbers into a clear answer: What is happening, why is it happening, and what should we do next?\n\nAI can help clinic directors organize weekly metrics, identify likely patterns, and prepare for better conversations. It should not replace leadership judgment. It should help leaders think more clearly."
      },
      {
        heading: "Start with the Key Metrics",
        content: "Useful weekly clinic metrics may include:\n- Total visits\n- Visits per FTE\n- Evaluations and evals per therapist\n- Units per visit\n- Cancellation rate and no-show rate\n- Arrival rate\n- Scheduled visits and open slots\n- Days to be seen (new patient access)\n- New referrals and referral source trends\n- Discharges and plan of care completion\n- Clinician productivity by provider\n- Front desk conversion rates\n- New clinician ramp-up progress\n- Staff PTO or open positions\n\nDo not paste patient-level data into general AI tools. Use clinic-level, de-identified numbers only."
      },
      {
        heading: "Ask Better Questions",
        content: "Weak question: \"Analyze these clinic metrics.\"\n\nBetter question: \"Based on these weekly clinic metrics, identify whether the main issue appears to be referral volume, schedule availability, cancellation rate, clinician productivity, new clinician ramp-up, front desk conversion, or documentation and admin burden. Then suggest the top three actions for next week.\"\n\nThe more context you give — clinic size, recent changes, staffing situation — the better the output will be."
      },
      {
        heading: "Separate Volume Problems from Access Problems",
        content: "A clinic with low visits may have different root causes.\n\nIf eval volume is strong but visits per FTE are low: the issue may be plan of care frequency, schedule utilization, cancellations, or clinician productivity — not referral development.\n\nIf visits are low and evals are low: the issue may be referral volume, physician relationships, access, or front desk conversion.\n\nIf evals are strong but days to be seen are high: the issue may be scheduling availability or protected eval times.\n\nAI can help sort possibilities, but the director has to verify the real cause by looking at what is actually happening in the clinic."
      },
      {
        heading: "Turn Numbers into a Weekly Action Plan",
        content: "The goal is not a beautiful report. The goal is action.\n\nA strong weekly output should include:\n- What changed this week compared to the prior week\n- What improved and what worsened\n- Most likely root cause for any concerning trends\n- What needs director attention this week\n- What needs front desk attention\n- What needs clinician attention\n- Top three actions with an owner for each\n- What to follow up on next week"
      },
      {
        heading: "Use AI to Prepare for Team Communication",
        content: "Clinic teams do not need every metric. They need the few things that matter this week.\n\nAI can help turn metrics into:\n- A short team huddle message\n- A front desk focus for the week\n- A clinician productivity conversation\n- A cancellation reduction script\n- A referral thank-you message\n- A director update to the regional leader\n- A one-page action plan"
      },
      {
        heading: "Be Careful with Blame",
        content: "AI may make a problem look simpler than it is.\n\nLow productivity does not always mean poor effort. Low visits may not mean poor marketing. Low evals may not mean physicians stopped referring. High cancellations may be tied to weather, patient population, scheduling habits, or poor expectation setting at the first visit.\n\nUse AI to generate hypotheses, not verdicts. The numbers tell you where to look. You still have to figure out why."
      },
      {
        heading: "Weekly Metrics Review Prompt",
        content: "Copy and paste this into ChatGPT, Claude, or any general AI tool:\n\nYou are helping me review weekly outpatient rehab clinic metrics. Do not make assumptions beyond the data I provide. Identify likely patterns and give me a practical action plan.\n\nClinic context:\n- Clinic size: [small, medium, large]\n- Staff: [number of PT/OT/SLP/PTA/AT/front office staff]\n- Any recent changes: [new hire, PTO, open position, weather issue, schedule change, referral change, etc.]\n\nWeekly metrics:\n[paste de-identified clinic-level metrics here]\n\nPlease analyze:\n1. What changed this week?\n2. What looks strong?\n3. What looks concerning?\n4. Is the main issue more likely referral volume, access, scheduling, cancellations, productivity, front desk conversion, staffing, or ramp-up?\n5. What are the top 3 likely root causes?\n6. What should the clinic director do next week?\n7. What should the front desk focus on?\n8. What should clinicians focus on?\n9. What should be communicated to the regional director?\n10. What should we check again next week?\n\nOutput format:\n- Brief summary\n- Main issue with evidence\n- Top 3 actions with owner for each\n- Follow-up question for next week\n\nImportant: Do not include patient-specific information. This is for clinic-level operational review only."
      },
      {
        heading: "Common Mistakes",
        content: "- Sending AI too many numbers without context about what is happening in the clinic\n- Asking for a summary instead of an action plan\n- Ignoring staffing or PTO context that explains the numbers\n- Treating AI's interpretation as fact without verifying\n- Not comparing to prior weeks for trend context\n- Focusing only on visits and ignoring evals, access, cancellations, and staffing\n- Sharing too much data with the team instead of a clear focus\n- Letting every week become a new priority instead of staying focused on the root cause"
      },
    ]
  },

  {
    title: "Regional Director AI Workflow Guide",
    slug: "regional-director-ai-workflow-guide",
    category: "Leadership",
    summary: "A guide for using AI to organize clinic visits, multi-site performance reviews, director coaching, leadership meetings, and follow-up.",
    whoFor: "Regional directors, directors of operations, multi-site rehab leaders, area managers, senior clinic directors, and rehab executives supporting field teams.",
    whenToUse: "Use this after clinic visits, before leadership meetings, when reviewing multi-site metrics, or when turning scattered notes into follow-up.",
    nextStep: "Use AI after your next clinic visit to create a follow-up email, action list, and next-visit checklist.",
    safetyNote: "Do not include patient names, employee discipline details, confidential HR information, or sensitive company information in unapproved AI tools. Use AI to organize leadership thinking, not to replace leadership judgment.",
    featured: true,
    sections: [
      {
        heading: "The Value for Regional Directors",
        content: "Regional directors often live in scattered information. A normal week may include clinic visits, staffing issues, performance reviews, referral concerns, director coaching, leadership meetings, new initiatives, payer questions, and follow-up items from multiple locations.\n\nAI can help regional leaders organize their thinking, prepare better conversations, and follow through more consistently.\n\nThe value is not having AI \"manage the region.\" The value is using AI to reduce mental clutter and improve execution."
      },
      {
        heading: "Use AI After Clinic Visits",
        content: "Clinic visits create a lot of loose information: staff concerns, schedule observations, front desk issues, director coaching points, referral needs, facility problems, patient experience observations, metrics concerns, follow-up promises, and staffing conversations.\n\nAI can turn those notes into a director follow-up email, a regional summary, a prioritized action list, a leadership update, a coaching plan, or a next-visit checklist.\n\nClinic visit follow-up prompt:\n\nTurn these de-identified clinic visit notes into a practical follow-up summary.\n\nClinic context:\n- Clinic type: [outpatient rehab, sports, neuro, general ortho, etc.]\n- Leadership situation: [new director, experienced director, short staffed, growing, struggling, etc.]\n- Main reason for visit: [performance review, support visit, staffing, referral development, new initiative, etc.]\n\nNotes:\n[paste de-identified notes here]\n\nCreate:\n1. Brief summary of the visit\n2. What is going well\n3. Main concerns\n4. Top 3 priorities\n5. Specific commitments made\n6. Owner for each action item\n7. Suggested follow-up email to the clinic director\n8. What I should check on during the next visit\n\nTone: Supportive, direct, and accountable. Do not sound corporate."
      },
      {
        heading: "Use AI Before Regional Meetings",
        content: "Regional leaders often know what they want to say, but their notes are messy. AI can help prepare a clean meeting agenda, clinic updates, staffing priorities, metrics summary, wins and concerns, decisions needed, and follow-up items.\n\nRegional meeting prep prompt:\n\nHelp me prepare for a regional operations meeting.\n\nRegion context:\n[paste brief de-identified context]\n\nTopics I need to cover:\n[paste topics]\n\nClinic-level updates:\n[paste de-identified clinic-level notes]\n\nCreate:\n1. A clean meeting agenda\n2. The most important updates\n3. Decisions needed\n4. Risks or concerns to raise\n5. Wins worth recognizing\n6. Follow-up items\n7. A concise executive summary\n\nKeep it practical and direct."
      },
      {
        heading: "Use AI for Multi-Site Performance Comparison",
        content: "A regional director should not treat every clinic the same. One clinic may need referral development. Another may need scheduling discipline. Another may need director coaching. Another may be fine but has a temporary staffing issue.\n\nAI can help group clinics by likely need.\n\nMulti-site comparison prompt:\n\nAnalyze these de-identified clinic-level metrics across multiple outpatient rehab clinics.\n\nData:\n[paste clinic-level data only, no patient information]\n\nFor each clinic, identify:\n1. Current performance category\n2. Main likely issue\n3. Evidence from the data\n4. Suggested action for the regional director\n5. Suggested action for the clinic director\n6. Whether this needs urgent attention, routine follow-up, or recognition\n\nThen group the clinics into: Strong performance, Needs monitoring, Needs active support, Needs urgent intervention.\n\nImportant: Do not overstate certainty. Use \"likely\" and \"possible\" when appropriate."
      },
      {
        heading: "Use AI for Director Coaching",
        content: "Regional directors spend a lot of time coaching clinic directors. AI can help prepare for those conversations, but it should not replace the relationship.\n\nDirector coaching prep prompt:\n\nHelp me prepare for a coaching conversation with a clinic director.\n\nSituation:\n[describe the situation without names or private details]\n\nDirector strengths:\n[paste strengths]\n\nMain concerns:\n[paste concerns]\n\nRecent metrics or observations:\n[paste de-identified information]\n\nCreate:\n1. Main coaching theme\n2. Questions I should ask before giving advice\n3. Direct but supportive feedback\n4. A 30-day action plan\n5. What success should look like\n6. How I should follow up\n7. A short written recap I can send after the conversation\n\nTone: Respectful, clear, and accountable. Avoid HR or legal language unless specifically needed."
      },
      {
        heading: "Use AI to Reduce Follow-Up Failure",
        content: "A major risk in regional leadership is not lack of ideas. It is weak follow-through.\n\nAI can help create a weekly follow-up tracker, clinic action item list, director commitments, next visit plans, escalation lists, and items to revisit in 30 days.\n\nFollow-up tracker prompt:\n\nTurn these scattered regional follow-up items into a simple tracker.\n\nNotes:\n[paste de-identified follow-up notes]\n\nCreate a tracker with:\n- Clinic or topic\n- Action item\n- Owner\n- Due date if mentioned\n- Priority level\n- Follow-up question\n- Status\n- What I should do next\n\nAlso identify any items that are vague and need clarification before they can be acted on."
      },
      {
        heading: "Common Mistakes",
        content: "- Using AI to create long summaries nobody reads\n- Failing to include context about the clinic situation\n- Letting AI soften feedback too much in coaching messages\n- Letting AI make assumptions about a clinic without verifying\n- Copying AI-generated coaching language without making it sound like you\n- Using AI for HR-sensitive issues without proper review\n- Pasting employee or patient-identifying details into unapproved tools\n- Creating action plans without clear owners or deadlines\n- Not following up on the action items AI helped you create"
      },
    ]
  },

  {
    title: "What Rehab Teams Should Never Put Into AI",
    slug: "what-rehab-teams-should-never-put-into-ai",
    category: "Compliance and Safety",
    summary: "A simple, staff-friendly guide covering PHI, EMR notes, payer information, HR-sensitive details, company data, and patient stories.",
    whoFor: "All rehab staff — clinicians, front desk teams, clinic directors, regional directors, admin teams, marketing teams, students, and residents.",
    whenToUse: "Use this in staff training, onboarding, AI policy discussions, and before rolling out any AI tools.",
    nextStep: "Print or share the \"Before You Paste Into AI\" checklist with every staff member before giving them AI prompt examples.",
    safetyNote: "This guide is general education. Each organization should create its own AI policy with input from compliance, legal, IT, and leadership.",
    featured: true,
    sections: [
      {
        heading: "The Fastest Way to Misuse AI",
        content: "The fastest way for a rehab team to misuse AI is to paste the wrong information into the wrong tool.\n\nMost staff are not trying to do anything unsafe. They are usually trying to save time. But if the rules are not clear, someone may copy a patient note, screenshot, referral, schedule, payer denial, or HR issue into an AI tool without realizing the risk.\n\nThis guide gives rehab teams a simple \"do not paste this\" list.\n\nCore principle: If the tool is not approved for that type of information, do not paste it."
      },
      {
        heading: "Do Not Paste Patient Identifiers",
        content: "Do not enter:\n- Patient names\n- Initials if they could identify the patient\n- Date of birth\n- Address, phone number, or email address\n- Insurance ID, claim number, or medical record number\n- Social Security number\n- Emergency contact information\n- Photos or videos of patients\n- Appointment schedules with names\n- Referral documents with identifying details\n\nSafer alternative: Remove identifying details and describe the situation generally.\n\nInstead of: \"Write education for Mary Jones, DOB 3/4/1962, who has shoulder pain after surgery.\"\n\nUse: \"Write general, plain-language education for an adult recovering from shoulder surgery who needs help understanding safe activity progression. Do not provide patient-specific medical advice.\""
      },
      {
        heading: "Do Not Paste Full Notes from the EMR",
        content: "Avoid pasting:\n- Full evaluations or daily notes\n- Progress notes or discharge summaries\n- Plan of care documents\n- Physician orders or referral notes\n- Scanned documents or screenshots from the EMR\n\nEven if you remove the name, the note may still contain enough detail to identify the patient. A 73-year-old male with a left total knee replacement at your clinic on Tuesday — that combination can identify a patient even without their name.\n\nSafer alternative: \"Create a general checklist for reviewing whether a therapy progress note clearly describes functional progress, skilled intervention, and updated goals.\""
      },
      {
        heading: "Do Not Paste Payer or Billing Information",
        content: "Be careful with:\n- Claim numbers and denial letters\n- Authorization documents\n- Insurance IDs and payer portal content\n- Payment disputes or contract terms\n- Fee schedules and audit documents\n- Medical necessity disputes\n\nAI can help draft a structure for an appeal or organize general arguments, but billing and payer content needs careful human review.\n\nSafer alternative: \"Create a general outline for organizing a therapy medical necessity appeal. Do not include patient-specific information.\""
      },
      {
        heading: "Do Not Paste Employee-Sensitive Information",
        content: "Do not paste:\n- Employee names tied to performance issues\n- Written warnings or HR complaints\n- Termination details or medical leave details\n- Disability-related information\n- Salary information or conflict details\n- Investigation notes\n\nSafer alternative: \"Help me prepare for a coaching conversation with a clinic leader who is struggling with follow-through. Keep the tone direct, respectful, and non-legal.\""
      },
      {
        heading: "Do Not Paste Confidential Company Information",
        content: "Be careful with:\n- Financial reports and profit-and-loss data\n- Acquisition plans or partnership agreements\n- Strategic plans and vendor contracts\n- Internal pricing models\n- Private expansion plans\n- Board or executive materials\n- Non-public performance data\n\nSome company-level data may be okay in an approved internal tool, but it should not go into a random public AI tool."
      },
      {
        heading: "Do Not Paste Patient Stories for Marketing",
        content: "This one is easy to miss.\n\nDo not paste:\n- A patient success story with identifiable details\n- Before and after photos\n- Patient quotes without proper permission\n- Injury details tied to a specific person\n- Sports team or school details that identify the patient\n- Social media comments that reveal care details\n\nSafer alternative: \"Write a general social media post about helping athletes return to activity after injury. Do not mention a specific patient.\""
      },
      {
        heading: "Do Not Trust AI with Final Decisions",
        content: "AI should not be the final decision-maker for:\n- Diagnosis or medical necessity\n- Billing codes or discharge decisions\n- Plan of care frequency\n- Payer appeals or legal language\n- HR action or compliance conclusions\n\nUse AI to draft, organize, or brainstorm. Then use qualified human review for the final version."
      },
      {
        heading: "Simple Rule for Staff",
        content: "When in doubt, ask these questions:\n\n1. Could this identify a patient?\n2. Could this identify an employee?\n3. Is this from the EMR?\n4. Is this from a payer, claim, or billing document?\n5. Is this confidential company information?\n6. Would I be uncomfortable if this became public?\n7. Has this tool been approved for this type of information?\n\nIf the answer to any of these is yes, do not paste it into an unapproved AI tool."
      },
      {
        heading: "Before You Paste Into AI — Staff Checklist",
        content: "Do not paste:\n[ ] Patient names or identifiers\n[ ] Dates of birth\n[ ] Insurance IDs or medical record numbers\n[ ] EMR screenshots or full clinical notes\n[ ] Referral documents with patient details\n[ ] Payer denials with patient information\n[ ] Claim numbers\n[ ] Employee performance issues or HR complaints\n[ ] Salary details\n[ ] Confidential company data\n[ ] Patient photos or videos\n[ ] Patient stories for marketing without proper approval\n\nSafer options:\n[ ] Use de-identified summaries\n[ ] Ask for a general framework\n[ ] Use fictional example data\n[ ] Remove all patient and employee details\n[ ] Use only approved tools\n[ ] Ask a leader before using sensitive information"
      },
    ]
  },

  // === EXISTING NON-CORNERSTONE GUIDES ===

  {
    title: "10 Safe AI Use Cases for Clinic Directors",
    slug: "10-safe-ai-use-cases-clinic-directors",
    category: "Leadership",
    summary: "Ten practical, low-risk ways clinic directors can start using AI this week — none of which involve patient data or clinical documentation.",
    sections: [
      {
        heading: "Start with Zero-Risk Use Cases",
        content: "If you are a clinic director and you have been hearing about AI but have not started using it, start here. These 10 use cases do not involve patient data, do not require special tools, and do not need IT approval. You can do all of them with a free ChatGPT or Claude account today."
      },
      { heading: "1. Draft Staff Emails", content: "You write the same types of emails every week — schedule changes, policy reminders, team updates. Give AI the key points and let it draft the email. You edit and send. A 20-minute email becomes a 5-minute edit.\n\nExample prompt: \"Draft a professional email to my clinic team about a schedule change next week. Monday hours are changing from 7-6 to 8-7. Tone should be direct but friendly. Include a note that anyone with a conflict should let me know by Thursday.\"" },
      { heading: "2. Create Meeting Agendas", content: "Stop running meetings without agendas. Paste in your topics and let AI organize them with time estimates and discussion questions. Your meetings will run shorter and your team will notice." },
      { heading: "3. Build Onboarding Checklists", content: "Every time you hire someone, you are rebuilding the same checklist from memory. Have AI create a comprehensive onboarding plan organized by week. Customize it once, then reuse it." },
      { heading: "4. Prepare for Difficult Conversations", content: "Need to give tough feedback? Use AI to role-play the conversation. Tell it the situation, what you need to communicate, and ask it to play the other person's role. Practice your response. Nobody will know." },
      { heading: "5. Summarize Long Policy Documents", content: "Your company sends a 15-page policy update. Paste it into AI and ask for a 1-page summary with action items for your clinic. Share the summary with your team instead of forwarding the whole document that nobody will read." },
      { heading: "6. Analyze Your Clinic Metrics", content: "Export your weekly numbers to a spreadsheet, paste them into AI, and ask: \"What are the 3 most important trends here, and what should I follow up on this week?\" You will be surprised how often it catches something you missed." },
      { heading: "7. Write Job Postings", content: "Give AI your job description template and ask it to rewrite it so it actually sounds appealing. Most clinic job postings read like compliance documents. Let AI make it sound like a place people want to work." },
      { heading: "8. Create Patient FAQ Documents", content: "Your front desk answers the same 15 questions every day. Have AI draft an FAQ document with clear, simple answers. Print it, post it, email it to new patients. This saves front desk time and reduces phone calls." },
      { heading: "9. Draft Performance Review Notes", content: "Do not start from a blank page. Give AI the employee's key accomplishments and areas for growth, and let it draft the review structure. You fill in the specifics and personal observations." },
      { heading: "10. Brainstorm Solutions to Operational Problems", content: "Stuck on a problem? Describe it to AI with context: \"I am a clinic director at an outpatient PT clinic. We are seeing 15% cancellation rates on Fridays. What are the most common causes and what can I try?\" It will not always be right, but it will give you angles you had not considered." },
      { heading: "The Pattern", content: "Notice what all of these have in common: no patient data, no clinical content, no compliance risk. They are all operational and leadership tasks. This is the safest and fastest way to start getting value from AI. Once your team sees you using it effectively, they will start asking questions — and that is when you can introduce it more broadly with proper training and policies." },
    ]
  },
  {
    title: "AI Prompt Pack for Rehab Leaders",
    slug: "ai-prompt-pack-rehab-leaders",
    category: "Leadership",
    summary: "A focused set of prompts designed specifically for rehab leadership workflows — clinic directors, regional directors, and operations leaders.",
    sections: [
      { heading: "How to Use These Prompts", content: "These prompts are designed for general AI tools like ChatGPT or Claude. Do not enter protected health information. Replace the bracketed sections with your own details. These work best when you give the AI context about your role and setting — \"I am a clinic director at a 3-provider outpatient PT clinic\" will get you much better results than a generic request." },
      { heading: "Weekly Clinic Review", content: "Prompt: \"I am a clinic director at an outpatient rehab clinic. Here are my key metrics for the week: [paste metrics]. Analyze these numbers and tell me: (1) What looks concerning and why, (2) What looks positive, (3) Three specific questions I should ask my team this week based on this data.\"\n\nWhy it works: Focuses on actionable follow-up, not just data summary." },
      { heading: "Staff Coaching Preparation", content: "Prompt: \"I need to have a coaching conversation with a clinician about [specific issue]. Help me plan the conversation. Give me: (1) A clear opening statement, (2) Two questions to understand their perspective, (3) Specific behavioral expectations to set, (4) A follow-up plan.\"\n\nWhy it works: Gives you a structure so you are not winging it. Coaching conversations go poorly when they are unplanned." },
      { heading: "Meeting Agenda Builder", content: "Prompt: \"Create a 30-minute team meeting agenda for an outpatient rehab clinic. Topics to cover: [list your topics]. For each topic, include a time estimate, who should lead that section, and one discussion question. End with a 3-minute wrap-up for action items.\"\n\nWhy it works: Forces time discipline. Most clinic meetings run long because there is no structure." },
      { heading: "Action Plan from Metrics", content: "Prompt: \"I am a regional director overseeing [X] outpatient rehab clinics. Here is our performance summary for the month: [paste data]. Create a 1-page action plan that includes: (1) Top 3 priorities for next month, (2) Which clinics need the most attention and why, (3) Specific actions I should take in the first week.\"\n\nWhy it works: Turns data into a plan instead of a report that sits in someone's inbox." },
      { heading: "Leadership Update Draft", content: "Prompt: \"Draft a monthly leadership update for my executive team. I oversee [describe your role and scope]. Here are the key items: [paste your notes]. Format it as: (1) Executive Summary (3 sentences), (2) Wins, (3) Concerns, (4) Requests/Decisions Needed. Keep the whole thing under 400 words.\"\n\nWhy it works: Executives do not read long updates. This forces conciseness." },
      { heading: "Important Reminders", content: "Never paste patient information into these tools. Always review and edit AI output before using it — AI writes the first draft, you write the final version. Customize the prompts to match your organization's language and culture." },
    ]
  },
  {
    title: "How to Roll Out AI Documentation Without Losing Staff Trust",
    slug: "ai-documentation-rollout-guide",
    category: "Documentation",
    summary: "A step-by-step guide for introducing AI documentation tools in rehab clinics — with specific advice for handling clinician resistance, compliance concerns, and the mistakes that kill rollouts.",
    sections: [
      { heading: "Why Documentation Rollouts Fail", content: "Most AI documentation rollouts in rehab fail for the same reasons: leadership announces a new tool, sends a training link, and expects everyone to start using it. Clinicians resist because nobody asked them, the tool does not fit their workflow, and the last three \"innovations\" from corporate made their lives harder, not easier.\n\nIf you want your documentation rollout to work, you need to treat it as a change management project, not a technology deployment." },
      { heading: "Step 1: Get Compliance Right First", content: "Before you demo a single tool to your clinicians, make sure your compliance team has reviewed it. Questions to answer:\n\n- Does the vendor offer a BAA?\n- Where is the data stored?\n- Who has access to the audio recordings or transcripts?\n- How long is data retained?\n- Can clinicians opt out of specific features?\n- What happens to the data if you cancel the contract?\n\nIf you cannot answer these questions, you are not ready to roll it out." },
      { heading: "Step 2: Start with a Small Pilot", content: "Pick 2-3 clinics, not your whole company. Choose sites with a mix of clinicians — some tech-comfortable, some skeptical. You want real feedback, not just enthusiasm from early adopters.\n\nPilot duration: 4-6 weeks minimum. Anything shorter and you are measuring novelty, not adoption." },
      { heading: "Step 3: Choose Champions Carefully", content: "Your champions should not be the most tech-savvy clinicians. They should be the most respected. The clinician who has been treating for 15 years and says \"this actually helps\" will move the room more than the new grad who is excited about everything.\n\nGive champions extra time to learn the tool before the pilot starts. Let them form their own opinions. If they do not like it, listen to why." },
      { heading: "Step 4: Set Clear Rules", content: "Clinicians need to know exactly what the tool does and does not do. Be explicit:\n\n- AI generates a draft. You review and edit before signing.\n- The tool does not make clinical decisions.\n- You are responsible for every word in your note.\n- If the AI gets something wrong, correct it — that is expected.\n- You can always write a note manually if the tool is not working for a specific patient." },
      { heading: "Step 5: Measure the Right Things", content: "Track these during the pilot:\n\n- After-hours documentation time (before vs. during pilot)\n- Note completion rates\n- Clinician satisfaction (ask them directly — do not just look at usage data)\n- Note quality audit results\n- Compliance incidents (there should be zero — if not, stop and fix the process)\n\nDo not track how many notes the AI generated. Track whether clinicians are actually going home earlier." },
      { heading: "Step 6: Handle Resistance Honestly", content: "Some clinicians will not want to use AI. That is okay. Listen to their concerns instead of dismissing them.\n\nCommon concerns and how to address them:\n\n\"I do not trust it.\" — That is fair. The tool drafts, you review. Try it for one note and see.\n\n\"It takes longer than writing my own notes.\" — It usually does at first. Give it 2 weeks. If it is still slower, let us troubleshoot.\n\n\"This is going to replace us.\" — AI cannot do an eval, treat a patient, or make a clinical decision. It can type faster than you. That is it.\n\n\"What about my patients' privacy?\" — Here is our BAA, here is how the data is handled, here is what we have verified with compliance." },
      { heading: "Step 7: Expand Based on Evidence", content: "After the pilot, share the results — real numbers, real clinician quotes. Let the pilot sites present to the rest of the company. Peer credibility is more powerful than a corporate email.\n\nRoll out to the next group of clinics with lessons learned built into the process. Expect the second wave to go faster than the first." },
    ]
  },
];
