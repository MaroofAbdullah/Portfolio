"use client";

import { useEffect, useRef } from "react";
import styles from "./ParticleHero.module.css";

export default function ParticleHero({ excludeRect }) {
    const canvasRef = useRef(null);
    const excludeRectRef = useRef(excludeRect);

    useEffect(() => {
        excludeRectRef.current = excludeRect;
    }, [excludeRect]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let animationId;
        let particles = [];
        let mouse = { x: undefined, y: undefined };

        function resize() {
            const wrapper = canvas.parentElement;
            if (!wrapper) return;
            canvas.width = wrapper.offsetWidth;
            canvas.height = wrapper.offsetHeight;
        }
        resize();
        window.addEventListener("resize", resize);

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };
        window.addEventListener("mousemove", handleMouseMove);

        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;

                // Avoid starting inside excludeRect
                if (excludeRectRef.current) {
                    const rect = excludeRectRef.current;
                    if (this.x > rect.left && this.x < rect.left + rect.width &&
                        this.y > rect.top && this.y < rect.top + rect.height) {
                        this.reset();
                        return;
                    }
                }

                // Multi-sized nodes for depth
                this.size = Math.random() > 0.8 ? Math.random() * 4 + 2 : Math.random() * 2 + 1;
                this.speedX = (Math.random() - 0.5) * 0.4;
                this.speedY = (Math.random() - 0.5) * 0.4;
                this.opacity = Math.random() * 0.5 + 0.3;
                this.color = Math.random() > 0.6 ? "108, 92, 231" : "0, 206, 201";
                this.isSquare = Math.random() > 0.5;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Avoid excludeRect (steering behavior)
                if (excludeRectRef.current) {
                    const rect = excludeRectRef.current;
                    const buffer = 50;
                    if (this.x > rect.left - buffer && this.x < rect.left + rect.width + buffer &&
                        this.y > rect.top - buffer && this.y < rect.top + rect.height + buffer) {

                        const centerX = rect.left + rect.width / 2;
                        const centerY = rect.top + rect.height / 2;
                        const dx = this.x - centerX;
                        const dy = this.y - centerY;
                        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

                        this.x += (dx / dist) * 1.5;
                        this.y += (dy / dist) * 1.5;
                    }
                }

                if (mouse.x !== undefined) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 250) {
                        const force = (250 - dist) / 250;
                        this.x -= dx * force * 0.03;
                        this.y -= dy * force * 0.03;
                    }
                }

                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.beginPath();

                if (this.isSquare) {
                    ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size);
                } else {
                    ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
                }

                ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
                ctx.fill();

                // Advanced Glow - Digital Pulse
                const glowSize = this.size * 6;
                const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, glowSize);
                gradient.addColorStop(0, `rgba(${this.color}, ${this.opacity * 0.4})`);
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

                ctx.beginPath();
                ctx.arc(0, 0, glowSize, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                ctx.restore();
            }
        }

        const count = Math.min(150, Math.floor((canvas.width * canvas.height) / 6000));
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }

        function connectParticles() {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 180) {
                        const opacity = (1 - dist / 180) * 0.4;
                        ctx.strokeStyle = `rgba(108, 92, 231, ${opacity})`;
                        // Thicker digital connections
                        ctx.lineWidth = dist < 80 ? 1.5 : 0.8;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }

            // Interactive mouse focus beam
            if (mouse.x !== undefined) {
                particles.forEach((p) => {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 220) {
                        const opacity = (1 - dist / 220) * 0.5;
                        ctx.strokeStyle = `rgba(0, 206, 201, ${opacity})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                });
            }
        }

        function animate() {
            // High-end digital trailing effect
            ctx.fillStyle = 'rgba(10, 10, 15, 0.15)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                p.update();
                p.draw();
            });
            connectParticles();
            animationId = requestAnimationFrame(animate);
        }
        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.canvas} />;
}
