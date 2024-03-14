import Image from "next/image";
import { Github, Globe, Linkedin, Mail, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";

const contacts = [
  {
    icon: Mail,
    href: "mailto:rbpolim@gmail.com",
  },
  {
    icon: Github,
    href: "https://www.github.com/rbpolim",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/rbpolim/",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/rbpolim",
  },
];

export const Me = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Rodrigo Polim</h1>
        <span className="text-sm max-w-md text-pretty text-muted-foreground mt-2">
          Full Stack Engineer focused on building products with extra attention
          to details
        </span>
        <div className="flex items-center gap-x-2 text-muted-foreground">
          <Globe className="h-3 w-3" />
          <span className="underline text-sm">São Paulo, Brazil</span>
        </div>
        <div className="flex items-center gap-x-1 mt-2">
          {contacts.map((contact) => (
            <Button key={contact.href} asChild size="icon" variant="outline">
              <a href={contact.href} target="_blank" rel="noopener noreferrer">
                <contact.icon className="h-5 w-5 text-slate-600" />
              </a>
            </Button>
          ))}
        </div>
      </div>
      <Image
        src="/avatar.jpeg"
        alt="Rodrigo Polim"
        width={120}
        height={120}
        className="bg-cover rounded-lg shadow-xl"
      />
    </div>
  );
};
