import React from 'react';

const CaseStudyCard = ({ caseStudy }) => {
  const { image, tags, title, description, client, location, alt } = caseStudy;

  return (
    <article className="case-study-card">
      <div className="case-study-card__image">
        <img src={image} alt={alt} />
      </div>
      
      <div className="case-study-card__content">
        <div className="case-study-card__tags">
          {tags.map((tag, index) => (
            <span key={index} className="case-study-card__tag">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="case-study-card__title">{title}</h3>
        
        <p className="case-study-card__description">{description}</p>
        
        <div className="case-study-card__client">
          <span className="case-study-card__client-name">{client}</span>
          <span className="case-study-card__client-location">{location}</span>
        </div>
        
        <button className="case-study-card__read-more">
          Read more &gt;
        </button>
      </div>
    </article>
  );
};

export default CaseStudyCard;
