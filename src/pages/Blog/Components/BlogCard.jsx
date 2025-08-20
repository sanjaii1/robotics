import React from 'react';

const BlogCard = ({ post }) => {
  const { image, category, date, title, description, alt } = post;

  return (
    <article className="blog-card">
      <div className="blog-card__image">
        <img src={image} alt={alt} />
      </div>
      
      <div className="blog-card__content">
        <div className="blog-card__meta">
          <span className="blog-card__category">{category}</span>
          <span className="blog-card__date">{date}</span>
        </div>
        
        <h3 className="blog-card__title">{title}</h3>
        
        <p className="blog-card__description">{description}</p>
        
        <button className="blog-card__read-more">
          Read more &gt;
        </button>
      </div>
    </article>
  );
};

export default BlogCard;
