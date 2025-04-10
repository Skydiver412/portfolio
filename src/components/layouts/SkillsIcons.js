import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiAdobecreativecloud } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

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
        <span className="bannerIcon" title="React">
          <SiAdobecreativecloud />
        </span>
      </a>
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="bannerIcon" title="React">
          <SiTailwindcss />
        </span>
      </a>
      <a
        href="https://code.visualstudio.com/download"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="bannerIcon" title="React">
          <VscVscode />
        </span>
      </a>
    </>
  );
};

export default SkillsIcons;
