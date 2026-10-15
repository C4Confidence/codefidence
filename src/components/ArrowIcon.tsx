export default function ArrowIcon({ direction = "diagonal", className = "arrow-icon" }: { direction?: "diagonal" | "right"; className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={direction === "right" ? "M4 12h16m-6-6 6 6-6 6" : "M5 19 19 5M5 5h14v14"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
