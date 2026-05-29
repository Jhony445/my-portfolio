import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import { SiAngular, SiDotnet, SiFirebase, SiMongodb, SiTypescript } from 'react-icons/si';

const technologies = [
  { icon: FaReact, name: 'React' },
  { icon: FaNodeJs, name: 'Node.js' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiMongodb, name: 'MongoDB' },
  { icon: FaDatabase, name: 'SQL Server' },
  { icon: SiFirebase, name: 'Firebase' },
  { icon: SiDotnet, name: '.NET Core' },
  { icon: FaGitAlt, name: 'Git' },
  { icon: SiAngular, name: 'Angular' },
  { icon: FaDocker, name: 'Docker' },
  { icon: FaPython, name: 'Python' },
  { icon: FaJava, name: 'Java' },
];

export default function TechIcons() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="rounded-[2rem] border border-white/10 bg-brand-panel p-6 shadow-soft sm:p-8">
      <div className="mb-8 flex items-center gap-3">
        <span className="h-2.5 w-2.5 rounded-full bg-brand-accent/90" />
        <h3 className="text-xl font-semibold tracking-tight text-brand-text sm:text-2xl">
          Tecnologías que domino
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
        {technologies.map(({ icon: Icon, name }, index) => (
          <motion.div
            key={name}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: index * 0.03, ease: 'easeOut' }}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            className="group rounded-2xl border border-white/10 bg-brand-card px-4 py-5 shadow-soft transition duration-200 hover:border-brand-accent/30 hover:bg-brand-surface"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl text-brand-accent transition duration-200 group-hover:bg-brand-accent/10">
              <Icon />
            </div>
            <span className="block text-sm font-medium text-brand-text">{name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
