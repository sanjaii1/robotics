import { NavLink } from "react-router-dom";
import { useState } from "react";
import ContactModal from "./ContactModal.jsx";

export default function Header() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <header className="header">
      <div className="header-top-line"></div>
      <nav className="nav-container">
        <div className="logo-section">
          <div className="logo">

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
          <a href="#" className="nav-link" onClick={handleContactClick}>
            CONTACT US
          </a>
        </div>
      </nav>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
      />
    </header>
  );
}


