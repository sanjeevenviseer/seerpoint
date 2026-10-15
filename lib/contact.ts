export const contactInterests = [
  "AI opportunity and roadmap",
  "Agentic AI / GenAI product",
  "Data and AI platform",
  "Product engineering and modernisation",
  "Not sure yet",
] as const;

export type ContactInterest = (typeof contactInterests)[number];
