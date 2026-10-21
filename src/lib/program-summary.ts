import type { Project } from "@/data/curriculum/types";
import type { Program, Track } from "@/data/programs";
import { programs } from "@/data/programs";

// "12 weeks" or "12 or 24 weeks".
export function durationLabel(program: Program): string {
  return `${program.tracks.map((t) => t.weeks).join(" or ")} weeks`;
}

// The month-by-month focus areas of a track ("Month 1", "Month 2", ...; extra rows like "Milestone 1" are skipped).
export function monthFocus(track: Track): string[] {
  return track.curriculum.overview.filter((row) => /^Month \d+$/.test(row.label)).map((row) => row.focus);
}

// The longest track of a program (24 weeks if available).
export function longestTrack(program: Program): Track {
  return program.tracks.reduce((a, b) => (b.weeks > a.weeks ? b : a));
}

// The first detail with text, used as a short description of a project.
export function projectSummary(project: Project): string {
  return project.details.find((d) => d.text.trim().length > 0)?.text ?? "";
}

// One final capstone per program: first project in the last project section of its longest track.
export function featuredCapstones(): { program: Program; track: Track; project: Project }[] {
  return programs.flatMap((program) => {
    const track = longestTrack(program);
    const last = track.curriculum.projectSections.at(-1);
    const project = last?.projects[0];
    return project ? [{ program, track, project }] : [];
  });
}
