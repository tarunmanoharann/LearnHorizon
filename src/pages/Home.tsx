import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserGraduate, FaCalendarAlt, FaGraduationCap } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import sportsday from "../photos/sportsday.jpg";
import scienceexbhi from "../photos/scienceexbhi.webp";
import culturalfest from "../photos/culturalfest.jpeg";

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Annual Sports Day",
      description: "Celebrating Excellence in Sports",
      image: sportsday,
      color: "#E63946",
    },
    {
      title: "Science Exhibition",
      description: "Showcasing Student Innovations",
      image: scienceexbhi,
      color: "#457B9D",
    },
    {
      title: "Cultural Fest",
      description: "Embracing Diversity and Creativity",
      image: culturalfest,
      color: "#F4A261",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <CarouselSection slides={slides} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
      <WelcomeSection />
      <QuickLinksSection />
      <NewsEventsSection />
      <WhyChooseUsSection />
    </div>
  );
};

const CarouselSection: React.FC<{ slides: any[], currentSlide: number, setCurrentSlide: (index: number) => void }> = ({ slides, currentSlide, setCurrentSlide }) => (
  <div className="relative h-[600px] mb-12 rounded-lg overflow-hidden shadow-2xl">
    {slides.map((slide, index) => (
      <div
        key={index}
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
          index === currentSlide ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-8">
          <h2 className="text-4xl font-bold mb-4" style={{ color: slide.color }}>{slide.title}</h2>
          <p className="text-2xl">{slide.description}</p>
        </div>
      </div>
    ))}
    <div className="absolute bottom-4 right-4 flex space-x-2">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`w-4 h-4 rounded-full ${
            index === currentSlide ? 'bg-white' : 'bg-gray-400'
          }`}
        />
      ))}
    </div>
  </div>
);

const WelcomeSection: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="text-center mb-12"
  >
    <h1 className="text-5xl font-bold text-[#774EE0] mb-4">
      Welcome to Springdale Public School
    </h1>
    <p className="text-2xl text-gray-600">
      Where we nurture young minds for a brighter future.
    </p>
  </motion.div>
);

const QuickLinksSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, y: 50 }
      }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
    >
      <QuickLink title="About Us" to="/about" icon={<FaUserGraduate />} />
      <QuickLink title="Admissions" to="/admissions" icon={<FaCalendarAlt />} />
      <QuickLink title="Academics" to="/academics" icon={<FaGraduationCap />} />
    </motion.div>
  );
};

const NewsEventsSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const newsItems = [
    { 
      title: "Parent-Teacher Meeting", 
      date: "2024-05-15", 
      description: "Join us for our quarterly parent-teacher meeting to discuss your child's progress." 
    },
    { 
      title: "Summer Camp Registration Open", 
      date: "2024-06-01", 
      description: "Enroll your child in our exciting summer camp programs. Limited spots available!" 
    },
    { 
      title: "National Mathematics Olympiad", 
      date: "2024-07-10", 
      description: "Encourage your child to participate in the upcoming Mathematics Olympiad." 
    },
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, y: 50 }
      }}
      className="bg-white shadow-lg rounded-lg p-8 mb-12"
    >
      <h2 className="text-3xl font-semibold text-[#774EE0] mb-6">Latest News & Events</h2>
      <ul className="space-y-6">
        {newsItems.map((item, index) => (
          <NewsItem 
            key={index}
            title={item.title} 
            date={item.date} 
            description={item.description} 
          />
        ))}
      </ul>
    </motion.div>
  );
};

const WhyChooseUsSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, y: 50 }
      }}
      className="bg-[#774EE0] text-white p-8 rounded-lg"
    >
      <h2 className="text-3xl font-semibold mb-6">Why Choose Springdale Public School?</h2>
      <ul className="list-disc list-inside space-y-3 text-lg">
        <li>State-of-the-art facilities and modern classrooms</li>
        <li>Dedicated and experienced faculty</li>
        <li>Comprehensive curriculum focusing on holistic development</li>
        <li>Strong emphasis on extracurricular activities</li>
        <li>Safe and nurturing learning environment</li>
      </ul>
    </motion.div>
  );
};

const QuickLink: React.FC<{ title: string; to: string; icon: React.ReactNode }> = ({ title, to, icon }) => (
  <Link to={to} className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
    <div className="text-[#774EE0] text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold text-[#774EE0] mb-3">{title}</h3>
    <p className="text-gray-600 text-lg">Learn more about our {title.toLowerCase()} at Springdale.</p>
  </Link>
);

const NewsItem: React.FC<{ title: string; date: string; description: string }> = ({ title, date, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const isRecent = (new Date(date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24) > -3;

  return (
    <motion.li 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`border-b border-gray-200 pb-6 ${isRecent ? 'bg-[#F0E6FF] rounded-lg p-4' : ''}`}
    >
      <h3 className="text-xl font-semibold text-[#774EE0]">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <p className="text-gray-600 text-lg">{description}</p>
    </motion.li>
  );
};

export default Home;