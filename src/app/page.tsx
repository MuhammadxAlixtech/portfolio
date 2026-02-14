"use client";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import { FaDownload } from "react-icons/fa";

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "Built responsive, production-deployed portfolio with server-side rendering and modern UI components. Added secure contact form using Resend + Google reCAPTCHA v2 to prevent spam.",
    link: "https://github.com/MuhammadxAlixtech", // Placeholder link if not provided
  },
  {
    title: "Music Recommender",
    description: "Developed hybrid recommendation system combining collaborative filtering, content-based, and NLP-based approaches. Used TensorFlow Universal Sentence Encoder for semantic embeddings.",
    link: "https://github.com/XxBeyonderxX/music-recommender",
  },
];

const achievements = [
  {
    title: "Codeforces Expert",
    detail: "Peak Rating: 1679 | Highest Global Rank: 583 | India Rank 5/20,000+ (Round 951 Div 2)",
    link: "https://codeforces.com/profile/BeyonderxX"
  },
  {
    title: "CodeChef 4-Star",
    detail: "Peak Rating: 1849",
    link: "https://www.codechef.com/users/xbeyonderx"
  },
  {
    title: "Codefest'25 Prelims | IICPC",
    detail: "Ranked 1263 / 45,000+ in national contest sponsored by HRT, Jane Street, Jump Trading.",
    link: "#"
  }
]

export default function Home() {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-12 md:py-24">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Muhammad Ali
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
            Software Engineer | AI/ML Researcher
          </p>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-lg leading-relaxed">
            Competitive programmer expert in algorithms, data structures, and cryptanalysis.
            Building modern full-stack applications and researching ML recommendation systems.
          </p>
          <div className="flex gap-4 justify-center md:justify-start pt-4">
            <a
              href="/Muhammad_Ali_resume.pdf"
              download="Muhammad_Ali_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              <FaDownload size={14} />
              Download Resume
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 border border-gray-200 dark:border-gray-700 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
          <Image
            src="/PFP.jpg"
            alt="Muhammad Ali"
            fill
            className="rounded-full object-cover border-4 border-white dark:border-black shadow-2xl"
            priority
          />
        </div>
      </section>

      {/* Experience Section */}
      <Experience />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Achievements</h2>
        <div className="grid gap-4">
          {achievements.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-gray-50 dark:bg-zinc-900/50 border border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
