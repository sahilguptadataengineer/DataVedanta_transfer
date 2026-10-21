// Data Engineering, 12 weeks (3 months): months 1-3 of the brochure ("First 3 Months (Core Data Engineering)").
// Same text as de-24.ts, which is copied from the client brochure.

import { deBenefits, deBrochure, deFirstCapstone, deFormat, deMonths, deOverview } from "./de-24";
import type { Curriculum } from "./types";

export const de12: Curriculum = {
  id: "de-12",
  sourceBrochure: deBrochure,
  meta: { duration: "12 weeks", format: deFormat },
  overview: deOverview.slice(0, 3),
  modules: [],
  weeks: [],
  monthModules: deMonths.slice(0, 3),
  projectSections: [deFirstCapstone],
  differentiation: { focusAreas: deBenefits, tagline: null },
};
