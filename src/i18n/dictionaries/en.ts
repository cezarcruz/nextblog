import type { Dictionary } from "../types";

const en: Dictionary = {
  meta: {
    title: "Cezar Cruz - Software Developer",
    description:
      "Personal page and portfolio of Cezar Cruz, a software developer specializing in Java, AWS, Spring Boot, and cloud backend architecture.",
    ogDescription:
      "Personal page and portfolio of Cezar Cruz, a software developer specializing in Java, AWS, and backend architecture.",
    keywords: [
      "Cezar Cruz",
      "Software Developer",
      "Java Developer",
      "Java",
      "AWS",
      "Spring Boot",
      "Kotlin",
      "Docker",
      "Linux",
      "Backend Developer",
      "Cloud Architecture",
      "Microservices",
    ],
    jobTitle: "Software Developer",
    personDescription:
      "Software developer specializing in Java, AWS, Spring Boot, and cloud architecture.",
    knowsAbout: [
      "Java",
      "Spring Boot",
      "Amazon Web Services (AWS)",
      "Kotlin",
      "Docker",
      "Linux",
      "Microservices",
      "Software Architecture",
      "PostgreSQL",
      "JavaScript",
    ],
  },
  profile: {
    role: "Software Developer",
    greeting:
      "Hi! I'm Cezar, a software developer focused on backend technologies like Java and AWS. Welcome to my personal page.",
    photoAlt: "Profile photo of Cezar Cruz, software developer",
  },
  sections: {
    experience: "Experience",
    technologies: "Technologies",
    certifications: "Certifications",
  },
  experience: {
    current: "Current",
    items: [
      {
        id: "cit-2023",
        company: "CI&T",
        role: "Senior Software Engineer",
        period: "Nov 2023 – Present",
        current: true,
      },
      {
        id: "picpay",
        company: "PicPay",
        role: "Senior Software Engineer",
        period: "Nov 2022 – Oct 2023",
      },
      {
        id: "nubank",
        company: "Nubank",
        role: "Senior Software Engineer",
        period: "Apr 2022 – Nov 2022",
        highlight: "Mobile and cloud-first digital products and platforms.",
      },
      {
        id: "cit-2014",
        company: "CI&T",
        role: "Software Engineer → Senior Software Engineer",
        period: "Dec 2014 – Mar 2022",
        highlight:
          "Open Banking at Brazil's largest private bank: an AWS solution that scaled from 40+ to 600+ TPS with Spring WebClient.",
      },
      {
        id: "cpqd",
        company: "CPqD",
        role: "Software Developer",
        period: "Mar 2012 – Dec 2014",
        highlight: "Telephony management systems, web interfaces, and networking.",
      },
    ],
  },
  certifications: {
    verify: "Verify",
    badgeAltPrefix: "Badge for",
  },
  footer: {
    rights: "All rights reserved.",
  },
  language: {
    label: "Language",
    br: "BR",
    en: "EN",
  },
  technologies: [
    "Java",
    "AWS",
    "Kotlin",
    "AI",
    "Linux",
    "JavaScript",
    "Docker",
    "Angular",
  ],
};

export default en;
