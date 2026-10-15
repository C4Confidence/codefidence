export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  focus: string;
  visual: "dashboard" | "auth" | "ui";
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "quantum-dashboard",
    title: "Quantum Dashboard",
    category: "Data & interfaces",
    description:
      "An analytics dashboard concept that turns complex activity into a clear, useful interface.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    focus: "Data modeling · Responsive interfaces",
    visual: "dashboard",
    highlights: [
      "Define typed data contracts between the database, API, and interface so changes stay predictable.",
      "Design loading, empty, and error states alongside the charts, with readable summaries for smaller screens.",
      "Keep filtering and pagination close to the data layer to avoid sending unnecessary records to the browser.",
    ],
  },
  {
    id: "secureauth-api",
    title: "SecureAuth API",
    category: "Backend & security",
    description:
      "An authentication service concept exploring secure sessions, clear boundaries, and dependable APIs.",
    tech: ["Node.js", "Redis", "Docker"],
    focus: "API design · Security by design",
    visual: "auth",
    highlights: [
      "Separate identity, session management, and authorization so each responsibility can be reasoned about and tested.",
      "Consider token expiry, session revocation, rate limits, and safe error responses as part of the API contract.",
      "Use isolated integration tests for expired sessions, invalid credentials, and permission boundaries.",
    ],
  },
  {
    id: "codefidence-ui",
    title: "Codefidence UI",
    category: "Design systems",
    description:
      "A component system concept built around consistent patterns, accessible interactions, and thoughtful details.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    focus: "Accessibility · Component architecture",
    visual: "ui",
    highlights: [
      "Start with semantic HTML and keyboard behavior before adding visual variants or motion.",
      "Use shared design tokens and small, typed component APIs to keep interfaces consistent as they grow.",
      "Check contrast, focus visibility, reduced motion, and layouts at narrow widths as part of component review.",
    ],
  },
];
