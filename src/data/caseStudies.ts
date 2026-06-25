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
    summary: "What a phased AI documentation rollout looks like in a 12-clinic rehab group — from pilot to full adoption.",
    problem: "Clinicians are spending 45-60 minutes per day on documentation after hours. Leadership wants to reduce after-hours charting without sacrificing note quality or compliance. Previous technology rollouts have met resistance, especially from experienced clinicians who don't want another tool forced on them.",
    workflow: "Start with a 3-clinic pilot. Identify two champion clinicians per site — people the rest of the team trusts, not just the most tech-savvy. Test AI documentation tools during low-volume hours first. Create clear guidelines: what AI can draft, what clinicians must review, what cannot go through AI at all. Build a feedback loop with weekly check-ins. Expand to remaining sites over 8 weeks, adjusting based on what the pilot sites learned.",
    results: "In a typical rollout like this, you can expect after-hours documentation time to drop by roughly 30 minutes per clinician per day. Note quality audits should show no decline if the review step is enforced. The biggest win is usually clinician satisfaction — people stop dreading their notes. Full rollout is realistic within one quarter if the pilot is structured well.",
    lessons: "Start small. Pick your champions carefully — credibility with the clinical team matters more than enthusiasm about technology. Set clear boundaries about AI use from day one, not after someone makes a mistake. Expect resistance and build your rollout plan around it. If you don't measure before and after, you won't be able to show leadership the impact.",
    tags: ["Documentation", "Multi-site", "Implementation"]
  },
  {
    title: "Cutting Leadership Admin Time with AI Workflows",
    slug: "leadership-admin-time",
    summary: "How a regional director can reclaim 6-8 hours per week by using AI for the repetitive parts of leadership work.",
    problem: "A regional director overseeing 8 clinics is spending 15+ hours per week on email drafting, report summarization, and meeting preparation. That leaves almost no time for the work that actually moves clinics forward — site visits, coaching conversations, and direct leadership.",
    workflow: "Identify the top 5 most time-consuming administrative tasks. For each one, test whether AI can handle the first draft: email drafting, metric summarization, meeting agenda creation, action item tracking, and leadership update preparation. Build personal templates and reusable prompts over 4 weeks. The key is creating your own system, not using generic prompts from the internet.",
    results: "A regional director who builds these workflows consistently can expect to save 6-8 hours per week on admin tasks. That time goes back into clinic visits, team development, and strategic work. Teams typically notice the difference — communication gets clearer and more consistent, which builds trust.",
    lessons: "AI is most valuable for leadership when it handles the repetitive drafting work, not the decision-making. Build your own templates rather than starting from scratch each time. Review everything before sending — AI drafts are starting points, not final products. The goal is not to automate leadership. The goal is to clear the admin clutter so you can actually lead.",
    tags: ["Leadership", "Operations", "Efficiency"]
  },
  {
    title: "Building Consistent Communication Templates Across Clinics",
    slug: "clinic-communication",
    summary: "Using AI to create a communication template library that reduces confusion and saves directors hours per week.",
    problem: "Staff communications across sites are inconsistent — some emails are too long, others too vague. Team members frequently ask for clarification, and important action items get missed. Directors are also spending too much time crafting individual messages for situations that come up repeatedly.",
    workflow: "Use AI to draft standardized templates for the most common communication types: schedule changes, policy updates, performance feedback, team announcements, and new hire introductions. Test the templates with the team for two weeks. Refine based on what people actually respond to. Build a shared communication guide that any director can use.",
    results: "Follow-up questions after team communications typically decrease significantly. Staff feel better informed because the messages are clearer and more consistent. Directors save 3-4 hours per week once the template library is built. The templates often spread organically — other directors in the organization start using them.",
    lessons: "Consistency matters more than perfection in team communication. Having a template library saves time and improves clarity. Let your team give feedback on the templates — they'll tell you what's missing faster than you'll figure it out yourself.",
    tags: ["Communication", "Leadership", "Templates"]
  },
  {
    title: "Standardizing AI Workflows for a Regional Leadership Team",
    slug: "regional-director-workflows",
    summary: "What happens when you give a leadership team a shared set of AI workflows instead of letting everyone figure it out alone.",
    problem: "Five regional directors are managing clinics with very different approaches to reporting, communication, and operational oversight. Leadership wants more consistency without micromanaging. Previous standardization efforts were rejected as too rigid — directors felt like they were being handed a script.",
    workflow: "Survey regional directors on their most time-consuming tasks. Identify 8 common workflows suitable for AI assistance. Build AI workflow guides with specific prompts, templates, and guidelines for each one. Run a 6-week pilot with two directors who are willing to test it honestly. Refine based on real-world feedback before rolling out to the full team.",
    results: "When done well, you can expect most directors to adopt at least half the workflows within 3 months. Leadership reporting becomes more consistent without feeling forced. Monthly meetings get shorter because preparation improves. Directors typically report feeling supported rather than controlled — which is the difference between a tool and a mandate.",
    lessons: "Standardization works when it reduces burden, not when it adds process. Let leaders customize within a framework rather than enforcing rigid templates. AI workflows should be offered as tools, not mandates. If your directors push back, you probably made it too prescriptive.",
    tags: ["Leadership", "Regional", "Workflows"]
  },
  {
    title: "What Goes Wrong When You Implement AI Too Quickly",
    slug: "ai-implementation-failure",
    summary: "An honest look at the common failure pattern when rehab companies rush AI adoption without planning, training, or boundaries.",
    problem: "A rehab company sees competitors talking about AI and fast-tracks implementation across all sites simultaneously. There is no pilot period, limited training, and unclear guidelines about acceptable use. Leadership assumes clinicians will figure it out because the tools are \"intuitive.\"",
    workflow: "AI documentation tools are introduced company-wide in one week. A single training webinar is offered. No champions are identified. No usage guidelines are distributed. No compliance review is completed before launch. Leadership sends an email saying \"we're using AI now\" and moves on.",
    results: "Clinician adoption lands under 20% after 30 days. Compliance concerns get raised about AI-generated content in clinical notes. Staff frustration increases — not because the tools are bad, but because nobody told them what's okay to do. The company pauses the rollout and has to restart with a structured pilot 3 months later, having burned credibility with the clinical team.",
    lessons: "Speed is not a strategy. Clinicians need clear rules about what AI can and cannot be used for, especially in documentation. Compliance and legal review must happen before rollout, not after. Champions and peer support matter more than top-down mandates. The good news: failure is recoverable if you're honest about what went wrong and willing to restart the right way.",
    tags: ["Implementation", "Compliance", "Lessons Learned"]
  },
];
