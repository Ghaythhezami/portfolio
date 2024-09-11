import React from 'react';
import Title from '../layouts/Title';
import ProjectsCard from './ProjectsCard';
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  projectSeven,
  projectEight,
  projectNine,
  projectTen,
  projectEleven,
  projectTwelve,
  projectThirteen,
  projectFourteen,
  projectFifteen,
  projectSixteen,
  projectSeventeen,
  projectEighteen,
  projectNineteen,
  projectTwenty,
} from "../../assets/index"; // Ensure all paths and imports are correct

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="MY CERTIFICATIONS"
          des="Explore my achievements and credentials"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-8">
        <ProjectsCard
          title="Agile and Scrum Fundamentals"
          des="Fundamentals of Agile and Scrum methodologies, certified by IBM."
          src={projectOne}
          url="https://courses.edx.org/certificates/d5bb91bfe6b249b2a129e880adc40db2"
        />
        <ProjectsCard
          title="Effective Management and Communication"
          des="BUSM-E102: Certification in management and communication skills by Indiana University Bloomington."
          src={projectTwo}
          url="https://courses.edx.org/certificates/1277520d57554c02b0724e5d746561c8"
        />
        <ProjectsCard
          title="Business Intelligence and Data Analytics"
          des="CCANSR101: Certification by Arizona State University focusing on data analytics and business intelligence."
          src={projectThree}
          url="https://courses.edx.org/certificates/1277520d57554c02b0724e5d746561c8"
        />
        <ProjectsCard
          title="CS50X"
          des="Introduction to Computer Science from Harvard University, covering programming and problem-solving."
          src={projectFour}
          url="https://courses.edx.org/certificates/164ba6b4f0124de48c7297923eeb92c5?_gl=1*z8woke*_gcl_au*MTAzOTc2NDA0MS4xNzE3MjM5MjA1*_ga*MzgyNzE0MjAxLjE3MTcyMzkyMDU.*_ga_D3KS4KMDT0*MTcyNDcxNDY4Ny4yOC4wLjE3MjQ3MTQ2ODcuNjAuMC4w"
        />
        <ProjectsCard
          title="Strategic Applications of IT Project & Program Management"
          des="PM-IT-001x: Certification from University of Washington on managing IT projects and programs."
          src={projectFive}
          url="https://courses.edx.org/certificates/164ba6b4f0124de48c7297923eeb92c5?_gl=1*z8woke*_gcl_au*MTAzOTc2NDA0MS4xNzE3MjM5MjA1*_ga*MzgyNzE0MjAxLjE3MTcyMzkyMDU.*_ga_D3KS4KMDT0*MTcyNDcxNDY4Ny4yOC4wLjE3MjQ3MTQ2ODcuNjAuMC4w"
        />
        <ProjectsCard
          title="Scrum Fundamentals Certified (SFC)"
          des="Certified in Scrum fundamentals by SCRUMstudy, the accreditation body for Scrum and Agile."
          src={projectSix}
          url="https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-LassouedGhazi-1044539.pdf"
        />
        <ProjectsCard
          title="Databases: Relational Databases and SQL"
          des="Certification from Stanford Online covering relational databases and SQL."
          src={projectSeven}
          url="https://courses.edx.org/certificates/32c0fac6ce0e4ada85e75e8ee1ffc565"
        />
        <ProjectsCard
          title="SQL for Data Science"
          des="IBM certification on SQL for data science, focusing on MySQL, SQL, and Python."
          src={projectEight}
          url="https://courses.edx.org/certificates/e35d4443389f4698aad996ed66da952b"
        />
        <ProjectsCard
          title="Data Science: Linear Regression"
          des="Certification from Harvard University on linear regression and related models."
          src={projectNine}
          url="https://courses.edx.org/certificates/c8e29e3cb78c4f1492bb383b8b024469"
        />
        <ProjectsCard
          title="Data Science: Machine Learning"
          des="Harvard University certification on machine learning, including supervised learning and algorithms."
          src={projectTen}
          url="https://courses.edx.org/certificates/c8e29e3cb78c4f1492bb383b8b024469"
        />
        <ProjectsCard
          title="Data Science: Wrangling"
          des="PH125.6x: Harvard University certification on data wrangling techniques."
          src={projectEleven}
          url="https://courses.edx.org/certificates/dfdbe0e77e184d3bb737e4bbdee1de75"
        />
        <ProjectsCard
          title="Data Science: Inference and Modeling"
          des="Certification from Harvard University on statistical inference and modeling."
          src={projectTwelve}
          url="https://courses.edx.org/certificates/c4f684a08f7b4e88bb6aa899183cceb1"
        />
        <ProjectsCard
          title="Data Science: Productivity Tools"
          des="Harvard University certification on productivity tools for data science, including GitHub and Linux administration."
          src={projectThirteen}
          url="https://courses.edx.org/certificates/e7b0c20b9f674c0d88de4f1c946612af?_gl=1*1b8m2dv*_ga*MTg1MDg5MDc4MC4xNjk1MzAxNTA2*_ga_D3KS4KMDT0*MTcxNTI2NDg2NS4yNC4xLjE3MTUyNjQ4NzguNDcuMC4w"
        />
        <ProjectsCard
          title="Data Science: Probability"
          des="Harvard University's edX Verified Certificate for data science probability and probabilistic models."
          src={projectFourteen}
          url="https://courses.edx.org/certificates/a7423b79815a4115b51fd4794bf840d5"
        />
        <ProjectsCard
          title="Data Science: Visualization"
          des="Certification from Harvard University on data visualization techniques."
          src={projectFifteen}
          url="https://courses.edx.org/certificates/c2baf865500e453ab454263caee9960b"
        />
        <ProjectsCard
          title="Data Science: R Basics"
          des="Harvard University certification on the basics of R for data science."
          src={projectSixteen}
          url="https://courses.edx.org/certificates/3f5fedc0ad72434baf6169f0e434df28?_gl=1*1vtteef*_ga*MTg1MDg5MDc4MC4xNjk1MzAxNTA2*_ga_D3KS4KMDT0*MTcxMzcwMDU1MC4xOS4xLjE3MTM3MDA5NTEuNjAuMC4w"
        />
        <ProjectsCard
          title="The Fundamentals of Digital Marketing"
          des="Google Digital Garage certification on the basics of digital marketing."
          src={projectSeventeen}
          url="https://heyzine.com/flip-book/04fc653c23.html"
        />
        <ProjectsCard
          title="Google Analytics for Beginners"
          des="Certification from Google Digital Academy (Skillshop) on Google Analytics basics."
          src={projectEighteen}
          url=""
        />
        <ProjectsCard
          title="IT for Business Success"
          des="Certification by HP on IT operations, management, and integration for business success."
          src={projectNineteen}
          url="https://heyzine.com/flip-book/656795056e.html"
        />
        <ProjectsCard
          title="Sponsoring Techniques Training"
          des="Certification from TIMUN TBS on sponsoring techniques."
          src={projectTwenty}
          url=""
        />
      </div>
    </section>
  );
};

export default Certificates;
