import React from "react";
import Title from "../layouts/Title";
import {
  portfolioImg,
  character,
  businessAd,
  environment,
  farmhouse,
  skyHighLogo,
  newsletter,
  hacker,
} from "../../assets";
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
          title="React App"
          des="A modern, responsive portfolio built with React and Tailwind CSS. Showcases my skills, achievements, and projects with smooth animations and clean UI/UX design."
          src={portfolioImg}
          // linkGit="https://github.com/Skydiver412/portfolio"
          // linkWeb="https://portfolio-git-main-brian-kunkels-projects.vercel.app"
        />
        <ProjectsCard
          title="Adobe Illustrator – Character Fan Art"
          des="A fun tribute to one of gaming's most iconic heroes, created in Illustrator. Bright colors, bold lines, and a little star power bring this character to life in my own style."
          src={character}
          linkWeb=""
        />

        <ProjectsCard
          title="Adobe Illustrator – Skyhigh News Logo"
          des="Designed a custom logo for the fictional skydiving newsletter 'Skyhigh News.' Focused on bold vector illustration, strong typography, and a vibrant color palette to capture the excitement of freefall."
          src={skyHighLogo}
          linkWeb=""
        />
        <ProjectsCard
          title="Adobe InDesign – Newsletter"
          des="Created a fictional skydiving newsletter concept using InDesign. Designed layout, custom graphics, and content for a professional look—laying the groundwork for a potential real-world publication."
          src={newsletter}
          linkWeb=""
        />
        <ProjectsCard
          title="Adobe Photoshop – Skyhigh News Ad"
          des="Designed a fictional promotional ad for Skyhigh News using Photoshop. Blended branding, bold typography, and dynamic imagery to create an engaging teaser for a future skydiving newsletter."
          src={businessAd}
          linkWeb=""
        />

        <ProjectsCard
          title="Blender 3D – Autumn Farmhouse"
          des="Modeled and textured a rustic farmhouse environment using Blender. Focused on natural lighting, realistic materials, and a warm fall atmosphere with dynamic clouds and foliage."
          src={farmhouse}
          linkWeb=""
        />
        <ProjectsCard
          title="Blender 3D - Environment"
          des="Created a stylized 3D landscape featuring a weathered brick ruin, dynamic water, and layered vegetation using Blender. Focused on composition, lighting, and realism."
          src={environment}
          linkWeb=""
        />
        <ProjectsCard
          title="Articulate - Hacker Escape Room"
          des="An interactive e-learning game where players take on the role of a hacker attempting to thwart a cyber attack."
          src={hacker}
          // linkGit="https://github.com/Skydiver412/portfolio"
          linkWeb="http://hccwebdev.net/~capstone201/escape/story.html"
        />
      </div>
    </section>
  );
};

export default Projects;
