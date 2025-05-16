import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ title, description, tech, image }) => {
  return (
    <motion.div 
      className={styles.card}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.techStack}>
          {tech.map((item, index) => (
            <span key={index} className={styles.tech}>{item}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;