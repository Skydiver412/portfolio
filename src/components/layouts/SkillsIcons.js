import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiAdobecreativecloud, SiBlender } from "react-icons/si";
// import { VscVscode } from "react-icons/vsc";

const SkillsIcons = () => {
  return (
    <>
      <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
        <span className="bannerIcon" title="React">
          <FaReact />
        </span>
      </a>
      <a
        href="https://www.adobe.com/creativecloud.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="bannerIcon" title="Adobe CC">
          <SiAdobecreativecloud />
        </span>
      </a>
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="bannerIcon" title="Tailwind CSS">
          <SiTailwindcss />
        </span>
      </a>
      <a
        href="https://www.blender.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="bannerIcon" title="Blender3d">
          <SiBlender />
        </span>
      </a>
    </>
  );
};

export default SkillsIcons;
