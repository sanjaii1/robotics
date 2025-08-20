import React from 'react';

const BlogHeader = ({ activeFilter, onFilterChange }) => {
  const filters = [
    'View all',
    'Industry Trends',
    'Robotics in Action',
    'Event Highlights',
    'Technology Insights',
    'Company News'
  ];

  return (
    <section className="blog-header">
      <div className="blog-header__content">
        <div className="blog-header__breadcrumb">
          <span>Blog</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <h1 className="blog-header__title">News and insights</h1>
        
        <p className="blog-header__description">
          Learn about cryptocurrency, NFTs, and blockchain, discover our latest product updates, 
          partnership announcements, user stories, and more.
        </p>
        
        <div className="blog-header__filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`blog-header__filter-btn ${
                activeFilter === filter ? 'blog-header__filter-btn--active' : ''
              }`}
              onClick={() => onFilterChange(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
