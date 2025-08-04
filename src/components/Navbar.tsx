// src/components/Navbar.tsx
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-[#EEEFE0] p-4 flex gap-4 justify-center">
      <Link
        href="/"
        className={`${pathname === '/' ? 'font-bold' : ''} hover:text-[#A7C1A8]`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`${pathname === '/about' ? 'font-bold' : ''} hover:text-[#A7C1A8]`}
      >
        About
      </Link>
      <Link
        href="/contact"
        className={`${pathname === '/contact' ? 'font-bold' : ''} hover:text-[#A7C1A8]`}
      >
        Contact
      </Link>
    </nav>
  );
}
