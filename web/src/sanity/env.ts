export const apiVersion = "2026-07-08";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "c243kj7a";

export const isSanityConfigured = Boolean(projectId && dataset);
