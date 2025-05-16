import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ title, description, tech, image, demo, code }) => {
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
        
        <div className={styles.links}>
          <a href={code} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <FiGithub /> Código
          </a>
          <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <FiExternalLink /> Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;