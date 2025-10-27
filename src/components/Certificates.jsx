import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/Certificates.module.css';

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certificates = [
        {
            title: "Linux Essentials",
            issuer: "Linux Professional Institute",
            date: "2022",
            image: "/certificados/certificadoLinux.png"
        },
        {
            title: "Fundamentos de Python 1",
            issuer: "Networking Academy",
            date: "2025",
            image: "/certificados/certificadoPython1.png"
        },
        {
            title: "Curso de Iniciación al Desarrollo con IA",
            issuer: "BIG School (Brais Moure & Romuald Fons)",
            date: "2025",
            image: "/certificados/certificadoIA.png"
        }
    ];

    const openModal = (cert) => {
        setSelectedCert(cert);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedCert(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="certificados" className={styles.certificatesSection}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={styles.container}
            >
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>Certificaciones</h2>
                    <p className={styles.sectionSubtitle}>Credenciales que validan mi conocimiento y habilidades</p>
                </div>

                <div className={styles.certificatesGrid}>
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            className={styles.certificateCard}
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            onClick={() => openModal(cert)}
                        >
                            <div className={styles.imageContainer}>
                                <img src={cert.image} alt={cert.title} className={styles.image} />
                            </div>

                            <div className={styles.content}>
                                <h3 className={styles.title}>{cert.title}</h3>
                                <div className={styles.meta}>
                                    <span className={styles.issuer}>{cert.issuer}</span>
                                    <span className={styles.date}>{cert.date}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal para vista ampliada */}
                <AnimatePresence>
                    {selectedCert && (
                        <div className={styles.modalOverlay} onClick={closeModal}>
                            <motion.div
                                className={styles.modalContent}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className={styles.closeButton} onClick={closeModal}>
                                    &times;
                                </button>
                                <img
                                    src={selectedCert.image}
                                    alt={`Certificado - ${selectedCert.title}`}
                                    className={styles.modalImage}
                                />
                                <div className={styles.modalInfo}>
                                    <h3>{selectedCert.title}</h3>
                                    <p>{selectedCert.issuer} | {selectedCert.date}</p>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default Certificates;