import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';

const projects = [
  {
    title: 'MiraxShare',
    description:
      'Aplicación WebRTC para compartir pantalla en tiempo real. Permite crear salas de señalización donde un host comparte su pantalla con viewers mediante conexión peer-to-peer directa.',
    tech: ['WebRTC', 'WebSockets', 'React', 'Node.js'],
    image: '/miraxshare.png',
    url: 'https://miraxshare.netlify.app/',
  },
];

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="proyectos" className="relative border-b border-white/10 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-panel/30 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          title="Mis Proyectos"
          subtitle="Explora mis trabajos más recientes"
          align="left"
        />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mt-12 grid gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
