import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import ArrowIcon from "../components/ArrowIcon";
import { projects } from "../data/projects";

const capabilities = [
  { number: "01", title: "Interfaces that feel right", description: "Responsive, accessible experiences with React, Next.js, and an eye for the small details.", label: "FRONTEND ENGINEERING", path: "M4 5h16v14H4zM4 9h16M9 9v10" },
  { number: "02", title: "Systems that make sense", description: "Thoughtful APIs, clear data models, and a foundation that is easy to reason about and extend.", label: "BACKEND & ARCHITECTURE", path: "M12 3 3 8l9 5 9-5-9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" },
  { number: "03", title: "Quality in the details", description: "Type safety, deliberate testing, and performance considered throughout the development process.", label: "DEVELOPER CRAFT", path: "m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16" },
];

function EngineeringPreview() {
  return (
    <div className="engineering-preview" aria-label="My engineering approach: thoughtful architecture, typed code, and careful delivery">
      <div className="preview-orbit" aria-hidden="true" />
      <div className="code-window">
        <div className="code-window-bar">
          <span className="window-dots" aria-hidden="true"><i /><i /><i /></span>
          <span>the-approach.ts</span>
          <span className="file-language">TS</span>
        </div>
        <div className="code-window-content" aria-hidden="true">
          <div className="code-comment">{"// Good software starts with intent."}</div>
          <div><span className="code-purple">const</span> <span className="code-lime">approach</span> = {"{"}</div>
          <div className="code-indent">understand: <span className="code-string">&quot;the problem&quot;</span>,</div>
          <div className="code-indent">design: <span className="code-string">&quot;with purpose&quot;</span>,</div>
          <div className="code-indent">build: <span className="code-string">&quot;with care&quot;</span>,</div>
          <div className="code-indent">improve: <span className="code-purple">true</span>,</div>
          <div>{"}"};</div>
          <div className="code-gap" />
          <div><span className="code-purple">export default</span> <span className="code-lime">approach</span>;</div>
        </div>
        <div className="code-window-status"><span><i /> Built with intention</span><span>UTF-8</span></div>
      </div>
      <div className="architecture-card">
        <div className="architecture-heading"><span className="eyebrow">THE BIG PICTURE</span><ArrowIcon /></div>
        <div className="architecture-flow" aria-hidden="true">
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8m-4-4v4" /></svg>Interface</span>
          <ArrowIcon direction="right" />
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18" /></svg>Logic</span>
          <ArrowIcon direction="right" />
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" /></svg>Data</span>
        </div>
        <p>Every layer. One considered experience.</p>
      </div>
      <div className="preview-caption"><span aria-hidden="true">✳</span> A little curiosity. A lot of craft.</div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="hero shell">
        <div className="hero-copy">
          <div className="availability"><span /> Available for new projects</div>
          <p className="eyebrow hero-eyebrow">SOFTWARE ENGINEER · PROBLEM SOLVER</p>
          <h1>Thoughtful code.<br /><span>Lasting impact.</span></h1>
          <p className="hero-description">I turn complex problems into clear, useful digital experiences. Building for the web with a balance of engineering rigor and a human touch.</p>
          <div className="hero-actions">
            <Link href="/projects" className="button button-primary">Explore my work <ArrowIcon /></Link>
            <a href="mailto:aigconfidence@gmail.com" className="button button-secondary">Let&apos;s talk <ArrowIcon direction="right" /></a>
          </div>
          <div className="hero-note"><span className="hero-note-mark" aria-hidden="true">⌘</span><span>From the first idea to the final detail.</span></div>
        </div>
        <EngineeringPreview />
      </section>
      <div className="stack-strip shell">
        <p className="eyebrow">TOOLS OF THE TRADE</p>
        <ul aria-label="Technology focus"><li>TypeScript</li><li>React & Next.js</li><li>Node.js</li><li>PostgreSQL</li><li>Docker & Cloud</li></ul>
      </div>
      <section className="work-section shell" aria-labelledby="work-title">
        <div className="section-heading">
          <div><p className="eyebrow"><span className="section-number">01 /</span> THE WORK</p><h2 id="work-title">Ideas, engineered.</h2></div>
          <Link href="/projects" className="text-link">Explore all projects <ArrowIcon /></Link>
        </div>
        <p className="section-description">A few concepts that bring my approach to frontend, backend, and systems thinking into focus.</p>
        <div className="project-grid">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div>
      </section>
      <section className="expertise-section" aria-labelledby="expertise-title">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow"><span className="section-number">02 /</span> HOW I THINK</p><h2 id="expertise-title">More than writing code.</h2></div>
            <p className="section-heading-note">The best solutions connect the technical<br className="desktop-break" /> details to the people using them.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map(item => <article className="capability-card" key={item.number}>
              <div className="capability-top"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={item.path} /></svg><span>{item.number}</span></div>
              <p className="eyebrow">{item.label}</p><h3>{item.title}</h3><p>{item.description}</p>
            </article>)}
          </div>
          <Link href="/about" className="text-link about-link">A little more about me <ArrowIcon /></Link>
        </div>
      </section>
    </main>
  );
}
