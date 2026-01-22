import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "ibnf27mg",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});