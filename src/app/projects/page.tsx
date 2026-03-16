// src/app/projects/page.tsx
import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Technical <span className="text-emerald-400">Archive</span></h1>
        <p className="text-slate-400 max-w-2xl mb-12">
          A deep dive into the systems I've built, the challenges I've solved, and the codebases I've mastered.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}