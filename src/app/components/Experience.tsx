interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  current?: boolean;
  highlight?: string;
}

const EXPERIENCES: Experience[] = [
  {
    id: "cit-2023",
    company: "CI&T",
    role: "Engenheiro de Software Sênior",
    period: "nov 2023 – atual",
    current: true,
  },
  {
    id: "picpay",
    company: "PicPay",
    role: "Engenheiro de Software Sênior",
    period: "nov 2022 – out 2023",
  },
  {
    id: "nubank",
    company: "Nubank",
    role: "Senior Software Engineer",
    period: "abr 2022 – nov 2022",
    highlight: "Produtos e plataformas digitais mobile e cloud-first.",
  },
  {
    id: "cit-2014",
    company: "CI&T",
    role: "Software Engineer → Senior Software Engineer",
    period: "dez 2014 – mar 2022",
    highlight:
      "Open Banking no maior banco privado do Brasil: solução em AWS e ganho de 40+ para 600+ TPS com Spring WebClient.",
  },
  {
    id: "cpqd",
    company: "CPqD",
    role: "Software Developer",
    period: "mar 2012 – dez 2014",
    highlight: "Sistemas de gerência de telefonia, interfaces web e redes.",
  },
];

export default function Experience() {
  return (
    <ol className="relative ml-2 space-y-4 border-l-2 border-black pl-5">
      {EXPERIENCES.map((experience) => (
        <li key={experience.id} className="relative">
          <span
            aria-hidden="true"
            className="absolute top-3 -left-[27px] h-3 w-3 rounded-none border-2 border-black bg-yellow-400"
          />
          <div className="border-2 border-black bg-white p-3 neobrutalism-shadow">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-bold leading-tight text-black">
                {experience.role}
              </h3>
              {experience.current && (
                <span className="flex-shrink-0 border border-black bg-yellow-400 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black shadow-[2px_2px_0px_0px_#000]">
                  Atual
                </span>
              )}
            </div>
            <p className="mt-1 text-xs font-semibold text-gray-700">
              {experience.company}
            </p>
            <p className="mt-0.5 font-mono text-[11px] text-gray-500">
              {experience.period}
            </p>
            {experience.highlight && (
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                {experience.highlight}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
