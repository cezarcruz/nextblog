import type { Dictionary } from "@/i18n/types";

export default function Experience({ dict }: { dict: Dictionary }) {
  return (
    <ol className="relative ml-2 space-y-4 border-l-2 border-black pl-5">
      {dict.experience.items.map((experience) => (
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
                  {dict.experience.current}
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
