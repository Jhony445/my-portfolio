import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import styles from '../styles/Projects.module.css';

const Projects = () => {
    const projects = [
        {
            title: "Sistema Hotelero",
            description: "App móvil para la gestión completa de hoteles: reservas, control de habitaciones y estadísticas de ingresos.",
            tech: ["React Native", "Firebase", "Node.js"],
            image: "/hotel-app.jpg",
            demo: "#",
            code: "#"
        },
        {
            title: "Conexión Femenina",
            description: "Plataforma web en PHP y MySQL para que mujeres compartan música, eventos y recursos, fomentando una comunidad activa.",
            tech: ["PHP", "MySQL", "JavaScript"],
            image: "/volverasoniar.png",
            demo: "#",
            code: "#"
        },
        {
            title: "Proyecto Integrador",
            description: "Aplicación full‑stack con Angular en frontend y .NET Core 8 Web API, respaldada por una base de datos en Google Cloud.",
            tech: [".NET Core 8 Web API", "Angular", "Google Cloud SQL"],
            image: "/malo.png",
            demo: "#",
            code: "#"
        }
    ];


    return (
        <section id="proyectos" className={styles.projectsSection}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={styles.container}
            >
                <h2 className={styles.sectionTitle}>Proyectos Destacados</h2>
                <p className={styles.sectionSubtitle}>Explora mis trabajos más recientes</p>

                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;