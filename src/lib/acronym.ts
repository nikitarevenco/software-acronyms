export type Acronym = {
  nonAbbreviatedAcronym: string;
  description: string;
  examples: string[];
  category: string;
  related_acronyms: string[];
  origin: string;
  usageContext: string[];
  importance_level: number;
  synonyms: string[];
  yearIntroduced: number;
  metaphor: string;
  references: Array<{
    title: string;
    url: string;
  }>;
};
