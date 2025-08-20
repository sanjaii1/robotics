import React, { useState } from 'react';
import BlogHeader from './Components/BlogHeader';
import BlogGrid from './Components/BlogGrid';
import Pagination from './Components/Pagination';

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState('View all');

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <main className="blog-page">
      <BlogHeader 
        activeFilter={activeFilter} 
        onFilterChange={handleFilterChange} 
      />
      <BlogGrid 
        activeFilter={activeFilter}
        currentPage={currentPage}
      />
      <Pagination 
        currentPage={currentPage}
        totalPages={5}
        onPageChange={handlePageChange}
      />
    </main>
  );
}


