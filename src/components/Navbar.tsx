// src/components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="flex items-center justify-between w-full max-w-6xl px-6 py-3 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl">
        {/* Logo */}
        <div className="text-xl font-bold tracking-tighter">
          CODE<span className="text-emerald-400">FIDENCE</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-emerald-400 transition-colors">Home</a>
          <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
          <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
        </div>

        {/* Action Button */}
        <a 
          href="mailto:aigconfidence@gmail.com"
          className="px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 text-sm font-bold rounded-xl transition-all"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
}