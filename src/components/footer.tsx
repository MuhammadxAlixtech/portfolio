// src/components/Footer.tsx
import Link from "next/link";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { SiCodechef, SiCodeforces } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-100 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Muhammad Ali. All rights reserved.
        </div>

        <div className="flex gap-6">
          <Link href="https://github.com/MuhammadxAlixtech" target="_blank" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
            <FaGithub size={20} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/muhammad-ali-46737522a" target="_blank" className="text-gray-500 hover:text-[#0077b5] transition-colors">
            <FaLinkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://codeforces.com/profile/BeyonderxX" target="_blank" className="text-gray-500 hover:text-[#1f8dd6] transition-colors">
            <SiCodeforces size={20} />
            <span className="sr-only">Codeforces</span>
          </Link>
          <Link href="https://www.codechef.com/users/xbeyonderx" target="_blank" className="text-gray-500 hover:text-[#5B4638] transition-colors">
            <SiCodechef size={20} />
            <span className="sr-only">CodeChef</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
