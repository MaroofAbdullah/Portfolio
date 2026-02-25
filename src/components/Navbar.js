"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    M<span className={styles.bracket}>.</span>Abdullah
                </Link>

                <ul className={`${styles.links} ${mobileOpen ? styles.active : ""}`}>
                    <li><Link href="/#about" className={styles.link} onClick={() => setMobileOpen(false)}>About</Link></li>
                    <li><Link href="/#skills" className={styles.link} onClick={() => setMobileOpen(false)}>Skills</Link></li>
                    <li><Link href="/#projects" className={styles.link} onClick={() => setMobileOpen(false)}>Projects</Link></li>
                    <li><Link href="/#experience" className={styles.link} onClick={() => setMobileOpen(false)}>Experience</Link></li>
                    <li><Link href="/#contact" className={styles.link} onClick={() => setMobileOpen(false)}>Contact</Link></li>
                </ul>

                <Link href="/#contact" className={styles.cta}>Let&apos;s Talk</Link>

                <button
                    className={`${styles.toggle} ${mobileOpen ? styles.toggleActive : ""}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation"
                >
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    );
}
