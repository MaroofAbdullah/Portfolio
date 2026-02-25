"use client";

import { useEffect, useRef } from "react";
import styles from "./NeuralNetwork.module.css";

export default function NeuralNetwork() {
    const svgRef = useRef(null);

    useEffect(() => {
        const svg = svgRef.current;
        if (!svg) return;

        const layers = [
            { nodes: 4, x: 60 },
            { nodes: 6, x: 140 },
            { nodes: 8, x: 220 },
            { nodes: 6, x: 300 },
            { nodes: 3, x: 370 },
        ];

        const nodePositions = [];
        let content = "";

        layers.forEach((layer) => {
            const positions = [];
            const totalH = (layer.nodes - 1) * 40;
            const startY = (400 - totalH) / 2;
            for (let i = 0; i < layer.nodes; i++) {
                positions.push({ x: layer.x, y: startY + i * 40 });
            }
            nodePositions.push(positions);
        });

        for (let l = 0; l < nodePositions.length - 1; l++) {
            for (let a = 0; a < nodePositions[l].length; a++) {
                for (let b = 0; b < nodePositions[l + 1].length; b++) {
                    const from = nodePositions[l][a];
                    const to = nodePositions[l + 1][b];
                    const o = (Math.random() * 0.15 + 0.05).toFixed(3);
                    content += `<line x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}" stroke="rgba(108,92,231,${o})" stroke-width="0.8"/>`;
                }
            }
        }

        const colors = ["#6c5ce7", "#00cec9", "#fd79a8", "#82aaff", "#c3e88d"];
        nodePositions.forEach((layer, li) => {
            layer.forEach((pos, ni) => {
                const c = colors[(li + ni) % colors.length];
                const d1 = (2 + Math.random() * 3).toFixed(1);
                const d2 = (3 + Math.random() * 2).toFixed(1);
                content += `
          <circle cx="${pos.x}" cy="${pos.y}" r="6" fill="${c}" opacity="0.7">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="${d1}s" repeatCount="indefinite"/>
            <animate attributeName="r" values="5;7;5" dur="${d2}s" repeatCount="indefinite"/>
          </circle>
          <circle cx="${pos.x}" cy="${pos.y}" r="12" fill="none" stroke="${c}" stroke-width="0.5" opacity="0.2">
            <animate attributeName="r" values="10;16;10" dur="${d2}s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.2;0.05;0.2" dur="${d2}s" repeatCount="indefinite"/>
          </circle>`;
            });
        });

        for (let i = 0; i < 8; i++) {
            const l = Math.floor(Math.random() * (nodePositions.length - 1));
            const a = Math.floor(Math.random() * nodePositions[l].length);
            const b = Math.floor(Math.random() * nodePositions[l + 1].length);
            const from = nodePositions[l][a];
            const to = nodePositions[l + 1][b];
            const dur = (1.5 + Math.random() * 2).toFixed(1);
            const delay = (Math.random() * 3).toFixed(1);
            content += `
        <circle r="2" fill="#00cec9" opacity="0.8">
          <animateMotion dur="${dur}s" begin="${delay}s" repeatCount="indefinite"
            path="M${from.x},${from.y} L${to.x},${to.y}"/>
          <animate attributeName="opacity" values="0;0.8;0" dur="${dur}s" begin="${delay}s" repeatCount="indefinite"/>
        </circle>`;
        }

        svg.innerHTML = content;
    }, []);

    return (
        <div className={styles.wrapper}>
            <svg ref={svgRef} viewBox="0 0 400 400" className={styles.svg} />
        </div>
    );
}
