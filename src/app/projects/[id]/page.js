import Link from "next/link";
import { projects } from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./ProjectPage.module.css";

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default function ProjectPage({ params }) {
    const { id } = params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className={styles.notFound}>
                <h1>Project Not Found</h1>
                <Link href="/" className="btn btn-primary">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero} style={{ background: project.gradient }}>
                <div className="container">
                    <Link href="/#projects" className={styles.backLink}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
                        Back to Projects
                    </Link>
                    <ScrollReveal direction="up">
                        <div className={styles.heroContent}>
                            <span className={styles.projectIcon}>{project.icon}</span>
                            <h1 className={styles.title}>{project.title}</h1>
                            <p className={styles.tagline}>{project.shortDescription}</p>
                            <div className={styles.meta}>
                                <div className={styles.metaItem}>
                                    <span>Role</span>
                                    <strong>{project.role}</strong>
                                </div>
                                <div className={styles.metaItem}>
                                    <span>Year</span>
                                    <strong>{project.year}</strong>
                                </div>
                                <div className={styles.metaItem}>
                                    <span>Duration</span>
                                    <strong>{project.duration}</strong>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.contentSection}>
                <div className="container">
                    <div className={styles.grid}>
                        {/* Left: Overview & Highlights */}
                        <div className={styles.mainCol}>
                            <ScrollReveal direction="up" delay={0.2}>
                                <div className={styles.block}>
                                    <h2 className={styles.blockTitle}>Overview</h2>
                                    <div className={styles.description}>
                                        {project.fullDescription.split('\n\n').map((para, i) => (
                                            <p key={i}>{para}</p>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="up" delay={0.3}>
                                <div className={styles.block}>
                                    <h2 className={styles.blockTitle}>Key Highlights</h2>
                                    <ul className={styles.highlights}>
                                        {project.highlights.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right: Tech Stack & Links */}
                        <aside className={styles.sidebar}>
                            <ScrollReveal direction="right" delay={0.4}>
                                <div className={styles.sidebarBlock}>
                                    <h2 className={styles.sidebarTitle}>Technologies</h2>
                                    <div className={styles.techCategories}>
                                        {Object.entries(project.techStack).map(([cat, items]) => (
                                            <div key={cat} className={styles.techCat}>
                                                <span className={styles.catName}>{cat}</span>
                                                <div className={styles.techTags}>
                                                    {items.map((item) => (
                                                        <span key={item} className={styles.techTag}>{item}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="right" delay={0.5}>
                                <div className={styles.sidebarBlock}>
                                    <h2 className={styles.sidebarTitle}>Links</h2>
                                    <div className={styles.projectLinks}>
                                        <a href={project.liveUrl} className="btn btn-primary btn-full">
                                            Live Demo
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                        </a>
                                        <a href={project.githubUrl} className="btn btn-outline btn-full">
                                            Source Code
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Navigation to next project */}
            <section className={styles.nextProject}>
                <div className="container">
                    <ScrollReveal direction="up">
                        <Link href="/" className={styles.backToHome}>
                            Back to Home
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
