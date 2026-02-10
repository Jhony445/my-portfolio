import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ title, description, tech, image, url }) => {
  return (
    <motion.a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.overlay}>
          <span className={styles.viewProject}>Ver Proyecto →</span>
        </div>
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
    </motion.a>
  );
};

export default ProjectCard;