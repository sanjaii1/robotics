import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/product-service">Product & Service</NavLink>
        <NavLink to="/case-study">Case Study</NavLink>
        <NavLink to="/research">Research</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/">Contact</NavLink>
      </nav>
    </header>
  );
}


