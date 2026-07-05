import { Link } from "react-router-dom";
import { svgPlaceholder } from "../utils/placeholder.js";
import StatusBadge from "./StatusBadge.jsx";
import TagPill from "./TagPill.jsx";

function ProjectCard({ project }) {
  const cover = svgPlaceholder(project.slug, project.label);

  return (
    <Link className="card" to={`/projects/${project.slug}`}>
      <img className="cover" src={cover} alt={`${project.title} cover graphic`} loading="lazy" />
      <div className="card-body">
        <div className="card-top-row">
          <h3>{project.title}</h3>
        </div>
        <StatusBadge status={project.status} />
        <p className="summary">{project.summary}</p>
        <div className="tag-row">
          {project.tags.slice(0, 3).map((tag) => (
            <TagPill key={tag} label={tag} />
          ))}
        </div>
        <span className="card-meta">{project.date}</span>
      </div>
    </Link>
  );
}

export default ProjectCard;
