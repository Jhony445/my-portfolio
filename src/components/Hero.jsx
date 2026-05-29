import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-scroll';
import avatarSrc from '../assets/perfil1.jpg';

const techStack = ['React', 'Angular 18', 'MongoDB', 'SQL Server', '.NET Core 8 Web API'];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/10 px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8 lg:pb-28 lg:pt-40"
    >
      <div className="absolute inset-0 bg-grid-dark [background-size:72px_72px] opacity-30" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-brand-accent/5 to-transparent lg:block" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,440px)] lg:gap-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="mb-6 inline-flex rounded-full border border-brand-accent/25 bg-brand-accent/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.32em] text-brand-accent sm:text-sm">
            Hola, soy
          </span>

          <h1 className="text-4xl font-semibold tracking-tight text-brand-text sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="bg-gradient-to-r from-brand-text via-white to-brand-muted bg-clip-text text-transparent">
              Ing. Jonathan D. Martínez Quistian
            </span>
            <motion.span
              animate={reduceMotion ? undefined : { opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1.1, ease: 'easeInOut' }}
              className="ml-1 font-mono text-brand-accent"
            >
              _
            </motion.span>
          </h1>

          <h2 className="mt-6 text-2xl font-medium text-brand-text sm:text-3xl lg:text-4xl">
            Desarrollador <span className="text-brand-accent">Full Stack</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-brand-muted sm:text-lg lg:text-xl">
            Apasionado por construir aplicaciones web modernas. Experiencia sólida en React,
            Angular 18, MongoDB, SQL Server y .NET Core 8 Web API. Enfocado en crear
            experiencias UX/UI fluidas y arquitecturas escalables.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="contacto"
              smooth={true}
              duration={500}
              offset={-96}
              className="inline-flex min-h-[48px] cursor-pointer items-center justify-center rounded-2xl border border-brand-accent/40 bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-base shadow-glow transition duration-200 hover:-translate-y-0.5 hover:bg-[#2ecc71]"
            >
              Contáctame
            </Link>

            <Link
              to="proyectos"
              smooth={true}
              duration={500}
              offset={-96}
              className="inline-flex min-h-[48px] cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-brand-text transition duration-200 hover:-translate-y-0.5 hover:border-brand-accent/30 hover:bg-brand-accent/10"
            >
              Ver Proyectos
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-4 rounded-[2rem] bg-brand-accent/10 blur-3xl" />

          <motion.div
            whileHover={reduceMotion ? undefined : { y: -6 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-brand-panel shadow-panel"
          >
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-rose-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-300/80" />
              <span className="h-3 w-3 rounded-full bg-brand-accent/90" />
            </div>

            <div className="space-y-5 p-5 sm:p-6">
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-brand-card p-2">
                <img
                  src={avatarSrc}
                  alt="Jonathan David Martínez Quistian"
                  className="h-[320px] w-full rounded-[1.25rem] object-cover sm:h-[400px]"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-muted sm:text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
