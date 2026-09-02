import Image from "next/image";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  image: string;
  url: string;
}

const CERTIFICATIONS: Certification[] = [
  {
    id: "aws-cloud-practitioner",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    image: "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    url: "https://www.credly.com/badges/e20d04c6-939b-4454-8978-ab20bb4a8b70/public_url",
  },
  {
    id: "aws-cloud-quest",
    title: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services",
    image: "https://images.credly.com/images/30816e43-2550-4e1c-be22-3f03c5573bb9/blob",
    url: "https://www.credly.com/badges/d3c5b139-0139-4376-b203-b83831f53d59/public_url",
  },
  {
    id: "oracle-java-associate",
    title: "Oracle Certified Associate, Java SE 8 Programmer",
    issuer: "Oracle",
    image: "https://images.credly.com/images/a9848abf-f8bd-474d-a9b4-6086da11a916/Oracle_Associates_Badge__1_.png",
    url: "https://www.credly.com/badges/011b4270-8a80-47c8-b9fb-3ed42ad20407/public_url",
  },
];

export default function Certifications() {
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
              alt={`Badge de ${cert.title}`}
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
            Verificar ↗
          </span>
        </a>
      ))}
    </div>
  );
}

