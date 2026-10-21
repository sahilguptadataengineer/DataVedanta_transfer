import { describe, expect, it } from "vitest";
import { getProgram } from "@/data/programs";
import { durationLabel, featuredCapstones, longestTrack, monthFocus } from "./program-summary";

describe("program summary helpers", () => {
  it("describes durations", () => {
    expect(durationLabel(getProgram("generative-ai-engineering")!)).toBe("12 weeks");
    expect(durationLabel(getProgram("data-science")!)).toBe("12 or 24 weeks");
  });

  it("lists month focus areas without milestone rows", () => {
    const ds = getProgram("data-science")!;
    expect(monthFocus(ds.tracks[0])).toHaveLength(3);
    expect(monthFocus(longestTrack(ds))).toHaveLength(6);
  });

  it("picks one final capstone per program, copied from the PDF or brochure", () => {
    const titles = featuredCapstones().map((c) => c.project.title);
    expect(titles).toEqual([
      "Enterprise RAG Knowledge Assistant with Hybrid Search, Reranking & Evaluation",
      "Production-Grade LLM RAG (Retrieval-Augmented Generation) System with Guardrails & Observability",
      "Enterprise Internal Knowledge QA Agent (RAG System with LLMs)",
      "The Enterprise Cloud Lakehouse",
      "Real-Time Collaborative Document & Whiteboard Editor (like Google Docs/Miro Lite)",
      "The AI-Powered Market Intelligence Tracker Capstone",
    ]);
  });
});
