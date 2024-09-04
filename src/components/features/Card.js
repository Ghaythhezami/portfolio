import React, { useState, useEffect } from 'react';
import { HiArrowRight } from "react-icons/hi";

const Card = ({ item: { title, des, icon, photos, languages } }) => {
  // State to handle carousel effect
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    if (title === "Pitching" && photos && photos.length > 1) {
      const intervalId = setInterval(() => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
      }, 2500); // 2.5 seconds

      return () => clearInterval(intervalId);
    }
  }, [title, photos]);

  return (
    <div className="relative w-full px-12 h-auto py-10 rounded-lg shadow-shadowOne flex flex-col items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-white transition-colors duration-300 ease-in-out">
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-lg"></div>
      <div className="relative z-10 h-auto overflow-y-hidden">
        <div className="flex flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
          <div className="w-10 h-20 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300 group-hover:text-black transition-colors duration-300 ease-in-out">
              {title}
            </h2>
            <p className="base group-hover:hidden transition-opacity duration-300 ease-in-out">{des}</p>
            {photos && (
              <div className="flex flex-wrap justify-center gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                {title === "Deployment" || title === "Pitching" ? (
                  photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`${title.toLowerCase()} logo ${index + 1}`}
                      className="w-20 h-20 object-contain" // Adjust size as needed
                    />
                  ))
                ) : (
                  <>
                    <h3 className="text-lg font-bold text-gray-600 group-hover:text-black">
                      {title === "Web Development" || title === "Mobile Development" ? "Frameworks Used:" : "Technologies Used:"}
                    </h3>
                    {photos.map((photo, index) => (
                      <img
                        key={index}
                        src={photo}
                        alt={`technology logo ${index + 1}`}
                        className="w-16 h-16 object-contain"
                      />
                    ))}
                  </>
                )}
                {title === "Pitching" && photos && photos.length > 1 && (
                  <div className="relative">
                    <img
                      src={photos[currentPhotoIndex]}
                      alt={`pitching photo ${currentPhotoIndex + 1}`}
                      className="w-72 h-72 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
            )}
            {languages && languages.length > 0 && (
              <div className="flex flex-wrap justify-center gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <h3 className="text-lg font-bold text-gray-600 group-hover:text-black">Programming Languages:</h3>
                {languages.map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt={`language logo ${index + 1}`}
                    className="w-16 h-16 object-contain"
                  />
                ))}
              </div>
            )}
            <span className="text-2xl text-designColor mt-4 group-hover:text-black transition-colors duration-300 ease-in-out">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
