import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational</h2>
        </div>
        <div className=" w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Dean's List - Fall 2023"
            subTitle="Web Development Program"
            result="4.0/4"
            des="Recognized for outstanding academic performance and maintaining a high GPA throughout the Web Development degree program."
          />
          <ResumeCard
            title="Dean's List - Spring 2024"
            subTitle="Web Development Program"
            result="4.0/4"
            des="Recognized for outstanding academic performance and maintaining a high GPA throughout the Web Development degree program."
          />
          <ResumeCard
            title="Dean's List - Fall 2024"
            subTitle="Web Development Program"
            result="4.0/4"
            des="Recognized for outstanding academic performance and maintaining a high GPA throughout the Web Development degree program."
          />
          {/* <ResumeCard
            title="Dean's List - Spring 2025"
            subTitle="Web Development Program"
            result="4.0/4"
            des="Recognized for outstanding academic performance and maintaining a high GPA throughout the Web Development degree program."
          /> */}
        </div>
      </div>

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2011 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Personal</h2>
        </div>
        <div className="w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="1,000 Skydives Milestone"
            subTitle="Licensed Skydiver & Adventure Therapy Advocate"
            result="Since 2011"
            des="Surpassed 1,000 skydives while promoting the therapeutic and personal growth benefits of skydiving through community outreach and tandem jump experiences."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
