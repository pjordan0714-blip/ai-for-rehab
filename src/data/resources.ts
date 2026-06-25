export interface ResourceCategory {
  title: string;
  slug: string;
  description: string;
  icon: string; // emoji
}

export const resourceCategories: ResourceCategory[] = [
  { title: "Documentation", slug: "documentation", description: "AI workflows for clinical notes, evaluations, progress reports, and discharge summaries.", icon: "\u{1F4CB}" },
  { title: "Clinic Operations", slug: "clinic-operations", description: "Streamline scheduling, intake, reporting, and daily clinic workflows with AI.", icon: "\u{1F3E5}" },
  { title: "Leadership", slug: "leadership", description: "AI tools for managers and directors to lead teams, run meetings, and make decisions.", icon: "\u{1F465}" },
  { title: "Marketing", slug: "marketing", description: "Create content, manage social media, and grow your clinic's presence with AI support.", icon: "\u{1F4E3}" },
  { title: "Patient Education", slug: "patient-education", description: "Build clear, readable patient materials and home exercise instructions.", icon: "\u{1F4D6}" },
  { title: "Staff Training", slug: "staff-training", description: "Develop onboarding checklists, training guides, and competency frameworks.", icon: "\u{1F393}" },
  { title: "AI Tools", slug: "ai-tools", description: "Reviews and comparisons of AI platforms relevant to rehab settings.", icon: "\u{1F527}" },
  { title: "Compliance and Safety", slug: "compliance-safety", description: "Guidelines for using AI responsibly in healthcare environments.", icon: "\u{1F6E1}️" },
  { title: "Prompt Library", slug: "prompt-library", description: "Ready-to-use prompts tested in real rehab workflows.", icon: "\u{1F4AC}" },
  { title: "Case Studies", slug: "case-studies", description: "Real-world examples of AI adoption in rehab organizations.", icon: "\u{1F4CA}" },
];
