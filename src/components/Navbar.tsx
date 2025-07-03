// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#EEEFE0] p-4 flex gap-4 justify-center">
      <Link href="/" className="font-bold hover:text-[#A7C1A8]">
        Home
      </Link>
      <Link href="/about" className="hover:text-[#A7C1A8]">
        About
      </Link>
      <Link href="/contact" className="hover:text-[#A7C1A8]">
        Contact
      </Link>
    </nav>
  );
}
