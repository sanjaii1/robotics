import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-top-line"></div>
      <nav className="nav-container">
        <div className="logo-section">
          <div className="logo">
            <div className="logo-symbol">
              <div className="logo-line"></div>
              <div className="logo-line"></div>
            </div>
            <div className="company-name">
              <span className="fortune">FORTUNE</span>
              <span className="robotics">ROBOTICS</span>
            </div>
          </div>
        </div>
        
        <div className="nav-links">
          <NavLink to="/" end className="nav-link">
            HOME
          </NavLink>
          <NavLink to="/product-service" className="nav-link">
            PRODUCTS & SERVICES
          </NavLink>
          <NavLink to="/case-study" className="nav-link">
            CASE STUDIES
          </NavLink>
          <NavLink to="/research" className="nav-link">
            RESEARCH
          </NavLink>
          <NavLink to="/blog" className="nav-link">
            BLOG
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            CONTACT US
          </NavLink>
        </div>
      </nav>
    </header>
  );
}


