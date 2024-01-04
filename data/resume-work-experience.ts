export type WorkExperience = {
  company: string;
  isRemote: boolean;
  position: string;
  startYear: string;
  endYear: string;
  description: string;
  technologies: string[];
};

const workExperience = [
  {
    company: "Supply Marine",
    isRemote: true,
    position: "Full Stack Developer",
    startYear: "2023",
    endYear: "2023",
    description:
      "Contributed as a Full Stack developer in a web-based SaaS project, while also crafting prototypes in Figma. I engineered a comprehensive service order management system and daily reporting features. I developed RESTful APIs and fine-tuned MySQL architecture for optimized performance and scalability. Implemented image uploads, PDF report generation, and Satisfaction Survey email automation. ",
    technologies: 'Next.js, TypeScript, Axios, Prisma, Pdfmake, REST, Talwindcss, MySQL, Docker, Git, Zod, React-Query, React-Hook-Form',
  },
  {
    company: "Supply Marine",
    isRemote: false,
    position: "Full Stack Developer",
    startYear: "2019",
    endYear: "2020",
    description:
      "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more.",
    technologies: 'React, TypeScript, GraphQL',
  },
  {
    company: "Supply Marine",
    isRemote: true,
    position: "Full Stack Developer",
    startYear: "2019",
    endYear: "2020",
    description:
      "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more.",
    technologies: 'React, TypeScript, GraphQL',
  },
];

export { workExperience };
