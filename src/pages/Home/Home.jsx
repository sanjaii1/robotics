import React from 'react';
import VideoBanner from './Components/VideoBanner';
import WhoWeAre from './Components/WhoWeAre';
import ProductsShowcase from './Components/ProductsShowcase';
import RobotRentals from './Components/RobotRentals';
import ClientTestimonials from './Components/ClientTestimonials';
import NewsletterBanner from './Components/NewsletterBanner';

export default function Home() {
  return (
    <main>
      <VideoBanner />
      <WhoWeAre />
      <ProductsShowcase />
      <RobotRentals />
      <ClientTestimonials />
      <NewsletterBanner />
    </main>
  );
}


