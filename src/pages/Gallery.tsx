// Gallery.tsx
import React, { useState } from 'react';

interface Image {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const images: Image[] = [
  { id: 1, src: '/images/classroom.jpg', alt: 'Classroom', category: 'Academic' },
  { id: 2, src: '/images/science-fair.jpg', alt: 'Science Fair', category: 'Events' },
  { id: 3, src: '/images/sports-day.jpg', alt: 'Sports Day', category: 'Sports' },
  { id: 4, src: '/images/art-exhibition.jpg', alt: 'Art Exhibition', category: 'Arts' },
  { id: 5, src: '/images/graduation.jpg', alt: 'Graduation Ceremony', category: 'Events' },
  { id: 6, src: '/images/library.jpg', alt: 'School Library', category: 'Academic' },
  // Add more images as needed
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(images.map(img => img.category))];

  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-[#774EE0] mb-6">LearnHorizon Gallery</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Filter by Category:</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full ${
                filter === category 
                  ? 'bg-[#774EE0] text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map(image => (
          <div key={image.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" />
            <div className="p-4">
              <p className="text-lg font-semibold text-[#774EE0]">{image.alt}</p>
              <p className="text-gray-600">{image.category}</p>
            </div>
          </div>
        ))}
      </div>
      
      {filteredImages.length === 0 && (
        <p className="text-center text-gray-700 mt-8">No images found for this category.</p>
      )}
    </div>
  );
};

export default Gallery;