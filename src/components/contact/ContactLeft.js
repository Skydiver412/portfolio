import React from "react";
import { contactImg } from "../../assets";
import SocialIcons from "../layouts/SocialIcons";

const ContactLeft = () => {
  return (
    <div
      className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b]
               p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center"
    >
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Brian Kunkel</h3>
        <p className="text-lg font-normal text-gray-400">
          Full-Stack Web Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I'm always open to connecting with fellow developers, sharing ideas,
          or discussing new opportunities. Feel free to reach out to me via
          email!
        </p>

        {/* <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+968 97859628</span>
        </p> */}
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">bkunkel@hawkmail.hccfl.edu</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
