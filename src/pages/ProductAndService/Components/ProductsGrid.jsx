import React from 'react';
import ProductCard from './ProductCard.jsx';

const ProductsGrid = () => {
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      categories: ["INDUSTRIAL", "MANUFACTURING", "AUTOMATION"],
      title: "Industrial Robot Arm",
      description: "Advanced robotic arm designed for precision manufacturing and assembly line automation.",
      highlights: ["High precision", "24/7 operation", "Easy integration"],
      price: "15,000 AED",
      buttonText: "Buy Now"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      categories: ["HEALTHCARE", "OFFICES", "RETAIL SHOWROOMS"],
      title: "Temi Robot",
      description: "This innovative trash disposal solution is designed to minimize waste in urban areas, promoting recycling and reducing 1.",
      highlights: ["Reliable navigation", "Easy branding", "High demand across UAE"],
      price: "4200 AED",
      buttonText: "Buy Now"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      categories: ["EVENTS", "ENTERTAINMENT", "INTERACTIVE"],
      title: "Event Robot",
      description: "Interactive robot designed to engage and entertain guests at events and exhibitions.",
      highlights: ["Interactive displays", "Customizable content", "Mobile platform"],
      price: "8,500 AED",
      buttonText: "Buy Now"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      categories: ["LOGISTICS", "WAREHOUSE", "TRANSPORT"],
      title: "Logistics Robot",
      description: "Autonomous mobile robot for warehouse management and material handling operations.",
      highlights: ["Autonomous navigation", "High payload capacity", "Safety sensors"],
      price: "12,000 AED",
      buttonText: "Buy Now"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      categories: ["EDUCATION", "RESEARCH", "DEVELOPMENT"],
      title: "Educational Robot",
      description: "Programmable robot kit designed for educational purposes and robotics learning.",
      highlights: ["Easy programming", "Modular design", "Comprehensive curriculum"],
      price: "3,200 AED",
      buttonText: "Buy Now"
    }
  ];

  return (
    <div className="products-section">
      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button className="nav-button primary">Our Products</button>
        <button className="nav-button secondary">Request a Quote</button>
      </div>
      
      {/* Products Grid */}
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            categories={product.categories}
            title={product.title}
            description={product.description}
            highlights={product.highlights}
            price={product.price}
            buttonText={product.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
