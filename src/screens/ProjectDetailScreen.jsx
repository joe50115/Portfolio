import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PROJECTS } from "../data/projects.js";
import { svgPlaceholder } from "../utils/placeholder.js";
import StatusBadge from "../components/StatusBadge.jsx";
import TagPill from "../components/TagPill.jsx";
import MarkdownContent from "../components/MarkdownContent.jsx";
import Gallery from "../components/Gallery.jsx";
import ProjectPagination from "../components/ProjectPagination.jsx";

function ProjectDetailScreen() {
  const { slug } = useParams();
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const project = index === -1 ? null : PROJECTS[index];

  useEffect(() => {
    document.title = project ? `${project.title} — jo@projects` : "Project not found — jo@projects";
  }, [project]);

  if (!project) {
    return (
      <section className="wrap" style={{ padding: "96px 0" }}>
        <span className="eyebrow">Not found</span>
        <h1>That project doesn't exist (yet).</h1>
        <p className="lede">No project matches "<code>{slug}</code>". It may have moved, or the link is off.</p>
        <div className="cta-row">
          <Link className="btn primary" to="/archive">Back to the archive</Link>
        </div>
      </section>
    );
  }

  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const cover = svgPlaceholder(project.slug, project.label, 1200, 500);

  return (
    <>
      <header className="detail-head">
        <div className="wrap">
          <Link to="/archive" className="eyebrow">← Back to archive</Link>
          <div className="detail-meta-row" style={{ marginTop: "18px" }}>
            <StatusBadge status={project.status} />
            <span className="date">{project.date}</span>
          </div>
          <h1>{project.title}</h1>
          <p className="lede">{project.summary}</p>
        </div>
      </header>

      <div className="wrap">
        <img className="detail-cover" src={cover} alt={`${project.title} cover graphic`} />

        <div className="detail-layout">
          <div>
            <MarkdownContent markdown={project.content} />
            <Gallery label={project.label} items={project.gallerySeeds} />
          </div>

          <aside className="detail-sidebar">
            <h4>Status</h4>
            <p style={{ marginBottom: "18px" }}><StatusBadge status={project.status} /></p>
            <h4>Tags</h4>
            <div className="tag-row">
              {project.tags.map((tag) => <TagPill key={tag} label={tag} />)}
            </div>
          </aside>
        </div>

        <ProjectPagination prev={prev} next={next} />
      </div>
    </>
  );
}

export default ProjectDetailScreen;
