// Applied AI & ML Engineering, 12 weeks.
// Copied from the client's course content PDF, pages 21–26. Do not reword: the text must match the PDF.
// Week details, projects and differentiation were extracted from the PDF automatically and checked;
// the overview and module tables were checked against the PDF by hand.

import type { Curriculum } from "./types";

export const aiml12: Curriculum = {
  "id": "aiml-12",
  "sourcePages": [
    21,
    26
  ],
  "meta": {
    "duration": "12 weeks",
    "recommended": "8–10 hours/week",
    "format": "30% concepts + 70% hands-on"
  },
  "overview": [
    {
      "label": "Month 1",
      "focus": "Applied Machine Learning & Data Engineering",
      "outcome": "Build end-to-end ML models & data pipelines"
    },
    {
      "label": "Month 2",
      "focus": "Deep Learning, Computer Vision & NLP Systems",
      "outcome": "Build computer vision, NLP & deep learning pipelines"
    },
    {
      "label": "Month 3",
      "focus": "MLOps, Model Serving & Production Capstone",
      "outcome": "Deploy & monitor production-grade ML systems"
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
      "module": "Applied Machine Learning",
      "learn": "Scikit-Learn, Decision Trees, XGBoost, Random Forests"
    },
    {
      "week": 4,
      "module": "Model Evaluation & Validation",
      "learn": "Metrics, cross-validation, hyperparameter tuning, MLflow"
    },
    {
      "week": 5,
      "module": "Deep Learning with PyTorch",
      "learn": "Tensors, PyTorch training loops, neural networks, transfer learning"
    },
    {
      "week": 6,
      "module": "Computer Vision Systems",
      "learn": "CNNs, OpenCV, YOLO, object detection, image segmentation"
    },
    {
      "week": 7,
      "module": "NLP & Sequential Models",
      "learn": "LSTMs, Transformers, Hugging Face, text classification"
    },
    {
      "week": 8,
      "module": "ML Data Pipelines",
      "learn": "Feature stores, DVC, data versioning, workflow orchestration"
    },
    {
      "week": 9,
      "module": "Model Serving & APIs",
      "learn": "FastAPI, Docker, model serialization, ONNX, inference latency"
    },
    {
      "week": 10,
      "module": "Cloud ML & Model Optimization",
      "learn": "AWS SageMaker / GCP Vertex AI, quantization, pruning"
    },
    {
      "week": 11,
      "module": "MLOps & Model Monitoring",
      "learn": "Data drift, concept drift, Evidently AI, logging, alerting"
    },
    {
      "week": 12,
      "module": "Capstone",
      "learn": "Project"
    }
  ],
  "weeks": [
    {
      "week": 1,
      "title": "Python for AI/ML & Data Handling",
      "monthHeading": {
        "month": 1,
        "title": "APPLIED MACHINE LEARNING & DATA ENGINEERING"
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
      "title": "Applied Machine Learning (Classification & Regression)",
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
              "text": "Gradient Boosting: XGBoost, LightGBM, and CatBoost"
            },
            {
              "text": "Unsupervised learning: K-Means clustering, DBSCAN, anomaly detection"
            },
            {
              "text": "Imbalanced data: SMOTE, class weighting, and resampling techniques"
            }
          ]
        }
      ]
    },
    {
      "week": 4,
      "title": "Model Evaluation, Validation & Experiment Tracking",
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
              "text": "Hyperparameter tuning: GridSearchCV, RandomizedSearchCV, Optuna"
            },
            {
              "text": "Experiment tracking: Logging models, parameters, and metrics with MLflow"
            }
          ]
        }
      ]
    },
    {
      "week": 5,
      "title": "Deep Learning Foundations with PyTorch",
      "monthHeading": {
        "month": 2,
        "title": "DEEP LEARNING, COMPUTER VISION & NLP SYSTEMS"
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
      "week": 6,
      "title": "Computer Vision & Object Detection Systems",
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
              "text": "Transfer Learning: Fine-tuning pre-trained models (ResNet, EfficientNet)"
            },
            {
              "text": "Object Detection: Real-time object detection with YOLO"
            },
            {
              "text": "Custom vision models: Annotation, dataset formatting, and model training"
            },
            {
              "text": "Video analytics: Frame processing and real-time bounding box rendering"
            }
          ]
        }
      ]
    },
    {
      "week": 7,
      "title": "NLP, Sequential Models & Hugging Face",
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
              "text": "Transformers: Modern Transformer architectures (BERT, RoBERTa)"
            },
            {
              "text": "Hugging Face Ecosystem: Utilizing transformers pipelines for text tasks"
            },
            {
              "text": "Fine-tuning: Custom sequence classification and sentiment analysis models"
            }
          ]
        }
      ]
    },
    {
      "week": 8,
      "title": "Machine Learning Data Pipelines & Versioning",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Data Version Control (DVC): Tracking datasets, models, and dependencies"
            },
            {
              "text": "Pipeline reproducibility: Building DAG workflows with dvc.yaml"
            },
            {
              "text": "Feature Stores: Managing offline and online features using Feast"
            },
            {
              "text": "Workflow orchestration: Scheduling and executing ML pipelines with Prefect / Airflow"
            },
            {
              "text": "Data validation: Automated schema validation checks before training"
            }
          ]
        }
      ]
    },
    {
      "week": 9,
      "title": "Model Packaging, APIs & Microservices",
      "monthHeading": {
        "month": 3,
        "title": "MLOps, MODEL SERVING & PRODUCTION CAPSTONE"
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
              "text": "Containerization: Packaging ML services using Docker"
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
      "week": 10,
      "title": "Cloud Deployment & Model Optimization",
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
              "text": "Serverless ML: Triggering inference via serverless functions (AWS Lambda)"
            },
            {
              "text": "Production security: Secrets management, API keys, environment isolation"
            }
          ]
        }
      ]
    },
    {
      "week": 11,
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
      "week": 12,
      "title": "Project",
      "groups": []
    }
  ],
  "projectSections": [],
  "differentiation": {
    "focusAreas": [
      "Code-First, Zero-Math Proofs Approach",
      "Modern MLOps & Experiment Tracking (MLflow, DVC, Evidently AI)",
      "Production Computer Vision & NLP Systems (YOLO, PyTorch, Hugging Face)",
      "Production Model Serving (FastAPI, Docker, Cloud APIs)",
      "End-to-End Automated ML & Monitoring Pipelines"
    ],
    "tagline": "Others teach linear algebra and calculus proofs. We teach Applied Machine Learning + Production Systems + MLOps."
  }
};
