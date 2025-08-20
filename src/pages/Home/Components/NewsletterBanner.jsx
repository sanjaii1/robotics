import React from 'react';

const NewsletterBanner = () => {
  return (
    <section className="newsletter-banner">
      <div className="newsletter-banner__top">
        {/* White top section - 30% height */}
      </div>
      
      <div className="newsletter-banner__bottom">
        <div className="newsletter-banner__content">
          <div className="newsletter-banner__left">
            <h2 className="newsletter-banner__heading">
              JOIN 5,000+ ROBOTICS PROFESSIONALS.
            </h2>
            <p className="newsletter-banner__subheading">
              GET TRENDS, NEWS & OFFERS.
            </p>
            
            <form className="newsletter-banner__form">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="newsletter-banner__input"
                required
              />
              <button type="submit" className="newsletter-banner__button">
                SUBSCRIBE
              </button>
            </form>
          </div>
          
          <div className="newsletter-banner__right">
            <div className="newsletter-banner__figure">
              {/* Futuristic figure representation */}
              <div className="newsletter-banner__figure-head"></div>
              <div className="newsletter-banner__figure-body"></div>
              <div className="newsletter-banner__figure-arms"></div>
              <div className="newsletter-banner__figure-legs"></div>
            </div>
            <div className="newsletter-banner__background-pattern"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBanner;
