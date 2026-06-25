export interface AIToolCategory {
  category: string;
  description: string;
  tools: AIToolEntry[];
}

export interface AIToolEntry {
  type: string;
  bestFor: string;
  phiSafe: string;
  costRange: string;
  rehabFit: "Strong" | "Moderate" | "Limited";
  notes: string;
}

export const toolCategories: AIToolCategory[] = [
  {
    category: "AI Scribes / Documentation Tools",
    description: "Tools that listen to patient encounters and generate clinical notes. This is where most rehab companies start with AI.",
    tools: [
      {
        type: "Ambient AI scribes (integrated with EMR)",
        bestFor: "Clinicians who want to reduce after-hours charting by capturing visit notes during the encounter.",
        phiSafe: "Typically yes — most offer BAAs. Verify with your compliance team before use.",
        costRange: "$100-300/clinician/month",
        rehabFit: "Strong",
        notes: "Look for tools that support PT/OT/SLP-specific note structures, not just physician SOAP notes. Ask whether the tool can handle eval templates, daily notes, and discharge summaries — not just office visit notes."
      },
      {
        type: "Standalone AI scribes (no EMR integration)",
        bestFor: "Smaller clinics that want to test AI documentation without committing to a full platform.",
        phiSafe: "Varies. Some do not offer BAAs. Do not use without verifying.",
        costRange: "$50-150/clinician/month",
        rehabFit: "Moderate",
        notes: "These often require manual copy-paste into your EMR, which adds a step. Fine for a pilot, but not ideal long-term. Watch for tools that are really built for physicians and don't handle rehab documentation structures well."
      },
    ]
  },
  {
    category: "General AI Assistants",
    description: "Broad-purpose AI tools for writing, brainstorming, summarizing, and drafting. Useful for leadership and admin work — not for clinical documentation with PHI.",
    tools: [
      {
        type: "ChatGPT, Claude, Gemini (consumer versions)",
        bestFor: "Drafting emails, meeting prep, brainstorming, creating templates, summarizing non-PHI documents.",
        phiSafe: "No. Consumer versions do not offer BAAs. Do not enter PHI.",
        costRange: "Free — $20/month",
        rehabFit: "Strong",
        notes: "These are the most versatile tools for leadership and admin work. Most of the prompts on this site are designed for these tools. The key rule: never enter patient information. Use them for operational and leadership tasks only."
      },
      {
        type: "ChatGPT Enterprise, Claude for Business, Gemini for Workspace",
        bestFor: "Organizations that want to use general AI tools with stronger data protections and team management.",
        phiSafe: "BAAs available from some providers. Verify terms before assuming PHI is allowed.",
        costRange: "$20-60/user/month",
        rehabFit: "Moderate",
        notes: "Having an enterprise plan does not automatically mean you can enter PHI. Read the BAA carefully. These are still general-purpose tools — they are not built for clinical documentation."
      },
    ]
  },
  {
    category: "Meeting Note Tools",
    description: "AI tools that record, transcribe, and summarize meetings. Useful for leadership meetings, team huddles, and training sessions.",
    tools: [
      {
        type: "AI meeting assistants (Otter, Fireflies, etc.)",
        bestFor: "Recording leadership meetings, extracting action items, creating searchable meeting history.",
        phiSafe: "Generally not suitable for clinical discussions. Fine for operational meetings that don't involve patient details.",
        costRange: "$10-30/user/month",
        rehabFit: "Moderate",
        notes: "Great for leadership and operations meetings. Do not use in clinical settings or during conversations that reference specific patients. Check your state's recording consent laws — some states require all-party consent."
      },
    ]
  },
  {
    category: "Marketing and Content Tools",
    description: "AI tools for creating social media content, blog posts, and patient-facing marketing materials.",
    tools: [
      {
        type: "AI writing assistants (for marketing)",
        bestFor: "Drafting social posts, blog content, email campaigns, and physician outreach materials.",
        phiSafe: "N/A — marketing content should never contain PHI.",
        costRange: "Free — $50/month (many use general AI assistants for this)",
        rehabFit: "Strong",
        notes: "You don't necessarily need a separate marketing AI tool. ChatGPT or Claude with good prompts handles most clinic marketing tasks. The bigger challenge is having a content strategy, not a content tool."
      },
    ]
  },
  {
    category: "Automation and Workflow Tools",
    description: "Platforms that connect your existing tools and automate repetitive tasks — like sending follow-up emails or updating spreadsheets.",
    tools: [
      {
        type: "No-code automation platforms (Zapier, Make, Power Automate)",
        bestFor: "Automating admin workflows: referral tracking, appointment reminders, report distribution, data entry between systems.",
        phiSafe: "Depends on the specific workflow. BAAs available from some platforms, but each connection in the automation chain must be HIPAA-compliant.",
        costRange: "$20-100/month",
        rehabFit: "Moderate",
        notes: "Powerful but requires careful setup. Start with non-clinical workflows — like automatically sending a Slack message when a new referral hits your intake form. Test thoroughly before going live, and monitor regularly."
      },
    ]
  },
  {
    category: "Reporting and Analytics",
    description: "AI features within reporting tools that help visualize data and surface trends. Most rehab companies are not ready for standalone AI analytics — look for AI features in tools you already use.",
    tools: [
      {
        type: "AI-enhanced dashboards and BI tools",
        bestFor: "Visualizing clinic performance data, spotting trends across sites, generating automated summaries.",
        phiSafe: "Depends on the platform. Many BI tools used in healthcare are already HIPAA-compliant, but verify.",
        costRange: "$50-500/month depending on scale",
        rehabFit: "Limited",
        notes: "Most rehab companies will get more value from using a general AI assistant to analyze exported data than from buying a dedicated AI analytics platform. Export your metrics to a spreadsheet, paste them into ChatGPT, and ask questions. Start there before investing in specialized tools."
      },
    ]
  },
];
