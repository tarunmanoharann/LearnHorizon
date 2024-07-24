import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(images.map(img => img.category))];

  const filteredImages = filter === 'All'
    ? images
    : images.filter(img => img.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-[#774EE0] mb-6"
      >
        SpringDale Gallery
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4">Filter by Category:</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full ${
                filter === category
                  ? 'bg-[#774EE0] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredImages.map(image => (
          <motion.div
            key={image.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" />
            <div className="p-4">
              <p className="text-lg font-semibold text-[#774EE0]">{image.alt}</p>
              <p className="text-gray-600">{image.category}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredImages.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-700 mt-8"
        >
          No images found for this category.
        </motion.p>
      )}
    </motion.div>
  );
};

export default Gallery;