import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <>
      <span className="bannerIcon">
        <FaFacebookF />
      </span>
      <span className="bannerIcon">
        <FaTwitter />
      </span>
      <span className="bannerIcon">
        <FaLinkedinIn />
      </span>
    </>
  );
};

export default SocialIcons;
