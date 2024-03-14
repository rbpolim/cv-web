import { Badge } from "@/components/ui/badge";
import { WorkExperience } from "@/data/resume-work-experience";

type WorkExperienceItemProps = {
  data: WorkExperience;
};

export const WorkExperienceItem = ({ data }: WorkExperienceItemProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <h3 className="text-lg font-semibold">{data.company}</h3>
          {data.isRemote && <Badge>Remote</Badge>}
        </div>
        <span className="text-muted-foreground">
          {data.startYear} - {data.endYear}
        </span>
      </div>
      <h4 className="text-muted-foreground font-semibold">{data.position}</h4>
      <p className="text-sm text-muted-foreground tracking-wide leading-relaxed">
        {data.description}
      </p>
      <p className="text-sm font-medium text-emerald-600">
        Tags: {data.technologies}
      </p>
    </div>
  );
};
