import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button 
        className="pagination__arrow pagination__arrow--prev"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <div className="pagination__pages">
        {pages.map((page) => (
          <button
            key={page}
            className={`pagination__page ${
              currentPage === page ? 'pagination__page--active' : ''
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
      
      <button 
        className="pagination__arrow pagination__arrow--next"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
