// Python Full Stack Web Engineering, 24 weeks.
// Copied from the client's course content PDF, pages 60–68. Do not reword: the text must match the PDF.
// Week details, projects and differentiation were extracted from the PDF automatically and checked;
// the overview and module tables were checked against the PDF by hand.

import type { Curriculum } from "./types";

export const pfs24: Curriculum = {
  "id": "pfs-24",
  "sourcePages": [
    60,
    68
  ],
  "meta": {
    "duration": "24 Weeks (6 Months)",
    "recommended": "10–12 hours/week",
    "format": "30% Concepts & Architecture + 70% Hands-On Production Coding"
  },
  "overview": [
    {
      "label": "Month 1",
      "focus": "Modern Frontend Foundations & UI Architecture",
      "outcome": "Responsive Single-Page UI Components & Modern Styling"
    },
    {
      "label": "Month 2",
      "focus": "Advanced Frontend State & Component Ecosystem",
      "outcome": "Production-Ready React App with Form Validation & State"
    },
    {
      "label": "Month 3",
      "focus": "Python Core, Relational Databases & Core APIs",
      "outcome": "Relational Database Schemas & FastAPI/Django CRUD Foundations"
    },
    {
      "label": "Milestone 1",
      "focus": "Mid-Term Capstone Project (End of Month 3)",
      "outcome": "Full-Stack CRUD Application (React + FastAPI + PostgreSQL)"
    },
    {
      "label": "Month 4",
      "focus": "Enterprise Architecture, Security & Advanced Backend",
      "outcome": "OAuth2, Advanced Django ORM, Asynchronous Processing & Caching"
    },
    {
      "label": "Month 5",
      "focus": "Production Scale: Microservices, WebSockets & Event-Driven Systems",
      "outcome": "Distributed Systems, Real-time WebSockets, Celery Workers, & Redis"
    },
    {
      "label": "Month 6",
      "focus": "Advanced DevOps, Kubernetes, System Design & Final Capstone",
      "outcome": "Enterprise-Grade Microservices Deployment with Docker & CI/CD"
    },
    {
      "label": "Milestone 2",
      "focus": "Final Enterprise Capstone Project (End of Month 6)",
      "outcome": "Production-Ready, Scalable Cloud-Deployed SaaS Platform"
    }
  ],
  "moduleGroups": [
    {
      "title": "Months 1–3: Core & Intermediate Foundations",
      "fromWeek": 1
    },
    {
      "title": "Months 4–6: Industry-Perspective & Advanced Real-World Engineering",
      "fromWeek": 13
    }
  ],
  "modules": [
    {
      "week": 1,
      "module": "Web Foundations & Modern CSS",
      "learn": "HTML5 semantics, CSS3 Grid/Flexbox, Mobile-First Design, Tailwind CSS"
    },
    {
      "week": 2,
      "module": "Modern JavaScript (ES6+) & DOM",
      "learn": "ES6 syntax, Async/Await, Fetch API, Array methods, Vite tooling"
    },
    {
      "week": 3,
      "module": "React.js Core Foundations",
      "learn": "Components, Props, Unidirectional State, Hooks (useState, useEffect)"
    },
    {
      "week": 4,
      "module": "Advanced React & State Management",
      "learn": "React Router v6, Context API, Axios Interceptors, Shadcn UI"
    },
    {
      "week": 5,
      "module": "Python Core for Web Engineers",
      "learn": "Advanced OOP, Decorators, Generators, Type Hinting, Virtual Environments"
    },
    {
      "week": 6,
      "module": "Relational Databases & SQL",
      "learn": "PostgreSQL architecture, Normalization, Complex Joins, ACID, Indexing"
    },
    {
      "week": 7,
      "module": "High-Performance APIs with FastAPI",
      "learn": "FastAPI core, Pydantic validation, SQLAlchemy ORM, Alembic migrations"
    },
    {
      "week": 8,
      "module": "Enterprise Web Backend with Django",
      "learn": "Django MVT, ORM QuerySets, Django REST Framework (DRF), Admin Portal"
    },
    {
      "week": 9,
      "module": "Web Security & Authentication",
      "learn": "JWT, OAuth2 (Google/GitHub), Password Hashing, CORS, CSRF, RBAC"
    },
    {
      "week": 10,
      "module": "Asynchronous Processing & Caching",
      "learn": "Redis caching layers, Celery background tasks, Celery Beat schedulers"
    },
    {
      "week": 11,
      "module": "Core DevOps & Containerization",
      "learn": "Docker basics, docker-compose, Nginx reverse proxy configurations"
    },
    {
      "week": 12,
      "module": "Milestone Project 1: Full Stack Core Application",
      "learn": "End-to-End Integrated Web Application Deployment"
    },
    {
      "week": 13,
      "module": "Advanced Django Patterns & Enterprise Architecture",
      "learn": "Custom User Models, Custom Managers, Middleware engineering, Signals"
    },
    {
      "week": 14,
      "module": "Advanced API Design & API Gateways",
      "learn": "GraphQL with Python (Strawberry/Ariadne), API Versioning, Rate Limiting strategies"
    },
    {
      "week": 15,
      "module": "Advanced State Management & Architecture in React",
      "learn": "Redux Toolkit / Zustand, Custom Hooks patterns, Error Boundaries, Performance optimization"
    },
    {
      "week": 16,
      "module": "Frontend Testing & Quality Assurance",
      "learn": "Unit testing with Vitest/Jest, React Testing Library, End-to-End testing with Playwright/Cypress"
    },
    {
      "week": 17,
      "module": "Real-Time Web Communications & WebSockets",
      "learn": "FastAPI WebSockets, Django Channels, Redis Pub/Sub channels for live notifications"
    },
    {
      "week": 18,
      "module": "Distributed Systems & Event-Driven Architecture",
      "learn": "Message brokers (RabbitMQ / Apache Kafka basics), Event-driven decoupling"
    },
    {
      "week": 19,
      "module": "System Design & Performance Tuning for Python",
      "learn": "Database sharding, partitioning, query profiling, caching strategies at scale, Load balancing"
    },
    {
      "week": 20,
      "module": "Advanced Security, Compliance & Auditing",
      "learn": "OWASP Top 10 mitigation, API request signing, vulnerability scanning, Secrets management (Vault/AWS SSM)"
    },
    {
      "week": 21,
      "module": "Advanced DevOps, CI/CD & Infrastructure as Code",
      "learn": "Advanced GitHub Actions pipelines, Terraform basics for cloud provisioning, automated testing hooks"
    },
    {
      "week": 22,
      "module": "Container Orchestration with Kubernetes (K8s)",
      "learn": "Pods, Deployments, Services, Ingress controllers, Helm charts for Python/React clusters"
    },
    {
      "week": 23,
      "module": "Cloud-Native Observability & Monitoring",
      "learn": "Prometheus, Grafana dashboards, centralized logging with ELK/Loki stack, Sentry error tracking"
    },
    {
      "week": 24,
      "module": "Milestone Project 2: Final Enterprise Capstone",
      "learn": "Production-Grade Microservices SaaS Platform with K8s Deployment"
    }
  ],
  "weeks": [
    {
      "week": 1,
      "title": "Web Foundations & Modern Styling",
      "summary": "HTML5 Standards, Accessibility (a11y), CSS3 Grid & Flexbox mastery, Mobile-first responsive layouts, Tailwind CSS rapid prototyping, Chrome DevTools debugging.",
      "monthHeading": {
        "month": 1,
        "title": "MODERN FRONTEND FOUNDATIONS & UI ARCHITECTURE"
      },
      "groups": []
    },
    {
      "week": 2,
      "title": "Modern JavaScript (ES6+) & DOM Manipulation",
      "summary": "ES6+ syntax (Destructuring, Spread/Rest, Arrow functions), DOM event delegation, Asynchronous execution (Event Loop, Promises, Async/Await), Functional array methods (map, filter, reduce), Vite tool configuration.",
      "groups": []
    },
    {
      "week": 3,
      "title": "React.js Core Foundations",
      "summary": "Functional component architecture, JSX syntax, Props down / Events up data flow, State management using useState, Lifecycle and side effects via useEffect, Controlled form inputs.",
      "groups": []
    },
    {
      "week": 4,
      "title": "Advanced React & Frontend State Management",
      "summary": "Single Page Applications with React Router v6, Global state sharing with Context API, Form validation schemas using Zod and React Hook Form, HTTP client setup via Axios with interceptors, Component composition using Shadcn UI.",
      "groups": []
    },
    {
      "week": 5,
      "title": "Python Core for Web Engineers",
      "summary": "Advanced OOP (Inheritance, Polymorphism, Magic/Dunder methods, Abstract Base Classes), Pythonic constructs (Decorators, Generators, Context Managers), Type hinting, Memory-efficient data structures, Poetry packaging.",
      "monthHeading": {
        "month": 2,
        "title": "PYTHON BACKEND DEVELOPMENT & DATABASE ARCHITECTURE"
      },
      "groups": []
    },
    {
      "week": 6,
      "title": "Relational Databases & SQL Architecture",
      "summary": "Relational database design principles, Primary/Foreign keys, Normalization (1NF to 3NF), Advanced SQL (Complex JOINs, Window functions, Aggregations), ACID properties, Transaction isolation levels, Indexing strategies in PostgreSQL.",
      "groups": []
    },
    {
      "week": 7,
      "title": "High-Performance APIs with FastAPI",
      "summary": "REST architectural constraints, FastAPI dependency injection, Automatic OpenAPI/Swagger documentation, Pydantic schemas, SQLAlchemy ORM integration, Alembic database schema migrations, CRUD structural patterns.",
      "groups": []
    },
    {
      "week": 8,
      "title": "Enterprise Web Backend with Django",
      "summary": "Django MVT architecture, Advanced Django ORM optimization (select_related, prefetch_related), Building robust REST endpoints using Django REST Framework (DRF) Serializers and ViewSets, Django Admin customizations.",
      "groups": []
    },
    {
      "week": 9,
      "title": "Web Security & Authentication Engineering",
      "summary": "Token-based authentication workflows (JWT access and refresh token rotation), OAuth2 third-party integration (Google/GitHub login), Password hashing standards (Bcrypt/Argon2), CORS, CSRF, XSS defense, Role-Based Access Control (RBAC).",
      "monthHeading": {
        "month": 3,
        "title": "CORE SECURITY, CACHING & FIRST MILESTONE PROJECT"
      },
      "groups": []
    },
    {
      "week": 10,
      "title": "Asynchronous Task Processing & Caching",
      "summary": "Redis session stores and response caching layers, Asynchronous background job processing with Celery, Periodic cron scheduling via Celery Beat, Third-party integrations (Stripe checkout, SendGrid emails).",
      "groups": []
    },
    {
      "week": 11,
      "title": "Core DevOps & Containerization",
      "summary": "Multi-stage Dockerfile creation for React and Python backends, Docker Compose configuration for local multi-container development, Nginx reverse proxy configuration and SSL certificate provisioning.",
      "groups": []
    },
    {
      "week": 12,
      "title": "Milestone Project 1 (Full Stack Core Application)",
      "summary": "Students build, containerize, and deploy a fully integrated, secure full-stack application connecting a React frontend, FastAPI/Django backend, PostgreSQL database, and Redis cache.",
      "groups": []
    },
    {
      "week": 13,
      "title": "Advanced Django Patterns & Enterprise Architecture",
      "summary": "Custom user models, custom managers, custom middleware pipeline creation, Django signals for asynchronous side effects, managing multi-tenant database layouts.",
      "monthHeading": {
        "month": 4,
        "title": "ENTERPRISE ARCHITECTURE, TESTING & ADVANCED BACKEND (Industry Focus)"
      },
      "groups": []
    },
    {
      "week": 14,
      "title": "Advanced API Design & Gateways",
      "summary": "Designing extensible GraphQL APIs using Strawberry/Ariadne alongside REST endpoints, API versioning frameworks, comprehensive rate-limiting strategies and throttling policies.",
      "groups": []
    },
    {
      "week": 15,
      "title": "Advanced Frontend State Management & Architecture",
      "summary": "Global enterprise state management using Zustand or Redux Toolkit, Custom hooks architectural design patterns, React Error Boundaries, performance optimization through memoization and code splitting.",
      "groups": []
    },
    {
      "week": 16,
      "title": "Frontend Testing & Quality Assurance",
      "summary": "Comprehensive unit and component testing with Vitest and React Testing Library, building reliable end-to-end user journey tests using Playwright.",
      "groups": []
    },
    {
      "week": 17,
      "title": "Real-Time Web Communications & WebSockets",
      "summary": "Implementing low-latency real-time bidirectional communication channels using FastAPI WebSockets and Django Channels backed by Redis Pub/Sub channels for live chat/notification features.",
      "monthHeading": {
        "month": 5,
        "title": "DISTRIBUTED SYSTEMS, REAL-TIME WEBSOCKETS & PERFORMANCE SCALING (Industry Focus)"
      },
      "groups": []
    },
    {
      "week": 18,
      "title": "Distributed Systems & Event-Driven Architecture",
      "summary": "Introduction to message brokers (RabbitMQ / Apache Kafka), publishing and consuming background events, designing decoupled microservices communication boundaries.",
      "groups": []
    },
    {
      "week": 19,
      "title": "System Design & Database Performance Tuning",
      "summary": "Profiling slow SQL queries, database sharding and table partitioning strategies, high-throughput caching topologies, handling traffic spikes safely.",
      "groups": []
    },
    {
      "week": 20,
      "title": "Advanced Security, Compliance & Auditing",
      "summary": "OWASP Top 10 threat mitigation in production systems, secure API request signing, automated dependency vulnerability scanners, centralized secrets management using HashiCorp Vault or AWS Parameter Store.",
      "groups": []
    },
    {
      "week": 21,
      "title": "Advanced DevOps, CI/CD & Infrastructure as Code",
      "summary": "Advanced GitHub Actions CI/CD workflows with automated linting, test matrices, and container registry publishing; Intro to Terraform for reproducible cloud infrastructure configuration.",
      "monthHeading": {
        "month": 6,
        "title": "ADVANCED DEVOPS, KUBERNETES & FINAL ENTERPRISE CAPSTONE (Industry Focus)"
      },
      "groups": []
    },
    {
      "week": 22,
      "title": "Container Orchestration with Kubernetes (K8s)",
      "summary": "Kubernetes fundamentals (Pods, Deployments, Services, ConfigMaps, Secrets), Ingress controllers for traffic routing, packaging deployments with Helm charts.",
      "groups": []
    },
    {
      "week": 23,
      "title": "Cloud-Native Observability & Monitoring",
      "summary": "Setting up Prometheus metrics collection, Grafana visualization dashboards, centralized log aggregation pipelines (Loki/ELK), and production error tracking with Sentry.",
      "groups": []
    },
    {
      "week": 24,
      "title": "Milestone Project 2 (Final Enterprise Capstone)",
      "summary": "Design, architect, scale, and deploy a production-grade, fault-tolerant SaaS platform featuring microservices architecture, container orchestration on Kubernetes, automated CI/CD pipelines, and full cloud observability.",
      "groups": []
    }
  ],
  "projectSections": [
    {
      "title": "3rd Month Projects (Intermediate Full-Stack Milestone)",
      "focus": "Connecting a modern React frontend to a Python backend (FastAPI/Django) with database persistence, user authentication, and CRUD workflows.",
      "projects": [
        {
          "title": "Task & Team Collaboration Board (like Trello/Jira Lite)",
          "details": [
            {
              "label": "Core Features",
              "text": "User registration/login (JWT), drag-and-drop or status-based task boards (To Do, In Progress, Done), comments, and team workspace management."
            },
            {
              "label": "Tech Stack",
              "text": "React, Tailwind CSS, FastAPI, PostgreSQL, SQLAlchemy."
            },
            {
              "label": "Why it’s great",
              "text": "It covers core relational database mapping (Users → Workspaces → Boards → Tasks) and complex state management on the frontend."
            }
          ]
        },
        {
          "title": "E-Commerce Storefront with Inventory & Shopping Cart",
          "details": [
            {
              "label": "Core Features",
              "text": "Product catalog with filtering/search, dynamic shopping cart, user order history, and a basic Admin panel to add/edit products."
            },
            {
              "label": "Tech Stack",
              "text": "React, Context API, Django (with Django Admin & ORM), PostgreSQL."
            },
            {
              "label": "Why it’s great",
              "text": "Leverages Django’s built-in Admin panel out-of-the-box, allowing students to see how fast enterprise backends can be bootstrapped while building a polished e-commerce UI."
            }
          ]
        },
        {
          "title": "Real-Time Budget & Expense Tracker with Visual Analytics",
          "details": [
            {
              "label": "Core Features",
              "text": "Income/expense logging, category-wise breakdowns, monthly budget limits with alert flags, and interactive data visualization charts."
            },
            {
              "label": "Tech Stack",
              "text": "React, Recharts/Chart.js, FastAPI, PostgreSQL."
            },
            {
              "label": "Why it’s great",
              "text": "Combines mathematical/data manipulation on the backend with dynamic charting libraries on the frontend, which is highly practical for real-world SaaS apps."
            }
          ]
        }
      ]
    },
    {
      "title": "6th Month Projects (Advanced Industry-Grade Capstone)",
      "focus": "Demonstrating production-readiness, scalability, caching, background processing, security hardening, containerization, and cloud deployment.",
      "projects": [
        {
          "title": "Real-Time Collaborative Document & Whiteboard Editor (like Google Docs/Miro Lite)",
          "details": [
            {
              "label": "Core Features",
              "text": "Real-time multi-user typing/drawing synchronization, room-based WebSocket connections, background PDF export via worker queues, and autosave functionality."
            },
            {
              "label": "Tech Stack",
              "text": "React, WebSockets (Django Channels / FastAPI WebSockets), Redis, Celery, PostgreSQL, Docker, Nginx."
            },
            {
              "label": "Why it’s great",
              "text": "Proves mastery over asynchronous processing, persistent WebSocket connections, and handling concurrency—crucial skills for modern real-time web applications."
            }
          ]
        },
        {
          "title": "Multi-Tenant SaaS Analytics Dashboard with Automated Reports",
          "details": [
            {
              "label": "Core Features",
              "text": "Organization multi-tenancy, Stripe subscription billing integration, role-based access control (Admin, Manager, Viewer), and scheduled background email reports."
            },
            {
              "label": "Tech Stack",
              "text": "React, Shadcn UI, FastAPI/Django REST Framework, Celery Beat, Redis, PostgreSQL, Docker, AWS/Render."
            },
            {
              "label": "Why it’s great",
              "text": "Mimics actual B2B software products. It tests advanced security (RBAC), third-party webhook handling (Stripe), and periodic task scheduling (Celery Beat)."
            }
          ]
        },
        {
          "title": "AI-Powered Content & Resume Parser ATS (Applicant Tracking System)",
          "details": [
            {
              "label": "Core Features",
              "text": "PDF/Docx resume upload and text extraction, vector search/keyword matching against job descriptions, background processing for heavy parsing, and REST API rate-limiting."
            },
            {
              "label": "Tech Stack",
              "text": "React, FastAPI, PostgreSQL, Redis (Caching & Queue), Docker, GitHub Actions CI/CD."
            },
            {
              "label": "Why it’s great",
              "text": "Incorporates file stream handling, background worker pipelines for resource-heavy jobs, security rate-limiting, and automated deployment pipelines via CI/CD."
            }
          ]
        }
      ]
    }
  ],
  "differentiation": {
    "focusAreas": [
      "Code-First, Production Web Engineering Focus oriented around real-world software engineering expectations.",
      "Dual Backend Stack Mastery (FastAPI for High-Speed Microservices + Django for Monolithic Enterprise Applications).",
      "Modern Ecosystem (React, Tailwind CSS, Vite, Redux/Zustand, Shadcn UI).",
      "Real-World Infrastructure Stack (Docker, Kubernetes, Nginx, Redis, Celery, PostgreSQL, Kafka/RabbitMQ).",
      "Production-Grade Security, Distributed System Architecture, Advanced CI/CD, and Cloud-Native Observability."
    ],
    "tagline": null
  }
};
