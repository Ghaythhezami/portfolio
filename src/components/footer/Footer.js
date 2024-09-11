import React from 'react';
import { FaFileDownload, FaEnvelope } from "react-icons/fa";
import { logo } from "../../assets/index";

const Footer = () => {
  // Function to handle the resume download
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/english-resume.pdf'; // Replace with your actual resume path
    link.download = 'Resume-of-Ghazi-Lassoud.pdf'; // The downloaded file will be named "Resume-of-Ghayth-Khezami.pdf"
    link.click();
  };

  return (
    <div className="w-full py-10 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-10" src={logo} alt="logo" />
        <div className="flex gap-4">
          {/* Add social media links or other items here if needed */}
        </div>
      </div>

      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          {/* Section Title */}
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          {/* Add list items here */}
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              {/* Add link or content here */}
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>

      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          {/* Section Title */}
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          {/* Add list items here */}
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              {/* Add link or content here */}
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>

      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="flex flex-col gap-4 items-center">
          {/* Download Resume Button */}
          <button
            className="px-4 py-2 bg-designColor text-white rounded-md hover:bg-designColorDark transition duration-300 flex items-center gap-2"
            onClick={handleResumeDownload}
          >
            <FaFileDownload className="text-xl" />
            <span className="text-base">Download my Resume</span>
          </button>

          {/* Hire Me Button */}
          <button
            className="px-4 py-2 bg-designColor text-white rounded-md hover:bg-designColorDark transition duration-300 flex items-center gap-2"
            onClick={() => window.location.href = 'mailto:lassouedghazi21@gmail.com'}
          >
            <FaEnvelope className="text-xl" />
            <span className="text-base">Hire Me</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
