import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { i1} from '../../assets'; // Import your images
import { i2} from '../../assets'; // Import your images
import { i3} from '../../assets'; // Import your images
import { i4} from '../../assets'; // Import your images
import { i5} from '../../assets'; // Import your images


const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          
          <ResumeCard
            title="Intern"
            subTitle="Prodigy InfoTech"
            result="August 2024 - Present · 2 months"
            location="Mumbai, Maharashtra, India · Remote"
            logo={i2} 
          />
          
          <ResumeCard
            title="Intern"
            subTitle="CodSoft"
            result="August 2024 - Present · 2 months"
            location="Kolkata, West Bengal, India · Remote"
            logo={i1} 
          />
          
          <ResumeCard
            title="Learner"
            subTitle="GOMYCODE"
            result="June 2024 - Present · 4 months"
            location="Tunis, Tunisia"
            logo={i3} 
          />
          
          <ResumeCard
            title="Sponsoring and Treasury Member"
            subTitle="TIMUN TBS"
            result="October 2022 - December 2022 · 3 months"
            location="Ben Arous, Tunisia"
            logo={i4} 
          />
          
          <ResumeCard
            title="Member"
            subTitle="Google Developer Student Club - Tunis Business School"
            result="October 2022 - December 2022 · 3 months"
            location="Ben Arous, Governorate, Tunisia"
            logo={i5} 
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
