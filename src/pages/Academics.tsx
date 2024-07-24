// Academics.tsx
import React from 'react';

const Academics: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-[#774EE0] mb-6">Academics at LearnHorizon</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#774EE0] mb-4">Primary Education</h2>
          <p className="text-gray-700 mb-4">
            Our primary education program focuses on building a strong foundation in core subjects while fostering creativity and critical thinking.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>English Language Arts</li>
            <li>Mathematics</li>
            <li>Science</li>
            <li>Social Studies</li>
            <li>Art and Music</li>
          </ul>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#774EE0] mb-4">Secondary Education</h2>
          <p className="text-gray-700 mb-4">
            Our secondary program prepares students for higher education and future careers with a comprehensive curriculum and specialized courses.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Advanced Mathematics</li>
            <li>Physics, Chemistry, Biology</li>
            <li>Literature and Language Studies</li>
            <li>Computer Science</li>
            <li>Economics and Business Studies</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-[#774EE0] text-white p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Teaching Methodology</h2>
        <p className="mb-4">
          At LearnHorizon, we employ a blend of traditional and innovative teaching methods to ensure comprehensive learning:
        </p>
        <ul className="list-disc list-inside">
          <li>Interactive classroom sessions</li>
          <li>Project-based learning</li>
          <li>Technology-integrated instruction</li>
          <li>Collaborative group work</li>
          <li>Individual mentoring and support</li>
        </ul>
      </div>
      
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-[#774EE0] mb-4">Educational Resources</h2>
        <p className="text-gray-700 mb-4">
          We provide our students with state-of-the-art resources to enhance their learning experience:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Modern science laboratories
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Well-stocked library
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Computer labs with latest software
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Online learning platforms
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Academics;