"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Typewriter.module.css";

const phrases = [
    "Intelligent AI Systems",
    "LLM Applications",
    "Computer Vision Models",
    "ML Pipelines",
    "RAG Systems",
    "Generative AI Products",
];

export default function Typewriter() {
    const [text, setText] = useState("");
    const phraseIdx = useRef(0);
    const charIdx = useRef(0);
    const deleting = useRef(false);

    useEffect(() => {
        let timeout;

        function step() {
            const phrase = phrases[phraseIdx.current];

            if (deleting.current) {
                charIdx.current--;
                setText(phrase.substring(0, charIdx.current));
                if (charIdx.current === 0) {
                    deleting.current = false;
                    phraseIdx.current = (phraseIdx.current + 1) % phrases.length;
                    timeout = setTimeout(step, 400);
                } else {
                    timeout = setTimeout(step, 40);
                }
            } else {
                charIdx.current++;
                setText(phrase.substring(0, charIdx.current));
                if (charIdx.current === phrase.length) {
                    deleting.current = true;
                    timeout = setTimeout(step, 2000);
                } else {
                    timeout = setTimeout(step, 80);
                }
            }
        }

        timeout = setTimeout(step, 500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <span className={styles.wrapper}>
            <span className={styles.text}>{text}</span>
            <span className={styles.cursor}>|</span>
        </span>
    );
}
