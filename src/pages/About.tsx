import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold text-[#774EE0] mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About LearnHorizon Public School
      </motion.h1>

      <motion.div 
        className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-[#774EE0]">Our History</h2>
        <p className="text-gray-700 mb-4">
          Founded in 1985, LearnHorizon Public School has been dedicated to providing quality education and holistic development to students for over three decades.
        </p>
      </motion.div>

      <motion.div 
        className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-[#774EE0]">Our Vision</h2>
        <p className="text-gray-700 mb-4">
          To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
        </p>
      </motion.div>

      <motion.div 
        className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-[#774EE0]">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
        </p>
      </motion.div>

      <motion.div 
        className="bg-[#774EE0] text-white p-6 rounded-lg mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Message from the Principal</h2>
        <p className="italic">
          "At LearnHorizon, we believe in nurturing the potential of every student and guiding them towards a successful future."
        </p>
      </motion.div>

      <motion.div 
        className="bg-white shadow-lg rounded-lg overflow-hidden p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-[#774EE0]">Infrastructure and Facilities</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>State-of-the-art science and computer labs</li>
          <li>Spacious and well-equipped classrooms</li>
          <li>Library with a vast collection of books and digital resources</li>
          <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default About;