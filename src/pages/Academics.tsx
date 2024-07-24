import React from 'react';
import { motion } from 'framer-motion';

const Academics: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold text-[#774EE0] mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Academics at Springdale Public School
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <motion.div 
          className="bg-white shadow-lg rounded-lg p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-[#774EE0] mb-4">Primary Education</h2>
          <p className="text-gray-700 mb-4">
            Our primary education program focuses on building a strong foundation in core subjects.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>English Language Arts</li>
            <li>Mathematics</li>
            <li>Science</li>
            <li>Social Studies</li>
            <li>Art and Music</li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="bg-white shadow-lg rounded-lg p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-[#774EE0] mb-4">Secondary Education</h2>
          <p className="text-gray-700 mb-4">
            Our secondary program prepares students for higher education with a comprehensive curriculum.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Advanced Mathematics</li>
            <li>Physics, Chemistry, Biology</li>
            <li>Literature and Language Studies</li>
            <li>Computer Science</li>
            <li>Social Sciences</li>
          </ul>
        </motion.div>

        <motion.div 
          className="bg-white shadow-lg rounded-lg p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-[#774EE0] mb-4">Senior Secondary Education</h2>
          <p className="text-gray-700 mb-4">
            Our senior secondary program offers specialized streams to prepare students for their future careers.
          </p>
          <h3 className="text-xl font-semibold text-[#774EE0] mb-2">Science Stream</h3>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Biology</li>
            <li>Mathematics</li>
            <li>Computer Science</li>
            <li>English</li>
          </ul>
          <h3 className="text-xl font-semibold text-[#774EE0] mb-2">Commerce Stream</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Accountancy</li>
            <li>Business Studies</li>
            <li>Economics</li>
            <li>Mathematics</li>
            <li>English</li>
          </ul>
        </motion.div>
      </div>
      
      
      <motion.div 
        className="bg-white shadow-lg rounded-lg p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <h2 className="text-2xl font-semibold text-[#774EE0] mb-4">Infrastructure and Facilities</h2>
        <p className="text-gray-700 mb-4">
          We provide our students with state-of-the-art resources to enhance their learning experience:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            State-of-the-art science labs
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Spacious, well-equipped classrooms
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Library with vast resources
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Sports facilities (playground, gym, pool)
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Academics;