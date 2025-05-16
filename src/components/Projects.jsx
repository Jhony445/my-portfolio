import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import styles from '../styles/Projects.module.css';

const Projects = () => {
    const projects = [
        {
            title: "Sistema Hotelero",
            description: "Aplicación móvil para gestión de hoteles con React Native y Firebase",
            tech: ["React Native", "Firestore", "Node.js"],
            image: "/hotel-app.jpg",
            demo: "#",
            code: "#"
        },
        {
            title: "Plataforma Educativa",
            description: "Sistema web para gestión de contenido educativo con .NET Core y React",
            tech: [".NET Core", "React", "SQL Server"],
            image: "/edu-platform.jpg",
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