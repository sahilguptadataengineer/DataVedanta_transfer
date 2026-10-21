// Generative AI Engineering, 12 weeks.
// Copied from the client's course content PDF, pages 10–20. Do not reword: the text must match the PDF.
// Week details, projects and differentiation were extracted from the PDF automatically and checked;
// the overview and module tables were checked against the PDF by hand.

import type { Curriculum } from "./types";

export const genai12: Curriculum = {
  "id": "genai-12",
  "sourcePages": [
    10,
    20
  ],
  "meta": {
    "duration": "12 weeks",
    "recommended": "8–10 hours/week",
    "format": "30% concepts + 70% hands-on"
  },
  "overview": [
    {
      "label": "Month 1",
      "focus": "GenAI + LLM Engineering + RAG",
      "outcome": "Build AI applications"
    },
    {
      "label": "Month 2",
      "focus": "AI Agents + n8n Automation",
      "outcome": "Build AI workers & business automations"
    },
    {
      "label": "Month 3",
      "focus": "MCP + Advanced Agents + Production + Capstone",
      "outcome": "Build deployable AI systems"
    }
  ],
  "modules": [
    {
      "week": 1,
      "module": "GenAI Foundations",
      "learn": "LLMs, models, tokens, context, hallucinations"
    },
    {
      "week": 2,
      "module": "Prompt + Context Engineering",
      "learn": "Structured prompting, schemas, context, injection"
    },
    {
      "week": 3,
      "module": "LLM APIs",
      "learn": "APIs, JSON, streaming, tool calling, cost"
    },
    {
      "week": 4,
      "module": "RAG Fundamentals",
      "learn": "Embeddings, chunking, vector DB, retrieval"
    },
    {
      "week": 5,
      "module": "Advanced RAG",
      "learn": "Hybrid search, reranking, query rewriting, evaluation"
    },
    {
      "week": 6,
      "module": "AI Agents",
      "learn": "Tools, memory, planning, agent loops"
    },
    {
      "week": 7,
      "module": "n8n Automation",
      "learn": "Workflows, triggers, APIs, webhooks"
    },
    {
      "week": 8,
      "module": "AI + n8n",
      "learn": "AI Agents, tools, memory, approvals"
    },
    {
      "week": 9,
      "module": "MCP",
      "learn": "MCP servers, tools, resources, permissions"
    },
    {
      "week": 10,
      "module": "Multi-Agent AI",
      "learn": "Supervisor, specialist agents, orchestration"
    },
    {
      "week": 11,
      "module": "Production AI",
      "learn": "Evaluation, guardrails, observability, security"
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
      "title": "AI & Generative AI Foundations",
      "groups": [
        {
          "heading": "Topics",
          "items": [
            {
              "text": "What is AI?"
            },
            {
              "text": "ML vs Deep Learning vs Generative AI"
            },
            {
              "text": "Generative AI vs traditional AI"
            },
            {
              "text": "What is an LLM?"
            },
            {
              "text": "GPT, Claude, Gemini, Llama and open-source models"
            },
            {
              "text": "How LLMs actually generate text"
            },
            {
              "text": "Tokens and context windows"
            },
            {
              "text": "Parameters"
            },
            {
              "text": "Temperature"
            },
            {
              "text": "Model selection"
            },
            {
              "text": "Hallucinations"
            },
            {
              "text": "Why LLMs fail"
            },
            {
              "text": "Chatbots vs AI applications vs AI agents"
            }
          ]
        }
      ]
    },
    {
      "week": 2,
      "title": "Prompt Engineering → Context Engineering",
      "groups": [
        {
          "heading": "Topics",
          "items": [
            {
              "text": "System vs user prompts"
            },
            {
              "text": "Role prompting"
            },
            {
              "text": "Few-shot prompting"
            },
            {
              "text": "Chain-of-thought concepts"
            },
            {
              "text": "Structured prompting"
            },
            {
              "text": "JSON outputs"
            },
            {
              "text": "Output schemas"
            },
            {
              "text": "Prompt templates"
            },
            {
              "text": "Prompt variables"
            },
            {
              "text": "Context injection"
            },
            {
              "text": "Long-context problems"
            },
            {
              "text": "Context compression"
            },
            {
              "text": "Context prioritization"
            },
            {
              "text": "Prompt injection"
            },
            {
              "text": "Instruction hierarchy"
            },
            {
              "text": "Prompt versioning"
            }
          ]
        }
      ]
    },
    {
      "week": 3,
      "title": "LLM APIs & AI Application Engineering",
      "groups": [
        {
          "heading": "Topics",
          "items": [
            {
              "text": "REST APIs"
            },
            {
              "text": "API keys"
            },
            {
              "text": "HTTP"
            },
            {
              "text": "JSON"
            },
            {
              "text": "Request/response"
            },
            {
              "text": "OpenAI API"
            },
            {
              "text": "Gemini API"
            },
            {
              "text": "Claude API"
            },
            {
              "text": "Streaming responses"
            },
            {
              "text": "Structured outputs"
            },
            {
              "text": "Function/tool calling"
            },
            {
              "text": "Embeddings"
            },
            {
              "text": "Token usage"
            },
            {
              "text": "API cost calculation"
            },
            {
              "text": "Rate limits"
            },
            {
              "text": "Error handling"
            }
          ]
        }
      ]
    },
    {
      "week": 4,
      "title": "RAG Fundamentals",
      "groups": [
        {
          "heading": "Topics",
          "items": [
            {
              "text": "Why LLMs hallucinate"
            },
            {
              "text": "What is RAG?"
            },
            {
              "text": "RAG architecture"
            },
            {
              "text": "Documents"
            },
            {
              "text": "Loaders"
            },
            {
              "text": "Parsing"
            },
            {
              "text": "Cleaning"
            },
            {
              "text": "Chunking"
            },
            {
              "text": "Embeddings"
            },
            {
              "text": "Vector databases"
            },
            {
              "text": "Similarity search"
            },
            {
              "text": "Metadata"
            },
            {
              "text": "Retrieval"
            },
            {
              "text": "Context injection"
            },
            {
              "text": "Citations"
            }
          ]
        },
        {
          "heading": "Tools",
          "items": [
            {
              "text": "Python"
            },
            {
              "text": "LangChain/LangGraph/LlamaIndex concepts"
            },
            {
              "text": "FAISS"
            },
            {
              "text": "Chroma"
            },
            {
              "text": "PostgreSQL/pgvector concepts"
            }
          ]
        }
      ]
    },
    {
      "week": 5,
      "title": "Advanced RAG + Knowledge Systems",
      "monthHeading": {
        "month": 2,
        "title": "AI AGENTS + n8n AI AUTOMATION"
      },
      "groups": [
        {
          "heading": "Topics",
          "items": [
            {
              "text": "Basic RAG limitations"
            },
            {
              "text": "Semantic search"
            },
            {
              "text": "Keyword search"
            },
            {
              "text": "Hybrid search"
            },
            {
              "text": "Query rewriting"
            },
            {
              "text": "Multi-query retrieval"
            },
            {
              "text": "Reranking"
            },
            {
              "text": "Metadata filtering"
            },
            {
              "text": "Parent-child retrieval"
            },
            {
              "text": "Multi-document RAG"
            },
            {
              "text": "RAG evaluation"
            },
            {
              "text": "Retrieval quality"
            },
            {
              "text": "Grounded answers"
            },
            {
              "text": "Citation checking"
            }
          ]
        }
      ]
    },
    {
      "week": 6,
      "title": "AI Agents Fundamentals",
      "groups": [
        {
          "heading": "Topics",
          "items": [
            {
              "text": "What is an AI agent?"
            },
            {
              "text": "Agent loop"
            },
            {
              "text": "Goals"
            },
            {
              "text": "Planning"
            },
            {
              "text": "Reasoning"
            },
            {
              "text": "Tool calling"
            },
            {
              "text": "Memory"
            },
            {
              "text": "State"
            },
            {
              "text": "Tool selection"
            },
            {
              "text": "Agent boundaries"
            },
            {
              "text": "When NOT to use agents"
            },
            {
              "text": "Agent failure modes"
            },
            {
              "text": "Human-in-the-loop"
            }
          ]
        }
      ]
    },
    {
      "week": 7,
      "title": "n8n Foundations + Business Automation",
      "groups": [
        {
          "heading": "Topics",
          "items": [
            {
              "text": "What is workflow automation?"
            },
            {
              "text": "n8n architecture"
            },
            {
              "text": "Nodes"
            },
            {
              "text": "Triggers"
            },
            {
              "text": "Actions"
            },
            {
              "text": "Expressions"
            },
            {
              "text": "JSON"
            },
            {
              "text": "Webhooks"
            },
            {
              "text": "HTTP Request"
            },
            {
              "text": "IF"
            },
            {
              "text": "Switch"
            },
            {
              "text": "Merge"
            },
            {
              "text": "Loop"
            },
            {
              "text": "Wait"
            },
            {
              "text": "Error handling"
            },
            {
              "text": "Credentials"
            },
            {
              "text": "API integrations"
            }
          ]
        }
      ]
    },
    {
      "week": 8,
      "title": "AI + n8n",
      "groups": [
        {
          "heading": "Topics",
          "items": [
            {
              "text": "AI nodes"
            },
            {
              "text": "LLM integration"
            },
            {
              "text": "AI Agent node"
            },
            {
              "text": "Tools"
            },
            {
              "text": "Memory"
            },
            {
              "text": "Structured output"
            },
            {
              "text": "Dynamic workflows"
            },
            {
              "text": "AI + APIs"
            },
            {
              "text": "AI + databases"
            },
            {
              "text": "AI + email"
            },
            {
              "text": "AI + spreadsheets"
            },
            {
              "text": "Human approval"
            },
            {
              "text": "Guardrails"
            }
          ]
        }
      ]
    },
    {
      "week": 9,
      "title": "MCP: Connecting AI to the Real World",
      "monthHeading": {
        "month": 3,
        "title": "ADVANCED AI SYSTEMS"
      },
      "groups": [
        {
          "heading": "Topics",
          "items": [
            {
              "text": "What is MCP?"
            },
            {
              "text": "Why MCP?"
            },
            {
              "text": "MCP Client"
            },
            {
              "text": "MCP Server"
            },
            {
              "text": "Tools"
            },
            {
              "text": "Resources"
            },
            {
              "text": "Prompts"
            },
            {
              "text": "MCP vs APIs"
            },
            {
              "text": "MCP vs function calling"
            },
            {
              "text": "Security considerations"
            },
            {
              "text": "Permissions"
            }
          ]
        }
      ]
    },
    {
      "week": 10,
      "title": "Multi-Agent Systems",
      "groups": [
        {
          "heading": "Topics",
          "items": [
            {
              "text": "Single-agent architecture"
            },
            {
              "text": "Multi-agent architecture"
            },
            {
              "text": "Agent specialization"
            },
            {
              "text": "Supervisor agent"
            },
            {
              "text": "Worker agents"
            },
            {
              "text": "Agent handoffs"
            },
            {
              "text": "Parallel execution"
            },
            {
              "text": "Sequential execution"
            },
            {
              "text": "Agent communication"
            },
            {
              "text": "Shared state"
            },
            {
              "text": "Conflict resolution"
            },
            {
              "text": "Human approval"
            }
          ]
        }
      ]
    },
    {
      "week": 11,
      "title": "Production AI + AI Reliability",
      "groups": [
        {
          "heading": "Topics",
          "items": [
            {
              "text": "AI evaluation"
            },
            {
              "text": "Hallucination testing"
            },
            {
              "text": "Prompt regression"
            },
            {
              "text": "RAG evaluation"
            },
            {
              "text": "Agent evaluation"
            },
            {
              "text": "Test datasets"
            },
            {
              "text": "Golden questions"
            },
            {
              "text": "Accuracy"
            },
            {
              "text": "Latency"
            },
            {
              "text": "Cost"
            },
            {
              "text": "Observability"
            },
            {
              "text": "Logging"
            },
            {
              "text": "Tracing"
            },
            {
              "text": "Error handling"
            },
            {
              "text": "Retry strategies"
            },
            {
              "text": "Rate limits"
            },
            {
              "text": "Guardrails"
            },
            {
              "text": "Human-in-the-loop"
            },
            {
              "text": "Security"
            },
            {
              "text": "Prompt injection"
            },
            {
              "text": "Data privacy"
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
  "projectSections": [
    {
      "title": "Week 6 Projects (API & Prompt Engineering Checkpoint)",
      "focus": "LLM APIs, structured outputs, JSON schemas, tool calling, and cost management.",
      "projects": [
        {
          "title": "Automated Invoice Data Extractor & JSON Formatter",
          "details": [
            {
              "label": "What you build",
              "text": "A Python script utilizing LLM APIs (OpenAI or Gemini) with structured outputs and Pydantic/JSON schemas to extract unstructured text from messy vendor invoices or receipts into a clean, standardized database-ready JSON format."
            },
            {
              "label": "Key Components",
              "text": "API integration, strict JSON schema validation, temperature control, prompt templates, and error handling for malformed outputs."
            }
          ]
        },
        {
          "title": "Smart Customer Support Ticket Triage & Routing API",
          "details": [
            {
              "label": "What you build",
              "text": "A lightweight FastAPI service that receives customer support emails/tickets, uses tool calling or function calling to classify urgency, extract sentiment, tag categories, and draft an automated reply."
            },
            {
              "label": "Key Components",
              "text": "REST API setup, streaming response handling, prompt engineering with role definitions, and structured tool responses."
            }
          ]
        },
        {
          "title": "CLI-Based AI Coding Assistant with Token & Cost Tracker",
          "details": [
            {
              "label": "What you build",
              "text": "A command-line tool where developers can chat with an LLM, write code snippets, and receive automated reviews, while tracking live token consumption and estimating API costs per session."
            },
            {
              "label": "Key Components",
              "text": "System vs. user prompts, multi-turn chat memory handling via API parameters, and token usage calculation logic."
            }
          ]
        }
      ]
    },
    {
      "title": "Capstone Projects (End of Course)",
      "focus": "Autonomous AI systems, RAG evaluation, multi-agent orchestration, n8n workflows, and Model Context Protocol (MCP).",
      "projects": [
        {
          "title": "Enterprise RAG Knowledge Assistant with Hybrid Search, Reranking & Evaluation",
          "details": [
            {
              "label": "What you build",
              "text": "A production-grade RAG system over internal company documents featuring hybrid search (semantic + keyword), a reranking layer, automated source citation checking, and evaluation metrics using golden test datasets."
            },
            {
              "label": "Key Components",
              "text": "Vector database (Chroma/FAISS/pgvector), advanced RAG retrieval optimization, guardrails against hallucinations, and observability logging."
            }
          ]
        },
        {
          "title": "Autonomous Multi-Agent Business Operations Hub with n8n Integration",
          "details": [
            {
              "label": "What you build",
              "text": "A multi-agent workflow (using a supervisor agent and specialized worker agents for research, drafting, and database updates) integrated with n8n to automate complex cross-platform tasks (e.g., monitoring emails, processing spreadsheets, and triggering human-approval webhooks)."
            },
            {
              "label": "Key Components",
              "text": "Agent loop orchestration, shared state management, tool calling, error retry strategies, and n8n visual automation triggers."
            }
          ]
        },
        {
          "title": "MCP-Powered Local Data Analyst Agentic Workspace",
          "details": [
            {
              "label": "What you build",
              "text": "An AI agent built using the Model Context Protocol (MCP) framework that securely connects an LLM client to local file resources, databases, and external tool servers with strict permission controls."
            },
            {
              "label": "Key Components",
              "text": "Custom MCP Server and Client setup, resource exposure, tool execution, security guardrails, and prompt injection defense mechanisms."
            }
          ]
        }
      ]
    }
  ],
  "differentiation": {
    "focusAreas": [
      "AI Agents + Tool Calling",
      "n8n + Generative AI Automation",
      "Production RAG + Evaluation",
      "AI + Real Business API Integrations",
      "End-to-End Autonomous AI Workflows"
    ],
    "tagline": "Others teach GenAI. We teach GenAI + Agents + Automation."
  }
};
