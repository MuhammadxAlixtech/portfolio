export default function Experience() {
    const experiences = [
        {
            role: "Research Intern",
            company: "Center for Cryptography and Cybersecurity, IIT Hyderabad",
            period: "Sep 2025 – Dec 2025",
            description: [
                "Implemented reduced-round versions of ARX-based stream ciphers (ChaCha, Salsa, Forró) from scratch in C++ for differential cryptanalysis.",
                "Designed and evaluated boomerang distinguishers on these ciphers; analyzed success probabilities, time, and data complexities.",
                "Built tooling to analyze differential propagation, diffusion, and structural weaknesses in modern stream ciphers."
            ]
        },
        {
            role: "Research Intern",
            company: "Maharaja Agrasen Institute of Technology",
            period: "Mar 2023 – Jun 2023",
            description: [
                "Designed and implemented scalable music recommendation pipelines using TensorFlow Universal Sentence Encoder and Scikit-learn.",
                "Performed NLP preprocessing and model optimization; co-authored paper presented at ICDAM-2023."
            ]
        }
    ];

    return (
        <section className="py-12">
            <h2 className="text-2xl font-bold mb-8">Experience</h2>
            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative border-l-2 border-gray-200 dark:border-gray-800 pl-8 ml-2">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-800" />
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-lg font-semibold">{exp.role}</h3>
                            <span className="text-sm text-gray-500 font-mono">{exp.period}</span>
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 mb-4">{exp.company}</div>
                        <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            {exp.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
