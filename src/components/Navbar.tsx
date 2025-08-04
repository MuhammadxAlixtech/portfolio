// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            Muhammad Ali
          </Link>
          <div className="flex gap-
            <Link
              href="/"
              className={`${
                pathname === '/' 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-600 hover:text-blue-600'
              } transition-colors duration-200`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${
                pathname === '/about' 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-600 hover:text-blue-600'
              } transition-colors duration-200`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`${
                pathname === '/contact' 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-600 hover:text-blue-600'
              } transition-colors duration-200`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
