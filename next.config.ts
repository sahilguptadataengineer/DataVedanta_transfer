import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build the whole site as plain HTML/CSS/JS in the `out/` folder (no server needed).
  output: "export",
  // Each page becomes `/programs/index.html`, which static hosts serve cleanly.
  trailingSlash: true,
  // The default image optimiser needs a server, so images are served as-is.
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
