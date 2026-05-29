import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

export default function Notification({ message, type, onClose }) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {message ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -20 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
            className={`w-full max-w-md rounded-[1.75rem] border bg-brand-panel p-6 shadow-panel ${
              type === 'success' ? 'border-emerald-500/40' : 'border-rose-500/40'
            }`}
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-brand-text">
                {type === 'success' ? '✅ Éxito!' : '❌ Error'}
              </h3>
              <p className="mt-4 text-sm leading-7 text-brand-muted sm:text-base">{message}</p>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-2xl border border-brand-accent/40 bg-brand-accent px-5 py-3 text-sm font-semibold text-brand-base transition duration-200 hover:bg-[#2ecc71]"
              >
                Aceptar
              </button>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
