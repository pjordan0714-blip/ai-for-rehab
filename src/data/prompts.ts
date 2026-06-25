export interface Prompt {
  title: string;
  category: string;
  audience: string;
  description: string;
  prompt: string;
  suggestedInputs?: string;
  outputFormat?: string;
  safetyNote?: string;
}

export const prompts: Prompt[] = [
  // --- NEW 20: High-value rehab leadership and operations prompts first ---

  {
    title: "Diagnose a Clinic's Weekly Metrics",
    category: "Clinic Operations",
    audience: "Clinic Director",
    description: "Analyze weekly clinic numbers and identify whether the root issue is access, scheduling, productivity, cancellations, referral volume, or clinician ramp-up.",
    prompt: "I'm a clinic director at a multi-provider outpatient rehab clinic. Below are my weekly metrics. Analyze them and identify the most likely root cause of any underperformance. Consider these possible drivers: patient access and days to be seen, scheduling efficiency, clinician productivity (visits per FTE), units per visit, eval volume vs. follow-up ratio, cancellation and no-show patterns, referral volume trends, and new clinician ramp-up timelines.\n\nFor each issue you identify, tell me: (1) What the data suggests, (2) Why it matters operationally, (3) One specific action I should take this week.\n\n[Paste your weekly clinic metrics here — visits, evals, cancellations, visits per FTE, units per visit, no-show rate, new patient volume, etc.]",
    suggestedInputs: "Weekly visits, evals, visits per FTE, units per visit, cancellation rate, no-show rate, new patient volume, days to be seen, clinician headcount",
    outputFormat: "Prioritized list of issues with root cause analysis and specific next steps",
    safetyNote: "Use aggregate clinic data only. Do not include patient names or individually identifiable information."
  },
  {
    title: "30-Day Action Plan for Low Visits per FTE",
    category: "Clinic Operations",
    audience: "Clinic Director",
    description: "Build a structured 30-day improvement plan for a clinic where visits per FTE are low but eval volume looks healthy.",
    prompt: "I'm a clinic director at an outpatient rehab clinic. Our visits per FTE are below target, but our eval volume is solid. Help me build a 30-day action plan to improve visits per FTE.\n\nConsider these possible contributing factors: high cancellation or no-show rates, low plan of care adherence, insufficient follow-up scheduling at checkout, clinician schedule template issues, discharge rates that are too high or too early, and patient drop-off after eval.\n\nOrganize the plan by week (Week 1, Week 2, Week 3, Week 4). For each week, give me 2-3 specific actions with who should own them and how to measure progress.\n\nClinic context: [Describe your clinic — number of providers, payer mix if relevant, current visits per FTE, eval volume, any known issues]",
    suggestedInputs: "Current visits per FTE, eval volume, cancellation rate, average visits per case, number of providers, known scheduling or retention issues",
    outputFormat: "Week-by-week action plan with owners and measurable targets"
  },
  {
    title: "Turn Clinic Visit Notes into a Coaching Follow-Up Email",
    category: "Regional Director",
    audience: "Regional Director",
    description: "Convert scattered notes from a clinic visit into a structured coaching follow-up with priorities, commitments, and next steps.",
    prompt: "I'm a regional director who just visited one of my outpatient rehab clinics. I have rough notes from the visit. Turn these into a professional coaching follow-up email to the clinic director.\n\nThe email should include:\n1. A brief positive opening — what I saw going well\n2. Key priorities discussed during the visit (be specific)\n3. Commitments — what the clinic director agreed to work on\n4. My commitments — what I agreed to support or follow up on\n5. Timeline for next check-in\n\nTone: supportive and direct. Not corporate. Not condescending. This should read like it came from someone who has actually been in the clinic, not someone sending form letters from a home office.\n\n[Paste your rough visit notes here]",
    suggestedInputs: "Raw notes from clinic visit — observations, discussion topics, concerns raised, agreements made, follow-up items",
    outputFormat: "Professional email ready to edit and send"
  },
  {
    title: "AI Scribe Rollout Checklist",
    category: "AI Implementation",
    audience: "Clinic Director",
    description: "Create a complete rollout checklist for introducing an AI scribe tool in a small outpatient rehab company.",
    prompt: "Create a detailed rollout checklist for implementing an AI scribe documentation tool in a small outpatient rehab company (3-12 clinics). This is for physical therapy, occupational therapy, and/or speech therapy settings.\n\nThe checklist should cover:\n1. Pre-launch — compliance review, BAA verification, tool evaluation criteria, IT requirements\n2. Champion selection — how to pick the right clinicians to pilot, what makes a good champion vs. a bad one\n3. Pilot structure — which clinics to start with, how long the pilot should run, what to measure\n4. Training plan — what clinicians need to know before day one, common mistakes to prevent\n5. Compliance guardrails — what AI can and cannot do, review requirements, documentation standards\n6. Adoption tracking — how to measure whether it's actually working (not just whether people are using it)\n7. Expansion plan — how to move from pilot to full rollout based on results\n8. Ongoing monitoring — what to audit after launch\n\nMake it practical. No jargon. Write it so a clinic director who has never rolled out a technology tool could follow it.",
    suggestedInputs: "Number of clinics, disciplines (PT/OT/SLP), current EMR system, any compliance concerns or constraints",
    outputFormat: "Phased checklist organized by stage with specific action items",
    safetyNote: "Ensure your compliance and legal teams review AI scribe tools before any clinical use. A signed BAA is required before PHI enters the system."
  },
  {
    title: "Referral Source Follow-Up After a Patient Win",
    category: "Referral Development",
    audience: "Clinic Director",
    description: "Draft a referral source follow-up message after a strong patient outcome — without using any PHI.",
    prompt: "Help me write a professional follow-up message to a referring physician after a patient had a strong outcome at our clinic. The message should:\n\n1. Thank them for the referral\n2. Share the general type of outcome (e.g., return to work, return to sport, significant functional improvement) without using any patient-identifying information\n3. Briefly highlight our clinic's approach or specialty area relevant to this referral\n4. Include a soft ask to keep us in mind for similar patients\n5. Keep it under 150 words\n\nTone: professional, warm, and confident — not salesy.\n\nReferral context: [Describe the general outcome type — e.g., \"post-surgical shoulder patient returned to full work duties\" — without patient name, DOB, or identifying details]\nOur clinic's relevant specialty: [e.g., sports rehab, post-surgical, vestibular, etc.]",
    suggestedInputs: "General outcome type (no PHI), clinic specialty area, referring physician relationship context",
    outputFormat: "Short professional message ready to edit and send",
    safetyNote: "Do not include patient name, date of birth, diagnosis details, or any information that could identify a specific patient. Keep it general."
  },
  {
    title: "New Service Line Launch Checklist",
    category: "New Service Lines",
    audience: "Clinic Director",
    description: "Build a launch checklist for a new cash-based or specialty rehab service — pricing, training, scripts, tracking, and marketing.",
    prompt: "I'm a clinic director planning to launch a new service line at my outpatient rehab clinic. Create a detailed launch checklist covering:\n\n1. Service definition — what it is, who it's for, what problem it solves for the patient\n2. Pricing strategy — how to set pricing, what to research, how to communicate pricing to patients\n3. Staff training — what clinicians need to know, hands-on competency requirements, timeline\n4. Patient scripts — how front desk and clinicians should introduce the service, handle objections, and explain the value\n5. Scheduling and workflow — how to integrate into existing clinic flow without disrupting current operations\n6. Tracking and KPIs — what to measure in the first 90 days to know if it's working\n7. Marketing — how to promote it to current patients, referral sources, and the community\n8. Legal and compliance — what to verify before launch (scope of practice, billing, consent)\n\nService I'm launching: [Describe the service — e.g., dry needling, shockwave therapy, laser therapy, sports performance training, wellness program, etc.]\nClinic context: [Number of providers, patient population, current services offered]",
    suggestedInputs: "Service type, target patient population, number of providers, current service mix, any state-specific scope considerations",
    outputFormat: "Phased checklist organized by category with action items and timeline"
  },
  {
    title: "Weekly Clinic Director Priorities from Metrics",
    category: "Leadership",
    audience: "Clinic Director",
    description: "Turn a metrics dashboard into a short list of the 3 things you should focus on this week.",
    prompt: "I'm a clinic director at an outpatient rehab clinic. Below are my key metrics for this week. Based on this data, give me exactly 3 priorities for this week — the 3 things most likely to move the needle on clinic performance.\n\nFor each priority:\n1. What the data is telling me\n2. One specific action to take this week (not a vague suggestion — something I can actually do)\n3. Who I should involve (a specific role, not \"the team\")\n\nDon't give me 10 things. Give me 3 that matter most right now.\n\n[Paste this week's metrics — visits, evals, visits per FTE, units per visit, cancellations, no-shows, new patients, open slots, etc.]",
    suggestedInputs: "This week's clinic dashboard numbers — visits, evals, visits per FTE, units per visit, cancellation rate, no-show rate, open appointment slots",
    outputFormat: "3 numbered priorities with data insight, specific action, and owner"
  },
  {
    title: "New Clinician 90-Day Ramp-Up Plan",
    category: "Staff Training",
    audience: "Clinic Director",
    description: "Create a structured ramp-up plan for a new clinician's first 90 days, including caseload targets, mentorship milestones, and check-in schedule.",
    prompt: "Create a 90-day ramp-up plan for a new clinician joining my outpatient rehab clinic. This should be realistic — not a wish list.\n\nInclude:\n1. Caseload progression — how many patients per day in weeks 1-2, weeks 3-4, month 2, month 3\n2. Mentorship milestones — what skills or competencies to assess and when\n3. Documentation expectations — when should they be completing notes same-day, what support do they get early on\n4. Check-in schedule — when should the clinic director have formal 1:1s, what to cover in each\n5. Red flags — what signs indicate the ramp-up is off track and needs intervention\n6. Success criteria — what does a successful 90 days look like, specifically\n\nNew clinician context:\nExperience level: [New grad / 1-3 years / experienced clinician new to this setting]\nDiscipline: [PT / OT / SLP / ATC]\nClinic type: [Ortho outpatient / neuro / peds / mixed / etc.]\nCurrent clinic volume: [Describe typical daily volume]",
    suggestedInputs: "Clinician experience level, discipline, clinic type, typical daily patient volume, mentorship availability",
    outputFormat: "Week-by-week plan organized by caseload, mentorship, documentation, and check-in milestones"
  },
  {
    title: "Performance Improvement Conversation Prep",
    category: "Leadership",
    audience: "Clinic Director",
    description: "Prepare for a structured performance improvement conversation with a clinician or staff member — talking points, questions, and follow-up plan.",
    prompt: "I'm a clinic director and I need to have a performance improvement conversation with a team member. Help me prepare.\n\nGive me:\n1. An opening statement that is direct but not punitive (2-3 sentences)\n2. 3 specific talking points based on the performance issue — framed around behaviors and expectations, not personality\n3. 2 open-ended questions to understand their perspective\n4. Clear expectations to set — what needs to change, by when, and how we'll measure it\n5. A follow-up plan — when to check in next, what documentation to create\n6. A brief script for closing the conversation on a constructive note\n\nTone: firm, fair, and supportive. This is coaching, not punishment.\n\nPerformance issue: [Describe the specific issue — e.g., consistently late with documentation, low productivity, patient complaints, attendance, etc.]\nContext: [How long has this been happening? Have you addressed it before? Any relevant background?]",
    suggestedInputs: "Specific performance issue, duration, previous conversations about it, any relevant context",
    outputFormat: "Structured conversation plan with talking points, questions, and follow-up steps",
    safetyNote: "This is a coaching preparation tool. All HR-related decisions should be reviewed with your HR team or legal counsel."
  },
  {
    title: "Build a Clinic Meeting Agenda That People Don't Hate",
    category: "Leadership",
    audience: "Clinic Director",
    description: "Create a focused, time-bound team meeting agenda that covers what matters and ends on time.",
    prompt: "Create a team meeting agenda for my outpatient rehab clinic. The meeting should be [15 / 30 / 45 / 60] minutes — no longer.\n\nRules:\n- Every topic gets a time limit\n- Every topic has a clear purpose: inform, discuss, or decide\n- No topic that could be handled in an email\n- End with a 3-minute action item review — who does what by when\n- Include one brief recognition moment (keep it under 2 minutes — genuine, not forced)\n\nTopics I need to cover: [List your topics]\n\nAttendees: [Who will be in the room — clinicians, front desk, all staff, etc.]\n\nAny recurring issues to address: [Optional — e.g., scheduling gaps, documentation deadlines, etc.]",
    suggestedInputs: "Meeting duration, topics to cover, attendee roles, any recurring issues",
    outputFormat: "Time-blocked agenda with topic, owner, purpose (inform/discuss/decide), and duration"
  },
  {
    title: "Executive Summary from Regional Clinic Data",
    category: "Regional Director",
    audience: "Regional Director",
    description: "Turn a regional data dump into a concise executive summary your leadership team will actually read.",
    prompt: "I'm a regional director overseeing multiple outpatient rehab clinics. I need to turn the following data into an executive summary for my VP or C-suite.\n\nFormat the summary as:\n1. Executive overview (3 sentences max — the headlines)\n2. Top 3 wins this period (with supporting data points)\n3. Top 3 concerns (with data and what I'm doing about each one)\n4. Resource or support requests (if any — be specific about what you need and why)\n5. 30-day outlook (what I expect to improve, hold, or decline — and why)\n\nTotal length: under 400 words. Executives skim. Make every sentence count.\n\n[Paste your regional data — clinic-by-clinic metrics, visit volume, evals, productivity, cancellations, staffing, etc.]",
    suggestedInputs: "Multi-site performance data — visits, evals, visits per FTE, cancellation rates, staffing levels, notable wins or concerns by site",
    outputFormat: "Concise executive summary under 400 words with clear sections"
  },
  {
    title: "Front Desk Phone Script for New Patients",
    category: "Front Office",
    audience: "Admin / Front Office",
    description: "Create a natural-sounding phone script for front desk staff handling new patient inquiries.",
    prompt: "Write a phone script for front desk staff at an outpatient rehab clinic when a new patient calls to schedule. The script should sound natural — not robotic.\n\nThe script should cover:\n1. Greeting and name capture\n2. How they heard about us (referral source tracking)\n3. Brief description of their concern (general — not a clinical intake)\n4. Insurance verification basics — what to ask for\n5. Scheduling the first visit — how to present availability\n6. What to expect at the first visit — brief overview\n7. Closing and confirmation\n\nInclude a few variations for common scenarios:\n- Patient has a prescription/referral\n- Patient does not have a referral and is asking if they need one\n- Patient is asking about cost or insurance coverage\n- Patient wants to know wait times\n\nTone: friendly, professional, and efficient. The goal is to get them scheduled, not interrogate them.\n\nClinic details: [Clinic name, typical first-visit duration, any special instructions for new patients, direct access state yes/no]",
    suggestedInputs: "Clinic name, first visit duration, direct access availability, common payer mix, any special new patient instructions",
    outputFormat: "Conversational phone script with branching paths for common scenarios"
  },
  {
    title: "Cancellation and No-Show Recovery Plan",
    category: "Clinic Operations",
    audience: "Clinic Director",
    description: "Analyze cancellation and no-show patterns and build a specific plan to reduce them.",
    prompt: "I'm a clinic director dealing with high cancellation and no-show rates at my outpatient rehab clinic. Help me build a recovery plan.\n\nFirst, help me identify the likely causes. Ask me to consider:\n- Are cancellations concentrated on certain days or times?\n- Are specific clinicians or patient populations more affected?\n- Are patients cancelling after eval but before follow-up visits?\n- Is the front desk confirming appointments consistently?\n- Are patients getting seen within a reasonable timeframe from referral?\n- Is the checkout scheduling process locking in the next visit?\n\nThen build a 2-week action plan with specific steps for:\n1. Front desk process changes\n2. Clinician-side changes (scheduling at checkout, patient education on plan of care)\n3. Communication changes (reminder cadence, cancellation policy messaging)\n4. Tracking — what to measure daily to know if it's working\n\nCurrent data: [Paste your cancellation/no-show rates, any patterns you've noticed, current reminder process]",
    suggestedInputs: "Current cancellation rate, no-show rate, appointment reminder process, checkout scheduling process, any known patterns by day/clinician",
    outputFormat: "Root cause analysis followed by a 2-week action plan with daily tracking metrics"
  },
  {
    title: "AI Use Policy Draft for a Rehab Company",
    category: "Compliance and Safety",
    audience: "Clinic Director",
    description: "Draft a clear, concise AI use policy for a rehab organization — what's allowed, what's prohibited, and how to enforce it.",
    prompt: "Draft an AI use policy for a rehab company that operates outpatient clinics. The policy should be clear enough that any clinician or staff member can read it in 5 minutes and know exactly what they can and cannot do.\n\nInclude:\n1. Purpose statement — why the company is creating this policy\n2. Approved tools — leave placeholders for the company to fill in specific tool names\n3. Prohibited uses — be specific (entering PHI into unapproved tools, using AI output without review, using AI for billing decisions, etc.)\n4. PHI rules — plain language explanation of what cannot go into consumer AI tools\n5. Review requirements — all AI output must be reviewed before use\n6. Reporting process — what to do if someone sees a policy violation\n7. Training requirements — who needs training and how often\n8. Policy review schedule — how often this policy gets updated\n\nKeep the language plain. No legal jargon. Write it so a front desk employee and a 20-year clinician both understand it.\n\nCompany context: [Number of clinics, disciplines, current AI tools in use if any, any specific compliance concerns]",
    suggestedInputs: "Number of clinics, disciplines (PT/OT/SLP), any AI tools currently in use, compliance team contact, any state-specific requirements",
    outputFormat: "Ready-to-customize policy document organized by section",
    safetyNote: "This is a starting point, not legal advice. Have your compliance team and legal counsel review before distributing."
  },
  {
    title: "Physician Outreach Introduction Letter",
    category: "Referral Development",
    audience: "Clinic Director",
    description: "Draft a professional introduction letter to a physician office you want to build a referral relationship with.",
    prompt: "Write a professional introduction letter from my outpatient rehab clinic to a physician office we'd like to build a referral relationship with.\n\nThe letter should:\n1. Introduce our clinic and what we specialize in\n2. Highlight what makes our clinic different — be specific, not generic (e.g., same-day access, specialty programs, outcomes tracking, specific clinician expertise)\n3. Explain what the referring physician's patients can expect (communication, scheduling ease, progress updates)\n4. Include a clear next step — an invitation for a brief meeting, lunch-and-learn, or clinic tour\n5. Keep it under 250 words\n\nTone: confident and professional, not desperate for referrals. This should read like a peer reaching out, not a vendor cold-calling.\n\nClinic details:\nClinic name: [Your clinic]\nSpecialties: [e.g., sports rehab, post-surgical, vestibular, pelvic health, neuro, pediatrics, etc.]\nKey differentiators: [Same-day access, extended hours, specialty-trained staff, outcomes data, etc.]\nTarget physician specialty: [e.g., orthopedic surgeon, primary care, sports medicine, ENT, etc.]",
    suggestedInputs: "Clinic name, specialties, key differentiators, target physician specialty, any existing relationship context",
    outputFormat: "Professional letter under 250 words ready to customize and send"
  },
  {
    title: "Home Health Outpatient (Part B) Service Opportunity Analysis",
    category: "New Service Lines",
    audience: "Clinic Director",
    description: "Evaluate whether a home-based outpatient Part B service line is viable for your clinic or company.",
    prompt: "I'm exploring the feasibility of launching a home-based outpatient therapy service line (Medicare Part B, in-home). Help me think through the opportunity.\n\nAnalyze the following areas:\n1. Patient population — who is this for, and is there demand in my market?\n2. Referral sources — where would patients come from (discharge from home health, ALFs, physician referrals, internal clinic referrals)?\n3. Staffing model — what does the clinician schedule look like, how do you handle travel time, what's a realistic daily visit count?\n4. Billing and compliance — key billing considerations for outpatient Part B in the home, common audit risks\n5. Operational logistics — scheduling, documentation, equipment, communication with the clinic\n6. Financial model — rough estimate of revenue per visit, breakeven considerations\n7. Risks — what can go wrong and what to watch for\n\nMarket context: [Describe your market — urban/suburban/rural, competition, current referral patterns, any relationships with ALFs or home health agencies]\nCompany context: [Current clinic count, disciplines, staffing capacity]",
    suggestedInputs: "Market type, current clinic footprint, existing referral relationships, staffing availability, any existing home-based services",
    outputFormat: "Structured feasibility analysis organized by category with specific considerations and action items",
    safetyNote: "Billing and compliance requirements vary by payer, state, and setting. Verify all regulatory details with your compliance team before launch."
  },
  {
    title: "Difficult Conversation Role-Play",
    category: "Leadership",
    audience: "Clinic Director",
    description: "Practice a difficult leadership conversation before you have it — with AI playing the other person's role.",
    prompt: "I need to practice a difficult conversation. You will play the role of the person I'm speaking with. Stay in character throughout.\n\nHere's the setup:\nMy role: [e.g., Clinic Director]\nTheir role: [e.g., a clinician who has been consistently late with documentation]\nThe issue: [Describe the specific situation]\nTheir likely personality or reaction: [e.g., defensive, dismissive, emotional, reasonable but frustrated, etc.]\n\nRules for you:\n- Respond as that person would realistically respond — don't make it easy for me\n- Push back when realistic, but don't be unreasonable\n- After 4-5 exchanges, break character and give me feedback on how I handled it\n- Tell me what I did well, what I could improve, and suggest specific phrases I could use\n\nLet's start. I'll open the conversation.",
    suggestedInputs: "Your role, their role, the specific issue, their likely reaction style",
    outputFormat: "Interactive role-play followed by coaching feedback"
  },
  {
    title: "Patient Education Handout in Plain Language",
    category: "Patient Education",
    audience: "Clinician",
    description: "Create a patient-friendly explanation of a condition, procedure, or home exercise rationale — written so a non-medical person would understand it.",
    prompt: "Create a patient education handout about the following topic. Write it at a 6th-grade reading level. Use short sentences. No medical jargon unless you immediately define it in plain language.\n\nInclude:\n1. What this condition or topic is (2-3 sentences)\n2. Why it matters for the patient's recovery or daily life\n3. What the patient can do about it (practical, actionable steps)\n4. What to expect during treatment (set realistic expectations)\n5. When to contact their therapist or doctor (red flags)\n\nFormat it so it can be printed on one page. Use headers and bullet points.\n\nTopic: [e.g., rotator cuff tendinopathy, post-TKA precautions, vestibular exercises rationale, nerve gliding, pain neuroscience basics, etc.]\n\nPatient context: [e.g., elderly, post-surgical, athlete, sedentary office worker, etc.]",
    suggestedInputs: "Clinical topic, patient population, any specific instructions or precautions to emphasize",
    outputFormat: "One-page patient handout with headers and bullet points",
    safetyNote: "Review all patient education materials for clinical accuracy before distribution. This is a draft, not a clinical recommendation."
  },
  {
    title: "Clinic Director Weekly Planning Template",
    category: "Leadership",
    audience: "Clinic Director",
    description: "Build a weekly planning template that helps a clinic director prioritize the right things instead of just reacting all week.",
    prompt: "I'm a clinic director at an outpatient rehab clinic. Create a weekly planning template I can fill out every Monday morning in 15 minutes or less.\n\nThe template should include:\n1. Top 3 priorities for the week (operational, not clinical)\n2. Key metrics to watch this week and what would trigger action\n3. Staff check-ins planned — who and why (not every person every week — just who needs attention)\n4. Patient experience focus — one thing to improve or monitor this week\n5. Communication — any emails, updates, or conversations I need to have\n6. Development — one thing I'm working on for my own growth or my team's growth\n7. Carry-over — anything from last week that didn't get done\n\nMake it a simple fill-in format I can print or keep in a doc. Don't make it complicated — if it takes more than 15 minutes, I won't use it.",
    suggestedInputs: "None required — this generates a reusable template",
    outputFormat: "Fill-in weekly planning template, printable format"
  },
  {
    title: "ALF or On-Site Service Opportunity Assessment",
    category: "New Service Lines",
    audience: "Clinic Director",
    description: "Evaluate whether providing on-site rehab services at an assisted living facility or similar setting is a viable opportunity.",
    prompt: "I'm evaluating an opportunity to provide on-site outpatient rehab services at an assisted living facility (ALF), independent living community, or similar setting. Help me think through whether this is worth pursuing.\n\nAnalyze:\n1. Demand assessment — what questions should I ask the facility to gauge volume?\n2. Competitive landscape — what to find out about current rehab providers serving this facility\n3. Staffing model — how to staff it without pulling from my clinic\n4. Space and equipment — what I need from the facility, what I need to bring\n5. Billing considerations — outpatient Part B billing in an ALF setting, payer mix expectations\n6. Contract structure — key terms to negotiate with the facility\n7. Startup costs and timeline — what to budget and how quickly this can launch\n8. Red flags — what would make me walk away from this opportunity\n\nFacility details: [Type of facility, approximate number of residents, location relative to my clinic, any existing relationship]\nMy company context: [Number of clinics, disciplines available, staffing capacity, experience with off-site services]",
    suggestedInputs: "Facility type and size, location, current rehab provider (if any), your staffing capacity, disciplines available",
    outputFormat: "Structured opportunity assessment organized by category with key questions and decision criteria",
    safetyNote: "Billing rules for outpatient therapy in ALF settings have specific requirements. Verify with your compliance and billing teams before committing."
  },

  // --- ORIGINAL 10 prompts below ---

  {
    title: "Simplify Patient Education",
    category: "Patient Education",
    audience: "Clinician",
    description: "Rewrite clinical content so patients can understand it.",
    prompt: "Rewrite the following patient education explanation at a 6th-grade reading level. Keep the medical accuracy but use simple, everyday words. Avoid jargon. Use short sentences.\n\n[Paste your text here]"
  },
  {
    title: "Meeting Notes to Action Items",
    category: "Leadership",
    audience: "Clinic Director",
    description: "Turn meeting notes into a clear action item list.",
    prompt: "Review the following meeting notes and extract all action items. For each action item, list: (1) What needs to be done, (2) Who is responsible, (3) Deadline if mentioned. Format as a numbered list.\n\n[Paste meeting notes here]"
  },
  {
    title: "Professional Staff Email",
    category: "Leadership",
    audience: "Clinic Director",
    description: "Draft a clear, direct email to a team member.",
    prompt: "Draft a professional but direct email to a team member about the following topic. Keep the tone respectful and constructive. Be specific about expectations and next steps. Keep it under 200 words.\n\nTopic: [Describe the situation]\nKey points to cover: [List them]"
  },
  {
    title: "Clinic Metrics Analysis",
    category: "Clinic Operations",
    audience: "Clinic Director",
    description: "Identify trends and concerns from weekly numbers.",
    prompt: "Analyze the following clinic metrics and identify the top 3 most likely issues or trends. For each, explain why it matters and suggest one specific follow-up action.\n\n[Paste your metrics here]"
  },
  {
    title: "New Clinician Onboarding Checklist",
    category: "Staff Training",
    audience: "Clinic Director",
    description: "Generate a thorough onboarding plan.",
    prompt: "Create a comprehensive onboarding checklist for a new physical therapist joining an outpatient clinic. Organize by: Week 1, Week 2, Week 3-4, and Ongoing. Include clinical, administrative, cultural, and compliance items."
  },
  {
    title: "Social Media Post from Clinic Win",
    category: "Marketing",
    audience: "Marketing Lead",
    description: "Turn a clinic update into an engaging post.",
    prompt: "Turn the following clinic update or achievement into an engaging social media post. Keep it professional but warm. Include a call-to-action. Do not include any patient-identifying information. Keep it under 150 words.\n\nUpdate: [Describe the win or update]"
  },
  {
    title: "Summarize Payer or Referral Notes",
    category: "Documentation",
    audience: "Clinician",
    description: "Turn complex notes into clear next steps.",
    prompt: "Summarize the following payer communication or referral notes into: (1) Key decisions or requirements, (2) Action items for our clinic, (3) Any deadlines or follow-ups needed. Use plain language.\n\n[Paste notes here]"
  },
  {
    title: "Leadership Update Summary",
    category: "Regional Director",
    audience: "Regional Director",
    description: "Create a concise executive summary from detailed data.",
    prompt: "Summarize the following operational data into a leadership update. Include: (1) Top 3 wins, (2) Top 3 concerns, (3) Recommended next steps. Keep the total summary under 300 words. Use bullet points.\n\n[Paste your data or report here]"
  },
  {
    title: "Draft a Letter of Medical Necessity",
    category: "Documentation",
    audience: "Clinician",
    description: "Create a structured justification letter.",
    prompt: "Draft a letter of medical necessity for continued physical therapy services. Use the following patient details (de-identified). Include: diagnosis, functional limitations, treatment goals, progress to date, and justification for continued care. Use professional clinical language appropriate for payer review.\n\nPatient details: [Enter de-identified details]"
  },
  {
    title: "Compare Clinic Performance",
    category: "Clinic Operations",
    audience: "Regional Director",
    description: "Analyze performance across multiple sites.",
    prompt: "Compare the following clinic performance data across sites. Identify: (1) Which clinics are outperforming and why, (2) Which clinics need attention, (3) Common patterns across all sites, (4) Specific follow-up questions I should ask each clinic director.\n\n[Paste multi-site data here]"
  },
];
