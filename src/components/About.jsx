import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FaAward,
  FaCode,
  FaDatabase,
  FaDownload,
  FaMobileAlt,
  FaReact,
  FaUniversity,
} from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import TechIcons from './TechIcons';

const skillItems = [
  {
    icon: FaMobileAlt,
    title: 'Apps Móviles',
    text: 'React Native · Kotlin · Xamarin',
  },
  {
    icon: FaReact,
    title: 'Frontend',
    text: 'React · Angular',
  },
  {
    icon: FaDatabase,
    title: 'Backend',
    text: 'Node.js · .NET Core · MongoDB',
  },
];

const experienceItems = [
  {
    title: 'Desarrollador Full Stack - Especialíquidos S.A. de C.V.',
    duration: 'JUL 2025 - ACTUALIDAD',
    responsibilities: [
      'Desarrollo y mantenimiento de aplicación web empresarial para operación, monitoreo y administración de información.',
      'Implementación de módulos frontend y backend con reglas de negocio, validaciones y flujos operativos.',
      'Integración de APIs, consultas y gestión de datos relacionales para mejorar trazabilidad y reducir tareas manuales.',
    ],
  },
  {
    title: 'Desarrollador Móvil - Hotel del Ángel',
    duration: 'ENE 2025 - ABR 2025',
    responsibilities: [
      'Desarrollo de aplicación móvil multiplataforma con React Native y Firebase para digitalizar procesos operativos del hotel.',
      'Implementación de actualizaciones en tiempo real con Firestore para control de habitaciones, reservas e inventarios.',
      'Diseño de funcionalidades para gestión de reservas, inventarios y disponibilidad operativa.',
    ],
  },
  {
    title: 'Desarrollador Full Stack - Volver a Soñar A.C.',
    duration: 'MAY 2023 - SEP 2023',
    responsibilities: [
      'Rediseño de interfaz web con enfoque en accesibilidad, usabilidad y experiencia de usuario.',
      'Desarrollo de backend con PHP y MySQL para gestión dinámica de contenido y administración de información.',
      'Implementación de mejoras responsive, ajustes visuales y corrección de incidencias del sitio.',
    ],
  },
];

const educationItems = [
  {
    degree: 'Ingeniería en Desarrollo y Gestion de Software',
    institution: 'UTTT · 2023-2025',
  },
  {
    degree: 'TSU en Desarrollo de Software Multiplataforma',
    institution: 'UTTT · 2021-2023',
  },
];

function TimelineItem({ title, subtitle, bullets }) {
  return (
    <div className="relative pl-10">
      <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-brand-accent/30 bg-brand-accent/10">
        <span className="h-2.5 w-2.5 rounded-full bg-brand-accent" />
      </span>
      <div className="rounded-2xl border border-white/10 bg-brand-card p-5 shadow-soft sm:p-6">
        <h4 className="text-lg font-semibold leading-7 text-brand-text">{title}</h4>
        <span className="mt-2 block font-mono text-xs uppercase tracking-[0.24em] text-brand-muted sm:text-sm">
          {subtitle}
        </span>
        {bullets ? (
          <ul className="mt-5 space-y-3 text-sm leading-7 text-brand-muted sm:text-base">
            {bullets.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="sobre-mi" className="relative border-b border-white/10 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-panel/35 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          title="Sobre mí"
          subtitle={
            <>
              Ingeniero en Desarrollo y Gestion de Software especializado en desarrollo Full Stack
              con <span className="text-brand-text"> enfoque en soluciones innovadoras</span> y
              <span className="text-brand-text"> mejores prácticas tecnológicas</span>
            </>
          }
          align="left"
          className="max-w-4xl"
        />

        <motion.a
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          href="/cv-jonathan-david-martinez-quistian.pdf"
          download
          className="mt-8 inline-flex min-h-[48px] items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-brand-text transition duration-200 hover:-translate-y-0.5 hover:border-brand-accent/30 hover:bg-brand-accent/10"
        >
          <FaDownload className="text-brand-accent" />
          Descargar CV
        </motion.a>

        <div className="mt-14 grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <motion.article
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-brand-panel shadow-soft"
            >
              <div className="flex items-center gap-3 border-b border-white/10 px-6 py-5 sm:px-8">
                <FaCode className="text-lg text-brand-accent" />
                <h3 className="text-xl font-semibold tracking-tight text-brand-text sm:text-2xl">
                  Habilidades Clave
                </h3>
              </div>

              <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8 xl:grid-cols-1">
                {skillItems.map(({ icon: Icon, title, text }, index) => (
                  <motion.div
                    key={title}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
                    whileHover={reduceMotion ? undefined : { y: -4 }}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-brand-card p-5 shadow-soft transition duration-200 hover:border-brand-accent/30 hover:bg-brand-surface"
                  >
                    <span className="absolute inset-x-0 top-0 h-1 bg-brand-accent" />
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl text-brand-accent">
                        <Icon />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-brand-text">{title}</h4>
                        <p className="mt-2 text-sm leading-7 text-brand-muted">{text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.article>

            <TechIcons />
          </div>

          <div className="space-y-8">
            <motion.article
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.42, ease: 'easeOut' }}
              className="rounded-[2rem] border border-white/10 bg-brand-panel p-6 shadow-soft sm:p-8"
            >
              <div className="flex items-center gap-3">
                <FaAward className="text-lg text-brand-accent" />
                <h3 className="text-xl font-semibold tracking-tight text-brand-text sm:text-2xl">
                  Experiencia Relevante
                </h3>
              </div>

              <div className="relative mt-8 space-y-6 before:absolute before:bottom-2 before:left-3 before:top-2 before:w-px before:bg-white/10">
                {experienceItems.map((item) => (
                  <TimelineItem
                    key={item.title}
                    title={item.title}
                    subtitle={item.duration}
                    bullets={item.responsibilities}
                  />
                ))}
              </div>
            </motion.article>

            <motion.article
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.42, ease: 'easeOut', delay: 0.04 }}
              className="rounded-[2rem] border border-white/10 bg-brand-panel p-6 shadow-soft sm:p-8"
            >
              <div className="flex items-center gap-3">
                <FaUniversity className="text-lg text-brand-accent" />
                <h3 className="text-xl font-semibold tracking-tight text-brand-text sm:text-2xl">
                  Formación Académica
                </h3>
              </div>

              <div className="relative mt-8 space-y-5 before:absolute before:bottom-2 before:left-3 before:top-2 before:w-px before:bg-white/10">
                {educationItems.map((item) => (
                  <TimelineItem
                    key={item.degree}
                    title={item.degree}
                    subtitle={item.institution}
                  />
                ))}
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
