import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <main id="contenido" className="relative overflow-hidden">
        <About />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
