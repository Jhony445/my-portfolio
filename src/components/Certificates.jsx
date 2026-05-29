import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const certificates = [
  {
    title: 'Linux Essentials',
    issuer: 'Linux Professional Institute',
    date: '2022',
    image: '/certificados/certificadoLinux.png',
  },
  {
    title: 'Fundamentos de Python 1',
    issuer: 'Networking Academy',
    date: '2025',
    image: '/certificados/certificadoPython1.png',
  },
  {
    title: 'Curso de Iniciación al Desarrollo con IA',
    issuer: 'BIG School (Brais Moure & Romuald Fons)',
    date: '2025',
    image: '/certificados/certificadoIA.png',
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = selectedCert ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCert]);

  return (
    <section id="certificados" className="relative border-b border-white/10 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Certificaciones"
          subtitle="Credenciales que validan mi conocimiento y habilidades"
          align="left"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <motion.button
              key={cert.title}
              type="button"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
              whileHover={reduceMotion ? undefined : { y: -5 }}
              onClick={() => setSelectedCert(cert)}
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-brand-panel text-left shadow-soft transition duration-200 hover:border-brand-accent/30"
            >
              <div className="overflow-hidden border-b border-white/10 bg-brand-card">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="space-y-4 p-6">
                <h3 className="text-lg font-semibold leading-7 text-brand-text">{cert.title}</h3>
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-white/10 pt-4 text-sm text-brand-muted">
                  <span>{cert.issuer}</span>
                  <span className="font-mono uppercase tracking-[0.2em] text-brand-accent">
                    {cert.date}
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {selectedCert ? (
            <div
              className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                onClick={(event) => event.stopPropagation()}
                className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-brand-panel shadow-panel"
              >
                <button
                  type="button"
                  aria-label="Cerrar"
                  onClick={() => setSelectedCert(null)}
                  className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-brand-base/80 text-brand-text transition duration-200 hover:border-brand-accent/30 hover:bg-brand-accent/10"
                >
                  <FiX className="text-xl" />
                </button>

                <img
                  src={selectedCert.image}
                  alt={`Certificado - ${selectedCert.title}`}
                  className="max-h-[70vh] w-full bg-brand-card object-contain"
                />

                <div className="border-t border-white/10 px-6 py-5 sm:px-8">
                  <h3 className="text-xl font-semibold text-brand-text sm:text-2xl">
                    {selectedCert.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-muted sm:text-base">
                    {selectedCert.issuer} | {selectedCert.date}
                  </p>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
