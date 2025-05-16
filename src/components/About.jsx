// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaDatabase, FaMobileAlt, FaUniversity, FaAward, FaCode, FaDownload } from 'react-icons/fa';
import TechIcons from './TechIcons';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section id="sobre-mi" className={styles.aboutSection}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className={styles.container}
      >
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Sobre mí</h2>
          <p className={styles.introText}>
            Ingeniero en Desarrollo y Gestion de Software especializado en desarrollo Full Stack con
            <span className={styles.highlight}> enfoque en soluciones innovadoras</span> y
            <span className={styles.highlight}> mejores prácticas tecnológicas</span>
          </p>
          <motion.a
            href="/cv-jonathan-david-martinez-quistian.pdf"
            download
            className={styles.cvButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className={styles.downloadIcon} />
            Descargar CV
          </motion.a>
        </div>

        <div className={styles.contentGrid}>
          {/* Columna Izquierda */}
          <div className={styles.profileColumn}>
            <div className={styles.infoCard}>
              <h3 className={styles.cardTitle}>
                <FaCode className={styles.icon} />
                Habilidades Clave
              </h3>
              <div className={styles.skillsContainer}>
                <div className={styles.skillItem}>
                  <FaMobileAlt className={styles.skillIcon} />
                  <div>
                    <h4 className={styles.skillTitle}>Apps Móviles</h4>
                    <p className={styles.skillText}>React Native · Android · iOS</p>
                  </div>
                </div>

                <div className={styles.skillItem}>
                  <FaReact className={styles.skillIcon} />
                  <div>
                    <h4 className={styles.skillTitle}>Frontend</h4>
                    <p className={styles.skillText}>React · TypeScript · UX/UI</p>
                  </div>
                </div>

                <div className={styles.skillItem}>
                  <FaDatabase className={styles.skillIcon} />
                  <div>
                    <h4 className={styles.skillTitle}>Backend</h4>
                    <p className={styles.skillText}>Node.js · .NET Core · MongoDB</p>
                  </div>
                </div>
              </div>
            </div>

            <TechIcons />
          </div>

          {/* Columna Derecha */}
          <div className={styles.experienceColumn}>
            <div className={styles.infoCard}>
              <h3 className={styles.cardTitle}>
                <FaAward className={styles.icon} />
                Experiencia Relevante
              </h3>

              <div className={styles.experienceItem}>
                <h4 className={styles.jobTitle}>Desarrollador Móvil - Hotel del Angel</h4>
                <span className={styles.duration}>Ene 2025 - Abr 2025</span>
                <ul className={styles.responsibilities}>
                  <li>Desarrollo de app multiplataforma</li>
                  <li>Integración Firebase en tiempo real</li>
                  <li>Optimización de procesos en 40%</li>
                </ul>
              </div>

              <div className={styles.experienceItem}>
                <h4 className={styles.jobTitle}>Desarrollador Full Stack - Volver a Soñar, A.C.</h4>
                <span className={styles.duration}>May 2023 - Sep 2023</span>
                <ul className={styles.responsibilities}>
                  <li>Rediseño completo de UX/UI</li>
                  <li>Implementación de bases de datos SQL</li>
                  <li>Mejora de performance en 35%</li>
                </ul>
              </div>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.cardTitle}>
                <FaUniversity className={styles.icon} />
                Formación Académica
              </h3>
              <div className={styles.educationItem}>
                <h4 className={styles.degree}>Ingeniería en Desarrollo y Gestion de Software</h4>
                <span className={styles.institution}>UTTT · 2023-2025</span>
              </div>
              <div className={styles.educationItem}>
                <h4 className={styles.degree}>TSU en Desarrollo de Software Multiplataforma</h4>
                <span className={styles.institution}>UTTT · 2021-2023</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}