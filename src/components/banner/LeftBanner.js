import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Ghayth Khezami</span>
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
          Recently graduated with a degree in Software Engineering and Information Systems, I have a strong
passion for entrepreneurship and developing innovative solutions to address contemporary
technological challenges. My academic background has equipped me with a solid foundation in
software development, system analysis, problem-solving skills, and cloud computing. I am eager to
further my expertise by pursuing advanced studies in Data Science Engineering, where I aim to leverage
my knowledge to drive data-driven decision-making and create impactful technological advancements.

        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner