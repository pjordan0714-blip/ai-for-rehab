export interface ArticleSection {
  heading: string;
  content: string;
}

export interface Article {
  title: string;
  slug: string;
  category: string;
  summary: string;
  sections: ArticleSection[];
}

export const articles: Article[] = [
  {
    title: "AI Use Policy Starter Guide for Rehab Clinics",
    slug: "ai-use-policy-starter-guide",
    category: "Compliance and Safety",
    summary: "A practical starting point for building an AI use policy in your rehab organization — what to cover, what to restrict, and how to roll it out without creating a document nobody reads.",
    sections: [
      {
        heading: "Why You Need a Policy Before You Need a Tool",
        content: "Most rehab companies start using AI the wrong way: someone downloads ChatGPT, starts pasting in notes, and nobody in compliance knows it's happening. By the time leadership finds out, they're playing catch-up.\n\nYou need a written AI use policy before you buy a single tool. It doesn't have to be 30 pages. It needs to be clear, specific, and short enough that people will actually read it."
      },
      {
        heading: "What Your Policy Should Cover",
        content: "At minimum, your AI use policy should address these areas:\n\n1. Approved tools — which AI tools has your organization reviewed and approved? List them by name. \"AI tools\" is too vague.\n\n2. Prohibited uses — what is off-limits? At minimum: entering PHI into unapproved tools, using AI-generated content in clinical documentation without review, and sharing proprietary business data with consumer AI tools.\n\n3. PHI rules — be specific. \"Don't put PHI in AI\" is a good start, but spell out what counts. Patient names, dates of birth, diagnoses, treatment details, insurance information — all of it.\n\n4. Review requirements — all AI-generated content must be reviewed by a qualified human before use. This applies to clinical notes, patient communications, and staff emails alike.\n\n5. Reporting — what should staff do if they see someone using AI inappropriately? Make it easy to report without fear of punishment.\n\n6. Training requirements — who needs to be trained, how often, and what does the training need to cover?"
      },
      {
        heading: "Keep It Short and Specific",
        content: "Your AI policy should fit on 2-3 pages. If it's longer than that, nobody will read it. Write it in plain language, not legal jargon. Use bullet points. Include specific examples of what's okay and what's not.\n\nBad: \"Staff shall not utilize artificial intelligence technologies in a manner inconsistent with organizational data governance frameworks.\"\n\nBetter: \"Do not paste patient names, dates of birth, or any health information into ChatGPT, Claude, or any AI tool that has not been approved by the compliance team.\""
      },
      {
        heading: "How to Roll It Out",
        content: "1. Get compliance and legal to review it before distribution.\n2. Present it in a team meeting — don't just email a PDF.\n3. Give real examples of what's allowed and what's not.\n4. Make it part of your onboarding process for new hires.\n5. Review and update it every 6 months as tools and regulations change.\n6. Post it somewhere accessible — not buried in a SharePoint folder nobody checks."
      },
      {
        heading: "A Note on Enforcement",
        content: "The goal of your policy is not to scare people away from AI. It's to create clear boundaries so people can use AI confidently. If your clinicians are afraid to try AI because the policy feels punitive, you wrote the wrong policy.\n\nFrame it as guardrails, not restrictions. \"Here's how to use AI safely\" lands better than \"here's everything that will get you in trouble.\""
      },
    ]
  },
  {
    title: "10 Safe AI Use Cases for Clinic Directors",
    slug: "10-safe-ai-use-cases-clinic-directors",
    category: "Leadership",
    summary: "Ten practical, low-risk ways clinic directors can start using AI this week — none of which involve patient data or clinical documentation.",
    sections: [
      {
        heading: "Start with Zero-Risk Use Cases",
        content: "If you're a clinic director and you've been hearing about AI but haven't started using it, start here. These 10 use cases don't involve patient data, don't require special tools, and don't need IT approval. You can do all of them with a free ChatGPT or Claude account today."
      },
      {
        heading: "1. Draft Staff Emails",
        content: "You write the same types of emails every week — schedule changes, policy reminders, team updates. Give AI the key points and let it draft the email. You edit and send. A 20-minute email becomes a 5-minute edit.\n\nExample prompt: \"Draft a professional email to my clinic team about a schedule change next week. Monday hours are changing from 7-6 to 8-7. Tone should be direct but friendly. Include a note that anyone with a conflict should let me know by Thursday.\""
      },
      {
        heading: "2. Create Meeting Agendas",
        content: "Stop running meetings without agendas. Paste in your topics and let AI organize them with time estimates and discussion questions. Your meetings will run shorter and your team will notice."
      },
      {
        heading: "3. Build Onboarding Checklists",
        content: "Every time you hire someone, you're rebuilding the same checklist from memory. Have AI create a comprehensive onboarding plan organized by week. Customize it once, then reuse it."
      },
      {
        heading: "4. Prepare for Difficult Conversations",
        content: "Need to give tough feedback? Use AI to role-play the conversation. Tell it the situation, what you need to communicate, and ask it to play the employee's role. Practice your response. Nobody will know."
      },
      {
        heading: "5. Summarize Long Policy Documents",
        content: "Your company sends a 15-page policy update. Paste it into AI and ask for a 1-page summary with action items for your clinic. Share the summary with your team instead of forwarding the whole document that nobody will read."
      },
      {
        heading: "6. Analyze Your Clinic Metrics",
        content: "Export your weekly numbers to a spreadsheet, paste them into AI, and ask: \"What are the 3 most important trends here, and what should I follow up on this week?\" You'll be surprised how often it catches something you missed."
      },
      {
        heading: "7. Write Job Postings",
        content: "Give AI your job description template and ask it to rewrite it so it actually sounds appealing. Most clinic job postings read like compliance documents. Let AI make it sound like a place people want to work."
      },
      {
        heading: "8. Create Patient FAQ Documents",
        content: "Your front desk answers the same 15 questions every day. Have AI draft an FAQ document with clear, simple answers. Print it, post it, email it to new patients. This saves front desk time and reduces phone calls."
      },
      {
        heading: "9. Draft Performance Review Notes",
        content: "Don't start from a blank page. Give AI the employee's key accomplishments and areas for growth, and let it draft the review structure. You fill in the specifics and personal observations."
      },
      {
        heading: "10. Brainstorm Solutions to Operational Problems",
        content: "Stuck on a problem? Describe it to AI with context: \"I'm a clinic director at an outpatient PT clinic. We're seeing 15% cancellation rates on Fridays. What are the most common causes and what can I try?\" It won't always be right, but it will give you angles you hadn't considered."
      },
      {
        heading: "The Pattern",
        content: "Notice what all of these have in common: no patient data, no clinical content, no compliance risk. They're all operational and leadership tasks. This is the safest and fastest way to start getting value from AI. Once your team sees you using it effectively, they'll start asking questions — and that's when you can introduce it more broadly with proper training and policies."
      },
    ]
  },
  {
    title: "AI Prompt Pack for Rehab Leaders",
    slug: "ai-prompt-pack-rehab-leaders",
    category: "Leadership",
    summary: "A focused set of prompts designed specifically for rehab leadership workflows — clinic directors, regional directors, and operations leaders.",
    sections: [
      {
        heading: "How to Use These Prompts",
        content: "These prompts are designed for general AI tools like ChatGPT or Claude. Do not enter protected health information. Replace the bracketed sections with your own details. These work best when you give the AI context about your role and setting — \"I'm a clinic director at a 3-provider outpatient PT clinic\" will get you much better results than a generic request."
      },
      {
        heading: "Weekly Clinic Review",
        content: "Prompt: \"I'm a clinic director at an outpatient rehab clinic. Here are my key metrics for the week: [paste metrics]. Analyze these numbers and tell me: (1) What looks concerning and why, (2) What looks positive, (3) Three specific questions I should ask my team this week based on this data.\"\n\nWhy it works: Focuses on actionable follow-up, not just data summary."
      },
      {
        heading: "Staff Coaching Preparation",
        content: "Prompt: \"I need to have a coaching conversation with a clinician about [specific issue — e.g., consistently running behind schedule, documentation quality, patient communication]. Help me plan the conversation. Give me: (1) A clear opening statement, (2) Two questions to understand their perspective, (3) Specific behavioral expectations to set, (4) A follow-up plan.\"\n\nWhy it works: Gives you a structure so you're not winging it. Coaching conversations go poorly when they're unplanned."
      },
      {
        heading: "Meeting Agenda Builder",
        content: "Prompt: \"Create a 30-minute team meeting agenda for an outpatient rehab clinic. Topics to cover: [list your topics]. For each topic, include a time estimate, who should lead that section, and one discussion question. End with a 3-minute wrap-up for action items.\"\n\nWhy it works: Forces time discipline. Most clinic meetings run long because there's no structure."
      },
      {
        heading: "Action Plan from Metrics",
        content: "Prompt: \"I'm a regional director overseeing [X] outpatient rehab clinics. Here's our performance summary for the month: [paste data]. Create a 1-page action plan that includes: (1) Top 3 priorities for next month, (2) Which clinics need the most attention and why, (3) Specific actions I should take in the first week.\"\n\nWhy it works: Turns data into a plan instead of a report that sits in someone's inbox."
      },
      {
        heading: "Leadership Update Draft",
        content: "Prompt: \"Draft a monthly leadership update for my executive team. I oversee [describe your role and scope]. Here are the key items: [paste your notes]. Format it as: (1) Executive Summary (3 sentences), (2) Wins, (3) Concerns, (4) Requests/Decisions Needed. Keep the whole thing under 400 words.\"\n\nWhy it works: Executives don't read long updates. This forces conciseness."
      },
      {
        heading: "Important Reminders",
        content: "Never paste patient information into these tools. Always review and edit AI output before using it — AI writes the first draft, you write the final version. Customize the prompts to match your organization's language and culture. A prompt that works for a 5-clinic company may need adjustments for a 50-clinic company."
      },
    ]
  },
  {
    title: "How to Roll Out AI Documentation Without Losing Staff Trust",
    slug: "ai-documentation-rollout-guide",
    category: "Documentation",
    summary: "A step-by-step guide for introducing AI documentation tools in rehab clinics — with specific advice for handling clinician resistance, compliance concerns, and the mistakes that kill rollouts.",
    sections: [
      {
        heading: "Why Documentation Rollouts Fail",
        content: "Most AI documentation rollouts in rehab fail for the same reasons: leadership announces a new tool, sends a training link, and expects everyone to start using it. Clinicians resist because nobody asked them, the tool doesn't fit their workflow, and the last three \"innovations\" from corporate made their lives harder, not easier.\n\nIf you want your documentation rollout to work, you need to treat it as a change management project, not a technology deployment."
      },
      {
        heading: "Step 1: Get Compliance Right First",
        content: "Before you demo a single tool to your clinicians, make sure your compliance team has reviewed it. Questions to answer:\n\n- Does the vendor offer a BAA?\n- Where is the data stored?\n- Who has access to the audio recordings or transcripts?\n- How long is data retained?\n- Can clinicians opt out of specific features?\n- What happens to the data if you cancel the contract?\n\nIf you can't answer these questions, you're not ready to roll it out."
      },
      {
        heading: "Step 2: Start with a Small Pilot",
        content: "Pick 2-3 clinics, not your whole company. Choose sites with a mix of clinicians — some tech-comfortable, some skeptical. You want real feedback, not just enthusiasm from early adopters.\n\nPilot duration: 4-6 weeks minimum. Anything shorter and you're measuring novelty, not adoption."
      },
      {
        heading: "Step 3: Choose Champions Carefully",
        content: "Your champions should not be the most tech-savvy clinicians. They should be the most respected. The clinician who has been treating for 15 years and says \"this actually helps\" will move the room more than the new grad who's excited about everything.\n\nGive champions extra time to learn the tool before the pilot starts. Let them form their own opinions. If they don't like it, listen to why."
      },
      {
        heading: "Step 4: Set Clear Rules",
        content: "Clinicians need to know exactly what the tool does and does not do. Be explicit:\n\n- AI generates a draft. You review and edit before signing.\n- The tool does not make clinical decisions.\n- You are responsible for every word in your note.\n- If the AI gets something wrong, correct it — that's expected.\n- You can always write a note manually if the tool isn't working for a specific patient."
      },
      {
        heading: "Step 5: Measure the Right Things",
        content: "Track these during the pilot:\n\n- After-hours documentation time (before vs. during pilot)\n- Note completion rates\n- Clinician satisfaction (ask them directly — don't just look at usage data)\n- Note quality audit results\n- Compliance incidents (there should be zero — if not, stop and fix the process)\n\nDon't track how many notes the AI generated. Track whether clinicians are actually going home earlier."
      },
      {
        heading: "Step 6: Handle Resistance Honestly",
        content: "Some clinicians will not want to use AI. That's okay. Listen to their concerns instead of dismissing them.\n\nCommon concerns and how to address them:\n\n\"I don't trust it.\" — That's fair. The tool drafts, you review. Try it for one note and see.\n\n\"It takes longer than writing my own notes.\" — It usually does at first. Give it 2 weeks. If it's still slower, let's troubleshoot.\n\n\"This is going to replace us.\" — AI cannot do an eval, treat a patient, or make a clinical decision. It can type faster than you. That's it.\n\n\"What about my patients' privacy?\" — Here's our BAA, here's how the data is handled, here's what we've verified with compliance."
      },
      {
        heading: "Step 7: Expand Based on Evidence",
        content: "After the pilot, share the results — real numbers, real clinician quotes. Let the pilot sites present to the rest of the company. Peer credibility is more powerful than a corporate email.\n\nRoll out to the next group of clinics with lessons learned built into the process. Expect the second wave to go faster than the first."
      },
    ]
  },
  {
    title: "What Rehab Teams Should Never Put Into ChatGPT",
    slug: "what-not-to-put-in-chatgpt",
    category: "Compliance and Safety",
    summary: "A clear, specific guide to what data is off-limits in consumer AI tools — and what you can safely use them for.",
    sections: [
      {
        heading: "The Short Version",
        content: "If it could identify a patient, it does not go into ChatGPT, Claude, Gemini, or any consumer AI tool. Period. This is not a gray area. HIPAA applies to AI the same way it applies to email, fax, and paper charts."
      },
      {
        heading: "Specifically, Never Enter These",
        content: "- Patient names\n- Dates of birth\n- Diagnoses or medical conditions tied to a person\n- Treatment details for specific patients\n- Insurance information or member IDs\n- Referring physician names tied to patient cases\n- Appointment dates and times for specific patients\n- Any text from clinical notes, evaluations, or progress reports\n- Any combination of details that could identify someone (even without a name)\n\nThis applies even if you \"change the name.\" De-identification is more complex than swapping names. A 73-year-old male with a left total knee replacement at your clinic on Tuesday — that combination can identify a patient even without their name."
      },
      {
        heading: "What About De-Identified Data?",
        content: "True de-identification under HIPAA requires removing 18 specific identifiers. Most clinicians don't know what all 18 are and can't reliably strip them from clinical text. If you want to use AI with patient-related content, either:\n\n1. Use a tool your organization has approved with a signed BAA, or\n2. Write a completely fictional example and use that instead."
      },
      {
        heading: "What You CAN Safely Put In",
        content: "Consumer AI tools are fine for tasks that don't involve patient data:\n\n- Drafting staff emails and team communications\n- Creating meeting agendas and action items\n- Writing job postings and onboarding checklists\n- Analyzing de-identified clinic metrics (visits per day, cancellation rates, revenue — not tied to patients)\n- Brainstorming marketing content\n- Summarizing industry articles or policy documents\n- Preparing for leadership presentations\n- Building training materials and competency checklists\n- Writing patient FAQ documents (general, not patient-specific)\n\nIf the content is operational, educational, or administrative — and contains zero patient information — you're on safe ground."
      },
      {
        heading: "\"But My Colleague Does It\"",
        content: "That doesn't make it compliant. Many clinicians and clinic leaders are entering PHI into consumer AI tools right now, often without realizing they're violating HIPAA. The fact that nobody has been caught yet does not mean it's allowed.\n\nIf you see this happening, don't shame the person. Educate them. Most people aren't being reckless — they just don't understand the rules. This is a training problem, not a character problem."
      },
      {
        heading: "What About AI Scribe Tools?",
        content: "AI scribe tools that are designed for clinical documentation are a different category. Many of these offer BAAs and are specifically built to handle PHI. But they are not the same as ChatGPT.\n\nBefore using any tool for clinical documentation, verify:\n- The vendor offers a signed BAA\n- Your organization has approved the tool\n- Your compliance team has reviewed the data handling practices\n- You have clear guidelines for how the tool should be used\n\nSee our AI Tools page for a breakdown of tool categories and their compliance considerations."
      },
      {
        heading: "The Bottom Line",
        content: "Use consumer AI tools for operational and leadership work. Keep patient data in systems that are designed and approved for healthcare. When in doubt, leave it out."
      },
    ]
  },
];
