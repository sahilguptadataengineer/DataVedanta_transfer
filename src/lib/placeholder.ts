// Values that are still missing from the client start with this prefix (see README: pending items).
export const PLACEHOLDER_PREFIX = "PLACEHOLDER_";

export function isPlaceholder(value: string): boolean {
  return value.trim() === "" || value.startsWith(PLACEHOLDER_PREFIX);
}
