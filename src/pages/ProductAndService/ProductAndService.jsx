import React from 'react';
import ProductVideoContainer from './Components/ProductVideoContainer.jsx';
import ProductsGrid from './Components/ProductsGrid.jsx';
import RobotRentals from './Components/RobotRentals.jsx';
import CaseStudies from './Components/CaseStudies.jsx';

export default function ProductAndService() {
  return (
    <main>
      <ProductVideoContainer />
      <ProductsGrid />
      <RobotRentals />
      <CaseStudies />
    </main>
  );
}


