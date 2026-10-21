// Data Engineering, 24 weeks (6 months). Added 18 Oct 2026 (client change request 01).
// Copied from the client brochure "DataVedanta_Data_Engineering_Course_Brochure.pdf" (public/brochures/).
// Do not reword: the text must match the brochure. The 12-week track (de-12.ts) is months 1-3 of this one.

import type { Curriculum, MonthModules, ProjectSection } from "./types";

export const deBrochure = "DataVedanta_Data_Engineering_Course_Brochure.pdf";
export const deFormat = "Modern Analytics Engineering & Enterprise Big Data / Cloud Engineering";

export const deMonths: MonthModules[] = [
  {
    label: "Month 1",
    title: "Core & Advanced SQL Analytics",
    modules: [
      {
        title: "Core SQL & Relational Databases",
        text: "Relational database fundamentals and schema design; Data Definition Language (DDL) and Data Manipulation Language (DML); Basic table joins (Inner and Left joins); Querying e-commerce datasets for operational metrics.",
      },
      {
        title: "Advanced SQL & Complex Query Structures",
        text: "Complex joins including Full and Cross joins; Subqueries and nested query refactoring; Common Table Expressions (CTEs) for modular scripting; Writing readable, multi-stage query pipelines.",
      },
      {
        title: "Analytical SQL & Window Functions",
        text: "Analytical SQL window function architecture; Ranking functions (ROW_NUMBER, RANK, DENSE_RANK); Offset functions (LEAD, LAG) for historical tracking; Calculating month-over-month business growth and running totals.",
      },
      {
        title: "Query Optimization & Performance Tuning",
        text: "Database indexing strategies and maintenance; Reading and interpreting SQL execution plans; Identifying and fixing performance bottlenecks; Tuning resource-heavy, slow-running queries.",
      },
    ],
  },
  {
    label: "Month 2",
    title: "Python Core, APIs & Data Wrangling",
    modules: [
      {
        title: "Python Core for Data Engineers",
        text: "Python data structures (Lists, Dictionaries, Sets, Tuples); Environment setup and virtual environment management; Control flow, iteration loops, and comprehension patterns; Writing modular, reusable functions for extraction.",
      },
      {
        title: "APIs & Heterogeneous Data Formats",
        text: "REST API request lifecycle and authentication; Parsing nested JSON payloads programmatically; Reading and writing CSV and Parquet file formats; Pulling live structured data from external endpoints.",
      },
      {
        title: "Scalable Data Wrangling with Pandas",
        text: "Pandas DataFrame filtering, conditional selection, and slicing; Grouping, aggregating, and reshaping tabular datasets; Merging, joining, and concatenating multiple data frames; Handling missing values, duplicates, and data type cleaning.",
      },
      {
        title: "Resilient Coding & Error Handling",
        text: "Exception handling using try/except/finally blocks; Implementing structured script logging; Establishing reliable database connections via Python; Writing fail-safe data ingestion routines.",
      },
    ],
  },
  {
    label: "Month 3",
    title: "Data Modeling, Snowflake, dbt & First Capstone",
    modules: [
      {
        title: "Data Modeling & Architecture",
        text: "OLTP vs. OLAP database architecture principles; Dimensional modeling and schema design; Star schema and Snowflake schema architecture; Designing conceptual data models for enterprise reporting.",
      },
      {
        title: "Snowflake Cloud Data Warehouse",
        text: "Cloud data warehouse architecture and storage models; Provisioning compute clusters and managing virtual warehouses; Staging files and bulk loading using COPY INTO commands; Cloud-native data warehousing management.",
      },
      {
        title: "Analytics Engineering with dbt (Data Build Tool)",
        text: "ELT (Extract, Load, Transform) methodology and workflow; Building modular SQL models inside dbt; Staging and data mart layer configuration; Automated data testing and documentation generation.",
      },
      {
        title: "First Half Capstone: Automated Analytics Pipeline",
        text: "Building a robust Python script to extract live API data; Loading raw JSON payloads into Snowflake data warehouse; Transforming raw data via dbt into clean Star schemas; Preparing analytics-ready tables for BI reporting.",
      },
    ],
  },
  {
    label: "Month 4",
    title: "Big Data & PySpark Fundamentals",
    modules: [
      {
        title: "Big Data Concepts & Cluster Provisioning",
        text: "Distributed systems architecture and core processing principles; Hadoop Ecosystem versus Apache Spark; Databricks workspace and cluster provisioning; Managing distributed compute environments.",
      },
      {
        title: "PySpark Fundamentals & DataFrames",
        text: "Resilient Distributed Datasets (RDDs) vs. Spark DataFrames; Understanding Spark's lazy evaluation engine; Core transformations and action operations; Executing basic data operations across 10M+ rows.",
      },
      {
        title: "Advanced PySpark Analytics",
        text: "Advanced window functions in distributed environments; Working with complex types (Arrays, Structs, Maps); Parsing nested JSON arrays using custom PySpark logic; Writing and applying User Defined Functions (UDFs).",
      },
      {
        title: "PySpark Performance Optimization",
        text: "Partitioning strategies and shuffle minimization; Caching and persistence mechanisms in memory; Diagnosing and fixing Out-Of-Memory (OOM) errors; Optimizing slow-running distributed query execution.",
      },
    ],
  },
  {
    label: "Month 5",
    title: "AWS Cloud Infrastructure & Apache Airflow",
    modules: [
      {
        title: "AWS Cloud Basics & Storage",
        text: "AWS Console navigation and core service overview; Identity and Access Management (IAM) roles and security policies; Amazon S3 bucket architecture and object storage; Programmatic S3 management using Python's boto3 library.",
      },
      {
        title: "Airflow Architecture & DAG Design",
        text: "Apache Airflow core architecture and scheduler mechanics; Designing Directed Acyclic Graphs (DAGs); Managing task dependencies and execution order; Writing basic DAGs to execute sequential Python tasks.",
      },
      {
        title: "Advanced Airflow Orchestration",
        text: "Utilizing PythonOperator and BashOperator; Conditional branching and dynamic pipeline scheduling; Managing Airflow Connections, Variables, and XComs; Building intelligent, reactive workflow automation.",
      },
      {
        title: "Pipeline Monitoring & Production Reliability",
        text: "Setting up secure connections to S3 and Snowflake; Implementing automated failure alerts and notifications; Troubleshooting task failures and handling retries; Production monitoring of orchestrated pipelines.",
      },
    ],
  },
  {
    label: "Month 6",
    title: "Lakehouse Architecture, Version Control & Final Capstone",
    modules: [
      {
        title: "Lakehouse Architecture & Medallion Design",
        text: "Data Lakes versus Data Warehouses architecture; Principles of modern Lakehouse systems; Implementing Medallion Architecture data flows; Orchestrating Bronze, Silver, and Gold data layers.",
      },
      {
        title: "Version Control & Engineering Best Practices",
        text: "Git workflow for data engineers (branching, commits, merges); Pull request reviews and collaboration practices; Structuring pipeline code into clean GitHub repositories; Maintaining reproducible repository documentation.",
      },
      {
        title: "Interview Preparation & System Design",
        text: "Mock technical interviews for data engineering roles; SQL and Python coding problem walkthroughs; System design whiteboarding for scalable data architectures; Portfolio presentation and resume optimization.",
      },
      {
        title: "Final Capstone: The Enterprise Cloud Lakehouse",
        text: "Deploying a fully automated production pipeline stack; Landing raw API data into AWS S3 Bronze layer via Airflow; Transforming and cleaning data with Databricks PySpark into Silver Parquet files; Loading pristine reporting tables into Snowflake Gold layer for BI consumption.",
      },
    ],
  },
];

