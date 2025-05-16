// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMessageSquare, FiGithub } from 'react-icons/fi';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <section id="contacto" className={styles.contactSection}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className={styles.container}
      >
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Contáctame</h2>
          <p className={styles.sectionSubtitle}>¿Tienes un proyecto en mente? Hablemos</p>
        </div>

        <div className={styles.contentGrid}>
          {/* Columna de Información de Contacto */}
          <div className={styles.contactInfo}>
            <div className={styles.contactCard}>
              <FiPhone className={styles.contactIcon} />
              <h3 className={styles.contactTitle}>Teléfono</h3>
              <a href="tel:+525514712961" className={styles.contactLink}>
                +52 55 1471 2961
              </a>
            </div>

            <div className={styles.contactCard}>
              <FiMessageSquare className={styles.contactIcon} />
              <h3 className={styles.contactTitle}>WhatsApp</h3>
              <a 
                href="https://wa.me/525514712961" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.contactLink}
              >
                Enviar mensaje directo
              </a>
            </div>

            <div className={styles.contactCard}>
              <FiGithub className={styles.contactIcon} />
              <h3 className={styles.contactTitle}>GitHub</h3>
              <a 
                href="https://github.com/tuusuario" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.contactLink}
              >
                Ver mis repositorios
              </a>
            </div>
          </div>

          {/* Columna del Formulario */}
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input 
                type="text" 
                placeholder="Nombre"
                className={styles.formInput}
              />
            </div>
            
            <div className={styles.formGroup}>
              <input 
                type="email" 
                placeholder="Correo electrónico"
                className={styles.formInput}
              />
            </div>
            
            <div className={styles.formGroup}>
              <input 
                type="text" 
                placeholder="Asunto"
                className={styles.formInput}
              />
            </div>
            
            <div className={styles.formGroup}>
              <textarea 
                placeholder="Mensaje"
                className={styles.formTextarea}
                rows="5"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.submitButton}
              type="submit"
            >
              Enviar Mensaje
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}