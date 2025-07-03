// src/components/ProjectCard.tsx
type ProjectProps = {
  title: string;
  description: string;
  link: string;
};

export default function ProjectCard({ title, description, link }: ProjectProps) {
  return (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#D1D8BE]"
      >
      <div className="border p-4 rounded shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2 text-[#254D70]">{title}</h3>
        <p className="text-gray-700 mb-2">{description}</p>
        

      </div>
    </a>
  );
}
