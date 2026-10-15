import Link from "next/link";
import type { Project } from "../data/projects";
import ArrowIcon from "./ArrowIcon";

function ProjectVisual({ variant }: { variant: Project["visual"] }) {
  return (
    <div className={`project-visual project-visual--${variant}`} aria-hidden="true">
      <div className="project-mini">
        <div className="mini-topbar">
          <span className="mini-dots"><i /><i /><i /></span>
          <span className="mini-label">
            {variant === "dashboard" ? "quantum / overview" : variant === "auth" ? "secureauth / flow" : "codefidence / components"}
          </span>
          <span className="mini-topbar-status" />
        </div>

        {variant === "dashboard" && (
          <div className="dashboard-layout">
            <div className="dashboard-sidebar"><b /><span /><span /><span /><span /></div>
            <div className="dashboard-content">
              <div className="mini-metrics">
                <div className="mini-metric"><span>Activity</span><b>Overview</b></div>
                <div className="mini-metric"><span>System</span><b>Healthy <i /></b></div>
              </div>
              <div className="mini-chart">
                <span>Activity over time</span>
                <div className="mini-chart-bars">
                  {[30, 45, 35, 58, 44, 65, 56, 82, 67, 92, 76, 100].map((height, index) => (
                    <i key={index} style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {variant === "auth" && (
          <div className="auth-preview">
            <span className="auth-caption">A clear path to secure access.</span>
            <div className="auth-flow">
              <div className="auth-node">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="4" y="5" width="16" height="14" rx="3" /><path d="m9 10-2 2 2 2m6-4 2 2-2 2" /></svg>
                <span>Client</span>
              </div>
              <span className="auth-flow-line" />
              <div className="auth-node auth-node--active">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" /><path d="m8 12 3 3 5-6" /></svg>
                <span>Verify</span>
              </div>
              <span className="auth-flow-line" />
              <div className="auth-node">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="5" y="10" width="14" height="11" rx="3" /><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v3" /></svg>
                <span>Session</span>
              </div>
            </div>
            <span className="auth-preview-code">request → validate → authorize</span>
          </div>
        )}

        {variant === "ui" && (
          <div className="ui-preview">
            <div className="ui-preview-row"><span className="ui-preview-heading">Thoughtful by default.</span><span className="ui-preview-pill">Aa</span></div>
            <div className="ui-preview-field"><span>Email address</span><b>hello@codefidence.dev</b><span className="ui-field-cursor" /></div>
            <div className="ui-preview-row"><span className="ui-preview-button">Get started <ArrowIcon /></span><span className="ui-preview-button ui-preview-button--secondary">Learn more</span></div>
            <div className="ui-preview-swatches"><i /><i /><i /><i /><span>Made to work together.</span></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectCard({ project, detailed = false }: { project: Project; detailed?: boolean }) {
  return (
    <article className="project-card" id={detailed ? project.id : undefined}>
      <ProjectVisual variant={project.visual} />
      <div className="project-body">
        <p className="project-category">{project.category}<span>Concept study</span></p>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="project-tags" aria-label="Technology focus">
          {project.tech.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        {detailed ? (
          <details className="project-details">
            <summary>Engineering notes <span aria-hidden="true">+</span></summary>
            <p className="project-focus">{project.focus}</p>
            <ul className="project-note-list">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
          </details>
        ) : (
          <Link href={`/projects#${project.id}`} className="project-link" aria-label={`Explore ${project.title}`}>
            Explore concept <ArrowIcon />
          </Link>
        )}
      </div>
    </article>
  );
}
