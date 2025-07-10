// src/app/page.tsx
"use client";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { Typewriter } from 'react-simple-typewriter';

const projects = [
  {
    title: "Codeforces Profile",
    description: "Expert on Codeforces, Secure 583th rank in Codeforces Round 951 and Secured 553th rank in Codeforces Round 1021.",
    link: "https://codeforces.com/profile/BeyonderxX",
  },
  {
    title: "Music Recommender",
    description: "Built using NLP Algorithms and Tensorflow Universal Sentence Encoder.",
    link: "https://github.com/XxBeyonderxX/music-recommender",
  },
  
];

export default function Home() {
  return (
    <div className="space-y-8">
       <section className="flex flex-col md:flex-row items-center justify-center py-12">
        <div className=" text-center md:text-left space-y-4 px-10 py-10">
          <h1 className="text-4xl text-[#254D70] font-bold ">Hi, I'm Muhammad Ali</h1>
          {/* Replaced <p> with <div> to avoid invalid HTML structure */}
          <div className="text-lg">
            <div style={{ position: 'relative', display: 'inline-block', whiteSpace: 'pre' }}>
              <span style={{ visibility: 'hidden', whiteSpace: 'pre' }}>
                Software Engineer, Solving complex problems with AI, blockchain, and algorithms.
              </span>
              <span style={{ position: 'absolute', left: 0, top: 0, whiteSpace: 'pre', display: 'inline-block' }}>
                <Typewriter
                  words={[
                    'Software Engineer, Solving complex problems with AI, blockchain, and algorithms.'
                  ]}
                  loop={1}
                  cursor
                  cursorStyle='\'
                  typeSpeed={40}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="md:w-1/5">
          <Image
            src="/PFP.jpg"
            alt="Muhammad Ali"
            width={200}
            height={200}
            className="rounded mx-auto mb-4"
          />  
        </div>
       </section>
   

      <section>
        <h2 className=" text-2xl font-bold mb-4">My Work</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
