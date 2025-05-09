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
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Recent
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Landscaper"
            subTitle="Skydive City - Zephyrhills, FL"
            result="Summer 2024"
            des="Performed routine lawn care tasks, including mowing, trimming, and weed whacking to maintain the aesthetic quality of outdoor spaces. Ensured the grounds were tidy, safe, and visually appealing, contributing to the overall customer experience and safety at Skydive City."
          />
          <ResumeCard
            title="Grill Cook"
            subTitle="Chuck Lager's - Wesley Chapel, FL"
            result="2022 - 2023"
            des="Prepared and grilled high-quality meats, seafood, and vegetables in a fast-paced, high-volume environment. Ensured food quality and consistency, collaborated closely with kitchen staff to meet customer demands, and maintained a clean and organized workspace."
          />
          <ResumeCard
            title="Sous Chef"
            subTitle="Sienna Mercato – Pittsburgh, PA"
            result="2014 - 2021"
            des="Led kitchen operations in a high-volume, upscale restaurant known for its creative Italian cuisine. Managed staff, maintained quality control, and collaborated on menu development, building leadership, multitasking, and team coordination skills."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
