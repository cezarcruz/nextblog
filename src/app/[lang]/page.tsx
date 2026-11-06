import Image from "next/image";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";
import { AVATAR_URL, SOCIAL_LINKS } from "@/site";
import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
} from "../components/Icons";
import Certifications from "../components/Certifications";
import Experience from "../components/Experience";
import LanguageSwitcher from "../components/LanguageSwitcher";

const SOCIAL_ICONS = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
};

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function Home({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-none border-2 border-black p-6 md:p-8 neobrutalism-shadow">
      <div className="mb-4">
        <LanguageSwitcher dict={dict} currentLocale={lang} />
      </div>

      <div className="text-center mb-8">
        <Image
          src={AVATAR_URL}
          alt={dict.profile.photoAlt}
          width={128}
          height={128}
          priority
          className="w-32 h-32 rounded-none mx-auto mb-4 border-2 border-black neobrutalism-shadow object-cover"
        />
        <h1 className="text-3xl font-bold text-black mb-1">Cezar Cruz</h1>
        <p className="text-gray-700">{dict.profile.role}</p>
        <p className="text-sm text-gray-600 mt-4 leading-relaxed">
          {dict.profile.greeting}
        </p>
      </div>

      <div className="flex flex-col space-y-4">
        {SOCIAL_LINKS.map((link) => {
          const Icon = SOCIAL_ICONS[link.id];

          return (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center bg-yellow-400 text-black font-bold py-4 px-6 rounded-none text-center border-2 border-black neobrutalism-shadow transition-transform duration-150 ease-in-out hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] active:bg-yellow-500"
            >
              <span className="absolute left-5 flex items-center justify-center">
                <Icon className="w-5 h-5 fill-current" />
              </span>
              <span>{link.label}</span>
            </a>
          );
        })}
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-black uppercase tracking-wider text-black mb-4 border-b-2 border-black pb-2 text-center">
          {dict.sections.experience}
        </h2>
        <Experience dict={dict} />
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-black uppercase tracking-wider text-black mb-4 border-b-2 border-black pb-2 text-center">
          {dict.sections.technologies}
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {dict.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-200 text-black font-semibold text-xs py-2 px-3 rounded-none border-2 border-black neobrutalism-shadow transition-transform duration-150 ease-in-out hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-black uppercase tracking-wider text-black mb-4 border-b-2 border-black pb-2 text-center">
          {dict.sections.certifications}
        </h2>
        <Certifications dict={dict} />
      </div>
    </div>
  );
}
