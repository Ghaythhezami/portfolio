import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Data Analyst.", "Data Analyst."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY Portfolio</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Ghazi Lassoued</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a final-year Business Administration student at Tunis Business School, deeply captivated by the world of Data Science. My academic journey in Business Analytics and Information Technology has ignited a passion for uncovering the stories hidden within data.

To further fuel this passion, I embarked on an intensive Data Science bootcamp that was like unlocking a new realm of possibilities. This hands-on experience allowed me to delve into real-world projects, transforming raw data into actionable insights and innovative solutions.

Driven by curiosity and a desire to excel, I’ve continued to expand my expertise through additional certifications and self-learning. My blend of formal education, practical experience, and continuous exploration has prepared me to tackle complex data challenges and make a meaningful impact in the dynamic field of Data Science.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner