// Applied AI & ML Engineering, 24 weeks.
// Copied from the client's course content PDF, pages 39–49. Do not reword: the text must match the PDF.
// Week details, projects and differentiation were extracted from the PDF automatically and checked;
// the overview and module tables were checked against the PDF by hand.

import type { Curriculum } from "./types";

export const aiml24: Curriculum = {
  "id": "aiml-24",
  "sourcePages": [
    39,
    49
  ],
  "meta": {
    "duration": "24 Weeks (6 Months)",
    "recommended": "8–10 hours/week",
    "format": "30% concepts + 70% hands-on"
  },
  "overview": [
    {
      "label": "Month 1",
      "focus": "Python, Data Engineering & EDA Foundations",
      "outcome": "Build clean data ingestion & advanced feature engineering workflows"
    },
    {
      "label": "Month 2",
      "focus": "Applied Machine Learning & Evaluation",
      "outcome": "Build, validate & tune supervised/unsupervised Scikit-Learn pipelines"
    },
    {
      "label": "Month 3",
      "focus": "Deep Learning Foundations & Mid-Course Capstone",
      "outcome": "Build PyTorch neural networks, CNNs & execute Mid-Course Capstone Project"
    },
    {
      "label": "Month 4",
      "focus": "Production MLOps, Model Serving & Data Versioning",
      "outcome": "Containerize models, deploy FastAPI microservices & implement data versioning (DVC)"
    },
    {
      "label": "Month 5",
      "focus": "Cloud Deployment, Scalable Pipelines & Monitoring",
      "outcome": "Deploy to cloud (AWS/GCP), orchestrate workflows & monitor data/concept drift"
    },
    {
      "label": "Month 6",
      "focus": "Industry-Grade GenAI, Vector Databases & Final Capstone",
      "outcome": "Build RAG apps, fine-tune LLMs, integrate vector DBs & execute Final Industry Capstone"
    }
  ],
  "modules": [
    {
      "week": 1,
      "module": "Python for AI/ML",
      "learn": "NumPy, Pandas, vectorization, data cleaning, pipeline building"
    },
    {
      "week": 2,
      "module": "EDA & Feature Engineering",
      "learn": "Encoding, scaling, feature selection, missing data strategies"
    },
    {
      "week": 3,
      "module": "Advanced Feature Engineering & Unsupervised Learning",
      "learn": "Outlier handling, target encoding, K-Means clustering, PCA, anomaly detection"
    },
    {
      "week": 4,
      "module": "Applied Machine Learning (Classification & Regression)",
      "learn": "Scikit-Learn, Linear models, Decision Trees, Random Forests, Gradient Boosting"
    },
    {
      "week": 5,
      "module": "Model Evaluation, Validation & Hyperparameter Tuning",
      "learn": "Metrics, Stratified K-Fold cross-validation, Optuna tuning, MLflow tracking"
    },
    {
      "week": 6,
      "module": "Deep Learning Foundations with PyTorch",
      "learn": "Tensors, CUDA/GPU acceleration, Autograd, Multi-Layer Perceptrons (MLPs)"
    },
    {
      "week": 7,
      "module": "Computer Vision Systems",
      "learn": "CNNs, OpenCV, image augmentations, YOLO object detection"
    },
    {
      "week": 8,
      "module": "NLP & Sequential Models",
      "learn": "Tokenization, LSTMs, Transformers, Hugging Face pipelines"
    },
    {
      "week": 9,
      "module": "Mid-Course Capstone Project",
      "learn": "End-to-end core ML / Computer Vision or NLP application build & evaluation"
    },
    {
      "week": 10,
      "module": "Model Packaging, Serialization & APIs",
      "learn": "Pickle, Joblib, ONNX, asynchronous REST APIs with FastAPI, Pydantic"
    },
    {
      "week": 11,
      "module": "Containerization & Data Versioning",
      "learn": "Docker containerization, Data Version Control (DVC), DAG pipelines"
    },
    {
      "week": 12,
      "module": "Cloud Deployment & Optimization",
      "learn": "AWS SageMaker / GCP Vertex AI deployment, quantization, pruning"
    },
    {
      "week": 13,
      "module": "Workflow Orchestration & Feature Stores",
      "learn": "Feast feature store, Prefect / Airflow DAG pipeline orchestration"
    },
    {
      "week": 14,
      "module": "MLOps & Production Monitoring",
      "learn": "Data drift, concept drift detection with Evidently AI, logging & alerts"
    },
    {
      "week": 15,
      "module": "Generative AI Fundamentals & Advanced Prompting",
      "learn": "LLM landscape, API integrations (OpenAI/Anthropic), Chain-of-Thought, guardrails"
    },
    {
      "week": 16,
      "module": "Retrieval-Augmented Generation (RAG) Architectures",
      "learn": "Vector embeddings, semantic chunking, LangChain, LlamaIndex, hybrid search"
    },
    {
      "week": 17,
      "module": "Scalable Vector Databases",
      "learn": "Milvus, Pinecone, Qdrant setup, ANN indexing (HNSW), sharding"
    },
    {
      "week": 18,
      "module": "Fine-Tuning Open-Source LLMs",
      "learn": "PEFT, LoRA, QLoRA, instruction dataset preparation using Hugging Face TRL"
    },
    {
      "week": 19,
      "module": "High-Performance Inference & Serving",
      "learn": "vLLM (PagedAttention), continuous batching, latency optimization"
    },
    {
      "week": 20,
      "module": "Multi-Agent Systems & LLM Frameworks",
      "learn": "CrewAI, LangGraph, tool-using agents, enterprise evaluation frameworks"
    },
    {
      "week": 21,
      "module": "Real-Time Streaming & Feature Pipelines",
      "learn": "Apache Kafka / Redpanda integration for low-latency streaming features"
    },
    {
      "week": 22,
      "module": "Enterprise CI/CD & AI Security",
      "learn": "GitHub Actions CI/CD for AI, OWASP Top 10 for LLMs, prompt injection defense"
    },
    {
      "week": 23,
      "module": "Edge AI & On-Device Model Optimization",
      "learn": "TensorFlow Lite, CoreML, optimizing models for mobile and hardware constraints"
    },
    {
      "week": 24,
      "module": "Final Capstone Project",
      "learn": "Comprehensive enterprise-grade GenAI / MLOps production deployment"
    }
  ],
  "weeks": [
    {
      "week": 1,
      "title": "Python for AI/ML & Data Handling",
      "monthHeading": {
        "month": 1,
        "title": "PYTHON, DATA ENGINEERING & EDA FOUNDATIONS"
      },
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Vectorized computing vs loops: NumPy arrays, operations, broadcasting"
            },
            {
              "text": "Data manipulation at scale: Pandas DataFrames, indexing, filtering, aggregations"
            },
            {
              "text": "Ingesting real-world data: CSV, JSON, SQL, Parquet handling"
            },
            {
              "text": "Data quality: Managing missing values, duplicates, and invalid data types"
            },
            {
              "text": "Performance optimization: Memory management for large datasets in Pandas"
            },
            {
              "text": "Data pipelines: Building reusable data preprocessing scripts in Python"
            }
          ]
        }
      ]
    },
    {
      "week": 2,
      "title": "Exploratory Data Analysis & Feature Engineering",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Data profiling: Automated EDA techniques and data distribution analysis"
            },
            {
              "text": "Categorical encoding: One-Hot, Label, Target, and Ordinal encoding"
            },
            {
              "text": "Feature scaling: MinMax, Standard, and Robust scaling"
            },
            {
              "text": "Outlier management: Detection, handling, and capping strategies"
            },
            {
              "text": "Feature extraction: Date-time decomposition, text length metrics, aggregated ratios"
            },
            {
              "text": "Feature selection: Correlation matrices, Feature Importance, Variance Thresholds"
            }
          ]
        }
      ]
    },
    {
      "week": 3,
      "title": "Advanced Feature Engineering & Unsupervised Learning",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Advanced data imputation strategies and automated pipeline preprocessing"
            },
            {
              "text": "Dimensionality reduction: Principal Component Analysis (PCA) and t-SNE"
            },
            {
              "text": "Unsupervised clustering: K-Means clustering, DBSCAN, and hierarchical clustering"
            },
            {
              "text": "Anomaly and outlier detection algorithms in production datasets"
            },
            {
              "text": "Handling highly imbalanced data distributions (SMOTE, class weights)"
            }
          ]
        }
      ]
    },
    {
      "week": 4,
      "title": "Applied Machine Learning (Classification & Regression)",
      "monthHeading": {
        "month": 2,
        "title": "APPLIED MACHINE LEARNING & EVALUATION"
      },
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Scikit-Learn workflows: Building modular ML pipelines"
            },
            {
              "text": "Linear models: Linear & Logistic Regression in practice (coefficients, decision boundaries)"
            },
            {
              "text": "Tree-based models: Decision Trees, Random Forests, and Extra Trees"
            },
            {
              "text": "Gradient Boosting frameworks: XGBoost, LightGBM, and CatBoost"
            }
          ]
        }
      ]
    },
    {
      "week": 5,
      "title": "Model Evaluation, Validation & Hyperparameter Tuning",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Classification metrics: Precision, Recall, F1-Score, ROC-AUC, Confusion Matrix"
            },
            {
              "text": "Regression metrics: RMSE, MAE, R-Squared"
            },
            {
              "text": "Cross-validation: Stratified K-Fold and Time-Series splits"
            },
            {
              "text": "Generalization: Overfitting vs Underfitting (Bias-Variance trade-off in practice)"
            },
            {
              "text": "Hyperparameter tuning: GridSearchCV, RandomizedSearchCV, Optuna optimization"
            },
            {
              "text": "Experiment tracking: Logging models, parameters, and metrics with MLflow"
            }
          ]
        }
      ]
    },
    {
      "week": 6,
      "title": "Deep Learning Foundations with PyTorch",
      "monthHeading": {
        "month": 3,
        "title": "DEEP LEARNING FOUNDATIONS & MID-COURSE CAPSTONE"
      },
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "PyTorch core: Tensors, CUDA/GPU acceleration, Autograd engine"
            },
            {
              "text": "Neural Networks: Building Multi-Layer Perceptrons (MLPs) from scratch"
            },
            {
              "text": "Loss functions & Optimizers: Cross-Entropy, MSE, Adam, AdamW, SGD"
            },
            {
              "text": "Training workflows: Writing clean training, validation, and evaluation loops"
            },
            {
              "text": "Training control: Early stopping, learning rate schedulers, checkpointing"
            },
            {
              "text": "Model persistence: Saving and loading .pt and .pth model weights"
            }
          ]
        }
      ]
    },
    {
      "week": 7,
      "title": "Computer Vision Systems",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "CNN concepts: Convolutions, pooling, feature maps, spatial representations"
            },
            {
              "text": "Image processing: Augmentation and preprocessing with OpenCV and Albumentations"
            },
            {
              "text": "Transfer Learning: Fine-tuning pre-trained vision models (ResNet, EfficientNet)"
            },
            {
              "text": "Object Detection: Real-time object detection with YOLO and bounding box rendering"
            }
          ]
        }
      ]
    },
    {
      "week": 8,
      "title": "NLP & Sequential Models",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Text preprocessing: Tokenization, stemming, lemmatization, stop-word removal"
            },
            {
              "text": "Text embeddings: TF-IDF, Word2Vec, FastText"
            },
            {
              "text": "Sequential models: Recurrent Neural Networks (RNNs) and LSTMs"
            },
            {
              "text": "Transformers & Hugging Face Ecosystem: Utilizing modern pre-trained models (BERT, RoBERTa) for text classification"
            }
          ]
        }
      ]
    },
    {
      "week": 9,
      "title": "Mid-Course Capstone Project",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Project Brief: Build, evaluate, and track an end-to-end core Machine Learning, Computer Vision, or NLP application."
            },
            {
              "text": "Key Requirements: Clean data preprocessing pipeline, robust model training with Scikit-Learn/PyTorch, hyperparameter optimization using Optuna, and comprehensive logging tracked via MLflow."
            }
          ]
        }
      ]
    },
    {
      "week": 10,
      "title": "Model Packaging, APIs & Microservices",
      "monthHeading": {
        "month": 4,
        "title": "PRODUCTION MLOps, MODEL SERVING & DATA VERSIONING"
      },
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Model serialization: Exporting models to Pickle, Joblib, ONNX, TorchScript"
            },
            {
              "text": "Inference APIs: Building asynchronous REST APIs with FastAPI"
            },
            {
              "text": "API schemas: Pydantic validation, request/response models, error handling"
            },
            {
              "text": "Performance tuning: Reducing inference latency and memory footprints"
            },
            {
              "text": "Serving patterns: Batch processing vs real-time online inference"
            }
          ]
        }
      ]
    },
    {
      "week": 11,
      "title": "Containerization & Data Version Control",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Containerization: Packaging ML services using Docker and Docker Compose"
            },
            {
              "text": "Data Version Control (DVC): Tracking datasets, models, and dependencies"
            },
            {
              "text": "Pipeline reproducibility: Building DAG workflows with dvc.yaml"
            }
          ]
        }
      ]
    },
    {
      "week": 12,
      "title": "Cloud Deployment & Optimization",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Cloud serving: Deploying models on AWS SageMaker, GCP Vertex AI, or Railway"
            },
            {
              "text": "Model compression: Quantization and weight pruning techniques"
            },
            {
              "text": "Inference engines: Accelerated CPU/GPU execution with ONNX Runtime"
            },
            {
              "text": "Production security: Secrets management, API keys, environment isolation"
            }
          ]
        }
      ]
    },
    {
      "week": 13,
      "title": "Workflow Orchestration & Feature Stores",
      "monthHeading": {
        "month": 5,
        "title": "CLOUD DEPLOYMENT, SCALABLE PIPELINES & MONITORING"
      },
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Feature Stores: Managing offline and online features using Feast"
            },
            {
              "text": "Workflow orchestration: Scheduling and executing ML pipelines with Prefect / Airflow"
            },
            {
              "text": "Data validation: Automated schema validation checks before pipeline execution"
            }
          ]
        }
      ]
    },
    {
      "week": 14,
      "title": "MLOps, Drift Detection & Observability",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Model degradation: Identifying Data Drift and Concept Drift in production"
            },
            {
              "text": "Monitoring tools: Continuous monitoring and report generation with Evidently AI"
            },
            {
              "text": "Observability: Centralized logging, metric collection, and failure alerts"
            },
            {
              "text": "Retraining strategies: Automated trigger-based vs scheduled model retraining"
            },
            {
              "text": "Deployment strategies: A/B testing, Canary releases, and Shadow deployments"
            }
          ]
        }
      ]
    },
    {
      "week": 15,
      "title": "Generative AI Foundations & Advanced Prompting",
      "monthHeading": {
        "month": 6,
        "title": "INDUSTRY-GRADE GENAI, VECTOR DATABASES & FINAL CAPSTONE"
      },
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Foundation Model landscape: Proprietary vs open-source LLMs (OpenAI, Anthropic, Ollama)"
            },
            {
              "text": "Advanced prompting architectures: Chain-of-Thought, Tree-of-Thoughts, ReAct framework"
            },
            {
              "text": "Output formatting & Guardrails: Structuring LLM outputs with Pydantic and Instructor"
            }
          ]
        }
      ]
    },
    {
      "week": 16,
      "title": "Retrieval-Augmented Generation (RAG) Architecture",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Vector search foundations: Distance metrics (Cosine, L2, Inner Product)"
            },
            {
              "text": "Text chunking strategies: Fixed-size, semantic chunking, parent-child retrieval"
            },
            {
              "text": "Orchestration frameworks: LangChain and LlamaIndex deep dive"
            },
            {
              "text": "Advanced RAG patterns: Hybrid search (BM25 + Vector) and re-ranking (Cohere Re-ranker)"
            }
          ]
        }
      ]
    },
    {
      "week": 17,
      "title": "Scalable Vector Databases & Indexing",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Production vector stores: Pinecone, Milvus, and Qdrant enterprise configurations"
            },
            {
              "text": "Approximate Nearest Neighbor (ANN) algorithms: HNSW vs IVF indexing"
            },
            {
              "text": "Scaling vector indices: Distributed sharding, replication, and low-latency hybrid querying"
            }
          ]
        }
      ]
    },
    {
      "week": 18,
      "title": "Fine-Tuning Open-Source LLMs",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Parameter-Efficient Fine-Tuning (PEFT): Low-Rank Adaptation (LoRA) and QLoRA theory"
            },
            {
              "text": "Dataset preparation: Formatting conversational data for instruction-tuning"
            },
            {
              "text": "Training execution: Hugging Face TRL (SFTTrainer) on cloud GPU clusters"
            }
          ]
        }
      ]
    },
    {
      "week": 19,
      "title": "High-Performance Inference & Serving",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Production inference bottlenecks: Memory bandwidth vs compute bound operations"
            },
            {
              "text": "High-throughput serving engines: vLLM (PagedAttention) and TensorRT-LLM"
            },
            {
              "text": "Continuous batching and token streaming optimization for real-time chat applications"
            }
          ]
        }
      ]
    },
    {
      "week": 20,
      "title": "Multi-Agent Systems & Production AI Engineering",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Agent architecture: Planning, memory, and tool utilization"
            },
            {
              "text": "Multi-agent frameworks: CrewAI and LangGraph for complex task automation"
            },
            {
              "text": "Evaluation frameworks: Ragas and TruLens for evaluating LLM app faithfulness and relevance"
            }
          ]
        }
      ]
    },
    {
      "week": 21,
      "title": "Real-Time Streaming & Scalable Data Pipelines",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Real-time data streaming architectures with Apache Kafka / Redpanda"
            },
            {
              "text": "Streaming feature transformation pipelines for low-latency scoring"
            },
            {
              "text": "Handling real-time stream state and sliding window aggregations"
            }
          ]
        }
      ]
    },
    {
      "week": 22,
      "title": "Enterprise CI/CD & AI Security",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "GitOps workflow for Machine Learning code and model artifacts"
            },
            {
              "text": "CI/CD automation: GitHub Actions for triggering automated tests and validation checks"
            },
            {
              "text": "LLM security vulnerabilities: OWASP Top 10 for Large Language Models (Prompt injection, insecure output handling)"
            },
            {
              "text": "Defensive engineering: Input sanitization, firewall proxies, and secret leak prevention"
            }
          ]
        }
      ]
    },
    {
      "week": 23,
      "title": "Edge AI & On-Device Optimization",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Edge hardware constraints: Mobile, IoT, and embedded system deployments"
            },
            {
              "text": "Model quantization techniques: Post-Training Quantization (PTQ) vs Quantization-Aware Training (QAT)"
            },
            {
              "text": "Lightweight runtimes: TensorFlow Lite, ONNX Runtime Mobile, and CoreML"
            }
          ]
        }
      ]
    },
    {
      "week": 24,
      "title": "Final Industry Capstone Project",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Project Brief: Design, build, and deploy an enterprise-grade Generative AI platform or MLOps production system from scratch."
            },
            {
              "text": "Key Components:",
              "children": [
                {
                  "text": "Scalable data ingestion pipeline or streaming data source."
                },
                {
                  "text": "Fine-tuned model or production vector-backed RAG system."
                },
                {
                  "text": "High-performance vLLM / FastAPI microservice containerized with Docker."
                },
                {
                  "text": "Automated CI/CD deployment pipeline with continuous drift monitoring and security guardrails."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "projectSections": [
    {
      "title": "Month 3 Projects (Intermediate Milestone)",
      "focus": "End-to-end ML pipelines, baseline deployment, tracking, and data handling.",
      "projects": [
        {
          "title": "End-to-End Customer Churn Prediction & Experiment Tracking Pipeline",
          "details": [
            {
              "label": "What you build",
              "text": "A complete machine learning system using Scikit-Learn/XGBoost to predict customer churn, tracked via MLflow, with data preprocessing versioned using DVC."
            },
            {
              "label": "Key Components",
              "text": "Automated exploratory data analysis, SMOTE for handling imbalanced data, hyperparameter tuning with Optuna, logging metrics/artifacts to MLflow, and wrapping the pipeline into a reusable Python script."
            },
            {
              "label": "Why it’s great",
              "text": "It covers 100% of the core modeling and experiment tracking fundamentals taught in Months 1–3 in a realistic business scenario."
            }
          ]
        },
        {
          "title": "Real-Time Sentiment Analysis Web App with PyTorch & FastAPI",
          "details": [
            {
              "label": "What you build",
              "text": "A lightweight deep learning text classification API built with PyTorch and served using FastAPI with Pydantic validation."
            },
            {
              "label": "Key Components",
              "text": "Custom text preprocessing, training a sequence classification model using a small pre-trained transformer or LSTM, serializing the model, and building an asynchronous REST API endpoint that returns real-time sentiment scores."
            },
            {
              "label": "Why it’s great",
              "text": "Bridges the gap between raw deep learning models and functional backend services, giving students a taste of model serving."
            }
          ]
        },
        {
          "title": "Automated Real-Time Object Detection Pipeline for Inventory/Retail Tracking",
          "details": [
            {
              "label": "What you build",
              "text": "A computer vision pipeline utilizing OpenCV and YOLO to process video streams or batch images, detecting specific retail items or objects."
            },
            {
              "label": "Key Components",
              "text": "Custom image augmentation, running inference with YOLO, bounding box rendering, and structuring the output logs into a structured database or CSV report."
            },
            {
              "label": "Why it’s great",
              "text": "Highly visual, practical, and demonstrates competence in handling modern computer vision workflows."
            }
          ]
        }
      ]
    },
    {
      "title": "Month 6 Projects (Advanced Industry-Perspective Milestone)",
      "focus": "Advanced MLOps, production scalability, distributed training, LLMs, and enterprise monitoring.",
      "projects": [
        {
          "title": "Production-Grade LLM RAG (Retrieval-Augmented Generation) System with Guardrails & Observability",
          "details": [
            {
              "label": "What you build",
              "text": "An enterprise-ready Question-Answering system over private documents using a Hugging Face open-source LLM, Vector Database (e.g., Chroma/Milvus), and monitored with Evidently AI or TruLens."
            },
            {
              "label": "Key Components",
              "text": "Document chunking and embedding, vector search retrieval, prompt engineering, integration with a serving framework (vLLM or TGI), automated hallucination/drift checks, and deployment inside a Docker container."
            },
            {
              "label": "Why it’s great",
              "text": "This is the most sought-after architecture in current AI engineering, combining LLMs, vector search, and production monitoring."
            }
          ]
        },
        {
          "title": "Scalable MLOps Pipeline with Airflow/Prefect, Feast Feature Store & Evidently AI Monitoring",
          "details": [
            {
              "label": "What you build",
              "text": "An automated, scheduled retraining and monitoring pipeline for a tabular prediction model (e.g., house price or fraud detection) in a simulated production environment."
            },
            {
              "label": "Key Components",
              "text": "Feast for feature management, Apache Airflow or Prefect for orchestrating daily data ingestion and model retraining, Docker for containerization, and Evidently AI dashboards to detect data drift and trigger alerts."
            },
            {
              "label": "Why it’s great",
              "text": "Solves the \"day-2 problem\" in machine learning—how models are maintained, updated, and monitored automatically in the real world without manual intervention."
            }
          ]
        },
        {
          "title": "High-Performance Edge AI Inference Engine with ONNX & TensorRT (Quantized Deployment)",
          "details": [
            {
              "label": "What you build",
              "text": "A high-throughput, low-latency microservice that takes a heavy computer vision or NLP model, optimizes it using ONNX Runtime and Post-Training Quantization (PTQ), and deploys it on an optimized cloud container."
            },
            {
              "label": "Key Components",
              "text": "Model profiling, weight quantization (FP32 to INT8), converting PyTorch models to ONNX graphs, benchmarking latency/memory footprint reduction, and exposing it via a high-performance FastAPI service."
            },
            {
              "label": "Why it’s great",
              "text": "Demonstrates deep systems-level understanding of ML engineering—crucial for companies looking to reduce cloud infrastructure costs and inference latency at scale."
            }
          ]
        }
      ]
    }
  ],
  "differentiation": {
    "focusAreas": [
      "Code-First, Zero-Math Proofs Approach",
      "Comprehensive Foundation (Months 1–3) Leading to Solid Core Engineering",
      "Advanced Industry Topics (Months 4–6): MLOps, GenAI, Vector Databases, vLLM & Agentic Workflows",
      "Production Model Serving & Enterprise Scaling (FastAPI, Docker, Vector DBs, Cloud Architecture)",
      "Dual Capstone Milestones: Mid-Course Core ML Project + Final Enterprise GenAI Capstone"
    ],
    "tagline": "Others teach linear algebra and calculus proofs. We teach Applied Machine Learning + Production Systems + Enterprise MLOps & GenAI."
  }
};
