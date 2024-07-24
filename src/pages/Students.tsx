// Students.tsx
import React from 'react';

const Students: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-[#774EE0] mb-6">Student Life at LearnHorizon</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-[#774EE0] mb-4">Extracurricular Activities</h2>
        <p className="text-gray-700 mb-4">
          At LearnHorizon, we believe in nurturing well-rounded individuals. Our diverse range of extracurricular
          activities provides students with opportunities to explore their interests and develop new skills.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {['Debate Club', 'Chess Club', 'Drama Society', 'Environmental Club', 'Robotics Team', 'School Band'].map((activity) => (
            <div key={activity} className="bg-gray-100 p-3 rounded-md text-center">
              {activity}
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-[#774EE0] text-white p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Student Achievements</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>National Science Olympiad - Gold Medal (2024)</li>
          <li>State-level Debate Competition - 1st Place (2023)</li>
          <li>International Math Challenge - Top 5% globally (2024)</li>
          <li>Regional Art Exhibition - Best Young Artist Award (2023)</li>
          <li>National Robotics Competition - Innovation Prize (2024)</li>
        </ul>
      </div>
      
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-[#774EE0] mb-4">Student Leadership</h2>
        <p className="text-gray-700 mb-4">
          We encourage our students to take on leadership roles and make a positive impact in our school community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Student Council</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>President</li>
              <li>Vice President</li>
              <li>Secretary</li>
              <li>Treasurer</li>
              <li>Class Representatives</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Leadership Opportunities</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Peer Tutoring Program</li>
              <li>Community Service Coordinators</li>
              <li>School Event Organizers</li>
              <li>Sports Team Captains</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-green-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">Student Support Services</h2>
        <p className="text-gray-700 mb-4">
          We are committed to supporting our students' well-being and academic success through various services:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Academic Counseling
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Mental Health Support
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Career Guidance
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Learning Support Programs
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Students;