// About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-[#774EE0] mb-6">About LearnHorizon</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 p-6">
        <h2 className="text-2xl font-semibold mb-4">Our History</h2>
        <p className="text-gray-700 mb-4">
          Founded in 1995, LearnHorizon has been at the forefront of educational innovation for over two decades.
          Our journey began with a vision to create a learning environment that nurtures curiosity, creativity, and character.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          To empower students with knowledge, skills, and values that enable them to become responsible global citizens
          and lifelong learners.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Excellence in Education</li>
          <li>Integrity and Ethics</li>
          <li>Innovation and Creativity</li>
          <li>Inclusivity and Diversity</li>
        </ul>
      </div>
      <div className="bg-[#774EE0] text-white p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Message from the Principal</h2>
        <p className="italic">
          "At LearnHorizon, we believe in the potential of every student. Our commitment is to provide an environment
          where each child can discover their unique talents and develop the skills needed for success in the 21st century."
        </p>
        <p className="mt-2">- Dr. Jane Smith, Principal</p>
      </div>
    </div>
  );
};

export default About;