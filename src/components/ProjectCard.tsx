import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectProps {
  title: string;
  description: string;
  link?: string;
  github?: string; // Added logical support for github link if available in future
  tech?: string[];
}

export default function ProjectCard({ title, description, link }: ProjectProps) {
  return (
    <div className="group border border-gray-100 dark:border-gray-800 p-6 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 bg-white dark:bg-zinc-900/50">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <div className="flex gap-3">
          {link && (
            <Link href={link} target="_blank" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <FaExternalLinkAlt size={16} />
            </Link>
          )}
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
        {description}
      </p>
    </div>
  );
}
