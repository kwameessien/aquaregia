import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

if (!projectId) {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID. Copy `.env.example` to `.env.local` and set your project ID.",
  );
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-01-01",
  useCdn: true,
});
