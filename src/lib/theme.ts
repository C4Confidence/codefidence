export const THEME_STORAGE_KEY = "codefidence-theme";

// Apply the saved choice before the first paint. New visitors and browsers
// without storage always start in light mode, regardless of the OS theme.
export const themeInitScript = `(() => {
  const root = document.documentElement;
  let theme = "light";
  try {
    const saved = localStorage.getItem("${THEME_STORAGE_KEY}");
    if (saved === "light" || saved === "dark") {
      theme = saved;
    }
  } catch {}
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
})();`;
