"use client";

import { useEffect, useRef } from "react";
import styles from "./CursorGlow.module.css";

export default function CursorGlow() {
    const glowRef = useRef(null);

    useEffect(() => {
        const glow = glowRef.current;
        let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;

        const handleMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        document.addEventListener("mousemove", handleMove);

        let animId;
        function animate() {
            glowX += (mouseX - glowX) * 0.08;
            glowY += (mouseY - glowY) * 0.08;
            if (glow) {
                glow.style.left = glowX + "px";
                glow.style.top = glowY + "px";
            }
            animId = requestAnimationFrame(animate);
        }
        animate();

        return () => {
            document.removeEventListener("mousemove", handleMove);
            cancelAnimationFrame(animId);
        };
    }, []);

    return <div ref={glowRef} className={styles.glow} />;
}
