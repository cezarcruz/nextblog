export interface Certification {
  id: string;
  title: string;
  issuer: string;
  image: string;
  url: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: "aws-cloud-practitioner",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    image:
      "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    url: "https://www.credly.com/badges/e20d04c6-939b-4454-8978-ab20bb4a8b70/public_url",
  },
  {
    id: "aws-cloud-quest",
    title: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services",
    image:
      "https://images.credly.com/images/30816e43-2550-4e1c-be22-3f03c5573bb9/blob",
    url: "https://www.credly.com/badges/d3c5b139-0139-4376-b203-b83831f53d59/public_url",
  },
  {
    id: "oracle-java-associate",
    title: "Oracle Certified Associate, Java SE 8 Programmer",
    issuer: "Oracle",
    image:
      "https://images.credly.com/images/a9848abf-f8bd-474d-a9b4-6086da11a916/Oracle_Associates_Badge__1_.png",
    url: "https://www.credly.com/badges/011b4270-8a80-47c8-b9fb-3ed42ad20407/public_url",
  },
];
