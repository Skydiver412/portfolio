import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sous Chef"
            subTitle="Sienna Mercato – Pittsburgh, PA (2014 - 2021)"
            result="USA"
            des="Led kitchen operations in a high-volume, upscale restaurant known for its creative Italian cuisine. Managed staff, maintained quality control, and collaborated on menu development, building leadership, multitasking, and team coordination skills."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
