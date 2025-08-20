import React from 'react';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__column">
          <div className="footer__logo">
            <div className="footer__logo-icon">חף</div>
            <div className="footer__logo-text">
              <span className="footer__logo-fortune">FORTUNE</span>
              <span className="footer__logo-robotics">ROBOTICS</span>
            </div>
          </div>
          <p className="footer__description">
            At Fortune Robotics, we're redefining automation across hospitality, healthcare, logistics, and corporate industries.
          </p>
        </div>

        <div className="footer__column">
          <nav className="footer__nav">
            <a href="/products" className="footer__nav-link">Our Products</a>
            <a href="/research" className="footer__nav-link">Research</a>
            <a href="/blog" className="footer__nav-link">Blog</a>
            <a href="/contact" className="footer__nav-link">Contact us</a>
          </nav>
        </div>

        <div className="footer__column">
          <div className="footer__contact">
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📞</span>
              <span>+91 12345 6789</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📍</span>
              <span>3517 W. Gray St. Utica, Pennsylvania 57867</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📍</span>
              <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
            </div>
          </div>
        </div>

        <div className="footer__column">
          <div className="footer__contact-item">
            <span className="footer__contact-icon">✉️</span>
            <span>robo@gmail.com</span>
          </div>
          <h4 className="footer__social-heading">Follow us</h4>
          <div className="footer__social-icons">
            <a href="#" className="footer__social-icon">f</a>
            <a href="#" className="footer__social-icon">📷</a>
            <a href="#" className="footer__social-icon">🐦</a>
            <a href="#" className="footer__social-icon">in</a>
          </div>
        </div>
      </div>

      <div className="footer__divider"></div>
      
      <div className="footer__copyright">
        <small>Copyright ® 2025 Lunar Enterprises All rights Reserved</small>
      </div>
    </footer>
  );
}


