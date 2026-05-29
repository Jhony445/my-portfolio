import { motion, useReducedMotion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiDownload, FiMail, FiMessageSquare } from 'react-icons/fi';

const socialLinks = [
  {
    href: 'mailto:Jonathan_058@hotmail.com',
    label: 'Correo',
    icon: FiMail,
  },
  {
    href: 'https://github.com/Jhony445',
    label: 'GitHub',
    icon: FaGithub,
    external: true,
  },
  {
    href: 'https://wa.me/525514712961',
    label: 'WhatsApp',
    icon: FiMessageSquare,
    external: true,
  },
  {
    href: '/cv-jonathan-david-martinez-quistian.pdf',
    label: 'Descargar CV',
    icon: FiDownload,
    download: true,
  },
];

export default function SocialRail() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.aside
      initial={reduceMotion ? false : { opacity: 0, x: -16 }}
      animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: 0.15 }}
      className="pointer-events-none fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
      aria-label="Enlaces sociales"
    >
      <div className="pointer-events-auto flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-brand-panel/90 p-3 shadow-soft backdrop-blur">
        {socialLinks.map(({ href, label, icon: Icon, external, download }) => (
          <a
            key={label}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            download={download ? true : undefined}
            aria-label={label}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-transparent bg-white/5 text-brand-muted transition duration-200 hover:border-brand-accent/30 hover:bg-brand-accent/10 hover:text-brand-text"
          >
            <Icon className="text-lg" />
          </a>
        ))}
      </div>
    </motion.aside>
  );
}
