import React from 'react';
import { FaTrophy, FaMedal, FaRegSmile } from "react-icons/fa"; // Import icons for trophies and medals

const ProjectsCard = ({ title, des, src, place }) => {
  // Determine the icon based on the achievement place
  const getIcon = () => {
    switch (place) {
      case '1st':
        return <FaTrophy className="text-yellow-500 text-2xl mr-2" />; // Gold trophy for 1st place
      case '2nd':
        return <FaMedal className="text-gray-500 text-2xl mr-2" />; // Silver medal for 2nd place
      case 'Finalist':
      default:
        return <FaRegSmile className="text-blue-500 text-2xl mr-2" />; // Smile icon for finalists
    }
  };

  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center">
            {getIcon()} {/* Display the appropriate icon before the title */}
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
