import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/reodertool.jpg"
          title="ReOrder Tool"
          link="https://github.com/sandun1994-blip/reorder-tool"
          description="Developed an item ordering system, utilizing React, Next.js, Typescript
          ,Tailwind CSS , Shadcn ui on the frontend.Prisma, SQL, and Nest.js on the backend."
        />
         
        <ProjectCard
          src="/loctrack.jpg"
          title="Android Delivery Tracking App"
          link="https://github.com/sandun1994-blip/chempack-rn-v4"
          description="This app developed using React Native to track the user's location and
          furnish comprehensive details regarding the initiation and completion of deliveries"
        />
        <ProjectCard
          src="/livedashboard.jpg"
          link="https://github.com/sandun1994-blip"
          title="Live Dashboard"
          description="visualizes data through graphs, tables, and various types of analysis.
          It's built with Vue and Nuxt on the frontend and uses Nest.js with SQL
          for the backend."
        />
      </div>
    </div>
  );
};

export default Projects;
