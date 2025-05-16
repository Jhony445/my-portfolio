import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import { Link, animateScroll as scroll, scrollSpy  } from 'react-scroll';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = '' };
  }, [isMenuOpen]);

    useEffect(() => {
    scroll.scrollToTop({ duration: 0 });
    scrollSpy.update();
  }, []);

  const navLinks = [
    { to: 'home', text: 'Inicio' },
    { to: 'sobre-mi', text: 'Sobre Mi' },
    { to: 'proyectos', text: 'Proyectos' },
    { to: 'contacto', text: 'Contacto', cta: true }
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link
          to="home"
          className={styles.brand}
          smooth={true}
          duration={500}
          onClick={() => setIsMenuOpen(false)}
        >
          <span className={styles.name}>Jonathan David Martinez Quistian</span>
          <span className={styles.title}>{'// Dev FullStack'}</span>
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <div className={styles.navLinks}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`${styles.link} ${link.cta ? styles.ctaButton : ''}`}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass={styles.active}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
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