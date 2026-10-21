// Data Science, 24 weeks.
// Copied from the client's course content PDF, pages 50–59. Do not reword: the text must match the PDF.
// Week details, projects and differentiation were extracted from the PDF automatically and checked;
// the overview and module tables were checked against the PDF by hand.

import type { Curriculum } from "./types";

export const ds24: Curriculum = {
  "id": "ds-24",
  "sourcePages": [
    50,
    59
  ],
  "meta": {
    "duration": "24 Weeks (6 Months)",
    "recommended": "8–10 hours/week",
    "format": "30% Concepts + 70% Hands-On & Real-World Projects",
    "philosophy": "Code-first, production-ready, and aligned with modern engineering requirements."
  },
  "overview": [
    {
      "label": "Month 1",
      "focus": "Data Wrangling, Advanced SQL & EDA",
      "outcome": "Clean, transform, and extract structural insights from complex data"
    },
    {
      "label": "Month 2",
      "focus": "Applied Machine Learning & Predictive Modeling",
      "outcome": "Build, tune, and evaluate classical regression and tree-based systems"
    },
    {
      "label": "Month 3",
      "focus": "Customer Segmentation, Time Series & BI Dashboards",
      "outcome": "Model customer behavior, forecast trends, and build Power BI/Tableau reports"
    },
    {
      "label": "Month 3 Project",
      "focus": "Milestone Capstone I: Mid-Program Enterprise Product",
      "outcome": "End-to-end analytical pipeline, ML prediction, and BI visualization dashboard"
    },
    {
      "label": "Month 4",
      "focus": "Advanced Production ML & MLOps Infrastructure",
      "outcome": "Model tracking, registries, containerization, and enterprise APIs"
    },
    {
      "label": "Month 5",
      "focus": "Large-Scale Data Engineering & Cloud Data Platforms",
      "outcome": "Distributed data processing with PySpark, cloud data warehouses, and orchestration"
    },
    {
      "label": "Month 6",
      "focus": "Generative AI, LLMs for Data Science & Advanced Systems",
      "outcome": "Fine-tuning, RAG architectures, vector databases, and system scaling"
    },
    {
      "label": "Month 6 Project",
      "focus": "Final Capstone: Production-Grade AI & Data System",
      "outcome": "Enterprise cloud deployment with automated ingestion, containerization, and LLM integration"
    }
  ],
  "modules": [
    {
      "week": 1,
      "module": "Python Data Science Core",
      "learn": "Vectorized computing, Pandas dataframes, data cleaning, processing pipelines"
    },
    {
      "week": 2,
      "module": "Enterprise SQL & Databases",
      "learn": "Window functions, CTEs, complex joins, query optimization, analytics"
    },
    {
      "week": 3,
      "module": "Exploratory Data Analysis & Viz",
      "learn": "Seaborn, Plotly, univariate/multivariate analysis, outlier detection"
    },
    {
      "week": 4,
      "module": "Applied Business Statistics",
      "learn": "A/B testing, hypothesis testing, confidence intervals, correlation analysis"
    },
    {
      "week": 5,
      "module": "Feature Engineering & Selection",
      "learn": "Encoding, scaling, feature creation, dimensionality reduction (PCA, t-SNE)"
    },
    {
      "week": 6,
      "module": "Predictive ML: Regression & Trees",
      "learn": "Linear regression, Decision Trees, Random Forests, XGBoost, CatBoost"
    },
    {
      "week": 7,
      "module": "Classification & Segmentation",
      "learn": "Logistic regression, SVMs, KNN, K-Means clustering, Customer RFM analysis"
    },
    {
      "week": 8,
      "module": "Time Series Analysis & Forecasting",
      "learn": "Trend/seasonality decomposition, ARIMA, Prophet, time-based features"
    },
    {
      "week": 9,
      "module": "Business Intelligence & Visual Analytics",
      "learn": "Power BI / Tableau dashboards, DAX, data modeling, reporting"
    },
    {
      "week": 10,
      "module": "Data Science APIs & Web Apps",
      "learn": "FastAPI, Streamlit interactive web apps, data serialization"
    },
    {
      "week": 11,
      "module": "Cloud Data Warehousing & Pipelines",
      "learn": "BigQuery / Snowflake, Airflow/Prefect orchestration, automated ingestion"
    },
    {
      "week": 12,
      "module": "Milestone Capstone Project I",
      "learn": "End-to-End Intermediate Data Science Project Submission & Review"
    },
    {
      "week": 13,
      "module": "MLOps & Model Versioning",
      "learn": "MLflow tracking, experiment management, model registries, reproducibility"
    },
    {
      "week": 14,
      "module": "Advanced Model Monitoring & Optimization",
      "learn": "Data drift, concept drift detection, latency reduction, model compression"
    },
    {
      "week": 15,
      "module": "Containerization & Cloud Deployment",
      "learn": "Dockerizing ML APIs, serverless deployment architectures (AWS Lambda / Cloud Run)"
    },
    {
      "week": 16,
      "module": "System Architecture for Data Products",
      "learn": "Designing scalable event-driven data systems, microservice patterns"
    },
    {
      "week": 17,
      "module": "Distributed Computing with PySpark",
      "learn": "Spark DataFrames, resilient distributed datasets (RDDs), data transformations"
    },
    {
      "week": 18,
      "module": "Big Data Analytics & Performance Tuning",
      "learn": "Partitioning strategies, caching, handling petabyte-scale transformations"
    },
    {
      "week": 19,
      "module": "Advanced Cloud Data Pipelines & Orchestration",
      "learn": "Production Airflow DAGs, error handling, retries, and data quality checks (Great Expectations)"
    },
    {
      "week": 20,
      "module": "NoSQL, Vector DBs & Enterprise Storage",
      "learn": "MongoDB, Redis caching, Pinecone/Milvus vector database integration"
    },
    {
      "week": 21,
      "module": "Generative AI & LLM Foundations for Data Science",
      "learn": "Prompt engineering, transformer architectures, tokenization, cost/latency trade-offs"
    },
    {
      "week": 22,
      "module": "Retrieval-Augmented Generation (RAG)",
      "learn": "Document chunking, embeddings, vector search, building enterprise internal QA agents"
    },
    {
      "week": 23,
      "module": "Fine-Tuning & LLM Evaluation",
      "learn": "LoRA/QLoRA fine-tuning workflows, RAG evaluation metrics (Ragas, TruLens)"
    },
    {
      "week": 24,
      "module": "Final Capstone: Production AI & Data Product",
      "learn": "Enterprise-grade multi-service deployment capstone presentation and code review"
    }
  ],
  "weeks": [
    {
      "week": 1,
      "title": "Python for Data Science & Advanced Data Wrangling",
      "summary": "Scalable dataframes, missing values remediation, text/regex extraction, restructuring (melting/pivoting), and modular cleaning pipelines.",
      "monthHeading": {
        "month": 1,
        "title": "DATA WRANGLING, SQL & EDA (Weeks 1–4)"
      },
      "groups": []
    },
    {
      "week": 2,
      "title": "Enterprise SQL for Data Analytics",
      "summary": "Schemas, advanced joins, CTEs, window functions (ROW_NUMBER, LAG, LEAD), and query performance tuning.",
      "groups": []
    },
    {
      "week": 3,
      "title": "Exploratory Data Analysis (EDA) & Visual Analytics",
      "summary": "Automated profiling, interactive Plotly visualizations, multivariate correlation analysis, outlier detection with Isolation Forests, and insight storytelling.",
      "groups": []
    },
    {
      "week": 4,
      "title": "Applied Business Statistics & Decision Making",
      "summary": "Hypothesis testing (z-tests, t-tests, Chi-Square, ANOVA), A/B testing design, confidence intervals, and tracking conversion lifts.",
      "groups": []
    },
    {
      "week": 5,
      "title": "Feature Engineering & Dimensionality Reduction",
      "summary": "Encoding strategies, numeric scalers, variance thresholds, RFE, PCA, t-SNE, and handling class imbalances via SMOTE.",
      "monthHeading": {
        "month": 2,
        "title": "APPLIED MACHINE LEARNING & PREDICTIVE ANALYTICAL SYSTEMS (Weeks 5–8)"
      },
      "groups": []
    },
    {
      "week": 6,
      "title": "Predictive Modeling: Regression & Tree-Based Algorithms",
      "summary": "Regularized regression (Ridge/Lasso), Decision Trees, Random Forests, XGBoost, LightGBM, CatBoost, and hyperparameter tuning with Optuna.",
      "groups": []
    },
    {
      "week": 7,
      "title": "Classification, Clustering & Customer Segmentation",
      "summary": "Logistic regression, SVM, KNN, evaluation matrices (ROC-AUC, F1), K-Means, DBSCAN, and RFM marketing analytics.",
      "groups": []
    },
    {
      "week": 8,
      "title": "Time Series Analysis & Forecasting",
      "summary": "Stationarity testing (ADF), SARIMA, Meta Prophet, lag variables, rolling window statistics, and backtesting frameworks.",
      "groups": []
    },
    {
      "week": 9,
      "title": "Business Intelligence (BI) & Interactive Dashboards",
      "summary": "Star/Snowflake schemas in Power BI/Tableau, DAX measures, dynamic filters, and scheduled data refreshes.",
      "monthHeading": {
        "month": 3,
        "title": "BI DASHBOARDS, WEB APPS & MILESTONE CAPSTONE (Weeks 9–12)"
      },
      "groups": []
    },
    {
      "week": 10,
      "title": "Data Science Web Apps & FastAPI",
      "summary": "Model serialization (Joblib/ONNX), lightweight REST endpoints with FastAPI, and interactive dashboards via Streamlit.",
      "groups": []
    },
    {
      "week": 11,
      "title": "Cloud Data Warehousing & Workflow Orchestration",
      "summary": "Querying Google BigQuery/Snowflake, orchestration with Apache Airflow, and environment configuration secrets.",
      "groups": []
    },
    {
      "week": 12,
      "title": "Milestone Capstone Project I",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Objective: Build and deploy a complete end-to-end data product."
            },
            {
              "text": "Deliverables: Cleaned multi-source dataset, predictive model pipeline, interactive Streamlit app or Power BI dashboard, and code repository."
            }
          ]
        }
      ]
    },
    {
      "week": 13,
      "title": "MLOps & Experiment Tracking with MLflow",
      "summary": "Tracking parameters, metrics, and artifacts; setting up centralized model registries.",
      "monthHeading": {
        "month": 4,
        "title": "ADVANCED PRODUCTION ML & MLOPS INFRASTRUCTURE (Weeks 13–16)"
      },
      "groups": []
    },
    {
      "week": 14,
      "title": "Model Monitoring & Production Maintenance",
      "summary": "Detecting data drift, concept drift, and performance degradation; automated alerting setups.",
      "groups": []
    },
    {
      "week": 15,
      "title": "Containerization & Serverless Deployment",
      "summary": "Packaging ML models and APIs into secure Docker images; deploying to cloud environments (AWS ECS / Google Cloud Run).",
      "groups": []
    },
    {
      "week": 16,
      "title": "Scalable Data Product Architecture",
      "summary": "Designing fault-tolerant microservices, handling asynchronous background tasks with Celery/Redis, and securing inference endpoints.",
      "groups": []
    },
    {
      "week": 17,
      "title": "Distributed Computing with PySpark",
      "summary": "Spark core architecture, resilient distributed datasets (RDDs), DataFrame operations, and parallel execution models.",
      "monthHeading": {
        "month": 5,
        "title": "LARGE-SCALE DATA ENGINEERING & CLOUD PLATFORMS (Weeks 17–20)"
      },
      "groups": []
    },
    {
      "week": 18,
      "title": "Big Data Performance Tuning & Optimization",
      "summary": "Spark cluster configuration, shuffle optimizations, memory management, and caching strategies for massive datasets.",
      "groups": []
    },
    {
      "week": 19,
      "title": "Production Data Pipelines & Data Quality",
      "summary": "Building resilient Airflow DAGs, idempotency, data lineage, and automated data quality assertions using Great Expectations.",
      "groups": []
    },
    {
      "week": 20,
      "title": "NoSQL, Vector DBs & Caching Layers",
      "summary": "Working with document stores (MongoDB), caching query responses with Redis, and storing high-dimensional embeddings in vector databases (Pinecone/Milvus).",
      "groups": []
    },
    {
      "week": 21,
      "title": "Generative AI Foundations for Data Scientists",
      "summary": "Large Language Model architectures, tokenization mechanics, prompt engineering patterns, and cost-performance trade-offs.",
      "monthHeading": {
        "month": 6,
        "title": "GENERATIVE AI, LLMS & FINAL CAPSTONE (Weeks 21–24)"
      },
      "groups": []
    },
    {
      "week": 22,
      "title": "Retrieval-Augmented Generation (RAG) Systems",
      "summary": "Enterprise document ingestion, text chunking strategies, embedding generation, vector similarity search, and building internal QA microservices.",
      "groups": []
    },
    {
      "week": 23,
      "title": "LLM Fine-Tuning & Advanced Evaluation",
      "summary": "Parameter-efficient fine-tuning (PEFT) using LoRA/QLoRA, dataset preparation, and automated RAG evaluation frameworks (Ragas).",
      "groups": []
    },
    {
      "week": 24,
      "title": "Final Capstone Project",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Objective: Build an enterprise-grade AI and data system integrating data ingestion, ML/LLM predictions, cloud orchestration, and containerized deployment."
            },
            {
              "text": "Deliverables: Production GitHub repository, architecture blueprint, Dockerized microservice, and live system demonstration."
            }
          ]
        }
      ]
    }
  ],
  "projectSections": [
    {
      "title": "Part 1: Month 3 Projects (Intermediate Data Science & BI)",
      "focus": "Data Wrangling, SQL, Predictive ML, Streamlit / FastAPI, and Power BI.",
      "projects": [
        {
          "title": "E-Commerce Customer Churn Prediction & Retention Dashboard",
          "details": [
            {
              "label": "The Business Problem",
              "text": "An online subscription retailer wants to predict which customers are likely to churn in the next 30 days and understand the key drivers behind cancellations so the marketing team can intervene."
            },
            {
              "label": "Why It’s Doable",
              "text": "Uses clean, structured tabular data (e.g., transaction history, customer support tickets, login frequency) that is readily available on Kaggle or via simulated SQL databases."
            },
            {
              "label": "Key Components & Tech Stack",
              "text": "",
              "children": [
                {
                  "label": "Data Pipeline / SQL",
                  "text": "Write complex SQL queries with CTEs and window functions to aggregate user behavior and RFM metrics."
                },
                {
                  "label": "Machine Learning",
                  "text": "Train a Random Forest or XGBoost classifier to predict churn risk (handling class imbalance via SMOTE)."
                },
                {
                  "label": "Deployment",
                  "text": "Build a lightweight Streamlit web app where users can input customer IDs or upload CSVs to get real-time churn risk scores and recommended retention offers."
                }
              ]
            }
          ]
        },
        {
          "title": "Dynamic Pricing & Demand Forecasting Engine",
          "details": [
            {
              "label": "The Business Problem",
              "text": "A ride-sharing or retail delivery service needs to forecast hourly demand for specific zones to dynamically recommend pricing multipliers."
            },
            {
              "label": "Why It’s Doable",
              "text": "Relies on time-series aggregation and standard tabular regression features without requiring complex deep learning models."
            },
            {
              "label": "Key Components & Tech Stack",
              "text": "",
              "children": [
                {
                  "label": "EDA & Time Series",
                  "text": "Decompose historical demand trends, compute lag features, and apply rolling window statistics."
                },
                {
                  "label": "Forecasting",
                  "text": "Use Meta’s Prophet or LightGBM regression to predict hourly trip volume."
                },
                {
                  "label": "Visualization",
                  "text": "Connect the outputs to a Power BI dashboard featuring dynamic filters for geographic zones, weather conditions, and peak hours."
                }
              ]
            }
          ]
        },
        {
          "title": "Retail Inventory & Supply Chain Optimization System",
          "details": [
            {
              "label": "The Business Problem",
              "text": "A multi-store retail chain struggles with stockouts of fast-moving goods and overstocking of slow-moving items, resulting in lost revenue."
            },
            {
              "label": "Why It’s Doable",
              "text": "Focuses on standard inventory math (safety stock, reorder points) combined with descriptive analytics and regression modeling."
            },
            {
              "label": "Key Components & Tech Stack",
              "text": "",
              "children": [
                {
                  "label": "Data Wrangling",
                  "text": "Process multi-table SQL databases linking stores, products, suppliers, and daily sales."
                },
                {
                  "label": "Analytics",
                  "text": "Build automated outlier detection to flag anomalous demand spikes caused by promotions or supply chain delays."
                },
                {
                  "label": "Deployment",
                  "text": "Package the forecasting model into a FastAPI backend endpoint that returns automated reorder recommendations."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": "Part 2: Month 6 Projects (Advanced Engineering, Big Data & Generative AI)",
      "focus": "PySpark, MLflow, Airflow, Vector Databases, and LLM RAG Systems.",
      "projects": [
        {
          "title": "Enterprise Internal Knowledge QA Agent (RAG System with LLMs)",
          "details": [
            {
              "label": "The Business Problem",
              "text": "Support agents spend too much time searching through hundreds of internal company policy documents, HR handbooks, and product manuals to answer customer or employee inquiries."
            },
            {
              "label": "Why It’s Doable",
              "text": "Leverages modern open-source orchestration frameworks (LangChain/LlamaIndex) and pre-trained embedding models without requiring expensive model training from scratch."
            },
            {
              "label": "Key Components & Tech Stack",
              "text": "",
              "children": [
                {
                  "label": "Data Engineering",
                  "text": "Implement document chunking pipelines with automated parsing of PDFs and markdown files."
                },
                {
                  "label": "Vector Database & RAG",
                  "text": "Store high-dimensional text embeddings in Pinecone or Chroma, and connect them to an LLM via FastAPI to generate precise answers with source citations."
                },
                {
                  "label": "Monitoring",
                  "text": "Track query latency and token usage metrics."
                }
              ]
            }
          ]
        },
        {
          "title": "Scalable Real-Time Clickstream & User Behavior Pipeline with PySpark",
          "details": [
            {
              "label": "The Business Problem",
              "text": "A high-traffic streaming platform needs to process gigabytes of raw user event logs daily, clean the data, and compute real-time user engagement metrics to feed a recommendation model."
            },
            {
              "label": "Why It’s Doable",
              "text": "Focuses on core distributed computing patterns using PySpark and local containerization, simulating a true big data environment."
            },
            {
              "label": "Key Components & Tech Stack",
              "text": "",
              "children": [
                {
                  "label": "Big Data Processing",
                  "text": "Use PySpark to clean, transform, and aggregate millions of raw log entries with custom partitioning and caching strategies."
                },
                {
                  "label": "Orchestration",
                  "text": "Automate the daily data ingestion and transformation workflow using an Airflow DAG."
                },
                {
                  "label": "Storage & Serving",
                  "text": "Store aggregated user profiles in a NoSQL database (MongoDB) and containerize the service using Docker."
                }
              ]
            }
          ]
        },
        {
          "title": "End-to-End MLOps Pipeline with Automated Drift Detection & Retraining",
          "details": [
            {
              "label": "The Business Problem",
              "text": "A credit scoring model’s accuracy degrades over time due to shifting macroeconomic conditions (concept drift), requiring an automated system to detect degradation and trigger retraining."
            },
            {
              "label": "Why It’s Doable",
              "text": "Integrates standard, modular components of the MLOps stack (MLflow, Evidently AI, Docker) into a cohesive local pipeline."
            },
            {
              "label": "Key Components & Tech Stack",
              "text": "",
              "children": [
                {
                  "label": "Experiment Tracking",
                  "text": "Use MLflow to log model parameters, metrics, and artifact registries."
                },
                {
                  "label": "Monitoring",
                  "text": "Build a scheduled script using Evidently AI to check incoming inference batches for data drift against the training baseline."
                },
                {
                  "label": "Deployment & Orchestration",
                  "text": "Containerize the inference API with Docker and orchestrate automated model checks via a lightweight workflow scheduler."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "differentiation": {
    "focusAreas": [
      "Code-First, Zero-Math Proofs Approach focused on real-world delivery",
      "End-to-End Enterprise Data Stack (SQL + Python + PySpark + ML + LLMs + Power BI)",
      "Modern Industry Use Cases (Customer Churn, Real-Time RAG Agents, Spark Pipelines, A/B Testing)",
      "Production Data Application Engineering (FastAPI, Streamlit, Docker, MLflow)",
      "Cloud Scale & Orchestration (BigQuery/Snowflake, Airflow, Vector Databases)"
    ],
    "tagline": null
  }
};
