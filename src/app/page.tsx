// src/app/page.tsx
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

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
          <p className="text-lg">
            Software Engineer, AI-ML Enthusiast. I love solving challenging problems and building real-world solutions using technology.          
 
          </p>
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
