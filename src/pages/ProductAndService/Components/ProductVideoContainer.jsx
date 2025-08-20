import React from 'react';

const ProductVideoContainer = () => {
  console.log('ProductVideoContainer rendered');
  
  return (
    <div className="product-video-container">
      {/* Video Background */}
      <video 
        className="video-background"
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="../../../assets/Video/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay Content */}
      <div className="video-overlay">
        <div className="content-wrapper">
          <h1 className="main-title">
            EMPOWERING BUSINESSES WITH
            <span className="highlight"> CUTTING-EDGE ROBOTICS</span>
          </h1>
          <p className="subtitle">
            From event attractions to industrial automation—Fortune Robotics delivers innovative robotic solutions for every need.
          </p>

        </div>
      </div>
      
      {/* Sparkle Effects */}
      <div className="sparkle sparkle-1">✨</div>
      <div className="sparkle sparkle-2">✨</div>
      <div className="sparkle sparkle-3">✨</div>
      <div className="sparkle sparkle-4">✨</div>
    </div>
  );
};

export default ProductVideoContainer;
