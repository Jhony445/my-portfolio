import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import styles from "../styles/Projects.module.css";

const Projects = () => {
  const projects = [
    {
      title: "MiraxShare",
      description:
        "Aplicación WebRTC para compartir pantalla en tiempo real. Permite crear salas de señalización donde un host comparte su pantalla con viewers mediante conexión peer-to-peer directa.",
      tech: ["WebRTC", "WebSockets", "React", "Node.js"],
      image: "/miraxshare.png",
      url: "https://miraxshare.netlify.app/",
    },
  ];

  return (
    <section id="proyectos" className={styles.projectsSection}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className={styles.container}
      >
        <h2 className={styles.sectionTitle}>Mis Proyectos</h2>
        <p className={styles.sectionSubtitle}>
          Explora mis trabajos más recientes
        </p>

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