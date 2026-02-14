export default function Skills() {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["C/C++", "Java", "Python", "JavaScript", "SQL"]
        },
        {
            title: "ML/DL",
            skills: ["TensorFlow", "Scikit-learn", "NLTK", "Pandas", "NumPy", "Matplotlib"]
        },
        {
            title: "Web/Backend",
            skills: ["Next.js", "Node.js", "Tailwind CSS", "Vercel"]
        },
        {
            title: "Tools & Others",
            skills: ["Git", "Unix Shell", "MySQL", "C++ STL"]
        }
    ];

    return (
        <section className="py-12">
            <h2 className="text-2xl font-bold mb-8">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillCategories.map((category) => (
                    <div key={category.title}>
                        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
