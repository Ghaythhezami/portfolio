import React, { useState } from 'react';
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { 
  laravelLogo, 
  angularLogo, 
  nodejsLogo, 
  expressLogo, 
  mongodbLogo, 
  htmlLogo, 
  cssLogo, 
  jsLogo, 
  codeigniterLogo, 
  mysqlLogo, 
  figmaLogo,
  python,talen,  sql  , PostgreSQL ,flask

  
} from "../../assets";
import Title from '../layouts/Title';
import { work1 } from '../../assets';
import { work2 } from '../../assets';
import { work3 } from '../../assets';
import { work4 } from '../../assets';
import { work5 } from '../../assets';
import { work6 } from '../../assets';
import { work7 } from '../../assets';
// SampleNextArrow component
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-1/2 right-0 transform -translate-y-1/2 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

// SamplePrevArrow component
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-1/2 left-0 transform -translate-y-1/2 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

// Testimonial component
const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };

  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black relative"
    >
      <div className="flex justify-center items-center text-center mb-8">
        <Title title="" des="My projects" />
      </div>
      <div className="max-w-6xl mx-auto relative">
        <Slider {...settings}>

          {/* Slide 1: Personal Portfolio */}
          <div className="flex justify-center">
            <div className="flex justify-center items-center w-full md:w-[60%] lg:w-[50%] mx-auto">
              <div className="h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col items-start justify-center">
                <img src={work5} alt="Personal Portfolio" className="w-full rounded-t-lg" />
                <div className="text-left mt-4">
                  <h3 className="text-2xl justify-center font-bold">
                  Business Intelligence Project(Consumer Behavior And Shopping Habits)
                </h3>
                  <p className="text-base tracking-wide text-gray-500">
                  Business Intelligence Project (Consumer Behavior And Shopping Habits)
• Data Gathering
• Data Preparation / ETL or ELT Process Using TALEND/Python
• Data Storage/ Modeling and DWH Creation using PostgreSQL/Python
• Data Analysis Using PowerBI                  </p>
                  {/* Technologies Used */}
                  <div className="mt-4">
                    <h4 className="text-xl justify-center font-semibold mb-2">Technologies Used:</h4>
                    <div className="bg-white p-4 rounded-lg flex gap-6 justify-center items-center">
                      <img src={python} alt="Laravel Logo" className="w-12 h-12" />
                      <img src={talen}  className="w-12 h-12" />
                      <img src={PostgreSQL}  className="w-12 h-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2: CRA (Compte Rendu d'Activité) */}
          <div className="flex justify-center">
            <div className="flex justify-center items-center w-full md:w-[60%] lg:w-[50%] mx-auto">
              <div className="h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col items-start justify-center">
                <img src={work6} alt="CRA Project" className="w-full rounded-t-lg" />
                <div className="text-left mt-4">
                  <h3 className="text-2xl justify-center font-bold">
                  Comprehensive Movie and Ratings Data Analysis with SQL(This project was completed as part of earning the "Databases: Relational Databases and SQL" certificate from Stanford University via edX.                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                  This project involves creating and querying a movie rating database using SQL. It includes defining tables for movies, reviewers, and ratings, populating them with sample data, and executing various SQL queries and operations for data analysis.                  </p>
                  {/* Technologies Used */}
                  <div className="mt-4">
                    <h4 className="text-xl  font-semibold justify-center mb-2">Technologies Used:</h4>
                    <div className="bg-white p-4 rounded-lg flex gap-6 justify-center items-center">
                      <img src={mysqlLogo}  className="w-12 h-12" />
                      <img src={sql}  className="w-12 h-12" />
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3: Employees' Mood */}
          <div className="flex justify-center">
            <div className="flex justify-center items-center w-full md:w-[60%] lg:w-[50%] mx-auto">
              <div className="h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col items-start justify-center">
                <img src={work7} alt="Employees' Mood" className="w-full rounded-t-lg" />
                <div className="text-left mt-4">
                  <h3 className="text-2xl justify-center font-bold">

                  Ghazi Lassoued's Messaging Platform (This project was completed as part of earning the "CS50" certificate from Harvard University via edX)                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                  The Messaging Platform is a web application developed as my final project for Harvard's CS50 course. The platform allows users to communicate with one another through private messages. It supports features such as user registration, secure login, sending and receiving messages, and maintaining a history of sent messages                  </p>
                  {/* Technologies Used */}
                  <div className="mt-4">
                    <h4 className="text-xl justify-center font-semibold mb-2">Technologies Used:</h4>
                    <div className="bg-white p-4 rounded-lg flex gap-6 justify-center items-center">
                      <img src={cssLogo} alt="Angular Logo" className="w-12 h-12" />
                      <img src={jsLogo} alt="Node.js Logo" className="w-12 h-12" />
                      <img src={python} alt="Express.js Logo" className="w-12 h-12" />
                      <img src={flask} alt="MongoDB Logo" className="w-12 h-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 4: Project Khedma */}
          <div className="flex justify-center">
            <div className="flex justify-center items-center w-full md:w-[60%] lg:w-[50%] mx-auto">
              <div className="h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col items-start justify-center">
                <img src={work2} alt="Project Khedma" className="w-full rounded-t-lg" />
                <div className="text-left mt-4">
                  <h3 className="text-2xl justify-center font-bold">

                  SQL Database Analysis Highschooler Social Network (This project was completed as part of earning the "Databases: Relational Databases and SQL" certificate from Stanford University via edX.)                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                  This project involves working with a fictional high school database structured around students, their friendships, and their likes. The SQL script sets up tables for Highschoolers, Friends, and Likes, populates them with data, and then performs various queries to extract meaningful information                  </p>
                  {/* Technologies Used */}
                  <div className="mt-4">
                    <h4 className="text-xl justify-center font-semibold mb-2">Technologies Used:</h4>
                    <div className="bg-white p-4 rounded-lg flex gap-6 justify-center items-center">
                    <img src={mysqlLogo}  className="w-12 h-12" />
                    <img src={sql}  className="w-12 h-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          

        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
