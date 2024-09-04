import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { FaLinkedin, FaGlobe } from "react-icons/fa"; // Import LinkedIn and Globe icons
import Title from '../layouts/Title';
import { testimonialOne, testimonialTwo, testimonialThree, quote, dubai2, dubai3 } from "../../assets"; // Update if needed

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0);
  const [currentImage, setCurrentImage] = useState(testimonialOne);

  const images = [testimonialOne, dubai2, dubai3]; // Array of images
  const interval = 2500; // Interval time in milliseconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(prevImage => {
        const nextIndex = (images.indexOf(prevImage) + 1) % images.length;
        return images[nextIndex];
      });
    }, interval);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDotActive(next);
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
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
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
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="MY PARTICIPATIONS" des="Exchange Programs" />
      </div>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {/* Testimonial with dynamic image */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={currentImage} // Dynamic image
                  alt="Testimonial"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Global Peace Chain
                  </p>
                  <h3 className="text-2xl font-bold">
                    Global Peace Ambassador
                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    An international summit focusing on global peace initiatives.
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div className="flex items-center gap-4"> {/* Increased gap for larger icons */}
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Global Peace Summit Dubai 2022
                      </h3>
                      {/* LinkedIn icon with a link and larger size */}
                      <a
                        href="https://www.linkedin.com/in/ghayth-khezami-bb6b27176/recent-activity/all/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 text-3xl" // Adjusted size
                      >
                        <FaLinkedin />
                      </a>
                      {/* Web icon with a link and larger size */}
                      <a
                        href="https://www.globalpeacechain.org/team_members/ghayth-khezami-2/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 text-3xl" // Adjusted size
                      >
                        <FaGlobe />
                      </a>
                    </div>
                    <p className="text-base text-gray-400 mt-3">
                      📍 Dubai       22-25 February 2022
                    </p>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    The experience was nothing short of extraordinary, as I stood shoulder to shoulder with over 200 delegates hailing from 90 diverse countries.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* New Testimonial: Erasmus Youth Exchange */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialThree} // Replace with your image if applicable
                  alt="Erasmus Youth Exchange 'Youngpreneurship'"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Erasmus Youth Exchange
                  </p>
                  <h3 className="text-2xl font-bold">
                    "Youngpreneurship"
                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Unesco Alecso / Culture Center of Ali Belhouane
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div className="flex items-center gap-4"> {/* Increased gap for larger icons */}
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Erasmus Youth Exchange "Youngpreneurship"
                      </h3>
                      {/* LinkedIn icon with a link and larger size */}
                      <a
                        href="https://www.linkedin.com/in/ghayth-khezami-bb6b27176/recent-activity/all/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 text-3xl" // Adjusted size
                      >
                        <FaLinkedin />
                      </a>
                    </div>
                    <p className="text-base text-gray-400 mt-3">
                      📍 Hammamet-Tunisia 20-28 of September 2022
                    </p>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Participated in the "Youngpreneurship" initiative, aimed at empowering young entrepreneurs through intercultural learning experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Existing Soliya Testimonial */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialTwo} // Replace with your image if applicable
                  alt="Soliya Connect Program"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Soliya Connect Program
                  </p>
                  <h3 className="text-2xl font-bold">
                    Soliya / American Corner Tunis
                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    An initiative promoting intercultural dialogue and understanding.
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div className="flex items-center gap-4"> {/* Increased gap for larger icons */}
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Soliya Connect Program
                      </h3>
                      {/* LinkedIn icon with a link and larger size */}
                      <a 
                        href="https://www.linkedin.com/in/ghayth-khezami-bb6b27176/recent-activity/all/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 text-3xl" // Adjusted size
                      >
                        <FaLinkedin />
                      </a>
                    </div>
                    <p className="text-base text-gray-400 mt-3">
                      Virtual Exchange
                    </p>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Successfully completed the Fall 2022 Connect program sponsored by @soliya.ve and the @usembassytunis
                    This exchange program was a great opportunity to build meaningful relationships across national, cultural, religious, and ideological boundaries by establishing a cross-cultural dialogue with students from the US and MENA region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial;
