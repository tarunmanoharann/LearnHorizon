import React, { useEffect, ReactNode } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

import chessclub from "../photos/clubs/chessclub.jpeg"
import debateclub from "../photos/clubs/debateclub.jpeg"
import dramaticlub from "../photos/clubs/dramaticclub.png"
import ecoclub from "../photos/clubs/ecoclub.jpeg"
import musicclub from "../photos/clubs/musicclub.jpeg"
import roboclub from "../photos/clubs/roboclub.jpeg"

const AnimatedSection: React.FC<{ children: ReactNode }> = ({ children }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, y: 50, transition: { duration: 0.5 } }
      }}
    >
      {children}
    </motion.div>
  );
};

interface ActivityBoxProps {
  activity: string;
  image: string;
}

const ActivityBox: React.FC<ActivityBoxProps> = ({ activity, image }) => (
  <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer">
    <img src={image} alt={activity} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black opacity-40"></div>
    <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
      <h3 className="text-white text-base font-semibold">{activity}</h3>
    </div>
  </div>
);

const Students: React.FC = () => {
  const activities: ActivityBoxProps[] = [
    { activity: 'Debate Club', image: debateclub },
    { activity: 'Chess Club', image: chessclub },
    { activity: 'Drama Society', image: dramaticlub },
    { activity: 'Environmental Club', image: ecoclub },
    { activity: 'Robotics Team', image: roboclub },
    { activity: 'School Band', image: musicclub }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold text-[#774EE0] mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Student Life at LearnHorizon
      </motion.h1>
      
      <AnimatedSection>
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-[#774EE0] mb-4">Extracurricular Activities</h2>
          <p className="text-gray-700 mb-4">
            At SpringDale, we believe in nurturing well-rounded individuals. Our diverse range of extracurricular
            activities provides students with opportunities to explore their interests and develop new skills.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {activities.map((activity) => (
              <ActivityBox key={activity.activity} activity={activity.activity} image={activity.image} />
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection>
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
      </AnimatedSection>
      
      <AnimatedSection>
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
      </AnimatedSection>
      
      <AnimatedSection>
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
      </AnimatedSection>
    </div>
  );
};

export default Students;