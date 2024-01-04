import { WorkExperienceItem } from "@/components/work-experience-item";
import { workExperience } from "@/data/resume-work-experience";

export const WorkExperience = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold">Work Experience</h2>
      <div className="space-y-6 mt-4">
        {workExperience.map((item) => (
          <WorkExperienceItem key={item.company} data={item} />
        ))}
      </div>
    </section>
  );
};
