import React from 'react';

const CaseStudies = () => {
  return (
    <div className="case-studies-section">
      {/* Left Content Area */}
      <div className="case-studies-content">
        <h2 className="case-studies-title">
          OUR CASE STUDIES
        </h2>
        
        <p className="case-studies-intro">
          Explore how our robotics solutions have transformed industries — delivering efficiency, innovation, and measurable success.
        </p>
        
        <p className="case-studies-body">
          At Fortune Robotics, every project is a story of innovation meeting impact. From hospitality and retail to events and education, our robots have been deployed to solve real challenges, enhance customer experience, and drive business growth.
        </p>
        
        <p className="case-studies-conclusion">
          Discover the industries we've transformed and the results we've delivered.
        </p>
        
        <button className="case-studies-cta">
          Explore Case Studies
        </button>
      </div>
      
      {/* Right Graphic Area */}
      <div className="case-studies-graphic">
        <div className="robotic-hand">
          {/* This will be styled with CSS to create the robotic hand effect */}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
