// Data Science, 12 weeks.
// Copied from the client's course content PDF, pages 27–32. Do not reword: the text must match the PDF.
// Week details, projects and differentiation were extracted from the PDF automatically and checked;
// the overview and module tables were checked against the PDF by hand.

import type { Curriculum } from "./types";

export const ds12: Curriculum = {
  "id": "ds-12",
  "sourcePages": [
    27,
    32
  ],
  "meta": {
    "duration": "12 weeks",
    "recommended": "8–10 hours/week",
    "format": "30% concepts + 70% hands-on"
  },
  "overview": [
    {
      "label": "Month 1",
      "focus": "Data Wrangling, SQL & EDA",
      "outcome": "Clean, transform, and extract insights from complex enterprise data"
    },
    {
      "label": "Month 2",
      "focus": "Applied Machine Learning & Predictive Analytics",
      "outcome": "Build, tune, and evaluate predictive classification and regression models"
    },
    {
      "label": "Month 3",
      "focus": "BI Dashboards, Production Deployment & Capstone",
      "outcome": "Build interactive dashboards and deploy end-to-end data products"
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
      "module": "SQL & Databases",
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
      "learn": "AB testing, hypothesis testing, confidence intervals, correlation analysis"
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
      "module": "Time Series Forecasting",
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
      "module": "Production Capstone",
      "learn": "Project"
    }
  ],
  "weeks": [
    {
      "week": 1,
      "title": "Python for Data Science & Advanced Data Wrangling",
      "monthHeading": {
        "month": 1,
        "title": "DATA WRANGLING, SQL & EDA"
      },
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Data Manipulation at Scale: Pandas DataFrames, indexing, multi-indexing, and query filtering"
            },
            {
              "text": "Ingesting Heterogeneous Data: Working with JSON, CSV, Parquet, Excel, and REST API payloads"
            },
            {
              "text": "Data Hygiene & Cleaning: Strategies for missing values, invalid types, and duplicate records"
            },
            {
              "text": "Text & String Analytics: String manipulation, regex pattern extraction, and categorical cleanups"
            },
            {
              "text": "Data Restructuring: Melting, pivoting, stacking, and merging complex datasets"
            },
            {
              "text": "Data Pipelines: Modular Python script design for reproducible data cleaning workflows"
            }
          ]
        }
      ]
    },
    {
      "week": 2,
      "title": "Enterprise SQL for Data Analytics",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Relational Database Concepts: Schemas, primary/foreign keys, ER diagrams, and normal forms"
            },
            {
              "text": "Complex Data Aggregations: GROUP BY, HAVING, subqueries, and nested expressions"
            },
            {
              "text": "Advanced Table Joins: Inner, Outer, Left, Self-Joins, and handling null-join edge cases"
            },
            {
              "text": "SQL Window Functions: ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG, and running totals"
            },
            {
              "text": "Common Table Expressions (CTEs): Writing readable, modular SQL scripts using WITH clauses"
            },
            {
              "text": "Database Optimization: Indexes, execution plans, and query performance tuning"
            }
          ]
        }
      ]
    },
    {
      "week": 3,
      "title": "Exploratory Data Analysis (EDA) & Visual Analytics",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Automated Data Profiling: Fast-tracking initial data sanity checks and distributions"
            },
            {
              "text": "Univariate & Bivariate Visualizations: Histograms, KDE plots, box plots, and scatter plots"
            },
            {
              "text": "Multivariate Analytics: Correlation heatmaps, pair plots, and joint distribution charts"
            },
            {
              "text": "Interactive Data Visualization: Creating dynamic, interactive charts using Plotly"
            },
            {
              "text": "Outlier Analysis & Anomaly Detection: Z-score, IQR capping, and Isolation Forests in practice"
            },
            {
              "text": "Insight Storytelling: Converting raw plots into clear business stakeholder recommendations"
            }
          ]
        }
      ]
    },
    {
      "week": 4,
      "title": "Applied Business Statistics & Decision Making",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Descriptive Metrics: Mean, median, mode, variance, standard deviation, and percentiles"
            },
            {
              "text": "Probability Distributions: Normal, Binomial, and Poisson distributions in business contexts"
            },
            {
              "text": "Hypothesis Testing: Z-tests, t-tests, Chi-Square tests, and ANOVA without manual derivation"
            },
            {
              "text": "Business Experimentation (A/B Testing): Sample sizing, metric setup, p-values, and conversion lift"
            },
            {
              "text": "Confidence Intervals: Estimating population metrics with business precision bounds"
            },
            {
              "text": "Correlation vs Causation: Interpreting Pearson, Spearman, and Simpson's Paradox"
            }
          ]
        }
      ]
    },
    {
      "week": 5,
      "title": "Feature Engineering & Dimensionality Reduction",
      "monthHeading": {
        "month": 2,
        "title": "APPLIED MACHINE LEARNING & PREDICTIVE ANALYTICAL SYSTEMS"
      },
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Categorical Feature Encoding: One-Hot, Ordinal, Target, and Frequency Encoding"
            },
            {
              "text": "Numeric Normalization & Scaling: Standard, MinMax, and Robust Scaling techniques"
            },
            {
              "text": "Feature Generation: Extracting temporal components, interaction ratios, and text length metrics"
            },
            {
              "text": "Feature Selection Strategies: Feature importance, Variance Thresholds, and Recursive Feature Elimination (RFE)"
            },
            {
              "text": "Dimensionality Reduction: Principal Component Analysis (PCA) and t-SNE for visual clustering"
            },
            {
              "text": "Handling Class Imbalance: SMOTE, class weighting, and random over/undersampling"
            }
          ]
        }
      ]
    },
    {
      "week": 6,
      "title": "Predictive Modeling: Regression & Tree-Based Algorithms",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Linear & Ridge/Lasso Regression: Practical implementation, coefficient interpretation, and regularization"
            },
            {
              "text": "Decision Trees: Splitting criteria, depth control, and preventing overfitting"
            },
            {
              "text": "Ensemble Methods: Random Forests and Extra Trees for robust predictive baseline creation"
            },
            {
              "text": "Gradient Boosting Algorithms: XGBoost, LightGBM, and CatBoost"
            },
            {
              "text": "Hyperparameter Tuning: Automated search using Optuna, GridSearchCV, and RandomizedSearchCV"
            },
            {
              "text": "Evaluation Metrics: RMSE, MAE, R-Squared, and MAPE for continuous outcomes"
            }
          ]
        }
      ]
    },
    {
      "week": 7,
      "title": "Classification, Clustering & Customer Segmentation",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Classification Algorithms: Logistic Regression, Naive Bayes, Support Vector Machines (SVM), and KNN"
            },
            {
              "text": "Classification Evaluation: Confusion Matrix, Precision, Recall, F1-Score, ROC-AUC, and PR Curves"
            },
            {
              "text": "Unsupervised Customer Segmentation: K-Means, Hierarchical Clustering, and DBSCAN"
            },
            {
              "text": "Cluster Interpretation: Profiling customer clusters for marketing strategies"
            },
            {
              "text": "RFM Analytics: Recency, Frequency, Monetary framework modeling"
            },
            {
              "text": "Model Validation: Stratified K-Fold and Time-Based Cross-Validation schemes"
            }
          ]
        }
      ]
    },
    {
      "week": 8,
      "title": "Time Series Analysis & Forecasting",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Time Series Components: Trend, Seasonality, Cyclical, and Residual decomposition"
            },
            {
              "text": "Stationarity Testing: Augmented Dickey-Fuller (ADF) test and differencing techniques"
            },
            {
              "text": "Classical Forecasting: Moving Averages, Exponential Smoothing, and ARIMA / SARIMA models"
            },
            {
              "text": "Modern Forecasting Tools: Building fast baseline forecasts using Meta’s Prophet"
            },
            {
              "text": "Feature Engineering for Time Series: Lag variables, rolling window statistics, and seasonal flags"
            },
            {
              "text": "Forecasting Evaluation: Backtesting strategies and calculating out-of-sample error"
            }
          ]
        }
      ]
    },
    {
      "week": 9,
      "title": "Business Intelligence (BI) & Interactive Dashboards",
      "monthHeading": {
        "month": 3,
        "title": "BI DASHBOARDS, PRODUCTION DEPLOYMENT & CAPSTONE"
      },
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "BI Tool Setup: Working with Power BI or Tableau for enterprise reporting"
            },
            {
              "text": "Data Modeling: Star schema, Snowflake schema, and dimension-fact table relationships"
            },
            {
              "text": "Calculated Metrics: Writing DAX / Calculated Fields for YoY growth, churn rates, and targets"
            },
            {
              "text": "Dashboard Design: Layout principles, executive KPI cards, and dynamic filter actions"
            },
            {
              "text": "Automated Data Refresh: Scheduling dataset updates and row-level security setup"
            },
            {
              "text": "Stakeholder Reporting: Transforming analytical dashboards into business presentations"
            }
          ]
        }
      ]
    },
    {
      "week": 10,
      "title": "Data Science Web Applications & APIs",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Model Serialization: Saving models via Joblib, Pickle, and ONNX"
            },
            {
              "text": "Building REST APIs: Writing light inference endpoints using FastAPI and Pydantic"
            },
            {
              "text": "Interactive Data Apps: Building rapid user-facing data tools with Streamlit"
            },
            {
              "text": "Frontend-Backend Integration: Connecting Streamlit interface to FastAPI logic"
            },
            {
              "text": "Data Product UX: Uploading custom files, real-time predictions, and chart rendering"
            },
            {
              "text": "State Management: Managing session state in Streamlit applications"
            }
          ]
        }
      ]
    },
    {
      "week": 11,
      "title": "Cloud Data Warehousing & Workflow Orchestration",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Cloud Data Warehousing: Querying and storing data in Google BigQuery or Snowflake"
            },
            {
              "text": "Workflow Automation: Pipeline orchestration using Airflow or Prefect"
            },
            {
              "text": "ETL vs ELT: Modern data stack architectures and data movement strategies"
            },
            {
              "text": "Containerizing Data Apps: Packaging web apps and pipelines using Docker"
            },
            {
              "text": "Environment Configuration: Managing cloud secrets, API credentials, and environment variables"
            },
            {
              "text": "Continuous Ingestion: Setting up automated pipeline triggers for model retraining"
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
      "End-to-End Data Stack (SQL + Python + ML + Power BI/Streamlit)",
      "Modern Business Use Cases (Churn, RFM Segmentation, Time Series, A/B Testing)",
      "Data Application Engineering (FastAPI, Streamlit, Docker)",
      "Production Cloud & Pipeline Integration (BigQuery/Snowflake, Airflow)"
    ],
    "tagline": null
  }
};
