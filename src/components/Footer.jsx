import { Link } from 'react-scroll';
import { FaGithub } from 'react-icons/fa';
import { FiDownload, FiMail, FiMessageSquare } from 'react-icons/fi';

const navLinks = [
  { to: 'home', text: 'Inicio' },
  { to: 'sobre-mi', text: 'Sobre Mí' },
  { to: 'proyectos', text: 'Proyectos' },
  { to: 'certificados', text: 'Certificados' },
  { to: 'contacto', text: 'Contacto' },
];

const contactLinks = [
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

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-base px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,1fr)] lg:items-start">
        <div className="space-y-3">
          <p className="text-xl font-semibold tracking-tight text-brand-text">
            Jonathan David Martinez Quistian
          </p>
          <p className="font-mono text-sm text-brand-muted">{'// Dev FullStack'}</p>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm text-brand-muted sm:gap-6 lg:flex-col lg:gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-96}
              className="cursor-pointer transition hover:text-brand-text"
            >
              {link.text}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap gap-3">
          {contactLinks.map(({ href, label, icon: Icon, external, download }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              download={download ? true : undefined}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-brand-muted transition duration-200 hover:border-brand-accent/30 hover:bg-brand-accent/10 hover:text-brand-text"
            >
              <Icon className="text-base" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
