export const THEME_STORAGE_KEY = "codefidence-theme";

// Runs in <head> before the page can paint. Keep storage and system lookups
// independent: private browsing can deny storage while matchMedia still works.
export const themeInitScript = `(() => {
  const root = document.documentElement;
  let theme;
  try {
    const saved = localStorage.getItem("${THEME_STORAGE_KEY}");
    if (saved === "light" || saved === "dark") {
      theme = saved;
      root.dataset.themePreference = saved;
    }
  } catch {}
  if (!theme) {
    try {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } catch {
      theme = "light";
    }
  }
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
})();`;
