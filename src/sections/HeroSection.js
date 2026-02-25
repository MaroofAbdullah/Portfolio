"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import ParticleHero from "@/components/ParticleHero";
import Typewriter from "@/components/Typewriter";
import NeuralNetwork from "@/components/NeuralNetwork";
import CountUp from "@/components/CountUp";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
    const visualRef = useRef(null);
    const [excludeRect, setExcludeRect] = useState(null);

    useEffect(() => {
        const updateRect = () => {
            if (visualRef.current) {
                const rect = visualRef.current.getBoundingClientRect();
                const wrapperRect = visualRef.current.closest('section').getBoundingClientRect();
                setExcludeRect({
                    left: rect.left - wrapperRect.left,
                    top: rect.top - wrapperRect.top,
                    width: rect.width,
                    height: rect.height
                });
            }
        };

        updateRect();
        window.addEventListener('resize', updateRect);
        return () => window.removeEventListener('resize', updateRect);
    }, []);

    return (
        <section className={styles.heroWrapper} id="hero">
            <ParticleHero excludeRect={excludeRect} />
            <div className={styles.heroContainer}>
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot} />
                        Available for Opportunities
                    </div>

                    <h1 className={styles.title}>
                        <span className={styles.greeting}>Hi, I&apos;m</span>
                        <span className={styles.name}>Maroof Abdullah</span>
                        <span className={styles.role}>
                            <span className={styles.rolePrefix}>I build</span>
                            <Typewriter />
                        </span>
                    </h1>

                    <p className={styles.description}>
                        AI Engineer passionate about crafting intelligent systems that push
                        the boundaries of what&apos;s possible. From large language models to
                        computer vision — I turn complex problems into elegant, scalable
                        solutions.
                    </p>

                    <div className={styles.actions}>
                        <Link href="#projects" className="btn btn-primary">
                            <span>View My Work</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                            </svg>
                        </Link>
                        <Link href="#contact" className="btn btn-outline">
                            <span>Get In Touch</span>
                        </Link>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>
                                <CountUp target={15} />
                                <span className={styles.statPlus}>+</span>
                            </span>
                            <span className={styles.statLabel}>Projects Delivered</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>
                                <CountUp target={3} />
                                <span className={styles.statPlus}>+</span>
                            </span>
                            <span className={styles.statLabel}>Years Experience</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>
                                <CountUp target={5} />
                                <span className={styles.statPlus}>+</span>
                            </span>
                            <span className={styles.statLabel}>AI Models Deployed</span>
                        </div>
                    </div>
                </div>

                <div className={styles.visual} ref={visualRef}>
                    <NeuralNetwork />
                </div>

                <div className={styles.scrollIndicator}>
                    <div className={styles.scrollLine} />
                    <span>Scroll</span>
                </div>
            </div>
        </section>
    );
}
