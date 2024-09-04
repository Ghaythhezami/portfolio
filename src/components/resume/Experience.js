import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="End of Study Project Internship"
            subTitle="(January 2024 - May 2024)"
            result="Allence Tunisie "
            des={
              <div>
                <p><strong>Project:</strong> “ALLGO”</p>
                <p><strong>Context:</strong> The "ALLGO" project is a comprehensive business management application offering extensive functionalities for financial management, human resources, and internal communication.</p>
                <p><strong>Methodology:</strong> Scrum</p>
                <p><strong>Achievements:</strong></p>
                <ul className="list-disc ml-5">
                  <li>Creation of CRA module and daily mood module.</li>
                  <li>Using AWS (Amazon Web Services):</li>
                  <ul className="list-disc ml-10">
                    <li>Creation and optimization of robust cloud architectures, leveraging AWS services such as S3, Lambda, CloudFront, Route 53, and API Gateway.</li>
                    <li>Setting up a reproducible infrastructure using Terraform.</li>
                    <li>Simplifying the management of AWS resources.</li>
                  </ul>
                  <li>Managing CI/CD pipelines with GitLab:</li>
                  <ul className="list-disc ml-10">
                    <li>Automating the deployment of Node.js backend applications to the Lambda service from AWS.</li>
                    <li>Automating the deployment of Angular front-end applications on AWS S3.</li>
                    <li>Implementation of a CI/CD chain with GitLab CI to automate validation, construction, and deployment.</li>
                  </ul>
                  <li>Tests:</li>
                  <ul className="list-disc ml-10">
                    <li>Conducting rigorous and automated tests to ensure the quality, reliability, and performance of these two modules by quickly identifying and resolving potential issues using Jest and SonarQube for Node.js testing and Jasmine, Karma, and SonarQube for Angular.</li>
                  </ul>
                </ul>
                <p><strong>Technologies used:</strong> Terraform, Docker, MongoDB, GitLab runners, GitLab CI, AWS, Angular, Node.js, Express JS, Jest, Jasmine, Karma, SonarQube.</p>
              </div>
            }
            logo="path_to_allence_logo.png" // Replace with the correct path to the Allence logo
          />
          <ResumeCard
            title="End of Year Project Internship"
            subTitle="Electro Plus Tunisie - (May 2023 - September 2023)"
            result="Electro Plus Tunisie "
            des={
              <div>
                <p>Correction and implementation of an administrative inventory management panel.</p>
                <p><strong>Tasks completed:</strong></p>
                <ul className="list-disc ml-5">
                  <li>Added an authentication interface.</li>
                  <li>Correct profit margin management.</li>
                  <li>Optimization of the billing process.</li>
                  <li>Complete financial management.</li>
                  <li>Integration of an event calendar.</li>
                  <li>Statistics dashboard.</li>
                </ul>
                <p><strong>Technologies used:</strong> HTML, CSS, JavaScript, Codeigniter, MySQL, GitHub.</p>
              </div>
            }
            logo="path_to_electro_plus_logo.png" // Replace with the correct path to the Electro Plus logo
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
