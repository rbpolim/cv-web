import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "Card Title",
    description: "A platform to build and grow your online business",
    badges: ["Side Project", "TypeScript", "Next.js"],
  },
  {
    title: "Card Title",
    description: "A platform to build and grow your online business",
    badges: ["Side Project", "TypeScript", "Next.js"],
  },
  {
    title: "Card Title",
    description: "A platform to build and grow your online business",
    badges: ["Side Project", "TypeScript", "Next.js"],
  },
  {
    title: "Card Title",
    description: "A platform to build and grow your online business",
    badges: ["Side Project", "TypeScript", "Next.js"],
  },
];

export const Projects = () => {
  return (
    <section className="space-y-2">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle className="text-base">{project.title}</CardTitle>
              <CardDescription className="text-sm">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-wrap gap-1">
              {project.badges.map((badge) => (
                <Badge variant="secondary">{badge}</Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
