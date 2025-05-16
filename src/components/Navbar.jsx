import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#home" className={styles.brand}>
          <span className={styles.name}>Jonathan David Martinez Quistian</span>
          <span className={styles.title}>{'// Dev FullStack'}</span>
        </a>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <div className={styles.navLinks}>
            <a href="#home" className={styles.link} onClick={() => setIsMenuOpen(false)}>Inicio</a>
            <a href="#proyectos" className={styles.link} onClick={() => setIsMenuOpen(false)}>Proyectos</a>
            <a href="#sobre-mi" className={styles.link} onClick={() => setIsMenuOpen(false)}>Sobre mí</a>
            <a href="#contacto" className={`${styles.link} ${styles.ctaButton}`} onClick={() => setIsMenuOpen(false)}>Contacto</a>
          </div>
        </nav>

        <button 
          className={`${styles.burger} ${isMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menú principal"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}