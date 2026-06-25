export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Prompt Library", href: "/prompts" },
  { label: "Examples", href: "/case-studies" },
  { label: "AI Tools", href: "/tools" },
  { label: "About", href: "/about" },
  { label: "Safety", href: "/safety" },
];
