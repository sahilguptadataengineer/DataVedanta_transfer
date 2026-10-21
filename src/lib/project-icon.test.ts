import { describe, expect, it } from "vitest";
import { allTracks } from "@/data/programs";
import { projectIcon } from "./project-icon";

describe("projectIcon", () => {
  it.each([
    ["Enterprise RAG Knowledge Assistant with Hybrid Search, Reranking & Evaluation", "sparkles"],
    ["Scalable Real-Time Clickstream & User Behavior Pipeline with PySpark", "workflow"],
    ["E-Commerce Customer Churn Prediction & Retention Dashboard", "chart"],
    ["Task & Team Collaboration Board (like Trello/Jira Lite)", "window"],
  ])("%s -> %s", (title, icon) => {
    expect(projectIcon(title)).toBe(icon);
  });

  it("gives every project in the curriculum an icon", () => {
    const titles = allTracks.flatMap(({ track }) =>
      track.curriculum.projectSections.flatMap((s) => s.projects.map((p) => p.title)),
    );
    expect(titles.length).toBeGreaterThan(20);
    for (const title of titles) expect(projectIcon(title)).toBeTruthy();
  });
});
