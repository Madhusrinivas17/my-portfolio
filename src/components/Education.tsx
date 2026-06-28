import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'B.Tech – Computer Science Engineering',
      institution: 'Sri Vasavi Engineering College',
      duration: '2024 – 2028'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        <motion.div
          className="education-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {educationData.map((edu, index) => (
            <div key={index} className="education-item">
              <h3>{edu.degree}</h3>
              <p className="institution">{edu.institution}</p>
              <p className="duration">{edu.duration}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;