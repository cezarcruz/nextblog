import type { Dictionary } from "@/i18n/types";

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="w-full py-4 text-center text-xs text-gray-500 font-mono">
      <p>
        © {new Date().getFullYear()} Cezar Cruz. {dict.footer.rights}
      </p>
    </footer>
  );
}
