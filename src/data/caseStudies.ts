export interface CaseStudy {
  title: string;
  slug: string;
  summary: string;
  problem: string;
  workflow: string;
  results: string;
  lessons: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    title: "Rolling Out AI Documentation Across a Multi-Site Rehab Company",
    slug: "ai-documentation-rollout",
    summary: "How a 12-clinic rehab group introduced AI-assisted documentation without disrupting clinical workflows.",
    problem: "Clinicians were spending 45-60 minutes per day on documentation after hours. Leadership wanted to reduce after-hours charting without sacrificing note quality or compliance. Previous technology rollouts had met resistance from experienced clinicians.",
    workflow: "Started with a 3-clinic pilot. Identified two champion clinicians per site. Tested AI documentation tools during low-volume hours first. Created clear guidelines for what AI could and could not do. Built a feedback loop with weekly check-ins. Expanded to remaining sites over 8 weeks.",
    results: "Average after-hours documentation time dropped by approximately 30 minutes per clinician per day across pilot sites. Clinician satisfaction scores improved. Note quality audits showed no decline. Full rollout completed within one quarter.",
    lessons: "Start small. Pick your champions carefully — credibility matters more than enthusiasm. Set clear boundaries about AI use from day one. Expect resistance and plan for it. Measure before and after, or you will not be able to show impact.",
    tags: ["Documentation", "Multi-site", "Implementation"]
  },
  {
    title: "Using AI to Reduce Leadership Admin Time",
    slug: "leadership-admin-time",
    summary: "A regional director used AI tools to cut weekly administrative tasks and focus more time on clinic visits and team development.",
    problem: "A regional director overseeing 8 clinics was spending over 15 hours per week on email drafting, report summarization, and meeting preparation. This left insufficient time for site visits and direct leadership.",
    workflow: "Identified the top 5 most time-consuming administrative tasks. Tested AI assistance for each: email drafting, metric summarization, meeting agenda creation, action item tracking, and leadership update preparation. Created personal templates and workflows over 4 weeks.",
    results: "Estimated 6-8 hours per week saved on administrative tasks. Increased clinic visit frequency from biweekly to weekly. Reported improved quality of leadership communications. Team feedback indicated clearer, more consistent messaging.",
    lessons: "AI is most valuable for leadership when it handles the repetitive drafting work, not the decision-making. Build your own templates rather than starting from scratch each time. Review everything before sending — AI drafts are starting points, not final products.",
    tags: ["Leadership", "Operations", "Efficiency"]
  },
  {
    title: "Using AI to Improve Clinic Communication",
    slug: "clinic-communication",
    summary: "A clinic director used AI to create consistent, professional communication templates that improved team clarity and reduced misunderstandings.",
    problem: "Staff communications were inconsistent — some emails were too long, others too vague. Team members frequently asked for clarification, and important action items were being missed. The director was also spending too much time crafting individual messages.",
    workflow: "Used AI to draft standardized templates for common communication types: schedule changes, policy updates, performance feedback, and team announcements. Tested templates with the team for two weeks. Refined based on feedback. Built a shared communication guide.",
    results: "Follow-up questions after team communications decreased noticeably. Staff reported feeling better informed. Director estimated saving 3-4 hours per week on communication tasks. Templates were adopted by two other clinic directors in the region.",
    lessons: "Consistency matters more than perfection in team communication. Having a template library saves time and improves clarity. Let your team give feedback on the templates — they will tell you what is missing.",
    tags: ["Communication", "Leadership", "Templates"]
  },
  {
    title: "Building AI Workflows for Regional Directors",
    slug: "regional-director-workflows",
    summary: "A rehab company created a standardized set of AI workflows for regional directors to improve consistency and efficiency across the leadership team.",
    problem: "Five regional directors were managing clinics with very different approaches to reporting, communication, and operational oversight. Leadership wanted more consistency without micromanaging. Previous standardization efforts had been rejected as too rigid.",
    workflow: "Surveyed regional directors on their most time-consuming tasks. Identified 8 common workflows suitable for AI assistance. Built AI workflow guides with specific prompts, templates, and guidelines. Ran a 6-week pilot with two directors. Refined based on real-world feedback before company-wide launch.",
    results: "All five regional directors adopted at least 4 of the 8 workflows within 3 months. Leadership reporting became more consistent. Monthly leadership meetings became shorter as preparation improved. Directors reported feeling supported rather than controlled.",
    lessons: "Standardization works when it reduces burden, not when it adds process. Let leaders customize within a framework rather than enforcing rigid templates. AI workflows should be offered as tools, not mandates.",
    tags: ["Leadership", "Regional", "Workflows"]
  },
  {
    title: "What Went Wrong When Implementing AI Too Quickly",
    slug: "ai-implementation-failure",
    summary: "An honest look at what happened when a rehab company pushed AI adoption too fast without adequate planning, training, or boundaries.",
    problem: "A growing rehab company saw competitors adopting AI and fast-tracked implementation across all sites simultaneously. There was no pilot period, limited training, and unclear guidelines about acceptable use. Leadership assumed clinicians would figure it out.",
    workflow: "AI documentation tools were introduced company-wide in one week. A single training webinar was offered. No champions were identified. No usage guidelines were distributed. No compliance review was completed before launch.",
    results: "Clinician adoption was under 20% after 30 days. Two compliance concerns were raised about AI-generated content in clinical notes. Staff frustration increased. The company paused the rollout and restarted with a structured pilot 3 months later.",
    lessons: "Speed is not a strategy. Clinicians need clear rules about what AI can and cannot be used for, especially in documentation. Compliance and legal review must happen before rollout, not after. Champions and peer support matter more than top-down mandates. Failure is recoverable if you are honest about what went wrong.",
    tags: ["Implementation", "Compliance", "Lessons Learned"]
  },
];
