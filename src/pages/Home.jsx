import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import styles from '../styles/Sections.module.css';

export default function Home() {
  return (
    <main>
      <section id="sobre-mi" className={styles.aboutSection}>
        <About />
      </section>
      <section id="proyectos" className={styles.projectsSection}>
        <Projects />
      </section>
      <section id="certificados" className={styles.certificatesSection}>
        <Certificates />
      </section>
      <section id="contacto" className={styles.contactSection}>
        <Contact />
      </section>
    </main>
  );
}
