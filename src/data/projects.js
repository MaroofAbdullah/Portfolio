export const projects = [
    {
        id: "document-intelligence",
        title: "AI-Powered Document Intelligence",
        shortDescription:
            "An end-to-end RAG system that ingests enterprise documents, builds semantic vector indices, and enables natural language querying.",
        fullDescription: `
This project represents a comprehensive Retrieval-Augmented Generation (RAG) system designed 
for enterprise document understanding. The system can ingest various document formats — PDFs, 
Word documents, spreadsheets, and even scanned images — process them through a multi-modal 
pipeline, and build rich semantic vector indices in Pinecone.

Users can query the knowledge base using natural language, and the system returns accurate, 
contextually relevant answers with precise citations back to the source documents. The system 
features a sophisticated chunking strategy that preserves document structure, a re-ranking step 
using cross-encoders for improved retrieval accuracy, and a feedback loop for continuous improvement.

The frontend was built with React and features a clean chat interface with document preview 
capabilities, while the backend uses FastAPI for high-performance API endpoints.
    `,
        tags: ["LangChain", "Pinecone", "GPT-4", "FastAPI", "React"],
        gradient: "linear-gradient(135deg, #6c5ce7, #0984e3)",
        icon: "🤖",
        featured: true,
        highlights: [
            "Processes 50+ document formats including scanned PDFs via OCR",
            "Sub-second query response with 95%+ retrieval accuracy",
            "Multi-tenant architecture supporting 100+ concurrent users",
            "Automated citation generation with page-level references",
            "Continuous learning from user feedback to improve responses",
        ],
        techStack: {
            "AI / ML": ["LangChain", "OpenAI GPT-4", "Cross-Encoder Reranking", "Sentence Transformers"],
            Backend: ["FastAPI", "Python", "Celery", "Redis"],
            "Vector DB": ["Pinecone", "FAISS (fallback)"],
            Frontend: ["React", "TypeScript", "TanStack Query"],
            Infrastructure: ["Docker", "AWS ECS", "S3", "CloudWatch"],
        },
        liveUrl: "#",
        githubUrl: "#",
        year: "2025",
        duration: "4 months",
        role: "Lead AI Engineer",
    },
    {
        id: "object-detection",
        title: "Real-Time Object Detection System",
        shortDescription:
            "Custom YOLOv8-based detection pipeline for manufacturing defect identification achieving 97.3% mAP.",
        fullDescription: `
A production-grade computer vision system designed for real-time quality inspection in 
manufacturing environments. The system uses a custom-trained YOLOv8 model optimized for 
detecting micro-defects on production lines at speeds exceeding 60 FPS on edge devices.

The pipeline includes automated data annotation using semi-supervised learning, model 
versioning with DVC, and seamless edge deployment with TensorRT optimization. The system 
achieved a 97.3% mAP score and reduced manual inspection costs by 40%.

A real-time monitoring dashboard displays live detection results, historical analytics, 
and automated alerts when defect rates exceed configurable thresholds.
    `,
        tags: ["YOLOv8", "TensorRT", "OpenCV", "Docker"],
        gradient: "linear-gradient(135deg, #00b894, #00cec9)",
        icon: "👁️",
        featured: false,
        highlights: [
            "97.3% mAP with 60+ FPS on NVIDIA Jetson edge devices",
            "Semi-supervised annotation pipeline reducing labeling effort by 70%",
            "Model versioning and experiment tracking with DVC and W&B",
            "TensorRT INT8 quantization for 3x inference speedup",
            "Real-time alerting system with configurable defect thresholds",
        ],
        techStack: {
            "AI / ML": ["YOLOv8", "TensorRT", "ONNX Runtime", "Albumentations"],
            "Computer Vision": ["OpenCV", "Supervision", "Roboflow"],
            Backend: ["FastAPI", "Python", "PostgreSQL"],
            Edge: ["NVIDIA Jetson", "TensorRT", "DeepStream"],
            Infrastructure: ["Docker", "DVC", "Weights & Biases", "GitHub Actions"],
        },
        liveUrl: "#",
        githubUrl: "#",
        year: "2024",
        duration: "3 months",
        role: "ML Engineer",
    },
    {
        id: "predictive-analytics",
        title: "Predictive Analytics Engine",
        shortDescription:
            "ML-powered forecasting system for supply chain optimization, reducing inventory costs by 23%.",
        fullDescription: `
A sophisticated machine learning system that combines ensemble methods with modern time-series 
transformer architectures for accurate demand forecasting in supply chain management. The system 
processes historical sales data, external signals (weather, events, promotions), and market 
trends to generate multi-horizon demand predictions.

The architecture features a Temporal Fusion Transformer as the primary model, with XGBoost 
and LightGBM ensembles serving as complementary models. A meta-learner combines predictions 
from all models for optimal accuracy.

The system reduced inventory holding costs by 23% and stockout events by 35% for the client, 
with predictions served through an interactive Streamlit dashboard for business stakeholders.
    `,
        tags: ["XGBoost", "Temporal Fusion", "AWS", "Streamlit"],
        gradient: "linear-gradient(135deg, #e17055, #fdcb6e)",
        icon: "📊",
        featured: false,
        highlights: [
            "23% reduction in inventory costs through accurate demand forecasting",
            "35% fewer stockout events across 500+ SKUs",
            "Multi-horizon forecasting from 1 day to 90 days ahead",
            "Automated feature engineering from 50+ external data sources",
            "Interactive Streamlit dashboard for business stakeholders",
        ],
        techStack: {
            "AI / ML": ["Temporal Fusion Transformer", "XGBoost", "LightGBM", "Prophet"],
            "Data Engineering": ["Apache Airflow", "Pandas", "Polars"],
            Backend: ["Python", "FastAPI", "PostgreSQL"],
            Frontend: ["Streamlit", "Plotly", "Altair"],
            Infrastructure: ["AWS SageMaker", "S3", "Lambda", "CloudFormation"],
        },
        liveUrl: "#",
        githubUrl: "#",
        year: "2024",
        duration: "5 months",
        role: "Data Scientist / ML Engineer",
    },
    {
        id: "conversational-ai",
        title: "Conversational AI Assistant",
        shortDescription:
            "A domain-specific chatbot with fine-tuned LLaMA 2, multi-turn conversation, and healthcare guardrails.",
        fullDescription: `
A specialized conversational AI system built for the healthcare domain, featuring a fine-tuned 
LLaMA 2 model with multi-turn conversation capabilities, tool-use integration, and comprehensive 
safety guardrails. The system can answer medical information queries, help with appointment 
scheduling, and provide medication reminders — all while maintaining strict safety boundaries.

The fine-tuning process used LoRA (Low-Rank Adaptation) on a curated healthcare Q&A dataset, 
achieving domain-specific performance comparable to GPT-4 at a fraction of the inference cost. 
The guardrails system ensures the model never provides medical diagnoses or prescriptions, 
always recommending professional consultation when appropriate.

The system includes a Redis-backed conversation memory for maintaining context across sessions, 
and integrates with external APIs for real-time appointment availability and medication databases.
    `,
        tags: ["LLaMA 2", "LoRA", "Guardrails", "Redis"],
        gradient: "linear-gradient(135deg, #fd79a8, #6c5ce7)",
        icon: "💬",
        featured: false,
        highlights: [
            "Fine-tuned LLaMA 2 7B with LoRA achieving 92% domain accuracy",
            "Comprehensive guardrails preventing unsafe medical advice",
            "Multi-turn conversation with Redis-backed session memory",
            "Tool-use integration for appointment scheduling and medication lookup",
            "HIPAA-compliant architecture with end-to-end encryption",
        ],
        techStack: {
            "AI / ML": ["LLaMA 2", "LoRA / QLoRA", "Hugging Face Transformers", "PEFT"],
            "Safety": ["NeMo Guardrails", "Custom Filters", "Content Moderation"],
            Backend: ["FastAPI", "Python", "Redis", "PostgreSQL"],
            Frontend: ["React", "Socket.IO", "Framer Motion"],
            Infrastructure: ["AWS EC2 (GPU)", "Docker", "Terraform", "CloudWatch"],
        },
        liveUrl: "#",
        githubUrl: "#",
        year: "2025",
        duration: "3 months",
        role: "AI Engineer",
    },
];
