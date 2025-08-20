import React from 'react';
import CaseStudyCard from './CaseStudyCard';

const CaseStudyGrid = () => {
  // Sample case study data based on the image
  const caseStudies = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
      tags: ['Hospitality', 'AI Robotics', 'Smart Navigation'],
      title: 'Advanced Navi Transforming Guest Experience',
      description: 'How Fortune Robotics helped a 5-star hotel improve guest satisfaction by 32% while cutting operational costs by 40%.',
      client: 'LuxuryStay Hotels',
      location: 'Dubai, UAE',
      alt: 'White drone with glowing pink lights flying in blue sky'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&random=1',
      tags: ['Culinary Arts', 'Augmented Reality'],
      title: 'Innovative Dining Solutions Enhancing Customer Engagement',
      description: 'Discover how AR technology transformed the dining experience, resulting in a 25% increase in customer engagement.',
      client: 'GourmetBites',
      location: 'Paris, France',
      alt: 'Person in futuristic robotic suit in dining setting'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&random=2',
      tags: ['Retail', 'Mobile Payments', 'User Experience'],
      title: 'Seamless Checkout Innovations Revolutionizing Retail',
      description: 'Learn how mobile payment integration streamlined transactions and reduced wait times by 50%, enhancing customer retention.',
      client: 'ShopSmart',
      location: 'London, UK',
      alt: 'Two men at table with laptop, one in wheelchair'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&random=3',
      tags: ['Wellness', 'AI Health Solutions', 'Personalized Services'],
      title: 'Personalized Wellness Programs Elevating Customer Satisfaction',
      description: 'Explore how AI-driven wellness assessments improved customer satisfaction scores by 30% and increased repeat visits.',
      client: 'Rejuvenate Spa',
      location: 'Bali, Indonesia',
      alt: 'Metallic humanoid robot in crouching pose'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&random=4',
      tags: ['Food and Beverage', 'Predictive Analytics'],
      title: 'Smart Inventory Management Optimizing Operations',
      description: 'Uncover how predictive analytics reduced inventory costs by 25% while ensuring product availability for customers.',
      client: 'FreshGrocer',
      location: 'New York, USA',
      alt: 'Man with glasses and green jacket looking at tablet in warehouse'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&random=5',
      tags: ['Retail', 'Mobile Payments', 'User Experience'],
      title: 'Supply Chain Management',
      description: 'Learn how mobile payment integration streamlined transactions and reduced wait times by 50%, enhancing customer retention.',
      client: 'ShopSmart',
      location: 'London, UK',
      alt: 'Close-up of humanoid robot head with friendly facial structure'
    }
  ];

  return (
    <section className="case-study-grid">
      <div className="case-study-grid__container">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudyGrid;
