import React from "react";
import Title from "../layouts/Title";
import { portfolioImg } from "../../assets";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="React Portfolio App"
          des="A modern, responsive portfolio built with React and Tailwind CSS. Showcases my skills, achievements, and projects with smooth animations and clean UI/UX design."
          src={portfolioImg}
          linkGit="https://github.com/Skydiver412/portfolio"
          linkWeb="https://portfolio-git-main-brian-kunkels-projects.vercel.app"
        />
        {/* <ProjectsCard
          title="React Portfolio App"
          des="A modern, responsive portfolio built with React and Tailwind CSS. Showcases my skills, achievements, and projects with smooth animations and clean UI/UX design."
          src={portfolioImg}
          linkGit="https://github.com/Skydiver412/portfolio"
          linkWeb="https://portfolio-git-main-brian-kunkels-projects.vercel.app"
        /> */}
      </div>
    </section>
  );
};

export default Projects;
