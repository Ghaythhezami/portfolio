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
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor degree in Business Administration"
            subTitle="Tunis Business School "
            result="2021 - 2025"
            des="At Tunis Business School, I am pursuing a major in Business Analytics with a minor in Information Technology. This rigorous program integrates advanced analytical methodologies with a solid foundation in IT infrastructure and systems. The curriculum provides deep expertise in data-driven decision-making, predictive modeling, and statistical analysis, while also equipping me with technical skills in IT systems and data management. This technical blend prepares me to tackle complex business challenges and optimize strategic outcomes effectively."
          />
           <ResumeCard
            title="Data science  6 months bootcamp"
            subTitle="GoMyCode "
            result="June 2024-November 2024"
            des="During my six-month bootcamps at GoMyCode, I developed practical skills in Data Science, with a focus on Python, SQL, and Power BI. The training provided hands-on experience in data analysis, database management, and interactive data visualization, enhancing my ability to extract actionable insights from complex datasets. This intensive program complemented my academic background and prepared me to address real-world data science challenges effectively."
          />
           <ResumeCard
            title="Baccaleurate degree"
            subTitle="Pioneer high school of Monastir "
            result="2017 - 2021"
            des="Experimental Science (with highest honors)"
          />
        </div>
      </div>
      {/* Job Experience */}
      
    
    </motion.div>
  );
}

export default Education
