import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMessageSquare, FiGithub, FiMail } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import styles from '../styles/Contact.module.css';
import Notification from './Notification';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: 'success'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setNotification({
        show: true,
        message: '¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.',
        type: 'success'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      setNotification({
        show: true,
        message: 'Error al enviar el mensaje. Por favor inténtalo nuevamente.',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const closeNotification = () => {
    setNotification({
      show: false,
      message: '',
      type: 'success'
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className={styles.contactSection}>
      <Notification
        message={notification.show ? notification.message : ''}
        type={notification.type}
        onClose={closeNotification}
      />
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
              <FiMail className={styles.contactIcon} />
              <h3 className={styles.contactTitle}>Correo</h3>
              <a href="mailto:Jonathan_058@hotmail.com" className={styles.contactLink}>
                Jonathan_058@hotmail.com
              </a>
            </div>

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
                href="https://github.com/JonathanMartinezQ"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                Ver mis repositorios
              </a>
            </div>
          </div>

          {/* Columna del Formulario */}
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                className={styles.formInput}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className={styles.formInput}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="text"
                name="subject"
                placeholder="Asunto"
                className={styles.formInput}
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Mensaje"
                className={styles.formTextarea}
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.submitButton}
              type="submit"
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Enviar Mensaje'}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}