import React from 'react';
import ProductCard from './ProductCard.jsx';

const RobotRentals = () => {
  const rentalProducts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      categories: ["EVENTS", "ENTERTAINMENT", "INTERACTIVE"],
      title: "Smart Assistant Robot",
      description: "Advanced AI-powered assistant robot perfect for events, exhibitions, and customer service applications.",
      highlights: ["Voice interaction", "Multi-language support", "Customizable responses"],
      price: "Rent Now",
      buttonText: "Rent Now"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      categories: ["HOSPITALITY", "RESTAURANTS", "HOTELS"],
      title: "Service Robot",
      description: "Professional service robot designed for hospitality and restaurant environments.",
      highlights: ["Food delivery", "Table service", "Customer engagement"],
      price: "Rent Now",
      buttonText: "Rent Now"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      categories: ["RESTAURANTS", "MALLS", "HOSPITALS"],
      title: "D2 Delivery Robot",
      description: "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a s",
      highlights: ["Sleek design", "Reliable navigation", "Easy branding", "High demand across UAE's hospitality sector"],
      price: "Rent Now",
      buttonText: "Rent Now"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      categories: ["WAREHOUSE", "LOGISTICS", "MANUFACTURING"],
      title: "Industrial Robot",
      description: "Heavy-duty industrial robot for manufacturing and warehouse operations.",
      highlights: ["High payload capacity", "Precision handling", "Safety features"],
      price: "Rent Now",
      buttonText: "Rent Now"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      categories: ["EDUCATION", "RESEARCH", "DEMONSTRATIONS"],
      title: "Educational Robot",
      description: "Interactive robot perfect for educational institutions and research facilities.",
      highlights: ["Programming interface", "Modular design", "Learning resources"],
      price: "Rent Now",
      buttonText: "Rent Now"
    }
  ];

  return (
    <div className="robot-rentals-section">
      {/* Section Header */}
      <div className="rentals-header">
        <h2 className="rentals-title">
          FLEXIBLE ROBOT RENTALS FOR EVENTS, BUSINESSES & MORE
        </h2>
        <p className="rentals-subtitle">
          From smart assistants to delivery bots, Fortune Robotics offers UAE-wide rental services with local support and setup.
        </p>
      </div>
      
      {/* Rental Products Grid */}
      <div className="rentals-grid">
        {rentalProducts.map((product) => (
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

export default RobotRentals;
