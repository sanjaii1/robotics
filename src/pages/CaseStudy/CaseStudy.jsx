import React, { useState } from 'react';
import { CaseStudyHeader, CaseStudyGrid } from './Components';
import Pagination from '../Blog/Components/Pagination';

export default function CaseStudy() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <main className="case-study">
      <CaseStudyHeader />
      <CaseStudyGrid />
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </main>
  );
}


