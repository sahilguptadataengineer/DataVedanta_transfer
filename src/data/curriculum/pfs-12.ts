// Python Full Stack Web Engineering, 12 weeks.
// Copied from the client's course content PDF, pages 33–38. Do not reword: the text must match the PDF.
// Week details, projects and differentiation were extracted from the PDF automatically and checked;
// the overview and module tables were checked against the PDF by hand.

import type { Curriculum } from "./types";

export const pfs12: Curriculum = {
  "id": "pfs-12",
  "sourcePages": [
    33,
    38
  ],
  "meta": {
    "duration": "12 weeks",
    "recommended": "8–10 hours/week",
    "format": "30% concepts + 70% hands-on"
  },
  "overview": [
    {
      "label": "Month 1",
      "focus": "Modern Frontend (HTML/CSS/JS) & React Fundamentals",
      "outcome": "Build responsive, interactive web interfaces and UI components"
    },
    {
      "label": "Month 2",
      "focus": "Python Backend Development (Django & FastAPI)",
      "outcome": "Build REST APIs, handle authentication, and design databases"
    },
    {
      "label": "Month 3",
      "focus": "Full Stack Integration, Cloud Deployment & Capstone",
      "outcome": "Connect React to Python, containerize, and deploy live apps"
    }
  ],
  "modules": [
    {
      "week": 1,
      "module": "Web Foundations & Modern CSS",
      "learn": "HTML5, CSS3, Flexbox, Grid, Responsive Design, Tailwind CSS"
    },
    {
      "week": 2,
      "module": "Core JavaScript (ES6+)",
      "learn": "DOM manipulation, Async/Await, Fetch API, ES6 features"
    },
    {
      "week": 3,
      "module": "React.js Core",
      "learn": "Components, Props, State, Hooks (useState, useEffect)"
    },
    {
      "week": 4,
      "module": "Advanced React & State Management",
      "learn": "React Router, Context API, Formik/Zod validation, Axios integration"
    },
    {
      "week": 5,
      "module": "Python Core for Web Engineers",
      "learn": "OOP, Data Structures, Decorators, Generators, Modules"
    },
    {
      "week": 6,
      "module": "Relational Databases & SQL",
      "learn": "PostgreSQL, Schema design, Queries, Indexing, Transactions"
    },
    {
      "week": 7,
      "module": "Python Backend with FastAPI",
      "learn": "REST API architecture, Pydantic schemas, Routing, CRUD"
    },
    {
      "week": 8,
      "module": "Full-Featured Backend with Django",
      "learn": "Django ORM, Admin portal, Middleware, Templating, Auth"
    },
    {
      "week": 9,
      "module": "Web Security & Authentication",
      "learn": "JWT, OAuth2, Password hashing, CORS, CSRF, Rate limiting"
    },
    {
      "week": 10,
      "module": "Asynchronous Processing & Caching",
      "learn": "Redis, Celery, Background tasks, WebSockets (Real-time features)"
    },
    {
      "week": 11,
      "module": "DevOps, Docker & CI/CD",
      "learn": "Dockerizing app stacks, GitHub Actions, Nginx, Cloud Deployment"
    },
    {
      "week": 12,
      "module": "Production Capstone",
      "learn": "Deployed Full Stack Web Application"
    }
  ],
  "weeks": [
    {
      "week": 1,
      "title": "Web Foundations & Modern Styling",
      "monthHeading": {
        "month": 1,
        "title": "MODERN FRONTEND & REACT FUNDAMENTALS"
      },
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "HTML5 Standards: Semantic elements, forms, accessibility (a11y), and document hierarchy"
            },
            {
              "text": "CSS3 Mastery: Box model, positioning, Flexbox, and CSS Grid layouts"
            },
            {
              "text": "Responsive Web Design: Mobile-first design, media queries, and fluid typography"
            },
            {
              "text": "Modern CSS Frameworks: Styling rapid interfaces using Tailwind CSS"
            },
            {
              "text": "UI/UX Best Practices: Flexbox/Grid patterns, custom themes, and reusable styling components"
            },
            {
              "text": "Developer Tooling: Chrome DevTools, web performance debugging, and CSS inspect"
            }
          ]
        }
      ]
    },
    {
      "week": 2,
      "title": "Modern JavaScript (ES6+) & DOM Manipulation",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "JavaScript Engine & Syntax: Let/Const, arrow functions, destructuring, and spread/rest operators"
            },
            {
              "text": "DOM Operations: Selecting elements, event listeners, dynamic DOM manipulation, and bubbling"
            },
            {
              "text": "Asynchronous JavaScript: Event Loop, Promises, and Async/Await execution"
            },
            {
              "text": "HTTP Requests: Fetching data from APIs using fetch() and handling network errors"
            },
            {
              "text": "Data Handling: Array methods (map, filter, reduce), JSON parsing, and LocalStorage"
            },
            {
              "text": "JS Tooling: NPM, ES Modules, and Vite build configuration"
            }
          ]
        }
      ]
    },
    {
      "week": 3,
      "title": "React.js Core Foundations",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Component Architecture: Functional components, JSX syntax, and component trees"
            },
            {
              "text": "Props & State: Unidirectional data flow, passing props, and managing state with useState"
            },
            {
              "text": "Side Effects: Lifecycle management, API calls, and cleanup tasks using useEffect"
            },
            {
              "text": "Event Handling: Form inputs, submit handlers, and controlled components"
            },
            {
              "text": "Lists & Conditional Rendering: Rendering arrays using keys and conditional UI logic"
            },
            {
              "text": "Styling in React: Tailwind integration with React components"
            }
          ]
        }
      ]
    },
    {
      "week": 4,
      "title": "Advanced React & Frontend State Management",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Single Page Applications (SPAs): Client-side routing using React Router v6"
            },
            {
              "text": "Global State Management: Managing cross-component state with Context API"
            },
            {
              "text": "Form Management: Building complex forms with Formik/React Hook Form and Zod validation"
            },
            {
              "text": "HTTP Client: Making clean API calls, interceptors, and error handling with Axios"
            },
            {
              "text": "UI Component Libraries: Integrating Shadcn UI / Material UI components"
            },
            {
              "text": "Performance Optimization: Code splitting, lazy loading, useMemo, and useCallback"
            }
          ]
        }
      ]
    },
    {
      "week": 5,
      "title": "Python Core for Web Engineering",
      "monthHeading": {
        "month": 2,
        "title": "PYTHON BACKEND DEVELOPMENT & DATABASE ARCHITECTURE"
      },
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Advanced Python OOP: Classes, inheritance, polymorphism, dunder methods, and abstract classes"
            },
            {
              "text": "Advanced Python Concepts: Decorators, generators, context managers, and type hinting"
            },
            {
              "text": "Data Structures: Lists, dictionaries, sets, tuples, and memory efficiency"
            },
            {
              "text": "Package Management: Managing virtual environments using venv and poetry"
            },
            {
              "text": "Error Handling & Logging: Custom exceptions, try-except blocks, and structured logging"
            },
            {
              "text": "File Operations: Handling JSON, CSV, file streams, and environment variables (.env)"
            }
          ]
        }
      ]
    },
    {
      "week": 6,
      "title": "Relational Databases & SQL Architecture",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Database Design: Relational concepts, Primary/Foreign keys, and Normalization (1NF to 3NF)"
            },
            {
              "text": "SQL Querying: SELECT, WHERE, GROUP BY, HAVING, complex JOINs, and Subqueries"
            },
            {
              "text": "Data Integrity: ACID properties, transactions, locks, and constraints"
            },
            {
              "text": "Database Optimization: Indexing strategies, execution plans, and query performance tuning"
            },
            {
              "text": "Database Administration: PostgreSQL setup, migrations, and database GUI tools (DBeaver/pgAdmin)"
            },
            {
              "text": "NoSQL Introduction: MongoDB basics and when to choose NoSQL vs SQL"
            }
          ]
        }
      ]
    },
    {
      "week": 7,
      "title": "High-Performance APIs with FastAPI",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "REST API Architecture: HTTP methods, status codes, request headers, and resource endpoints"
            },
            {
              "text": "FastAPI Core: Declarative routing, dependency injection system, and auto-generated Swagger docs"
            },
            {
              "text": "Data Validation: Pydantic models, request body validation, and response schemas"
            },
            {
              "text": "Database ORM: Connecting FastAPI to PostgreSQL using SQLAlchemy and Alembic migrations"
            },
            {
              "text": "CRUD Operations: Implementing Create, Read, Update, Delete patterns cleanly"
            },
            {
              "text": "Middleware & CORS: Configuring CORS headers, custom middleware, and error handlers"
            }
          ]
        }
      ]
    },
    {
      "week": 8,
      "title": "Enterprise Web Backend with Django",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Django Architecture: Model-View-Template (MVT) vs Model-View-Presenter patterns"
            },
            {
              "text": "Django ORM: Defining database models, field types, relationships, and QuerySets"
            },
            {
              "text": "Django REST Framework (DRF): Serializers, ModelSerializers, APIViews, and ViewSets"
            },
            {
              "text": "Authentication System: Django built-in user auth, permissions, and custom user models"
            },
            {
              "text": "Django Admin Panel: Customizing the admin interface for managing data"
            },
            {
              "text": "File Management: Managing static and media file uploads"
            }
          ]
        }
      ]
    },
    {
      "week": 9,
      "title": "Web Security & Authentication Engineering",
      "monthHeading": {
        "month": 3,
        "title": "FULL STACK INTEGRATION, DEPLOYMENT & CAPSTONE"
      },
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Authentication Standards: Session-based authentication vs JSON Web Tokens (JWT)"
            },
            {
              "text": "JWT Implementation: Token generation, refresh tokens, and security storage"
            },
            {
              "text": "OAuth2 Integration: Building \"Sign-in with Google/GitHub\" functionality"
            },
            {
              "text": "Web Security Hardening: Password hashing (Bcrypt/Argon2), CSRF protection, and XSS prevention"
            },
            {
              "text": "API Security: Rate limiting, API key authentication, and input sanitization"
            },
            {
              "text": "Role-Based Access Control (RBAC): Defining user permissions (Admin, User, Manager)"
            }
          ]
        }
      ]
    },
    {
      "week": 10,
      "title": "Asynchronous Task Processing & Caching",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Caching Layer: Accelerating API responses and session storage using Redis"
            },
            {
              "text": "Background Workers: Executing asynchronous background tasks using Celery"
            },
            {
              "text": "Task Scheduling: Periodic jobs and crons with Celery Beat (e.g., sending email reports)"
            },
            {
              "text": "Real-Time Web Communications: WebSockets implementation with FastAPI / Django Channels"
            },
            {
              "text": "Third-Party Integrations: Integrating Stripe payment gateway and Twilio/SendGrid APIs"
            },
            {
              "text": "Event-Driven Architecture: Pub/Sub messaging patterns"
            }
          ]
        }
      ]
    },
    {
      "week": 11,
      "title": "DevOps, Containerization & Cloud Deployment",
      "groups": [
        {
          "heading": null,
          "items": [
            {
              "text": "Containerization: Packaging React, FastAPI, PostgreSQL, and Redis using Docker"
            },
            {
              "text": "Multi-Container Orchestration: Writing docker-compose.yml for local and production stacks"
            },
            {
              "text": "Web Server Configuration: Configuring Nginx as a reverse proxy and SSL setup (Certbot)"
            },
            {
              "text": "CI/CD Pipelines: Automated testing and deployment workflows using GitHub Actions"
            },
            {
              "text": "Cloud Hosting: Deploying full stack apps to AWS (EC2/S3), Render, or DigitalOcean"
            },
            {
              "text": "Application Monitoring: Centralized logging, error tracking (Sentry), and uptime monitoring"
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
      "Code-First, Production Web Engineering Focus",
      "Dual Backend Stack (FastAPI for High-Speed APIs + Django for Enterprise Apps)",
      "Modern React + Tailwind CSS + Vite Frontend Architecture",
      "Real-World Infrastructure Stack (Docker, Nginx, Redis, Celery, PostgreSQL)",
      "Production-Grade Security, OAuth2, and Cloud CI/CD Deployment"
    ],
    "tagline": null
  }
};
