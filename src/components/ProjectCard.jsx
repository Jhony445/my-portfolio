import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

export default function ProjectCard({ title, description, tech, image, url }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-brand-panel shadow-panel"
    >
      <div className="grid gap-0 lg:grid-cols-[minmax(320px,0.92fr)_minmax(0,1fr)]">
        <div className="relative overflow-hidden border-b border-white/10 bg-brand-card lg:border-b-0 lg:border-r">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full min-h-[260px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex min-h-[260px] items-center justify-center bg-brand-card">
              <div className="h-20 w-20 rounded-full border border-brand-accent/20 bg-brand-accent/10" />
            </div>
          )}
        </div>

        <div className="flex h-full flex-col p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-brand-text sm:text-3xl">
                {title}
              </h3>
            </div>

            <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-brand-muted transition duration-200 group-hover:border-brand-accent/30 group-hover:bg-brand-accent/10 group-hover:text-brand-text">
              <FiArrowUpRight className="text-lg" />
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-8 text-brand-muted sm:text-base">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-brand-muted sm:text-xs"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-text">
            <span>Ver Proyecto</span>
            <span aria-hidden="true">→</span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}
