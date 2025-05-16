// src/components/TechIcons.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaJava
} from 'react-icons/fa';
import { SiTypescript, SiFirebase, SiMongodb, SiDotnet, SiAngular } from 'react-icons/si';
import styles from '../styles/TechIcons.module.css';

const TechIcons = () => {
  const technologies = [
    { icon: <FaReact />, name: 'React' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <FaDatabase />, name: 'SQL Server' },
    { icon: <SiFirebase />, name: 'Firebase' },
    { icon: <SiDotnet />, name: '.NET Core' },
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <SiAngular />, name: 'Angular' },
    { icon: <FaDocker />, name: 'Docker' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaJava />, name: 'Java' }
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Tecnologías que domino</h3>
      <div className={styles.grid}>
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className={styles.iconCard}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={styles.iconWrapper}>
              {tech.icon}
            </div>
            <span className={styles.techName}>{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechIcons;