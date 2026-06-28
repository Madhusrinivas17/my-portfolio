import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2024 Madhusri Damarasingu. All rights reserved.</p>
          <div className="social-links">
            <motion.a
              href="https://github.com/Madhusrinivas17"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/madhusri-damarasingu-b900aa333/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;