import ScrollReveal from "@/components/ScrollReveal";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
    return (
        <section className="section" id="about">
            <div className="container">
                <ScrollReveal>
                    <div className="section-header">
                        <span className="section-tag">{"// about me"}</span>
                        <h2 className="section-title">
                            Transforming Ideas Into{" "}
                            <span className="gradient-text">Intelligent Systems</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className={styles.grid}>
                    <ScrollReveal direction="left">
                        <div className={styles.content}>
                            <p className={styles.text}>
                                I&apos;m an AI Engineer who thrives at the intersection of research
                                and production. With a deep understanding of machine learning
                                architectures and software engineering best practices, I design,
                                build, and deploy AI systems that deliver real-world impact.
                            </p>
                            <p className={styles.text}>
                                My expertise spans across{" "}
                                <strong>Natural Language Processing</strong>,{" "}
                                <strong>Computer Vision</strong>,{" "}
                                <strong>Generative AI</strong>, and <strong>MLOps</strong>. I
                                believe in building AI that is not just intelligent, but also
                                responsible, scalable, and accessible.
                            </p>

                            <div className={styles.highlights}>
                                {[
                                    {
                                        icon: (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                        ),
                                        title: "Deep Learning",
                                        desc: "Building & fine-tuning neural architectures for complex tasks",
                                    },
                                    {
                                        icon: (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                        ),
                                        title: "NLP & LLMs",
                                        desc: "Creating intelligent language systems & conversational AI",
                                    },
                                    {
                                        icon: (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
                                        ),
                                        title: "MLOps",
                                        desc: "End-to-end ML pipelines from prototype to production",
                                    },
                                ].map((item, i) => (
                                    <div key={i} className={styles.highlightCard}>
                                        <div className={styles.highlightIcon}>{item.icon}</div>
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right">
                        <div className={styles.codeWindow}>
                            <div className={styles.codeHeader}>
                                <div className={styles.codeDots}>
                                    <span className={styles.dotRed} />
                                    <span className={styles.dotYellow} />
                                    <span className={styles.dotGreen} />
                                </div>
                                <span className={styles.codeFilename}>maroof_abdullah.py</span>
                            </div>
                            <pre className={styles.codeBody}>
                                <code>
                                    {`class `}<span className={styles.cls}>AIEngineer</span>{`:
    def `}<span className={styles.func}>__init__</span>{`(`}<span className={styles.param}>self</span>{`):
        `}<span className={styles.param}>self</span>{`.name = `}<span className={styles.str}>&quot;Maroof Abdullah&quot;</span>{`
        `}<span className={styles.param}>self</span>{`.role = `}<span className={styles.str}>&quot;AI Engineer&quot;</span>{`
        `}<span className={styles.param}>self</span>{`.languages = [
            `}<span className={styles.str}>&quot;Python&quot;</span>{`, `}<span className={styles.str}>&quot;JavaScript&quot;</span>{`,
            `}<span className={styles.str}>&quot;SQL&quot;</span>{`, `}<span className={styles.str}>&quot;C++&quot;</span>{`
        ]
        `}<span className={styles.param}>self</span>{`.passion = `}<span className={styles.str}>&quot;Building AI
                                        that matters&quot;</span>{`

    def `}<span className={styles.func}>get_skills</span>{`(`}<span className={styles.param}>self</span>{`):
        return {
            `}<span className={styles.str}>&quot;ML&quot;</span>{`: [`}<span className={styles.str}>&quot;PyTorch&quot;</span>{`, `}<span className={styles.str}>&quot;TF&quot;</span>{`],
            `}<span className={styles.str}>&quot;NLP&quot;</span>{`: [`}<span className={styles.str}>&quot;Transformers&quot;</span>{`],
            `}<span className={styles.str}>&quot;MLOps&quot;</span>{`: [`}<span className={styles.str}>&quot;Docker&quot;</span>{`, `}<span className={styles.str}>&quot;AWS&quot;</span>{`]
        }`}
                                </code>
                            </pre>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
