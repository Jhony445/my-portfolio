import React, { useEffect, useMemo, useState } from 'react';
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { cn } from '../lib/cn';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = useMemo(
    () => [
      { to: 'home', text: 'Inicio' },
      { to: 'sobre-mi', text: 'Sobre Mí' },
      { to: 'proyectos', text: 'Proyectos' },
      { to: 'certificados', text: 'Certificados' },
      { to: 'contacto', text: 'Contacto', cta: true },
    ],
    []
  );

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    scroll.scrollToTop({ duration: 0 });
    scrollSpy.update();
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-brand-panel/90 px-4 py-3 shadow-soft backdrop-blur">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-96}
          onClick={closeMenu}
          className="flex cursor-pointer flex-col gap-0.5"
        >
          <span className="text-sm font-semibold tracking-tight text-brand-text sm:text-base lg:text-lg">
            Jonathan David Martinez Quistian
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand-muted sm:text-xs">
            {'// Dev FullStack'}
          </span>
        </Link>

        <button
          type="button"
          aria-label="Menú principal"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-text lg:hidden"
        >
          {isMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
        </button>

        <nav
          className={cn(
            'fixed inset-x-4 top-[88px] rounded-3xl border border-white/10 bg-brand-panel/95 p-5 shadow-panel backdrop-blur lg:static lg:inset-auto lg:flex lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none',
            isMenuOpen ? 'block' : 'hidden lg:flex'
          )}
        >
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-96}
                  spy={true}
                  onSetActive={() => setActiveSection(link.to)}
                  onClick={closeMenu}
                  className={cn(
                    'group relative inline-flex min-h-[44px] cursor-pointer items-center rounded-xl px-4 py-2 text-sm font-medium transition duration-200',
                    link.cta
                      ? cn(
                          'mt-2 justify-center border border-brand-accent/30 bg-brand-accent/15 text-brand-text hover:bg-brand-accent/20 lg:mt-0 lg:ml-2',
                          isActive && 'border-brand-accent/50 bg-brand-accent/20'
                        )
                      : cn(
                          'justify-center text-brand-muted hover:bg-white/5 hover:text-brand-text lg:justify-start',
                          isActive && 'bg-white/5 text-brand-text'
                        )
                  )}
                >
                  <span className="relative">
                    {link.text}
                    {!link.cta ? (
                      <span
                        className={cn(
                          'absolute -bottom-1 left-0 h-px w-full origin-left rounded-full bg-brand-accent transition-transform duration-200',
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        )}
                      />
                    ) : null}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
