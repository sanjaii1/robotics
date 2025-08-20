import React from 'react';

const ProductCard = ({ 
  image, 
  categories, 
  title, 
  description, 
  highlights, 
  price, 
  buttonText 
}) => {
  const isRental = price === "Rent Now";
  
  return (
    <div className="product-card">
      {/* Category Tags */}
      <div className="category-tags">
        {categories.map((category, index) => (
          <span key={index} className="category-tag">
            {category}
          </span>
        ))}
      </div>
      
      {/* Product Image */}
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      
      {/* Product Title */}
      <h3 className="product-title">{title}</h3>
      
      {/* Product Description */}
      <p className="product-description">{description}</p>
      
      {/* Key Highlights */}
      <div className="key-highlights">
        <h4 className="highlights-title">Key Highlights:</h4>
        <ul className="highlights-list">
          {highlights.map((highlight, index) => (
            <li key={index} className="highlight-item">
              {highlight}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Call to Action Button */}
      <button className={`cta-button ${isRental ? 'rental' : ''}`}>
        {isRental ? buttonText : `${price} | ${buttonText}`}
      </button>
    </div>
  );
};

export default ProductCard;
