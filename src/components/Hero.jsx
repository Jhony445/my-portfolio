import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '../styles/Hero.module.css';
import avatarSrc from '../assets/perfil1.jpg';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.content}
        >
          <span className={styles.greeting}>Hola, soy</span>
          <h1 className={styles.title}>
            <span className={styles.nameHighlight}>
              Ing. Jonathan D. Martínez Quistian
            </span>
            <span className={styles.cursor}>&#95;</span>
          </h1>
          <h2 className={styles.subtitle}>
            Desarrollador <span className={styles.stackHighlight}>Full Stack</span>
          </h2>
          <p className={styles.description}>
            Apasionado por construir aplicaciones web modernas.  
            Experiencia sólida en React, Angular 18, MongoDB, SQL Server y .NET Core 8 Web API.  
            Enfocado en crear experiencias UX/UI fluidas y arquitecturas escalables.
          </p>
          <div className={styles.ctaContainer}>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contacto"
              className={styles.primaryCta}
            >
              Contáctame
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#proyectos"
              className={styles.secondaryCta}
            >
              Ver Proyectos
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className={styles.visualContainer}
          style={{ y: isMobile ? 0 : y }}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={styles.imageWrapper}
          >
            <img
              src={avatarSrc}
              alt="Jonathan David Martínez Quistian"
              className={styles.avatar}
            />
          </motion.div>

          <div className={styles.techStack}>
            <span>React</span>
            <span>Angular 18</span>
            <span>MongoDB</span>
            <span>SQL Server</span>
            <span>.NET Core 8 Web API</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
