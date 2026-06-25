export interface UseCase {
  title: string;
  description: string;
}

export interface RoleUseCases {
  role: string;
  slug: string;
  description: string;
  useCases: UseCase[];
}

export const roleUseCases: RoleUseCases[] = [
  {
    role: "Clinician",
    slug: "clinician",
    description: "PTs, OTs, SLPs, and athletic trainers providing direct patient care.",
    useCases: [
      { title: "Simplify patient education materials", description: "Turn clinical language into plain, readable handouts patients can actually use." },
      { title: "Draft home exercise program explanations", description: "Create clear HEP descriptions with rationale patients understand." },
      { title: "Clean up rough visit notes", description: "Turn shorthand or rough notes into organized, professional documentation." },
      { title: "Prepare visit summaries", description: "Generate concise summaries for patients, families, or referring providers." },
      { title: "Brainstorm differential questions", description: "Use AI as a thinking partner for clinical reasoning — without replacing your judgment." },
      { title: "Research condition-specific protocols", description: "Quickly gather and summarize current evidence for treatment approaches." },
      { title: "Draft letters of medical necessity", description: "Create structured, payer-friendly justification letters faster." },
    ]
  },
  {
    role: "Clinic Director",
    slug: "clinic-director",
    description: "Site-level leaders managing teams, operations, and clinic performance.",
    useCases: [
      { title: "Draft staff communications", description: "Write clear, professional emails to your team in less time." },
      { title: "Analyze weekly clinic metrics", description: "Paste in your numbers and get a quick read on trends and concerns." },
      { title: "Create meeting agendas", description: "Build structured, purposeful agendas that keep meetings on track." },
      { title: "Build onboarding checklists", description: "Generate thorough onboarding plans for new hires." },
      { title: "Role-play difficult conversations", description: "Practice tough feedback or coaching conversations with AI as a stand-in." },
      { title: "Summarize policy updates", description: "Turn long policy documents into actionable summaries for your team." },
      { title: "Draft performance improvement plans", description: "Create structured PIPs with clear expectations and timelines." },
    ]
  },
  {
    role: "Regional Director",
    slug: "regional-director",
    description: "Multi-site leaders overseeing clinic performance and operational consistency.",
    useCases: [
      { title: "Compare clinic performance trends", description: "Analyze data across sites to spot patterns and outliers." },
      { title: "Summarize reports for leadership", description: "Turn detailed operational data into executive-ready summaries." },
      { title: "Draft action plans", description: "Build structured improvement plans based on clinic performance data." },
      { title: "Prepare leadership updates", description: "Create concise updates for board meetings or executive reviews." },
      { title: "Identify follow-up questions from dashboards", description: "Let AI help you ask better questions about your data." },
      { title: "Standardize clinic communication templates", description: "Create consistent messaging frameworks across your region." },
    ]
  },
  {
    role: "Owner / Executive",
    slug: "owner-executive",
    description: "Company owners and C-suite leaders setting strategy and direction.",
    useCases: [
      { title: "Draft strategic communications", description: "Write company-wide updates, vision statements, and board materials." },
      { title: "Analyze market opportunities", description: "Research referral patterns, demographics, and growth areas." },
      { title: "Build business case documents", description: "Create data-informed proposals for new locations or service lines." },
      { title: "Summarize industry trends", description: "Stay current on rehab industry changes without reading everything." },
      { title: "Draft partnership proposals", description: "Create professional outreach for health system or payer partnerships." },
      { title: "Plan AI adoption roadmaps", description: "Develop phased plans for rolling out AI across your organization." },
    ]
  },
  {
    role: "Marketing Lead",
    slug: "marketing-lead",
    description: "Marketing professionals growing brand presence and patient volume.",
    useCases: [
      { title: "Generate social media content", description: "Turn clinic wins, tips, and updates into engaging posts." },
      { title: "Draft blog posts and articles", description: "Create educational content that builds authority and SEO." },
      { title: "Write physician outreach letters", description: "Craft professional referral-building communications." },
      { title: "Create patient testimonial frameworks", description: "Build templates for gathering and sharing patient stories ethically." },
      { title: "Develop email campaigns", description: "Write nurture sequences for patients, referral sources, or prospects." },
    ]
  },
  {
    role: "Admin / Front Office",
    slug: "admin-front-office",
    description: "Front desk staff, schedulers, and administrative team members.",
    useCases: [
      { title: "Draft patient communication templates", description: "Create consistent, friendly messages for scheduling, reminders, and follow-ups." },
      { title: "Summarize insurance verification steps", description: "Turn complex payer rules into simple checklists." },
      { title: "Create FAQ documents", description: "Build answers to common patient questions for front desk reference." },
      { title: "Organize referral tracking workflows", description: "Design systems to track and follow up on incoming referrals." },
      { title: "Write professional phone scripts", description: "Create scripts for common call scenarios that sound natural." },
    ]
  },
];
