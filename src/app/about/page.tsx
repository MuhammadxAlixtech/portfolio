import Skills from "@/components/Skills";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto space-y-12 pb-20">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I am a software engineer and researcher with a deep passion for solving complex problems.
          My journey in technology is driven by curiosity—whether it's diving into the depths of
          cryptographic algorithms, optimizing machine learning models, or building seamless web experiences.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          With a strong foundation in competitive programming (Expert on Codeforces), I thrive on algorithmic challenges.
          Currently, I am exploring the intersection of AI and security, conducting research on stream ciphers
          and building recommendation systems.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-semibold">Maharaja Agrasen Institute of Technology</h3>
              <span className="text-sm text-gray-500">2021 – 2025</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">B.Tech in Artificial Intelligence and Machine Learning</p>
            <p className="text-sm text-gray-500 mt-1">CGPA: 8/10</p>
          </div>
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-semibold">St. John’s Academy</h3>
              <span className="text-sm text-gray-500">2021</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Senior Secondary (Class XII)</p>
            <p className="text-sm text-gray-500 mt-1">Percentage: 88.4%</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Relevant Coursework</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Object-Oriented Programming", "Data Structures & Algorithms",
            "Operating Systems", "DBMS", "Machine Learning", "Deep Learning",
            "NLP", "Cloud Computing"
          ].map((course) => (
            <span key={course} className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 rounded-md text-sm">
              {course}
            </span>
          ))}
        </div>
      </section>

      <Skills />
    </div>
  );
}
