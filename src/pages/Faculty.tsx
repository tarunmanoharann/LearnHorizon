// Faculty.tsx
import React from 'react';

const FacultyMember: React.FC<{ name: string; position: string; qualification: string; experience: string }> = ({ name, position, qualification, experience }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
    <h3 className="text-xl font-semibold text-[#774EE0] mb-2">{name}</h3>
    <p className="text-gray-600 mb-1">{position}</p>
    <p className="text-gray-600 mb-1">{qualification}</p>
    <p className="text-gray-600">{experience}</p>
  </div>
);

const Faculty: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-[#774EE0] mb-6">Our Faculty</h1>
      
      <div className="mb-8">
        <p className="text-lg text-gray-700">
          At LearnHorizon, we pride ourselves on our exceptional faculty. Our teachers are not just educators;
          they are mentors, innovators, and lifelong learners dedicated to nurturing the potential in every student.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FacultyMember
          name="Dr. Emily Johnson"
          position="Head of Science Department"
          qualification="Ph.D. in Physics, Stanford University"
          experience="15+ years of teaching experience"
        />
        <FacultyMember
          name="Prof. Michael Chang"
          position="Mathematics Coordinator"
          qualification="M.Sc. in Applied Mathematics, MIT"
          experience="12 years in education"
        />
        <FacultyMember
          name="Ms. Sarah O'Connor"
          position="English Literature Teacher"
          qualification="M.A. in English Literature, Oxford University"
          experience="8 years of teaching experience"
        />
        <FacultyMember
          name="Mr. David Wilson"
          position="Physical Education Instructor"
          qualification="B.Sc. in Sports Science, University of Florida"
          experience="10 years as a coach and educator"
        />
        <FacultyMember
          name="Dr. Amelia Patel"
          position="Computer Science Teacher"
          qualification="Ph.D. in Computer Science, Carnegie Mellon University"
          experience="7 years in tech industry, 5 years in education"
        />
        <FacultyMember
          name="Prof. Robert Martinez"
          position="Head of Arts Department"
          qualification="MFA in Fine Arts, Yale University"
          experience="20+ years of artistic and teaching experience"
        />
      </div>
      
      <div className="mt-8 bg-[#774EE0] text-white p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
        <p className="mb-4">
          We are always looking for passionate educators to join our team. If you're interested in making a difference
          in students' lives and being part of an innovative learning environment, we'd love to hear from you.
        </p>
        <a href="/careers" className="inline-block bg-white text-[#774EE0] py-2 px-4 rounded-md hover:bg-gray-100 transition duration-300">
          View Open Positions
        </a>
      </div>
    </div>
  );
};

export default Faculty;