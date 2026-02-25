"use client";

import { useEffect, useRef } from "react";

export default function ScrollReveal({ children, className = "", direction = "up", delay = 0 }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const transforms = {
            up: "translateY(40px)",
            left: "translateX(-40px)",
            right: "translateX(40px)",
        };

        el.style.opacity = "0";
        el.style.transform = transforms[direction] || transforms.up;
        el.style.transition = `all 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}s`;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.opacity = "1";
                    el.style.transform = "translate(0)";
                    observer.unobserve(el);
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );
        observer.observe(el);

        return () => observer.disconnect();
    }, [direction, delay]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
