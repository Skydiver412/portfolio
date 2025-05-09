import React from "react";
import {
  // FaTwitter,FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const SocialIcons = () => {
  return (
    <>
      {/* <span className="bannerIcon">
        <FaFacebookF />
      </span> */}
      {/* <span className="bannerIcon">
        <FaTwitter />
      </span> */}
      <a
        href="https://www.linkedin.com/in/brian-kunkel-6b1a41196/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="bannerIcon" title="LinkedIn profile">
          <FaLinkedinIn />
        </span>
      </a>
      <a
        href="https://github.com/Skydiver412"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="bannerIcon" title="Github profile">
          <BsGithub />
        </span>
      </a>
    </>
  );
};

export default SocialIcons;
