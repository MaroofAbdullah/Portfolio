import ScrollReveal from "@/components/ScrollReveal";
import styles from "./SkillsSection.module.css";

const skillsData = [
    {
        category: "Machine Learning",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
        ),
        items: ["PyTorch", "TensorFlow", "scikit-learn", "Keras", "JAX", "XGBoost"],
    },
    {
        category: "NLP & GenAI",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
        ),
        items: ["Transformers", "LangChain", "OpenAI API", "Hugging Face", "RAG Systems", "Fine-tuning"],
    },
    {
        category: "Computer Vision",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
        ),
        items: ["OpenCV", "YOLO", "Detectron2", "MediaPipe", "Diffusion Models", "GANs"],
    },
    {
        category: "MLOps & Cloud",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" /></svg>
        ),
        items: ["Docker", "Kubernetes", "AWS SageMaker", "MLflow", "FastAPI", "CI/CD"],
    },
    {
        category: "Programming",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
        ),
        items: ["Python", "JavaScript", "SQL", "C++", "Bash", "R"],
    },
    {
        category: "Tools & Data",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
        ),
        items: ["Git & GitHub", "PostgreSQL", "MongoDB", "Pinecone", "Weights & Biases", "Jupyter"],
    },
];

export default function SkillsSection() {
    return (
        <section className="section" id="skills">
            <div className="container">
                <ScrollReveal>
                    <div className="section-header">
                        <span className="section-tag">{"// skills & expertise"}</span>
                        <h2 className="section-title">
                            My <span className="gradient-text">Tech Stack</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className={styles.grid}>
                    {skillsData.map((skill, idx) => (
                        <ScrollReveal key={idx} delay={idx * 0.1}>
                            <div className={styles.category}>
                                <h3 className={styles.categoryTitle}>
                                    {skill.icon}
                                    {skill.category}
                                </h3>
                                <div className={styles.items}>
                                    {skill.items.map((item, i) => (
                                        <div key={i} className={styles.item}>
                                            <span className={styles.dot} />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
