import React from 'react';

const ClientTestimonials = () => {
  return (
    <section className="client-testimonials">
      <div className="client-testimonials__header">
        <h2 className="client-testimonials__title">
          WHAT OUR CLIENTS SAY
        </h2>
        <p className="client-testimonials__subtitle">
          Real stories from businesses that transformed their operations with robotics.
        </p>
      </div>

      <div className="client-testimonials__cards">
        <div className="client-testimonials__card">
          <div className="client-testimonials__card-image">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec0?q=80&w=1200&auto=format&fit=crop" 
              alt="Dr. Huda Karim" 
            />
          </div>
          <div className="client-testimonials__card-content">
            <div className="client-testimonials__card-header">
              <div className="client-testimonials__card-info">
                <h3 className="client-testimonials__card-name">Dr. Huda Karim</h3>
                <p className="client-testimonials__card-company">Al Noor Hospital, Abu Dhabi</p>
              </div>
              <div className="client-testimonials__card-rating">
                <span className="client-testimonials__star">★</span>
                <span className="client-testimonials__rating-number">5.0</span>
              </div>
            </div>
            <blockquote className="client-testimonials__card-quote">
              "Temi Robot has completely changed the way we manage patient interaction in our lobby. Visitors are impressed, and our team saves time."
            </blockquote>
          </div>
        </div>

        <div className="client-testimonials__card">
          <div className="client-testimonials__card-image">
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop" 
              alt="Nadeem Ali" 
            />
          </div>
          <div className="client-testimonials__card-content">
            <div className="client-testimonials__card-header">
              <div className="client-testimonials__card-info">
                <h3 className="client-testimonials__card-name">Nadeem Ali, Event Manager</h3>
                <p className="client-testimonials__card-company">FusionX Events</p>
              </div>
              <div className="client-testimonials__card-rating">
                <span className="client-testimonials__star">★</span>
                <span className="client-testimonials__rating-number">4.8</span>
              </div>
            </div>
            <blockquote className="client-testimonials__card-quote">
              "We rented Alice Pro for a corporate event in Dubai — it was a huge hit! Guests loved the interactive greetings and photo ops."
            </blockquote>
          </div>
        </div>

        <div className="client-testimonials__card">
          <div className="client-testimonials__card-image">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop" 
              alt="Sunil Mehra" 
            />
          </div>
          <div className="client-testimonials__card-content">
            <div className="client-testimonials__card-header">
              <div className="client-testimonials__card-info">
                <h3 className="client-testimonials__card-name">Sunil Mehra, Operations Lead</h3>
                <p className="client-testimonials__card-company">Emirates Logistic Tech</p>
              </div>
              <div className="client-testimonials__card-rating">
                <span className="client-testimonials__star">★</span>
                <span className="client-testimonials__rating-number">4.9</span>
              </div>
            </div>
            <blockquote className="client-testimonials__card-quote">
              "YOUIBOT AMRs helped us automate transport inside our facility. Integration was smooth and the local support was top-notch."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
