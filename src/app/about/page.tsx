import type { Metadata } from "next";
import Link from "next/link";
import ArrowIcon from "../../components/ArrowIcon";

export const metadata: Metadata = {
  title: "About",
  description: "The engineering approach behind Codefidence: clear architecture, accessible interfaces, and software built with care.",
};

const principles = [
  { title: "Clarity over complexity.", description: "Small, well-defined pieces. Explicit data flow. Code that makes the next person’s job easier." },
  { title: "The experience is the product.", description: "Responsive layouts, keyboard access, and useful feedback belong in the first iteration." },
  { title: "Confidence comes from care.", description: "Type safety, meaningful tests, and considered tradeoffs make changes easier to trust." },
];

const skillGroups = [
  { title: "Frontend", tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "Backend", tools: ["Python", "Node.js", "REST APIs", "PostgreSQL", "Data modeling"] },
  { title: "Delivery", tools: ["Git", "Docker", "Cloud infrastructure", "Testing"] },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="page-main" tabIndex={-1}>
      <header className="page-intro shell about-intro">
        <p className="eyebrow">A little about me</p>
        <h1>A builder’s mindset.</h1>
        <div className="about-intro-copy">
          <p className="page-intro-copy">I’m a software engineer who enjoys making complex things clear — in the interface, in the code, and in the way a system fits together.</p>
          <p className="text-muted">Codefidence is my space to explore that approach. I care about the full journey from a thoughtful React component to the API and data behind it, with an emphasis on clean architecture, type safety, and practical decisions.</p>
        </div>
      </header>

      <div className="shell about-layout">
        <section className="about-section" aria-labelledby="principles-title">
          <div className="section-heading"><h2 id="principles-title">How I think.</h2><p className="text-muted">Principles that guide the work.</p></div>
          <div className="principles-grid">
            {principles.map((principle, index) => (
              <article className="principle-card" key={principle.title}>
                <span className="principle-number">0{index + 1}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" aria-labelledby="toolkit-title">
          <div className="section-heading"><h2 id="toolkit-title">A practical toolkit.</h2><p className="text-muted">The right tool starts with the problem.</p></div>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="skill-list">{group.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section about-process" aria-labelledby="process-title">
          <div className="section-heading"><h2 id="process-title">From question to code.</h2><Link href="/projects" className="text-link">Explore the concepts <ArrowIcon /></Link></div>
          <ol className="process-list">
            <li className="process-step"><span>01</span><div><h3>Understand the problem</h3><p>Clarify who it serves, the constraints, and what a useful outcome looks like.</p></div></li>
            <li className="process-step"><span>02</span><div><h3>Make the tradeoffs visible</h3><p>Choose simple boundaries, model the data, and consider the failure states.</p></div></li>
            <li className="process-step"><span>03</span><div><h3>Build, check, refine</h3><p>Work in small steps, test the behavior that matters, and improve with feedback.</p></div></li>
          </ol>
        </section>
      </div>
    </main>
  );
}
