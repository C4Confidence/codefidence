import type { Metadata } from "next";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore software engineering concepts spanning data interfaces, secure APIs, and accessible component systems.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="page-main" tabIndex={-1}>
      <header className="page-intro shell">
        <p className="eyebrow">The work / 01—03</p>
        <h1>Built with intent.</h1>
        <p className="page-intro-copy">Useful interfaces. Thoughtful architecture. The details that make software feel simple, even when the problem isn’t.</p>
      </header>

      <section className="shell projects-section" aria-labelledby="selected-concepts">
        <div className="section-heading">
          <h2 id="selected-concepts">Selected concepts<span className="section-count">03</span></h2>
          <p className="text-muted projects-intro-note">Design explorations with engineering notes.<br />A look at the thinking behind the interface.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => <ProjectCard key={project.id} project={project} detailed />)}
        </div>
      </section>
    </main>
  );
}
