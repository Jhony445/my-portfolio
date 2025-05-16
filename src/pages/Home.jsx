import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <main>
      {/* Sección Sobre mí */}
      <section id="sobre-mi" style={{ padding: '-3rem 2rem' }}>
        <About />
      </section>
      <section id="proyectos" style={{ padding: '4rem 2rem' }}>
        <h2>Proyectos</h2>
        <ProjectCard />
      </section>
      {/* Sección Contacto */}
      <section id="contacto" style={{ padding: '4rem 2rem' }}>
        <Contact />
      </section>
    </main>
  );
}
