import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Email */}
          <motion.div
            className="contact-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Email</h3>
            <p>
              <a href="mailto:madhusridamarasingu@gmail.com">
                madhusridamarasingu@gmail.com
              </a>
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="contact-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Phone no.</h3>
            <p>
              <a href="tel:+919491398697">
                +91 9491398697
              </a>
            </p>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            className="contact-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>LinkedIn</h3>
            <p>
              <a
                href="https://www.linkedin.com/in/madhusri-damarasingu-b900aa333/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Madhusri Damarasingu
              </a>
            </p>
          </motion.div>

          {/* GitHub */}
          <motion.div
            className="contact-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>GitHub</h3>
            <p>
              <a
                href="https://github.com/Madhusrinivas17"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Madhusrinivas17
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;