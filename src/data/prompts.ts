export interface Prompt {
  title: string;
  category: string;
  audience: string;
  description: string;
  prompt: string;
}

export const prompts: Prompt[] = [
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
    category: "Leadership",
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
