import { Link } from "react-router-dom";

function ProjectPagination({ prev, next }) {
  return (
    <nav className="project-pagination" aria-label="Project navigation">
      <Link className="paginav prev" to={`/projects/${prev.slug}`}>
        <span className="dir">← Previous</span>
        <span className="ptitle">{prev.title}</span>
      </Link>
      <Link className="paginav next" to={`/projects/${next.slug}`}>
        <span className="dir">Next →</span>
        <span className="ptitle">{next.title}</span>
      </Link>
    </nav>
  );
}

export default ProjectPagination;
