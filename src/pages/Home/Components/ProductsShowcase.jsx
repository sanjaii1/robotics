import React from 'react';

const ProductsShowcase = () => {
  return (
    <section className="products-showcase">
      <div className="products-showcase__header">
        <button className="products-showcase__btn products-showcase__btn--primary">
          Our Products
        </button>
        <button className="products-showcase__btn products-showcase__btn--outline">
          Request a Quote
        </button>
      </div>

      <div className="products-showcase__cards">
        <div className="products-showcase__card">
          <div className="products-showcase__card-image">
            <img 
              src="https://images.unsplash.com/photo-1569443693539-175ea9f007e8?q=80&w=1200&auto=format&fit=crop" 
              alt="D2 Delivery Robot" 
            />
            <div className="products-showcase__card-tags">
              <span className="products-showcase__tag">RESTAURANTS</span>
              <span className="products-showcase__tag">MALLS</span>
              <span className="products-showcase__tag">HOSPITALS</span>
            </div>
          </div>
          <div className="products-showcase__card-content">
            <h3 className="products-showcase__card-title">D2 Delivery Robot</h3>
            <p className="products-showcase__card-description">
              The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sophisticated delivery system designed for modern urban environments.
            </p>
            <div className="products-showcase__card-highlights">
              <h4>Key Highlights:</h4>
              <ul>
                <li>Reliable navigation</li>
                <li>Easy branding</li>
                <li>High demand across UAE</li>
              </ul>
            </div>
            <button className="products-showcase__card-btn">
              4200 AED | Buy Now
            </button>
          </div>
        </div>

        <div className="products-showcase__card">
          <div className="products-showcase__card-image">
            <img 
              src="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200&auto=format&fit=crop" 
              alt="Temi Robot" 
            />
            <div className="products-showcase__card-tags">
              <span className="products-showcase__tag">HEALTHCARE</span>
              <span className="products-showcase__tag">OFFICES</span>
              <span className="products-showcase__tag">RETAIL SHOWROOMS</span>
            </div>
          </div>
          <div className="products-showcase__card-content">
            <h3 className="products-showcase__card-title">Temi Robot</h3>
            <p className="products-showcase__card-description">
              This innovative trash disposal solution is designed to minimize waste in urban areas, promoting recycling and reducing landfill impact.
            </p>
            <div className="products-showcase__card-highlights">
              <h4>Key Highlights:</h4>
              <ul>
                <li>Reliable navigation</li>
                <li>Easy branding</li>
                <li>High demand across UAE</li>
              </ul>
            </div>
            <button className="products-showcase__card-btn">
              4200 AED | Buy Now
            </button>
          </div>
        </div>

        <div className="products-showcase__card">
          <div className="products-showcase__card-image">
            <img 
              src="https://images.unsplash.com/photo-1581091014534-8987c1d3b36e?q=80&w=1200&auto=format&fit=crop" 
              alt="Alice Pro" 
            />
            <div className="products-showcase__card-tags">
              <span className="products-showcase__tag">CORPORATE RECEPTIONS</span>
              <span className="products-showcase__tag">EVENTS</span>
              <span className="products-showcase__tag">EXHIBITIONS</span>
            </div>
          </div>
          <div className="products-showcase__card-content">
            <h3 className="products-showcase__card-title">Alice Pro</h3>
            <p className="products-showcase__card-description">
              Equipped with state-of-the-art navigation technology, this drone ensures timely delivery in congested areas, enhancing customer satisfaction.
            </p>
            <div className="products-showcase__card-highlights">
              <h4>Key Highlights:</h4>
              <ul>
                <li>Reliable navigation</li>
                <li>Easy branding</li>
                <li>High demand across UAE</li>
              </ul>
            </div>
            <button className="products-showcase__card-btn">
              4200 AED | Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="products-showcase__footer">
        <button className="products-showcase__btn products-showcase__btn--outline">
          View All
        </button>
      </div>
    </section>
  );
};

export default ProductsShowcase;
