// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <section>
          <h1 className="text-5xl font-bold mb-6 italic">The <span className="text-emerald-400">Codefidence</span> Story</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            I believe that great software isn't just about syntax—it's about the confidence 
            that comes from knowing every line of code serves a purpose and every system is built to scale.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 pt-10 border-t border-slate-800">
          <div>
            <h3 className="text-emerald-400 font-mono uppercase tracking-widest mb-4">Technical Philosophy</h3>
            <p className="text-slate-400">
              I specialize in clean architecture, type-safety with TypeScript, and 
              high-performance frontend engineering. If it can be optimized, it should be.
            </p>
          </div>
          <div>
            <h3 className="text-emerald-400 font-mono uppercase tracking-widest mb-4">Core Stack</h3>
            <ul className="text-slate-400 space-y-2">
              <li>• Next.js & React (App Router)</li>
              <li>• Tailwind CSS & Framer Motion</li>
              <li>• Node.js & PostgreSQL</li>
              <li>• Docker & Cloud Infrastructure</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}