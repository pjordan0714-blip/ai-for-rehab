export interface AITool {
  name: string;
  slug: string;
  category: string;
  bestFor: string;
  pros: string[];
  cautions: string[];
  status: "Tested" | "Watching" | "Not Yet Tested";
}

export const aiTools: AITool[] = [
  {
    name: "AI Scribe Platform A",
    slug: "ai-scribe-a",
    category: "AI Scribes",
    bestFor: "Outpatient rehab documentation with structured note templates.",
    pros: ["Integrates with common rehab EMRs", "Reduces after-hours charting time", "Supports PT/OT/SLP note formats"],
    cautions: ["Requires HIPAA-compliant agreement", "Output must be reviewed before signing", "Learning curve for first-time users"],
    status: "Tested"
  },
  {
    name: "General AI Assistant",
    slug: "general-ai-assistant",
    category: "General AI Assistants",
    bestFor: "Drafting emails, summarizing documents, brainstorming, and general writing tasks.",
    pros: ["Versatile across many use cases", "Easy to get started", "No healthcare-specific setup needed"],
    cautions: ["Do not enter PHI", "Not designed for clinical documentation", "Output quality varies — always review"],
    status: "Tested"
  },
  {
    name: "AI Meeting Notes Tool",
    slug: "ai-meeting-notes",
    category: "Meeting Note Tools",
    bestFor: "Recording and summarizing team meetings, leadership calls, and training sessions.",
    pros: ["Automatic transcription", "Action item extraction", "Searchable meeting history"],
    cautions: ["Check recording consent requirements", "May not capture clinical terminology accurately", "Review summaries for accuracy"],
    status: "Tested"
  },
  {
    name: "AI Automation Platform",
    slug: "ai-automation-platform",
    category: "Automation Tools",
    bestFor: "Connecting tools and automating repetitive administrative workflows.",
    pros: ["Reduces manual data entry", "Connects scheduling, email, and reporting tools", "No coding required for basic automations"],
    cautions: ["Requires careful setup to avoid errors", "Test thoroughly before going live", "Monitor automations regularly"],
    status: "Watching"
  },
  {
    name: "AI Marketing Assistant",
    slug: "ai-marketing-assistant",
    category: "Marketing Tools",
    bestFor: "Creating social media content, blog drafts, and marketing copy for clinics.",
    pros: ["Fast content generation", "Consistent brand voice with templates", "Good for brainstorming ideas"],
    cautions: ["Always review for accuracy", "Avoid health claims without evidence", "Customize output — generic content does not perform well"],
    status: "Tested"
  },
  {
    name: "AI Reporting Dashboard",
    slug: "ai-reporting-dashboard",
    category: "Reporting and Dashboard Tools",
    bestFor: "Visualizing clinic performance data and generating automated reports.",
    pros: ["Centralizes data from multiple sources", "AI-generated insights and trend detection", "Customizable dashboards"],
    cautions: ["Data accuracy depends on input quality", "May require technical setup", "Verify AI-generated insights independently"],
    status: "Not Yet Tested"
  },
];
