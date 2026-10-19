export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export const coreServices = [
  {
    title: "Website Development",
    description:
      "Business websites, landing pages, and conversion-focused experiences designed to clarify your offer and turn visits into enquiries.",
    bullets: ["Responsive design", "Custom layouts", "Lead generation forms"],
  },
  {
    title: "Website Maintenance",
    description:
      "Reliable updates, dependency checks, security reviews, fixes, and proactive support to keep your site healthy and current.",
    bullets: ["Health checks", "Security updates", "Performance improvements"],
  },
  {
    title: "Website Redesign",
    description:
      "A clear assessment and redesign process that improves usability, messaging, and conversion performance without losing trust.",
    bullets: ["UX review", "Content structure", "Responsive refresh"],
  },
  {
    title: "E-commerce Websites",
    description:
      "Product catalogues, streamlined checkout experiences, and storefront UX tailored for mobile-friendly, modern shopping flows.",
    bullets: ["Product pages", "Cart flows", "Payment setup"],
  },
];

export const portfolioItems: Array<{
  title: string;
  category: string;
  description: string;
  stack: string[];
  published: boolean;
}> = [];

export const faqs = [
  {
    question: "What types of websites do you build?",
    answer:
      "I build business websites, portfolio sites, landing pages, redesigns, and e-commerce storefronts, with a focus on clarity and conversions.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes. Maintenance plans can cover updates, backups, content changes, security checks, and performance improvements depending on the agreed scope.",
  },
  {
    question: "How does a project begin?",
    answer:
      "We start with an enquiry, review your goals, agree on scope, and then move into proposal, design, development, testing, and launch.",
  },
  {
    question: "Can I request a redesign of an existing site?",
    answer:
      "Absolutely. I can review your current website, propose a revised structure and visual direction, and then implement a refreshed build.",
  },
];

export const processSteps = [
  "Initial enquiry",
  "Requirement gathering",
  "Proposal and quote",
  "Design",
  "Development",
  "Testing",
  "Client review",
  "Launch and handover",
  "Optional maintenance",
];

export const dashboardNav = [
  "Overview",
  "Enquiries",
  "Clients",
  "Projects",
  "Websites",
  "Tasks",
  "Maintenance",
  "Quotes",
  "Invoices",
  "Payments",
  "Portfolio",
  "Reports",
  "Settings",
];

export const businessInfo = {
  businessName: "Your Studio",
  businessDescription: "Add your business description.",
  email: "Business email not configured",
  phone: "Phone not configured",
  website: "Website URL not configured",
  country: "Location not configured",
  defaultCurrency: "Not configured",
};
