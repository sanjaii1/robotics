import React from 'react';
import BlogCard from './BlogCard';

const BlogGrid = ({ activeFilter, currentPage }) => {
  // Sample blog data - in a real app this would come from an API
  const blogPosts = [
    {
      id: 1,
      image: 'https://picsum.photos/400/250?random=1',
      category: 'Industry Trends',
      date: 'Aug 07, 2025',
      title: 'A beginner\'s guide to blockchain for engineers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      alt: 'Hands assembling robotic arm component'
    },
    {
      id: 2,
      image: 'https://picsum.photos/400/250?random=2',
      category: 'Industry Trends',
      date: 'Aug 07, 2025',
      title: 'A beginner\'s guide to blockchain for engineers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      alt: 'White humanoid robot with glowing blue eyes holding tablet'
    },
    {
      id: 3,
      image: 'https://picsum.photos/400/250?random=3',
      category: 'Industry Trends',
      date: 'Aug 07, 2025',
      title: 'A beginner\'s guide to blockchain for engineers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      alt: 'Two men in modern office, one in wheelchair with prosthetic arm'
    },
    {
      id: 4,
      image: 'https://picsum.photos/400/250?random=4',
      category: 'Technology Advancements',
      date: 'Sep 15, 2025',
      title: 'Exploring the future of quantum computing',
      description: 'Quantum computing promises to revolutionize the way we process information, offering unprecedented computational power.',
      alt: 'Older man with white beard and glasses in lab coat interacting with robotic arm'
    },
    {
      id: 5,
      image: 'https://picsum.photos/400/250?random=5',
      category: 'Market Analysis',
      date: 'Oct 12, 2025',
      title: 'The rise of virtual reality in education',
      description: 'Virtual reality is transforming the educational landscape, providing immersive learning experiences.',
      alt: 'Young woman and older man in lab coats looking at tablet with robotic arm visible'
    },
    {
      id: 6,
      image: 'https://picsum.photos/400/250?random=6',
      category: 'Industry Trends',
      date: 'Aug 07, 2025',
      title: 'A beginner\'s guide to blockchain for engineers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      alt: 'Young woman smiling as robotic arm presents red flower'
    }
  ];

  // Filter posts based on active filter
  const filteredPosts = activeFilter === 'View all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

  return (
    <section className="blog-grid">
      <div className="blog-grid__container">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogGrid;
