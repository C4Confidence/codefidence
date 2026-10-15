'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ArrowIcon from './ArrowIcon';
import ThemeToggle from './ThemeToggle';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Work' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <Link href="/" className="brand" aria-label="Codefidence home" onClick={closeMenu}>
          <svg className="brand-mark" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <path d="m9 7-6 7 6 7m10-14 6 7-6 7m-3-17-4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>codefidence<span aria-hidden="true">.</span></span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <a className="header-contact" href="mailto:aigconfidence@gmail.com">
            Let&apos;s talk <ArrowIcon />
          </a>
          <button
            ref={toggleRef}
            className="mobile-menu-toggle"
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsOpen((open) => !open)}
          >
            <svg className="mobile-menu-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {isOpen ? (
                <path d="m6 6 12 12M6 18 18 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              ) : (
                <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation" hidden={!isOpen}>
          {navigation.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined} onClick={closeMenu}>
              {label}
            </Link>
          ))}
          <a className="button button-primary" href="mailto:aigconfidence@gmail.com" onClick={closeMenu}>
            Let&apos;s talk <ArrowIcon />
          </a>
        </nav>
      </div>
    </header>
  );
}
