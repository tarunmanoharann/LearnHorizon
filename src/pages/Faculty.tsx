import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const MaleSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#774EE0" className="w-full h-full">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
  </svg>
);

const FemaleSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#774EE0" className="w-full h-full">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
  </svg>
);

const FacultyMember: React.FC<{ name: string; position: string; qualification: string; experience: string; gender: 'male' | 'female' }> = ({ name, position, qualification, experience, gender }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 flex">
    <div className="w-1/3 p-4 bg-gray-100">
      {gender === 'male' ? <MaleSVG /> : <FemaleSVG />}
    </div>
    <div className="w-2/3 p-6">
      <h3 className="text-xl font-semibold text-[#774EE0] mb-2">{name}</h3>
      <p className="text-gray-600 mb-1">{position}</p>
      <p className="text-gray-600 mb-1">{qualification}</p>
      <p className="text-gray-600">{experience}</p>
    </div>
  </div>
);

const FacultyRow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
      className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
    >
      {children}
    </motion.div>
  );
};

const Faculty: React.FC = () => {
  const titleControls = useAnimation();
  const introControls = useAnimation();
  const joinTeamControls = useAnimation();
  const titleRef = React.useRef(null);
  const introRef = React.useRef(null);
  const joinTeamRef = React.useRef(null);
  const titleInView = useInView(titleRef, { once: false, amount: 0.3 });
  const introInView = useInView(introRef, { once: false, amount: 0.3 });
  const joinTeamInView = useInView(joinTeamRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (titleInView) {
      titleControls.start("visible");
    } else {
      titleControls.start("hidden");
    }
  }, [titleControls, titleInView]);

  useEffect(() => {
    if (introInView) {
      introControls.start("visible");
    } else {
      introControls.start("hidden");
    }
  }, [introControls, introInView]);

  useEffect(() => {
    if (joinTeamInView) {
      joinTeamControls.start("visible");
    } else {
      joinTeamControls.start("hidden");
    }
  }, [joinTeamControls, joinTeamInView]);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        ref={titleRef}
        className="text-4xl font-bold text-[#774EE0] mb-6"
        animate={titleControls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          hidden: { opacity: 0, y: -50, transition: { duration: 0.5 } }
        }}
      >
        Our Faculty
      </motion.h1>
      
      <motion.div 
        ref={introRef}
        className="mb-8"
        animate={introControls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          hidden: { opacity: 0, y: 50, transition: { duration: 0.5 } }
        }}
      >
        <p className="text-lg text-gray-700">
          At Springdale Public School, we pride ourselves on our exceptional faculty. Our teachers are not just educators;
          they are mentors, innovators, and lifelong learners dedicated to nurturing the potential in every student.
        </p>
      </motion.div>
      
      <FacultyRow>
        <FacultyMember
          name="Dr. Rajesh Sharma"
          position="Principal"
          qualification="Ph.D. in Education, Delhi University"
          experience="25+ years of teaching and administration experience"
          gender="male"
        />
        <FacultyMember
          name="Mrs. Priya Gupta"
          position="Vice Principal"
          qualification="M.Ed., Jamia Millia Islamia University"
          experience="20 years in education"
          gender="female"
        />
      </FacultyRow>

      <FacultyRow>
        <FacultyMember
          name="Mr. Amit Patel"
          position="Head of Science Department"
          qualification="M.Sc. in Physics, IIT Bombay"
          experience="15 years of teaching experience"
          gender="male"
        />
        <FacultyMember
          name="Ms. Sunita Reddy"
          position="Mathematics Coordinator"
          qualification="M.Sc. in Mathematics, University of Madras"
          experience="12 years in education"
          gender="female"
        />
      </FacultyRow>

      <FacultyRow>
        <FacultyMember
          name="Mr. Rahul Verma"
          position="Physical Education Instructor"
          qualification="B.P.Ed., Lakshmibai National Institute of Physical Education"
          experience="10 years as a coach and educator"
          gender="male"
        />
        <FacultyMember
          name="Mrs. Anjali Desai"
          position="Head of Arts Department"
          qualification="MFA in Fine Arts, MS University, Baroda"
          experience="18 years of artistic and teaching experience"
          gender="female"
        />
      </FacultyRow>
      
      <motion.div 
        ref={joinTeamRef}
        className="mt-8 bg-[#774EE0] text-white p-6 rounded-lg"
        animate={joinTeamControls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          hidden: { opacity: 0, y: 50, transition: { duration: 0.5 } }
        }}
      >
        <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
        <p className="mb-4">
          We are always looking for passionate educators to join our team. If you're interested in making a difference
          in students' lives and being part of an innovative learning environment, we'd love to hear from you.
        </p>
        <a href="/careers" className="inline-block bg-white text-[#774EE0] py-2 px-4 rounded-md hover:bg-gray-100 transition duration-300">
          View Open Positions
        </a>
      </motion.div>
    </div>
  );
};

export default Faculty;