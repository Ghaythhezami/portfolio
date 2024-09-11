import React, { useState, useEffect } from 'react';
import { HiArrowRight } from "react-icons/hi";

const Card = ({ item: { title, des, icon, photos } }) => {
  const [showFirstPhoto, setShowFirstPhoto] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let intervalId;

    // Start toggling when hovered for both "Pitching" and "Data Analysis" sections
    if (isHovered && (title === "Pitching" || title === "Data Analysis") && photos && photos.length > 1) {
      intervalId = setInterval(() => {
        setShowFirstPhoto((prev) => !prev); // Toggle between showing t1 and t2
      }, 2000); // Toggle every 2 seconds
    }

    // Clear interval on hover end or component unmount
    return () => clearInterval(intervalId);
  }, [isHovered, title, photos]);

  return (
    <div
      className="relative w-[500px] h-[500px] px-6 py-6 rounded-lg shadow-shadowOne flex flex-col items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-white transition-colors duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowFirstPhoto(true); // Reset to show the first photo when hover ends
      }}
    >
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-lg"></div>
      <div className="relative z-10 h-full w-full overflow-hidden">
        <div className="flex flex-col gap-6 h-full w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
          <div className="w-12 h-12 flex flex-col justify-between">
            {icon ? (
              <span className="text-4xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-4 h-full w-full">
            <h2 className="text-2xl md:text-3xl font-titleFont font-bold text-gray-300 group-hover:text-black transition-colors duration-300 ease-in-out">
              {title}
            </h2>
            <p className="base group-hover:hidden transition-opacity duration-300 ease-in-out">{des}</p>
            {photos && (
              <div className="flex flex-wrap justify-center gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out w-full h-full relative flex items-center justify-center">
                {title === "Deployment" ? (
                  photos.map((photo, index) => (
                    <div key={index} className="relative w-[400px] h-[300px] overflow-hidden rounded-lg">
                      <img
                        src={photo}
                        alt={`${title.toLowerCase()} logo ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))
                ) : (title === "Pitching" || title === "Data Analysis") && photos.length > 1 ? (
                  <div className="relative w-[400px] h-[300px] overflow-hidden rounded-lg">
                    <img
                      src={showFirstPhoto ? photos[0] : photos[1]} // Toggle between t1 and t2
                      alt={`${title.toLowerCase()} ${showFirstPhoto ? "photo 1" : "photo 2"}`}
                      className="w-full h-full object-cover rounded-lg transition-opacity duration-500 ease-in-out"
                    />
                  </div>
                ) : (
                  photos.map((photo, index) => (
                    <div key={index} className="relative w-[400px] h-[300px] overflow-hidden rounded-lg">
                      <img
                        src={photo}
                        alt={`technology logo ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))
                )}
              </div>
            )}
            <span className="text-xl text-designColor mt-4 group-hover:text-black transition-colors duration-300 ease-in-out">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
