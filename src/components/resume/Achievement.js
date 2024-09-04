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
                    Personal Portfolio
                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    A personal portfolio project developed at the Higher Institute.
                  </p>
                  {/* Technologies Used */}
                  <div className="mt-4">
                    <h4 className="text-xl justify-center font-semibold mb-2">Technologies Used:</h4>
                    <div className="bg-white p-4 rounded-lg flex gap-6 justify-center items-center">
                      <img src={laravelLogo} alt="Laravel Logo" className="w-12 h-12" />
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
                    CRA (Compte Rendu d'Activité)
                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    End of studies project at Allence Tunisie. Employees log in to fill in their CRA with worked days, half-worked days, and leave days at the end of each month.
                  </p>
                  {/* Technologies Used */}
                  <div className="mt-4">
                    <h4 className="text-xl  font-semibold justify-center mb-2">Technologies Used:</h4>
                    <div className="bg-white p-4 rounded-lg flex gap-6 justify-center items-center">
                      <img src={angularLogo} alt="Angular Logo" className="w-12 h-12" />
                      <img src={nodejsLogo} alt="Node.js Logo" className="w-12 h-12" />
                      <img src={expressLogo} alt="Express.js Logo" className="w-12 h-12" />
                      <img src={mongodbLogo} alt="MongoDB Logo" className="w-12 h-12" />
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
                    Employees' Mood
                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    End of studies project at Allence Tunisie. Employees log in daily to fill in their mood, team, and a comment. The CEO and HR can consult these anonymously and view the atmosphere percentage of the company daily, weekly, and monthly.
                  </p>
                  {/* Technologies Used */}
                  <div className="mt-4">
                    <h4 className="text-xl justify-center font-semibold mb-2">Technologies Used:</h4>
                    <div className="bg-white p-4 rounded-lg flex gap-6 justify-center items-center">
                      <img src={angularLogo} alt="Angular Logo" className="w-12 h-12" />
                      <img src={nodejsLogo} alt="Node.js Logo" className="w-12 h-12" />
                      <img src={expressLogo} alt="Express.js Logo" className="w-12 h-12" />
                      <img src={mongodbLogo} alt="MongoDB Logo" className="w-12 h-12" />
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
                    Administrative Inventory Management Panel
                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    End of Year Project Internship at Electro Plus Tunisia. Tasks included adding an authentication interface, correct profit margin management, optimization of the billing process, complete financial management, integration of an event calendar, and a statistics dashboard.
                  </p>
                  {/* Technologies Used */}
                  <div className="mt-4">
                    <h4 className="text-xl justify-center font-semibold mb-2">Technologies Used:</h4>
                    <div className="bg-white p-4 rounded-lg flex gap-6 justify-center items-center">
                      <img src={htmlLogo} alt="HTML Logo" className="w-12 h-12" />
                      <img src={cssLogo} alt="CSS Logo" className="w-12 h-12" />
                      <img src={jsLogo} alt="JavaScript Logo" className="w-12 h-12" />
                      <img src={codeigniterLogo} alt="CodeIgniter Logo" className="w-12 h-12" />
                      <img src={mysqlLogo} alt="MySQL Logo" className="w-12 h-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 5: End Of Year Exhibition */}
          <div className="flex justify-center">
            <div className="flex justify-center items-center w-full md:w-[60%] lg:w-[50%] mx-auto">
              <div className="h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col items-start justify-center">
                <img src={work1} alt="End Of Year Exhibition" className="w-full rounded-t-lg" />
                <div className="text-left mt-4">
                  <h3 className="text-2xl justify-center font-bold">
                    Chemotherapy Platform Design
                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Designed a platform for the chemotherapy process in Tunisia for doctors, pharmacists, preparators, and nurses at Valley hackathon.
                  </p>
                  {/* Technologies Used */}
                  <div className="mt-4">
                    <h4 className="text-xl font-semibold justify-center mb-2">Technologies Used:</h4>
                    <div className="bg-white p-4 rounded-lg flex gap-6 justify-center items-center">
                      <img src={figmaLogo} alt="Figma Logo" className="w-12 h-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 6: Project Smile */}
          <div className="flex justify-center">
            <div className="flex justify-center items-center w-full md:w-[60%] lg:w-[50%] mx-auto">
              <div className="h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col items-start justify-center">
                <img src={work3} alt="Project Smile" className="w-full rounded-t-lg" />
                <div className="text-left mt-4">
                  <h3 className="text-2xl justify-center font-bold">
                    Employee Justice Web Application "7a9i"
                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Designed a prototype of a web application for employee justice in Tunisia after winning the hack4justice hackathon.
                  </p>
                  {/* Technologies Used */}
                  <div className="mt-4">
                    <h4 className="text-xl font-semibold justify-center mb-2">Technologies Used:</h4>
                    <div className="bg-white p-4 rounded-lg flex gap-6 justify-center items-center">
                      <img src={figmaLogo} alt="Figma Logo" className="w-12 h-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 7: Project Vote */}
          <div className="flex justify-center">
            <div className="flex justify-center items-center w-full md:w-[60%] lg:w-[50%] mx-auto">
              <div className="h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col items-start justify-center">
                <img src={work4} alt="Project Vote" className="w-full rounded-t-lg" />
                <div className="text-left mt-4">
                  <h3 className="text-2xl justify-center font-bold">
                    Project Khedma
                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Created the frontend for Project Khedma, a project for workers (forgerie, mechanic, plumber, etc.) in Tunisia, part of Race Ichmilni by Enactus Tunisia and Tunisie Telecom.
                  </p>
                  {/* Technologies Used */}
                  <div className="mt-4">
                    <h4 className="text-xl font-semibold justify-center mb-2">Technologies Used:</h4>
                    <div className="bg-white p-4 rounded-lg flex gap-6 justify-center items-center">
                      <img src={htmlLogo} alt="HTML Logo" className="w-12 h-12" />
                      <img src={cssLogo} alt="CSS Logo" className="w-12 h-12" />
                      <img src={jsLogo} alt="JavaScript Logo" className="w-12 h-12" />
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
