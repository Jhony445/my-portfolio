import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../lib/cn';

export default function SectionHeading({ title, subtitle, align = 'center', className }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={cn(
        'flex max-w-3xl flex-col gap-4',
        align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left',
        className
      )}
    >
      <h2 className="text-3xl font-semibold tracking-tight text-brand-text sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-base leading-7 text-brand-muted sm:text-lg sm:leading-8">{subtitle}</p>
      ) : null}
    </motion.div>
  );
}
