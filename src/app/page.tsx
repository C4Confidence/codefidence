// src/app/page.tsx
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white selection:bg-emerald-500/30">
      {/* Background Glow Effect */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-sky-500/10 blur-[120px]" />
      </div>

      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Content ..*/}
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new projects
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            Build with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">Codefidence</span>
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed">
            I am a Software Engineer specializing in building high-performance 
            web applications that are as stable as they are beautiful. 
            Zero-defect mindset. Scalable architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-xl transition-all hover:scale-105 active:scale-95">
              View My Work
            </button>
            <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold rounded-xl transition-all">
              Contact Me
            </button>
          </div>
        </div>

      </section>
       <section id="projects" className="relative z-10 max-w-6xl mx-auto px-6 mt-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Selected Works</h2>
            <p className="text-slate-400">Proof of technical confidence.</p>
          </div>
          <div className="hidden md:block h-[1px] flex-grow mx-8 bg-slate-800"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}