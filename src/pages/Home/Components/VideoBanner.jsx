import React from 'react';
import HeroVideo from '../../../assets/Video/hero.mp4';

const VideoBanner = () => {
  return (
    <section className="video-banner">
      <div className="video-banner__background">
        <video
          className="video-banner__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={HeroVideo}
        >
          <source src={HeroVideo} type="video/mp4" />
        </video>
        <div className="video-banner__overlay"></div>
      </div>
      
      <div className="video-banner__content">
        <div className="video-banner__text">
          <h1 className="video-banner__heading">
            <span className="video-banner__heading-line">SHAPING THE FUTURE WITH</span>
            <span className="video-banner__heading-line video-banner__heading-line--emphasis">INTELLIGENT MACHINES</span>
          </h1>
          
          <p className="video-banner__subheading">
            INNOVATIVE SERVICE & INDUSTRIAL ROBOTS FOR DELIVERY, ASSISTANCE, AND AUTOMATION.
          </p>
        </div>
        
        <div className="video-banner__actions">
          <button className="video-banner__btn video-banner__btn--outline">
            Request a Quote
          </button>
          <button className="video-banner__btn video-banner__btn--primary">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;
