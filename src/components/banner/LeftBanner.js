import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import SocialIcons from "../layouts/SocialIcons";
import SkillsIcons from "../layouts/SkillsIcons";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Web Developer.",
      "Creative Problem Solver.",
      "UI/UX Enthusiast.",
      "Multimedia Creator.",
      "Skydiver Since 2011.",
      "Veteran Marine.",
      "Lifelong Learner.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm
          <span className="text-designColor capitalize"> Brian Kunkel</span>
        </h1>
        <h2 className="text-2xl lg:text-3xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ffea96"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I'm a web developer with a passion for clean design, smart
          functionality, and user-focused experiences. With a foundation in
          multimedia, a drive toward full-stack development, and years of
          hands-on learning, I build responsive, accessible, and scalable web
          apps—always with an eye on performance, clarity, and creativity.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <SocialIcons />
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <SkillsIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
