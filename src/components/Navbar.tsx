// src/components/Navbar.tsx
'use client'; // This allows interactivity

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="flex items-center justify-between w-full max-w-6xl px-6 py-3 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl relative">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tighter">
          CODE<span className="text-emerald-400">FIDENCE</span>
        </Link>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <Link href="/projects" className="hover:text-emerald-400 transition-colors">Projects</Link>
          <Link href="/about" className="hover:text-emerald-400 transition-colors">About</Link>
        </div>

        {/* Action Button & Mobile Toggle Container */}
        <div className="flex items-center gap-4">
          <a href="mailto:aigconfidence@gmail.com" className="hidden sm:block px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 text-sm font-bold rounded-xl transition-all">
            Let's Talk
          </a>

          {/* Hamburger Icon (Visible only on mobile) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="absolute top-20 left-0 right-0 bg-slate-900 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 text-center text-lg md:hidden animate-in fade-in slide-in-from-top-4">
            <Link href="/" onClick={() => setIsOpen(false)} className="py-2 border-b border-white/5">Home</Link>
            <Link href="/projects" onClick={() => setIsOpen(false)} className="py-2 border-b border-white/5">Projects</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="py-2">About</Link>
            <a href="mailto:aigconfidence@gmail.com" className="mt-4 py-3 bg-emerald-500 text-slate-900 font-bold rounded-xl">
              Let's Talk
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}