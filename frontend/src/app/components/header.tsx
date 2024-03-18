import Image from "next/image";
import Link from "next/link";
import { FaMagnifyingGlass, FaList } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="flex justify-between">
      <Link href="/" className="flex items-center space-x-5">
        <Image src="/logo-128.png" alt="logo" width={60} height={60}></Image>
        <h1 className="text-4xl font-bold bg-gradient-to-br bg-clip-text text-transparent
      from-text to-text-shaded">
          Frag Nikogenia
        </h1>
      </Link>
      <nav className="flex items-center space-x-10">
        <Link href="/" className="flex flex-col items-center justify-center space-y-1">
          <FaMagnifyingGlass className="text-3xl"></FaMagnifyingGlass>
          <div className="hover:underline">Suche</div>
        </Link>
        <Link href="/list" className="flex flex-col items-center justify-center space-y-1">
          <FaList className="text-3xl"></FaList>
          <div className="hover:underline">Liste</div>
        </Link>
      </nav>
    </header>
  );
}
