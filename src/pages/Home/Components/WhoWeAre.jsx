import React from 'react';

const WhoWeAre = () => {
  return (
    <section className="who-we-are" aria-labelledby="who-we-are-title">
      <div className="who-we-are__intro">
        <h2 id="who-we-are-title" className="who-we-are__title">WHO WE ARE</h2>
        <p className="who-we-are__subtitle">
          Empowering businesses in the UAE and beyond with intelligent service & industrial robots designed for the future.
        </p>
      </div>

      <div className="who-we-are__content">
        <div className="who-we-are__text">
          <p>
            At Fortune Robotics, we’re redefining automation across hospitality, healthcare, logistics, and corporate
            industries. Headquartered in Dubai, our solutions combine global innovation with local support — offering both
            purchase and rental options tailored to business needs.
          </p>
          <p>
            To revolutionize service and industrial sectors by making advanced robotics accessible, adaptable, and
            efficient — empowering businesses to thrive in the age of automation.
          </p>
          <p>
            To become the Middle East’s most trusted robotics partner by leading in innovation, research, and
            customer-focused solutions.
          </p>
        </div>

        <div className="who-we-are__gallery">
          <img className="who-we-are__img who-we-are__img--a" src="https://images.unsplash.com/photo-1581091014534-8987c1d3b36e?q=80&w=1200&auto=format&fit=crop" alt="Humanoid robot" />
          <img className="who-we-are__img who-we-are__img--b" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop" alt="AI robot" />
          <img className="who-we-are__img who-we-are__img--c" src="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200&auto=format&fit=crop" alt="Service bot" />
          <img className="who-we-are__img who-we-are__img--d" src="https://images.unsplash.com/photo-1569443693539-175ea9f007e8?q=80&w=1200&auto=format&fit=crop" alt="Delivery robot" />
          <img className="who-we-are__img who-we-are__img--e" src="https://images.unsplash.com/photo-1564325724739-bae0bd08762a?q=80&w=1200&auto=format&fit=crop" alt="Cleaning robot" />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;


