import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiGithub, FiMail, FiMessageSquare, FiPhone } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import Notification from './Notification';
import SectionHeading from './SectionHeading';

const contactLinks = [
  {
    href: 'mailto:Jonathan_058@hotmail.com',
    title: 'Correo',
    value: 'Jonathan_058@hotmail.com',
    icon: FiMail,
  },
  {
    href: 'tel:+525514712961',
    title: 'Teléfono',
    value: '+52 55 1471 2961',
    icon: FiPhone,
  },
  {
    href: 'https://wa.me/525514712961',
    title: 'WhatsApp',
    value: 'Enviar mensaje directo',
    icon: FiMessageSquare,
    external: true,
  },
  {
    href: 'https://github.com/Jhony445',
    title: 'GitHub',
    value: 'Ver mis repositorios',
    icon: FiGithub,
    external: true,
  },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: 'success',
  });
  const reduceMotion = useReducedMotion();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        event.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setNotification({
        show: true,
        message: '¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.',
        type: 'success',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      setNotification({
        show: true,
        message: 'Error al enviar el mensaje. Por favor inténtalo nuevamente.',
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const closeNotification = () => {
    setNotification({
      show: false,
      message: '',
      type: 'success',
    });
  };

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <section id="contacto" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <Notification
        message={notification.show ? notification.message : ''}
        type={notification.type}
        onClose={closeNotification}
      />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Contáctame"
          subtitle="¿Tienes un proyecto en mente? Hablemos"
          align="left"
        />

        <div className="mt-12 grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1"
          >
            {contactLinks.map(({ href, title, value, icon: Icon, external }) => (
              <motion.a
                key={title}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="group rounded-[1.75rem] border border-white/10 bg-brand-panel p-6 shadow-soft transition duration-200 hover:border-brand-accent/30 hover:bg-brand-surface"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-brand-accent transition duration-200 group-hover:bg-brand-accent/10">
                  <Icon className="text-xl" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-brand-text">{title}</h3>
                <span className="mt-2 block text-sm text-brand-muted sm:text-base">{value}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.42, ease: 'easeOut', delay: 0.05 }}
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/10 bg-brand-panel p-6 shadow-panel sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="sr-only">
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="min-h-[52px] w-full rounded-2xl border border-white/10 bg-brand-card px-4 text-sm text-brand-text placeholder:text-brand-muted focus:border-brand-accent/40 sm:text-base"
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="email" className="sr-only">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="min-h-[52px] w-full rounded-2xl border border-white/10 bg-brand-card px-4 text-sm text-brand-text placeholder:text-brand-muted focus:border-brand-accent/40 sm:text-base"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="subject" className="sr-only">
                Asunto
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Asunto"
                value={formData.subject}
                onChange={handleChange}
                required
                className="min-h-[52px] w-full rounded-2xl border border-white/10 bg-brand-card px-4 text-sm text-brand-text placeholder:text-brand-muted focus:border-brand-accent/40 sm:text-base"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="sr-only">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Mensaje"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-[1.5rem] border border-white/10 bg-brand-card px-4 py-4 text-sm text-brand-text placeholder:text-brand-muted focus:border-brand-accent/40 sm:text-base"
              />
            </div>

            <motion.button
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.99 }}
              className="mt-6 inline-flex min-h-[50px] w-full items-center justify-center rounded-2xl border border-brand-accent/40 bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-base shadow-glow transition duration-200 hover:bg-[#2ecc71] sm:w-auto"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Enviar Mensaje'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
