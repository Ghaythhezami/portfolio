import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Education */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Licence’s Degree in Software Engineering and Information Systems"
            subTitle="Higher Institute of Computer Science Kef "
            result="2021 - 2024"
            des="Pursuing a comprehensive education in software engineering and information systems, focusing on both theoretical knowledge and practical skills."
          />
          <ResumeCard
            title="Academic English"
            subTitle="British Council Tunisia "
            result="2018 - 2020"
            des="Completed an intensive course in Academic English, enhancing proficiency in academic writing and communication."
          />
        </div>
      </div>
      {/* Job Experience */}
      
    
    </motion.div>
  );
}

export default Education
