import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and TypeScript, showcasing my skills and projects.',
      github: 'https://github.com/yourusername/portfolio'
    },
    {
      title: 'Sew Tech',
      description: 'Sew Tech is an online tailoring management platform that connects customers and tailors to simplify stitching order management. It enables online order booking, cost estimation, payment tracking, and real-time order status updates.',
      github: 'https://github.com/Madhusrinivas17/ Sew-Tech'
    },
    {
      title: 'To-do List',
      description: 'A simple and responsive task management application that helps users organize, track, and complete daily tasks efficiently.',
      github: 'https://github.com/yourusername/To-do-List'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View on GitHub
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;