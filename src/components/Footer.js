import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <p>
                        Designed & Built by{" "}
                        <span className="gradient-text">Maroof Abdullah</span>
                    </p>
                    <p className={styles.year}>© 2026 — All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
