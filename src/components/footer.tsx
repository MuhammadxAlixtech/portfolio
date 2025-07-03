// src/components/Footer.tsx
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#EEEFE0] text-[#819A91] py-6">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/MuhammadxAlixtech" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-6 h-6 hover:text-[#A7C1A8] transition" />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-ali-46737522a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-6 h-6 hover:text-[#A7C1A8] transition" />
        </a>
        <a href="https://x.com/md_x_ali" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="w-6 h-6 hover:text-[#A7C1A8] transition" />
        </a>
        <a href="https://codeforces.com/profile/BeyonderxX" target="_blank" rel="noopener noreferrer">
          <SiCodeforces className="w-6 h-6 hover:text-[#A7C1A8] transition" />
        </a>
      </div>
      <p className="text-center text-[#819A91]">© {new Date().getFullYear()} Muhammad Ali, All rights reserved.</p>
    </footer>
  );
}
