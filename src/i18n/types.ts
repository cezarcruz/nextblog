export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  current?: boolean;
  highlight?: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
    ogDescription: string;
    keywords: string[];
    jobTitle: string;
    personDescription: string;
    knowsAbout: string[];
  };
  profile: {
    role: string;
    greeting: string;
    photoAlt: string;
  };
  sections: {
    experience: string;
    technologies: string;
    certifications: string;
  };
  experience: {
    current: string;
    items: ExperienceItem[];
  };
  certifications: {
    verify: string;
    badgeAltPrefix: string;
  };
  footer: {
    rights: string;
  };
  language: {
    label: string;
    pt: string;
    en: string;
  };
  technologies: string[];
}
