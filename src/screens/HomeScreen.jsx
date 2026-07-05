import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

function HomeScreen() {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <header className="hero">
        <div className="wrap">
          <span className="eyebrow">CS / EE — Embedded systems, homelab, game dev</span>
          <h1>Systems, from silicon to server rack.</h1>
          <p className="lede">
            I build things at every layer — firmware on bare microcontrollers, self-hosted
            services on a homelab NAS, and 2D games in Godot. This site tracks what's
            shipped, what's in progress, and what's still on the roadmap.
          </p>
          <div className="cta-row">
            <Link to="/projects" className="btn primary">View projects</Link>
            <Link to="/archive" className="btn">Browse the archive</Link>
          </div>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="section-head">
            <h2>Currently building</h2>
            <Link to="/archive" className="see-all">See all →</Link>
          </div>
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

export default HomeScreen;
