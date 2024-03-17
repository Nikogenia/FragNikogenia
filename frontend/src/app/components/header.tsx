import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between">
      <Link href="/" className="flex items-center space-x-5">
      <Image src="/logo-dark.png" alt="logo" width={60} height={60}></Image>
      <h1 className="text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent
      from-text to-secondary">
        Frag Nikogenia
      </h1>
      </Link>
      <nav className="flex items-center space-x-5 text-xl">
        <Link href="/" className="hover:underline">Suche</Link>
        <Link href="/list" className="hover:underline">Liste</Link>
      </nav>
    </header>
  );
}
