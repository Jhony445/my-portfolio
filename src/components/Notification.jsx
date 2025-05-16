// src/components/Notification.jsx
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/Notification.module.css';

const Notification = ({ message, type, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <div className={styles.overlay}  onClick={onClose}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`${styles.notification} ${styles[type]}`}
             onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.content}>
              <h3>{type === 'success' ? '✅ Éxito!' : '❌ Error'}</h3>
              <p>{message}</p>
              <button 
                onClick={onClose}
                className={styles.closeButton}
              >
                Aceptar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Notification;