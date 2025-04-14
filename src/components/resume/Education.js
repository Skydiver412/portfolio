import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1996 - TBD</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>

        <div className="w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* <ResumeCard
            title="BS - Web Development"
            subTitle="University of South Florida (TBD - TBD)"
            result="4.0/4"
            des="Focused on front-end and back-end web development using HTML, CSS, JavaScript, React, Node.js, and database systems. Strong foundation for a full-stack web development career."
          /> */}
          <ResumeCard
            title="AS - Web Development"
            subTitle="Hillsborough Community College (2023 - 2025)"
            result="4.0/4"
            des="Focused on front-end and back-end web development using HTML, CSS, JavaScript, React, Node.js, and database systems. 
            Combines strong technical skills with a creative edge in multimedia, 
            including experience with graphic design and digital media tools—delivering full-stack applications that are both functional and visually compelling."
          />
          <ResumeCard
            title="Associate in Specialized Technology"
            subTitle="ITT Technical Institute (2005 - 2007)"
            result="2.70/4"
            des="Studied Information Technology with a concentration in multimedia production. Gained foundational skills in digital media, design principles, and basic programming."
          />
          <ResumeCard
            title="High School Diploma"
            subTitle="Keystone Oaks H.S. (1992 - 1996)"
            result="1.77/4"
            des="Completed general education in Pittsburgh, PA. Early interest in technology and computing laid the groundwork for a future in development."
          />
        </div>
      </div>
      {/* part Two */}
      {/*
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          /> 
        </div>
      </div>*/}
    </motion.div>
  );
};

export default Education;
