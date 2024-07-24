// Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-[#774EE0] mb-6">Welcome to LearnHorizon</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        {/* Carousel component would go here */}
        <div className="bg-[#774EE0] text-white p-6">
          <h2 className="text-2xl font-semibold mb-2">Empowering Minds, Shaping Futures</h2>
          <p className="text-lg">LearnHorizon is committed to providing quality education and fostering a love for learning.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <QuickLink title="About Us" to="/about" />
        <QuickLink title="Admissions" to="/admissions" />
        <QuickLink title="Academics" to="/academics" />
      </div>
    </div>
  );
};

const QuickLink: React.FC<{ title: string; to: string }> = ({ title, to }) => (
  <Link to={to} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
    <h3 className="text-xl font-semibold text-[#774EE0] mb-2">{title}</h3>
    <p className="text-gray-600">Learn more about our {title.toLowerCase()} at LearnHorizon.</p>
  </Link>
);

export default Home;