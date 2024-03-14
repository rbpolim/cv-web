import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React",
  "Next.js",
  "React Native",
  "Tailwind CSS",
  "PostgreSQL",
  "Docker",
  "Git",
];

export const Skills = () => {
  return (
    <section className="mt-12 space-y-2">
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="flex flex-wrap items-center gap-2">
        {skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </section>
  );
};
