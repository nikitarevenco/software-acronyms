import { Acronym } from "@/lib/acronym";

export default {
  nonAbbreviatedAcronym: "Software as a Service",
  description:
    "A cloud-based service where applications are hosted by a service provider.",
  examples: [
    "SaaS applications are accessed via the internet.",
    "Companies like Salesforce are popular SaaS providers.",
  ],
  category: "Cloud Computing",
  related_acronyms: ["PaaS", "IaaS"],
  origin: "2000s",
  usageContext: ["Technology", "Business"],
  synonyms: ["On-demand software"],
  importance_level: 5,
  yearIntroduced: 2000,
  metaphor:
    "SaaS is like renting a car instead of owning it; you pay to use it but don't need to worry about maintenance.",
  references: [
    {
      title: "What is SaaS?",
      url: "https://www.example.com/saas",
    },
  ],
} satisfies Acronym;
