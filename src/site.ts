export const SITE_URL = "https://cezarcruz.com.br";
export const SITE_NAME = "Cezar Cruz";
export const AVATAR_URL =
  "https://avatars.githubusercontent.com/u/3604822?s=400&u=afaa0bd96470f6d7f75f96a3c46e09cd6ff80ddc&v=4";

export const SOCIAL_LINKS = [
  {
    id: "github",
    href: "https://github.com/cezarcruz",
    label: "GitHub",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/cezar-cruz/",
    label: "LinkedIn",
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/cezzao1914/",
    label: "Instagram",
  },
] as const;

export type SocialLinkId = (typeof SOCIAL_LINKS)[number]["id"];
