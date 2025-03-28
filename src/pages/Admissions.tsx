import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Admissions: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

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
        Admissions
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-semibold text-[#774EE0] mb-4">Request Information</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#774EE0]"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#774EE0]"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#774EE0]"
              required
            />
          </div>
          <div>
            <label htmlFor="grade" className="block text-gray-700 mb-1">Interested Grade</label>
            <select
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#774EE0]"
              required
            >
              <option value="">Select a grade</option>
              <option value="elementary">Elementary School</option>
              <option value="middle">Middle School</option>
              <option value="high">High School</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-[#774EE0] text-white py-2 px-4 rounded-md hover:bg-[#5f3eb3] transition duration-300"
          >
            Submit Request
          </button>
        </form>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white shadow-lg rounded-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-semibold text-[#774EE0] mb-4">Admission Process</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Submit an online application form</li>
          <li>Pay the application fee</li>
          <li>Attend an entrance examination</li>
          <li>Participate in a student interview</li>
          <li>Submit required documents</li>
          <li>Receive admission decision</li>
        </ol>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-[#774EE0] text-white p-6 rounded-lg mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4">Important Dates</h2>
        <ul className="space-y-2">
          <li>Application Opens: September 1, 2024</li>
          <li>Application Deadline: November 30, 2024</li>
          <li>Entrance Exam: December 15, 2024</li>
          <li>Interview Period: January 10-20, 2025</li>
          <li>Decision Notification: February 15, 2025</li>
        </ul>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-white shadow-lg rounded-lg p-6"
      >
        <h2 className="text-2xl font-semibold text-[#774EE0] mb-4">Downloadable Forms</h2>
        <ul className="space-y-2">
          <li>
            <a 
              href="/admissions" 
              className="text-[#774EE0] hover:underline"
            >
              Admission Application Form
            </a>
          </li>
          <li>
            <a 
              href="/admissions" 
              className="text-[#774EE0] hover:underline"
            >
              Health Record Form
            </a>
          </li>
          <li>
            <a 
              href="/admissions" 
              className="text-[#774EE0] hover:underline"
            >
              Recommendation Letter Template
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Admissions;