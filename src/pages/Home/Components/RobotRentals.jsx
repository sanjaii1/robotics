import React from 'react';

const RobotRentals = () => {
  return (
    <section className="robot-rentals">
      <div className="robot-rentals__header">
        <h2 className="robot-rentals__title">
          FLEXIBLE ROBOT RENTALS FOR EVENTS, BUSINESSES & MORE
        </h2>
        <p className="robot-rentals__subtitle">
          From smart assistants to delivery bots, Fortune Robotics offers UAE-wide rental services with local support and setup.
        </p>
      </div>

      <div className="robot-rentals__cards">
        <div className="robot-rentals__card">
          <div className="robot-rentals__card-image">
            <img 
              src="https://images.unsplash.com/photo-1564325724739-bae0bd08762a?q=80&w=1200&auto=format&fit=crop" 
              alt="YOUIBOT L-Series (AMR)" 
            />
            <div className="robot-rentals__card-tags">
              <span className="robot-rentals__tag">WAREHOUSES</span>
              <span className="robot-rentals__tag">FACTORIES</span>
              <span className="robot-rentals__tag">LOGISTICS HUBS</span>
            </div>
          </div>
          <div className="robot-rentals__card-content">
            <h3 className="robot-rentals__card-title">YOUIBOT L-Series (AMR)</h3>
            <p className="robot-rentals__card-description">
              The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sophisticated autonomous mobile robot system.
            </p>
            <div className="robot-rentals__card-highlights">
              <h4>Key Highlights:</h4>
              <ul>
                <li>Reliable navigation</li>
                <li>Easy branding</li>
                <li>High demand across UAE</li>
              </ul>
            </div>
            <button className="robot-rentals__card-btn">
              Rent Now
            </button>
          </div>
        </div>

        <div className="robot-rentals__card">
          <div className="robot-rentals__card-image">
            <img 
              src="https://images.unsplash.com/photo-1581091014534-8987c1d3b36e?q=80&w=1200&auto=format&fit=crop" 
              alt="Amy Deliverer" 
            />
            <div className="robot-rentals__card-tags">
              <span className="robot-rentals__tag">CAFES</span>
              <span className="robot-rentals__tag">CLINICS</span>
              <span className="robot-rentals__tag">CO-WORKING SPACES</span>
            </div>
          </div>
          <div className="robot-rentals__card-content">
            <h3 className="robot-rentals__card-title">Amy Deliverer</h3>
            <p className="robot-rentals__card-description">
              This innovative delivery solution is designed to minimize wait times in service areas, promoting efficiency and reducing customer frustration.
            </p>
            <div className="robot-rentals__card-highlights">
              <h4>Key Highlights:</h4>
              <ul>
                <li>Reliable navigation</li>
                <li>Easy branding</li>
                <li>High demand across UAE</li>
              </ul>
            </div>
            <button className="robot-rentals__card-btn">
              Rent Now
            </button>
          </div>
        </div>

        <div className="robot-rentals__card">
          <div className="robot-rentals__card-image">
            <img 
              src="https://images.unsplash.com/photo-1569443693539-175ea9f007e8?q=80&w=1200&auto=format&fit=crop" 
              alt="D2 Delivery Robot" 
            />
            <div className="robot-rentals__card-tags">
              <span className="robot-rentals__tag">RESTAURANTS</span>
              <span className="robot-rentals__tag">MALLS</span>
              <span className="robot-rentals__tag">HOSPITALS</span>
            </div>
          </div>
          <div className="robot-rentals__card-content">
            <h3 className="robot-rentals__card-title">D2 Delivery Robot</h3>
            <p className="robot-rentals__card-description">
              The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sophisticated delivery system.
            </p>
            <div className="robot-rentals__card-highlights">
              <h4>Key Highlights:</h4>
              <ul>
                <li>Reliable navigation</li>
                <li>Easy branding</li>
                <li>High demand across UAE</li>
              </ul>
            </div>
            <button className="robot-rentals__card-btn">
              Rent Now
            </button>
          </div>
        </div>
      </div>

      <div className="robot-rentals__footer">
        <button className="robot-rentals__btn robot-rentals__btn--outline">
          View All
        </button>
      </div>
    </section>
  );
};

export default RobotRentals;
