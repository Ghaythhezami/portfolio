import React from 'react';
import { FaTrophy, FaMedal, FaRegSmile, FaCertificate } from "react-icons/fa"; // Import the certificate icon

const ProjectsCard = ({ title, des, src, place, url, urlLogo }) => {
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
      {/* Anchor tag wrapping the image with the specific URL */}
      <a href={url} target="_blank" rel="noopener noreferrer" className="w-full relative overflow-hidden rounded-lg" style={{ paddingTop: '56.25%' }}>
        <img
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer"
          style={{ borderRadius: '8px' }} // Adjust border radius if needed
          src={src}
          alt={title}
        />
      </a>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div className="flex items-center">
          <FaCertificate className="text-yellow-500 text-xl mr-2" /> {/* Gold certificate icon with consistent size */}
          <h3 className="text-base uppercase text-designColor font-normal flex items-center">
            {title}
            {url && urlLogo && (
              <a href={url} target="_blank" rel="noopener noreferrer" className="ml-2">
                <img
                  src={urlLogo}
                  alt="URL logo"
                  className="h-6 w-6 object-contain" // Ensure the logo is displayed correctly
                  onError={(e) => e.currentTarget.style.display = 'none'} // Hide if not loaded
                />
              </a>
            )}
          </h3>
        </div>
        <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ProjectsCard;
