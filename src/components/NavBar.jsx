import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleToggle() {
    setMenuOpen((open) => !open);
  }

  function linkClass({ isActive }) {
    return isActive ? "active" : undefined;
  }

  return (
    <nav className="site-nav">
      <div className="wrap">
        <Link to="/" className="brand">
          jo<span>@</span>projects
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={handleToggle}
        >
          Menu
        </button>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          <li><NavLink to="/" className={linkClass} end>Home</NavLink></li>
          <li><NavLink to="/projects" className={linkClass}>Projects</NavLink></li>
          <li><NavLink to="/archive" className={linkClass}>Archive</NavLink></li>
          <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
