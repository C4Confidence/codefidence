// src/components/Footer.tsx
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full border-t border-slate-800 bg-[#0f172a] py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold tracking-tighter mb-2">
              CODE<span className="text-emerald-400">FIDENCE</span>
            </div>
            <p className="text-slate-500 text-sm">
              © {currentYear} — Built with technical authority.
            </p>
          </div>

          {/* The Tech Stack */}
<div className="flex flex-col items-center md:items-end">
  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] mb-4">
    Powered by modern tech
  </p>
  <div className="flex flex-wrap justify-center gap-6 text-xs font-bold tracking-widest text-slate-500">
    <span className="hover:text-white hover:cursor-default transition-colors duration-300">NEXT.JS</span>
    <span className="hover:text-white hover:cursor-default transition-colors duration-300">TYPESCRIPT</span>
    <span className="hover:text-white hover:cursor-default transition-colors duration-300">TAILWIND</span>
    <span className="hover:text-white hover:cursor-default transition-colors duration-300">GITHUB</span>
    <span className="hover:text-white hover:cursor-default transition-colors duration-300">VERCEL</span>
  </div>
</div>

        </div>
      </div>
    </footer>
  );
}