// Python Programming, 8 weeks (2 months). Added 18 Oct 2026 (client change request 01).
// Copied from the client brochure "DataVedanta_Python_Course_Brochure.pdf"
// ("Python for Modern Software Engineering & AI Integration"). Do not reword: the text must match the brochure.

import type { Curriculum, MonthModules } from "./types";

const months: MonthModules[] = [
  {
    label: "Month 1",
    title: "Python Core, Advanced Data Structures & File Operations",
    modules: [
      {
        title: "Python Core & Control Flow",
        text: "Development environment setup (VS Code) and variables; String manipulation and formatting patterns; Conditional logic (if, elif, else) and loops (for, while). Lab: Building a dynamic CLI tool that authenticates users and calculates compound interest.",
      },
      {
        title: "Advanced Data Structures",
        text: "Deep dive into Lists, Dictionaries, Tuples, and Sets; Pythonic list and dictionary comprehensions; Memory-efficient data handling techniques. Lab: Creating an in-memory task management system (To-Do list) using nested dictionaries.",
      },
      {
        title: "Functions & Resilient Code",
        text: "Defining functions, scope rules, and parameter unpacking (*args, **kwargs); Custom error handling using try, except, and finally blocks; Writing graceful logging routines. Lab: Writing modular utility functions that catch and log errors without crashing.",
      },
      {
        title: "Object-Oriented Programming (OOP) & File I/O",
        text: "Classes, instances, constructors (__init__), and encapsulation; Class inheritance and object polymorphism; Reading and writing CSV and JSON data files. Lab: Building a simulated E-commerce cart system with interacting Product and Customer classes.",
      },
    ],
  },
  {
    label: "Month 2",
    title: "Databases, Web Scraping, AI Integration & Capstone",
    modules: [
      {
        title: "Databases with Python",
        text: "Relational database fundamentals and SQL concepts; Integrating Python with SQL using the built-in sqlite3 library; Executing queries, inserts, and transaction management. Lab: Writing a script that reads user data from a local CSV and inserts it into a SQL database.",
      },
      {
        title: "Web Scraping & Data Extraction",
        text: "HTTP request lifecycles using the requests library; Parsing HTML and navigating DOM trees with BeautifulSoup; Handling headers, parameters, and basic anti-bot filters. Lab: Scraping live product prices from an e-commerce target site.",
      },
      {
        title: "API Integration & AI Models",
        text: "Consuming external REST APIs and managing auth tokens; Structuring JSON requests and parsing payloads; Integrating Generative AI APIs (OpenAI / Gemini) into Python scripts. Lab: Sending text prompts to an AI API and retrieving generated programmatic responses.",
      },
      {
        title: "Capstone Project & Deployment",
        text: "The AI-Powered Market Intelligence Tracker Capstone: Extraction: Scraping technology or finance news articles using requests and BeautifulSoup; Storage: Automatically inserting article titles, URLs, and text into a local SQLite database; AI Integration: Looping through database entries and prompting Generative AI to generate concise 3-bullet-point executive summaries; Reporting: Exporting compiled data into a clean, formatted CSV file for business users.",
      },
    ],
  },
];

// Each "Lab: ..." from the modules above becomes a hands-on project (the capstone module has none).
const labs = months
  .flatMap((m) => m.modules)
  .map((module) => module.text.split(" Lab: ")[1])
  .filter((lab): lab is string => Boolean(lab))
  .map((lab) => ({ title: lab.replace(/\.$/, ""), details: [] }));

export const py8: Curriculum = {
  id: "py-8",
  sourceBrochure: "DataVedanta_Python_Course_Brochure.pdf",
  meta: { duration: "8 weeks", format: "Beginner to Production-Ready, Hands-On Live Training Program" },
  // "Learning Journey Visual Roadmap" (the brochure plans this course in 2-week blocks).
  overview: [
    {
      label: "Week 1–2",
      focus: "Core Syntax & Data Structures",
      outcome: "CLI authentication tool, compound interest calculator, and in-memory To-Do list",
    },
    {
      label: "Week 3–4",
      focus: "OOP, Functions & File I/O",
      outcome: "Modular error-handled utility functions and simulated E-commerce OOP cart",
    },
    {
      label: "Week 5–6",
      focus: "SQL Databases & Web Scraping",
      outcome: "SQLite database integration scripts and BeautifulSoup e-commerce price scrapers",
    },
    {
      label: "Week 7–8",
      focus: "API Integration & AI Capstone",
      outcome: "REST API consumer scripts and the AI-Powered Market Intelligence Tracker Capstone",
    },
  ],
  modules: [],
  weeks: [],
  monthModules: months,
  projectSections: [
    { title: "Hands-on labs", focus: null, projects: labs },
    {
      title: "Capstone Project",
      focus: null,
      projects: [
        {
          title: "The AI-Powered Market Intelligence Tracker Capstone",
          details: [
            { label: "Extraction", text: "Scraping technology or finance news articles using requests and BeautifulSoup" },
            { label: "Storage", text: "Automatically inserting article titles, URLs, and text into a local SQLite database" },
            {
              label: "AI Integration",
              text: "Looping through database entries and prompting Generative AI to generate concise 3-bullet-point executive summaries",
            },
            { label: "Reporting", text: "Exporting compiled data into a clean, formatted CSV file for business users" },
          ],
        },
      ],
    },
  ],
  differentiation: {
    focusAreas: [
      "Production-Ready Portfolio: Graduate with a robust, AI-integrated market intelligence application on GitHub that proves real-world utility.",
      "Modern Tech Stack Mastery: Gain hands-on operational experience with Python core, OOP, SQLite databases, web scraping (requests/BeautifulSoup), and GenAI API integration.",
      "Real-World Engineering: Automate practical business workflows from web scraping to database storage and AI-powered summarization.",
      "Career Acceleration: Build foundational coding proficiency and modern AI-leveraging skills heavily demanded across software development and data roles.",
    ],
    tagline: null,
  },
};
