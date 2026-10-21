import type { ReactNode } from "react";

// Small inline SVG icons (no icon package needed). They inherit the text colour.

type IconProps = { className?: string };

export function ArrowRightIcon({ className = "size-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon({ className = "size-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className = "size-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ChatIcon({ className = "size-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5a8.5 8.5 0 0 0-7.4 12.7L3.5 20.5l4.4-1.1A8.5 8.5 0 1 0 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 8.6c.2-.4.5-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.5c.1.2 0 .4-.1.6l-.4.5c-.1.1-.1.3 0 .5.6 1 1.4 1.8 2.4 2.3.2.1.4.1.5 0l.5-.6c.2-.2.4-.2.6-.1l1.5.7c.2.1.3.3.3.5v.4c0 .4-.2.8-.6 1-.5.3-1.2.4-1.9.2-1.9-.5-3.6-1.8-4.7-3.5-.6-.9-.9-1.8-.9-2.6 0-.6.2-1.1.5-1.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DownloadIcon({ className = "size-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 3v9m0 0-3.5-3.5M10 12l3.5-3.5M4 14.5V16h12v-1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Solid star for ratings.
export function StarIcon({ className = "size-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="m10 1.8 2.5 5.2 5.7.8-4.1 4 1 5.7L10 14.8l-5.1 2.7 1-5.7-4.1-4 5.7-.8L10 1.8Z" />
    </svg>
  );
}

export function CheckIcon({ className = "size-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m4.5 10.5 3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Line icons for the boxed feature points (24px grid, stroke follows the text colour).
function LineIcon({ className = "size-6", children }: IconProps & { children: ReactNode }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export const featureIcons = {
  code: (p: IconProps) => (
    <LineIcon {...p}>
      <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" />
    </LineIcon>
  ),
  layers: (p: IconProps) => (
    <LineIcon {...p}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </LineIcon>
  ),
  tools: (p: IconProps) => (
    <LineIcon {...p}>
      <path d="M14.7 6.3a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3l7.7-7.7a4 4 0 0 0-2-2Z" />
      <path d="m5 5 4 4M3.5 6.5l3-3" />
    </LineIcon>
  ),
  calendar: (p: IconProps) => (
    <LineIcon {...p}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M3.5 10h17M8 14h3M8 17h6" />
    </LineIcon>
  ),
  profile: (p: IconProps) => (
    <LineIcon {...p}>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <circle cx="9" cy="11" r="2.3" />
      <path d="M5.5 16.5a3.6 3.6 0 0 1 7 0M15 10h3M15 13.5h3" />
    </LineIcon>
  ),
  document: (p: IconProps) => (
    <LineIcon {...p}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5M9 12h6M9 16h6" />
    </LineIcon>
  ),
  repo: (p: IconProps) => (
    <LineIcon {...p}>
      <path d="M3.5 7a2 2 0 0 1 2-2h4l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V7Z" />
      <path d="m10 11.5-2 2 2 2M14 11.5l2 2-2 2" />
    </LineIcon>
  ),
  merge: (p: IconProps) => (
    <LineIcon {...p}>
      <circle cx="6" cy="5" r="2" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="12" r="2" />
      <path d="M6 7v10M6 9c0 3 3 3 10 3" />
    </LineIcon>
  ),
  rocket: (p: IconProps) => (
    <LineIcon {...p}>
      <path d="M12 15 9 12c1.5-4.5 5-8 10.5-8.5C19 9 15.5 12.5 12 15Z" />
      <path d="M9 12H5.5l2-3H12M12 15v3.5l3-2V12" />
      <path d="M6.5 16.5c-1 1-1.5 3-1.5 3s2-.5 3-1.5" />
    </LineIcon>
  ),
  badge: (p: IconProps) => (
    <LineIcon {...p}>
      <circle cx="12" cy="9.5" r="6" />
      <path d="m9.3 9.6 1.9 1.9 3.6-3.7" />
      <path d="m8.5 14.5-1.5 6 5-2.5 5 2.5-1.5-6" />
    </LineIcon>
  ),
  briefcase: (p: IconProps) => (
    <LineIcon {...p}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12.5h18M11 12.5v1.5h2v-1.5" />
    </LineIcon>
  ),
  sparkles: (p: IconProps) => (
    <LineIcon {...p}>
      <path d="M10 4.5 11.6 9l4.4 1.5-4.4 1.6L10 16.5 8.4 12 4 10.5 8.4 9 10 4.5Z" />
      <path d="M17.5 3v3M16 4.5h3M18 15.5v3M16.5 17h3" />
    </LineIcon>
  ),
  chart: (p: IconProps) => (
    <LineIcon {...p}>
      <path d="M4 20h16M7 16v-4M11.5 16V8M16 16v-6" />
      <path d="m6 9 4-3 4 2 4-4" />
    </LineIcon>
  ),
  workflow: (p: IconProps) => (
    <LineIcon {...p}>
      <rect x="3" y="4" width="6" height="5" rx="1.2" />
      <rect x="15" y="4" width="6" height="5" rx="1.2" />
      <rect x="9" y="15" width="6" height="5" rx="1.2" />
      <path d="M9 6.5h6M6 9v3.5h6V15M18 9v3.5h-6" />
    </LineIcon>
  ),
  window: (p: IconProps) => (
    <LineIcon {...p}>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M3 9h18M6 6.8h.01M8.5 6.8h.01M8 13l-2 2 2 2M12 17h4" />
    </LineIcon>
  ),
  video: (p: IconProps) => (
    <LineIcon {...p}>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="m16 10.5 5-3v9l-5-3" />
      <path d="m8.5 9.8 3.5 2.2-3.5 2.2V9.8Z" />
    </LineIcon>
  ),
  clock: (p: IconProps) => (
    <LineIcon {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </LineIcon>
  ),
  star: (p: IconProps) => (
    <LineIcon {...p}>
      <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5Z" />
    </LineIcon>
  ),
  users: (p: IconProps) => (
    <LineIcon {...p}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19.5c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" />
      <path d="M15.5 5.2a3 3 0 0 1 0 5.6M17.5 14.6c1.7.6 2.8 2.3 3 4.9" />
    </LineIcon>
  ),
  help: (p: IconProps) => (
    <LineIcon {...p}>
      <path d="M12 3.5a8.5 8.5 0 0 0-7.4 12.7L3.5 20.5l4.3-1.1A8.5 8.5 0 1 0 12 3.5Z" />
      <path d="M9.8 9.6a2.3 2.3 0 1 1 3.3 2.1c-.7.3-1.1.9-1.1 1.6v.4M12 16.4v.1" />
    </LineIcon>
  ),
  community: (p: IconProps) => (
    <LineIcon {...p}>
      <circle cx="12" cy="5.5" r="2.3" />
      <circle cx="5" cy="17.5" r="2.3" />
      <circle cx="19" cy="17.5" r="2.3" />
      <path d="M10.8 7.5 6.2 15.5M13.2 7.5l4.6 8M7.3 17.5h9.4" />
    </LineIcon>
  ),
  eye: (p: IconProps) => (
    <LineIcon {...p}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </LineIcon>
  ),
  target: (p: IconProps) => (
    <LineIcon {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" />
    </LineIcon>
  ),
  shield: (p: IconProps) => (
    <LineIcon {...p}>
      <path d="M12 3.5 19 6v5.5c0 4.3-3 7.6-7 9-4-1.4-7-4.7-7-9V6l7-2.5Z" />
      <path d="m9 12 2 2 4-4" />
    </LineIcon>
  ),
  database: (p: IconProps) => (
    <LineIcon {...p}>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.8" />
      <path d="M4.5 5.5v6.5c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8V5.5" />
      <path d="M4.5 12v6.5c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8V12" />
    </LineIcon>
  ),
};

export type FeatureIconName = keyof typeof featureIcons;
