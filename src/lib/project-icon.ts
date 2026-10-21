import type { FeatureIconName } from "@/components/icons";

/*
  Picks an icon for a project from words in its title (titles come from the course PDF).
  Checked in order: the first matching rule wins.
*/
const RULES: [RegExp, FeatureIconName][] = [
  [/\b(RAG|LLM|GenAI|Generative|Agent|Agentic|MCP|AI-Powered|Sentiment|Knowledge|Assistant)\b/i, "sparkles"],
  [/\b(Pipeline|MLOps|PySpark|Streaming|Clickstream|Drift|Retraining|Inference|Edge|Orchestration)\b/i, "workflow"],
  [/\b(Dashboard|Analytics|Forecast|Forecasting|Pricing|Churn|Inventory|Supply|Tracker)\b/i, "chart"],
  [/\b(App|Web|Editor|Storefront|Board|SaaS|API|CLI|Formatter|Extractor|Parser)\b/i, "window"],
];

export function projectIcon(title: string): FeatureIconName {
  return RULES.find(([pattern]) => pattern.test(title))?.[1] ?? "badge";
}
