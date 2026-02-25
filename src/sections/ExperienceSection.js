import ScrollReveal from "@/components/ScrollReveal";
import styles from "./ExperienceSection.module.css";

const experienceData = [
    {
        role: "AI Engineer",
        company: "Tech Innovation Labs",
        date: "2024 — Present",
        details: [
            "Lead development of RAG-based document intelligence systems serving 10K+ daily queries",
            "Architected end-to-end ML pipelines reducing model deployment time by 60%",
            "Fine-tuned large language models for domain-specific applications with 94% accuracy",
        ],
    },
    {
        role: "Machine Learning Engineer",
        company: "DataDriven Solutions",
        date: "2023 — 2024",
        details: [
            "Built computer vision models for real-time quality inspection on production lines",
            "Developed NLP pipelines for automated report generation and sentiment analysis",
            "Implemented MLOps best practices with MLflow, Docker, and CI/CD pipelines",
        ],
    },
    {
        role: "AI Research Intern",
        company: "AI Research Center",
        date: "2022 — 2023",
        details: [
            "Published research on efficient attention mechanisms for transformer architectures",
            "Developed novel data augmentation strategies improving model accuracy by 12%",
            "Contributed to open-source NLP toolkits used by 5000+ developers",
        ],
    },
];

export default function ExperienceSection() {
    return (
        <section className="section" id="experience">
            <div className="container">
                <ScrollReveal>
                    <div className="section-header">
                        <span className="section-tag">{"// experience"}</span>
                        <h2 className="section-title">
                            Where I&apos;ve <span className="gradient-text">Worked</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className={styles.timeline}>
                    {experienceData.map((item, idx) => (
                        <ScrollReveal key={idx} delay={idx * 0.1}>
                            <div className={styles.item}>
                                <div className={styles.marker} />
                                <div className={styles.content}>
                                    <div className={styles.header}>
                                        <h3>{item.role}</h3>
                                        <span className={styles.company}>{item.company}</span>
                                    </div>
                                    <span className={styles.date}>{item.date}</span>
                                    <ul className={styles.details}>
                                        {item.details.map((detail, dIdx) => (
                                            <li key={dIdx}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
