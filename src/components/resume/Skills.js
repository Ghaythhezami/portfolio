import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-6 lgl:gap-12"
    >
      {/* Databases */}
      <div className="w-full lgl:w-1/2">
        <div className="py-4 font-titleFont flex flex-col gap-1">
          <p className="text-xs text-designColor tracking-[2px] uppercase">Databases</p>
          <h2 className="text-lg md:text-xl font-bold">Databases</h2>
        </div>
        <div className="flex flex-col gap-2">
          <div className="overflow-x-hidden">
            <p className="text-xs uppercase font-medium">MySql</p>
            <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[0%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs uppercase font-medium">MongoDB</p>
            <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[0%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
        </div>
      </div>

      {/* Programming Languages */}
      <div className="w-full lgl:w-1/2">
        <div className="py-4 font-titleFont flex flex-col gap-1">
          <p className="text-xs text-designColor tracking-[2px] uppercase">Programming Languages</p>
          <h2 className="text-lg md:text-xl font-bold">Programming Languages</h2>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { name: "HTML", width: "0%" },
            { name: "CSS", width: "0%" },
            { name: "Java", width: "0%" },
            { name: "JavaScript", width: "0%" },
            { name: "TypeScript", width: "0%" },
            { name: "Python", width: "0%" },
            { name: "PHP", width: "0%" },
            { name: "Dart", width: "0%" }
          ].map(skill => (
            <div className="overflow-x-hidden" key={skill.name}>
              <p className="text-xs uppercase font-medium">{skill.name}</p>
              <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className={`w-[${skill.width}] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md`}
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Frameworks and Libraries */}
      <div className="w-full lgl:w-1/2">
        <div className="py-4 font-titleFont flex flex-col gap-1">
          <p className="text-xs text-designColor tracking-[2px] uppercase">Frameworks and Libraries</p>
          <h2 className="text-lg md:text-xl font-bold">Frameworks and Libraries</h2>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { name: "Angular", width: "0%" },
            { name: "ReactJs", width: "0%" },
            { name: "Laravel", width: "0%" },
            { name: "Node JS", width: "0%" },
            { name: "Express.js", width: "0%" },
            { name: "Flutter", width: "0%" }
          ].map(skill => (
            <div className="overflow-x-hidden" key={skill.name}>
              <p className="text-xs uppercase font-medium">{skill.name}</p>
              <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className={`w-[${skill.width}] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md`}
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Cloud */}
      <div className="w-full lgl:w-1/2">
        <div className="py-4 font-titleFont flex flex-col gap-1">
          <p className="text-xs text-designColor tracking-[2px] uppercase">Cloud</p>
          <h2 className="text-lg md:text-xl font-bold">Cloud</h2>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { name: "AWS", width: "0%" },
            { name: "Terraform", width: "0%" },
            { name: "Docker", width: "0%" }
          ].map(skill => (
            <div className="overflow-x-hidden" key={skill.name}>
              <p className="text-xs uppercase font-medium">{skill.name}</p>
              <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className={`w-[${skill.width}] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md`}
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Versioning */}
      <div className="w-full lgl:w-1/2">
        <div className="py-4 font-titleFont flex flex-col gap-1">
          <p className="text-xs text-designColor tracking-[2px] uppercase">Versioning</p>
          <h2 className="text-lg md:text-xl font-bold">Versioning</h2>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { name: "Github", width: "0%" },
            { name: "Gitlab", width: "0%" }
          ].map(skill => (
            <div className="overflow-x-hidden" key={skill.name}>
              <p className="text-xs uppercase font-medium">{skill.name}</p>
              <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className={`w-[${skill.width}] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md`}
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Methodology */}
      <div className="w-full lgl:w-1/2">
        <div className="py-4 font-titleFont flex flex-col gap-1">
          <p className="text-xs text-designColor tracking-[2px] uppercase">Methodology</p>
          <h2 className="text-lg md:text-xl font-bold">Methodology</h2>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { name: "Kanban", width: "0%" },
            { name: "Scrum", width: "0%" },
            { name: "JIRA", width: "0%" }
          ].map(skill => (
            <div className="overflow-x-hidden" key={skill.name}>
              <p className="text-xs uppercase font-medium">{skill.name}</p>
              <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className={`w-[${skill.width}] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md`}
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* OS Systems */}
      <div className="w-full lgl:w-1/2">
        <div className="py-4 font-titleFont flex flex-col gap-1">
          <p className="text-xs text-designColor tracking-[2px] uppercase">OS Systems</p>
          <h2 className="text-lg md:text-xl font-bold">OS Systems</h2>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { name: "Linux", width: "0%" },
            { name: "Windows", width: "0%" }
          ].map(skill => (
            <div className="overflow-x-hidden" key={skill.name}>
              <p className="text-xs uppercase font-medium">{skill.name}</p>
              <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className={`w-[${skill.width}] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md`}
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Unit Testing */}
      <div className="w-full lgl:w-1/2">
        <div className="py-4 font-titleFont flex flex-col gap-1">
          <p className="text-xs text-designColor tracking-[2px] uppercase">Unit Testing</p>
          <h2 className="text-lg md:text-xl font-bold">Unit Testing</h2>
        </div>
        <div className="flex flex-col gap-2">
          <div className="overflow-x-hidden">
            <p className="text-xs uppercase font-medium">SonarCube</p>
            <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[0%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
