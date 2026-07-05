import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

function ProjectsScreen() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <span className="eyebrow">Selected work</span>
          <h1>Projects</h1>
          <p className="lede">
            The projects I'd point someone to first — a mix of finished builds and active
            work. Looking for something smaller or older? Check the{" "}
            <Link to="/archive">full archive</Link>.
          </p>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="grid">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsScreen;
