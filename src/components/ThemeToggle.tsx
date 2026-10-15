'use client';

import { useEffect } from 'react';
import { THEME_STORAGE_KEY } from '../lib/theme';

type Theme = 'light' | 'dark';

function getSystemTheme(): Theme {
  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export default function ThemeToggle() {
  useEffect(() => {
    const root = document.documentElement;
    const updateSystemTheme = () => {
      if (!root.dataset.themePreference) applyTheme(getSystemTheme());
    };
    const updateStoredTheme = (event: StorageEvent) => {
      if (event.key !== THEME_STORAGE_KEY && event.key !== null) return;

      if (event.newValue === 'light' || event.newValue === 'dark') {
        root.dataset.themePreference = event.newValue;
        applyTheme(event.newValue);
      } else {
        delete root.dataset.themePreference;
        applyTheme(getSystemTheme());
      }
    };

    let media: MediaQueryList | undefined;
    try {
      media = window.matchMedia('(prefers-color-scheme: dark)');
    } catch {
      // Browsers without a color preference API use the light fallback.
    }
    media?.addEventListener('change', updateSystemTheme);
    window.addEventListener('storage', updateStoredTheme);
    // Recheck after hydration in case the OS preference changed during loading.
    updateSystemTheme();

    return () => {
      media?.removeEventListener('change', updateSystemTheme);
      window.removeEventListener('storage', updateStoredTheme);
    };
  }, []);

  const toggleTheme = () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    // Retain explicit intent for this page even if writing storage is denied.
    document.documentElement.dataset.themePreference = theme;
    applyTheme(theme);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // The toggle still works when storage is unavailable.
    }
  };

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} title="Toggle color theme">
      <svg className="theme-icon theme-icon--moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.5 13.1A8.8 8.8 0 0 1 10.9 3.5a8.8 8.8 0 1 0 9.6 9.6Z" />
      </svg>
      <svg className="theme-icon theme-icon--sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
      </svg>
      <span className="sr-only theme-label--dark">Switch to dark mode</span>
      <span className="sr-only theme-label--light">Switch to light mode</span>
    </button>
  );
}