// "Learning Journey Visual Roadmap": the deliverable of each month.
const deliverables = [
  "Complex SQL joins, CTEs, Window functions, and query performance optimization",
  "Robust Python ingestion scripts, REST API parsers, and Pandas data cleaners",
  "Star schema models, dbt transformation layers, and Automated Analytics Pipeline",
  "Databricks clusters, PySpark DataFrames, nested JSON parsing, and OOM tuning",
  "AWS S3 storage integration, Airflow DAGs, and automated task orchestration",
  "Medallion architecture (Bronze-Silver-Gold), Git versioning, and Enterprise Cloud Lakehouse",
];

export const deOverview = deMonths.map((month, i) => ({ label: month.label, focus: month.title, outcome: deliverables[i] }));

// The capstone modules, split at the semicolons into their steps.
const capstone = (month: number, title: string): ProjectSection => {
  const capstoneModule = deMonths[month - 1].modules[3];
  return {
    title,
    focus: null,
    projects: [
      {
        title: capstoneModule.title.split(": ")[1],
        details: capstoneModule.text
          .replace(/\.$/, "")
          .split("; ")
          .map((text) => ({ label: null, text })),
      },
    ],
  };
};

export const deFirstCapstone = capstone(3, "First Half Capstone");

// "Benefits of Completing the Course".
export const deBenefits = [
  "Production-Grade Portfolio: Build and deploy an entire end-to-end cloud data ecosystem hosted live on GitHub.",
  "Modern Tech Stack Mastery: Gain hands-on operational experience with SQL, Python, Snowflake, dbt, Databricks, PySpark, AWS S3, and Apache Airflow.",
  "Real-World Engineering: Solve actual enterprise challenges involving multi-source data extraction, relational modeling, and distributed cloud processing.",
  "Career Acceleration: Position yourself strongly for high-demand roles such as Junior Data Engineer, Analytics Engineer, and Cloud Data Engineer.",
];

export const de24: Curriculum = {
  id: "de-24",
  sourceBrochure: deBrochure,
  meta: { duration: "24 weeks", format: deFormat },
  overview: deOverview,
  modules: [],
  weeks: [],
  monthModules: deMonths,
  projectSections: [deFirstCapstone, capstone(6, "Final Capstone")],
  differentiation: { focusAreas: deBenefits, tagline: null },
};
