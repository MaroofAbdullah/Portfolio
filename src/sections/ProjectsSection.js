import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/data/projects";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
    return (
        <section className="section" id="projects">
            <div className="container">
                <ScrollReveal>
                    <div className="section-header">
                        <span className="section-tag">{"// featured work"}</span>
                        <h2 className="section-title">
                            Things I&apos;ve <span className="gradient-text">Built</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className={styles.grid}>
                    {projects.map((project, idx) => (
                        <ScrollReveal
                            key={project.id}
                            delay={idx * 0.1}
                            className={`${styles.cardWrapper} ${project.featured ? styles.featuredWrapper : ""}`}
                        >
                            <div className={`${styles.card} ${project.featured ? styles.featured : ""}`}>
                                <div className={styles.imageArea} style={{ background: project.gradient }}>
                                    <span className={styles.icon}>{project.icon}</span>
                                    <div className={styles.overlay}>
                                        <Link href={`/projects/${project.id}`} className={styles.link} aria-label="View details">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                        </Link>
                                        <a href={project.githubUrl} className={styles.link} aria-label="View source code">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.info}>
                                    {project.featured && <span className={styles.label}>Featured Project</span>}
                                    <h3 className={styles.title}>{project.title}</h3>
                                    <p className={styles.description}>{project.shortDescription}</p>
                                    <div className={styles.tags}>
                                        {project.tags.map((tag) => (
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                    <Link href={`/projects/${project.id}`} className={styles.viewMore}>
                                        View Case Study
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
