import Image from "next/image";
import type { Dictionary } from "@/i18n/types";
import { CERTIFICATIONS } from "./certifications-data";

export default function Certifications({ dict }: { dict: Dictionary }) {
  return (
    <div className="flex flex-col space-y-3">
      {CERTIFICATIONS.map((cert) => (
        <a
          key={cert.id}
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3.5 p-3 bg-white border-2 border-black neobrutalism-shadow transition-transform duration-150 ease-in-out hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] hover:bg-yellow-50 active:bg-yellow-100 group text-left"
        >
          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center p-0.5">
            <Image
              src={cert.image}
              alt={`${dict.certifications.badgeAltPrefix} ${cert.title}`}
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xs sm:text-sm font-bold text-black leading-tight">
              {cert.title}
            </h3>
            <p className="text-[11px] text-gray-600 mt-0.5">{cert.issuer}</p>
          </div>
          <span className="text-[10px] sm:text-xs font-bold text-black px-2 py-1 bg-yellow-400 border border-black flex-shrink-0 shadow-[2px_2px_0px_0px_#000] group-hover:bg-yellow-300">
            {dict.certifications.verify} ↗
          </span>
        </a>
      ))}
    </div>
  );
}
