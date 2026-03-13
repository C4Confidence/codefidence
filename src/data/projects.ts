// src/data/projects.ts
export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string; // We'll use placeholders for now
}

export const projects: Project[] = [
  {
    title: "Quantum Dashboard",
    description: "A real-time analytics engine for tracking blockchain transactions with 99.9% uptime.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?w=800&q=80"
  },
  {
    title: "SecureAuth API",
    description: "Custom authentication provider with multi-factor biometric support and AES-256 encryption.",
    tech: ["Node.js", "Redis", "Docker", "AWS"],
    link: "#",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=800&q=80"
  },
  {
    title: "Codefidence UI",
    description: "An open-source design system focused on accessibility and high-performance animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#",
    image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800&q=80"
  }
];