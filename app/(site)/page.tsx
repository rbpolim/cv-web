import { Me } from "./_components/me";
import { About } from "./_components/about";
import { WorkExperience } from "./_components/work-experience";
import { Education } from "./_components/education";
import { Skills } from "./_components/skills";
import { Projects } from "./_components/projects";

export default function Home() {
  return (
    <div className="font-mono">
      <div className="container scroll-my-12 mx-auto max-w-3xl mt-12 mb-20 space-y-12">
        <Me />
        <About />
        <WorkExperience />
        <Education />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
