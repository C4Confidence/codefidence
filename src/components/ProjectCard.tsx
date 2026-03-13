// src/components/ProjectCard.tsx
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300">
      {/* Image Container */}
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-1 bg-slate-900 text-emerald-400 rounded-md border border-emerald-500/20">
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed">
          {project.description}
        </p>

        <a 
          href={project.link} 
          className="inline-flex items-center text-sm font-bold text-sky-400 hover:text-sky-300 transition-colors"
        >
          View Technical Case Study 
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="Ref M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}