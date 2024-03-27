import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full p-8 space-y-1 text-center text-text-gray">
      <div>
        <Link href="/about" className="text-text hover:underline">Über</Link>
        <span> | </span>
        <a href="https://status.nikogenia.de" className="text-text hover:underline">Status</a>
        <span> | </span>
        <Link href="/contact" className="text-text hover:underline">Kontakt</Link>
        <span> | </span>
        <Link href="/privacy" className="text-text hover:underline">Datenschutz</Link>
      </div>
      <div>
        Frag <a href="https://www.nikogenia.de" className="hover:underline">Nikogenia</a> © 2024
      </div>
    </footer>
  );
}
