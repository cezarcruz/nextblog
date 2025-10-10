"use client";

import { useEffect } from 'react';

const CredlyBadge = ({ badgeId }: { badgeId: string }) => {
  useEffect(() => {
    const scriptId = 'credly-embed-script';
    if (document.getElementById(scriptId)) {
      return;
    }
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    document.body.appendChild(script);
  }, []);

  return (
    <div
      data-iframe-width="150"
      data-iframe-height="270"
      data-share-badge-id={badgeId}
      data-share-badge-host="https://www.credly.com"
    ></div>
  );
};

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-center text-xl font-bold text-black mb-6 border-b-2 border-black pb-2">
          Certificações
        </h2>
        <div className="flex justify-center flex-wrap gap-4">
          <CredlyBadge badgeId="e20d04c6-939b-4454-8978-ab20bb4a8b70" />
          <CredlyBadge badgeId="d3c5b139-0139-4376-b203-b83831f53d59" />
          <CredlyBadge badgeId="011b4270-8a80-47c8-b9fb-3ed42ad20407" />
        </div>
      </div>
    </footer>
  );
}