import React, { useState, useEffect } from 'react';
import { FaGithub, FaEnvelope, FaLinkedinIn, FaFileDownload, FaBell } from "react-icons/fa";
import ghayth0 from '../../assets/images/ghayth0.jpg'; // Ensure this path is correct

const Media = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const [showLanguages, setShowLanguages] = useState(false);

  // Function to handle the resume download
  const handleResumeDownload = () => {
    setShowLanguages(!showLanguages); // Toggle the language options visibility
  };

  // Function to toggle notification visibility
  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };

  // Function to handle scroll events
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition < 100 || scrollPosition + windowHeight >= documentHeight - 100) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <a href="mailto:lassouedghazi21@gmail.com" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaEnvelope />
            </span>
          </a>
          <a href="https://github.com/lassouedghazi" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/ghazi-lassoued-983419239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app://www.linkedin.com/in/ghayth-khezami-bb6b27176/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
      <div className="relative">
        <h2 className="text-base uppercase font-titleFont mb-4">
        </h2>
        <div className="flex flex-col gap-4">
          {/* Language Options */}
          {showLanguages && (
            <div className="absolute top-[-90px] left-0 right-0 flex flex-col gap-2 mb-4 text-center mt-4"> {/* Added mt-4 here */}
              <a
                href="./assets/english-resume.pdf" // Ensure this path matches your file location
                className="bg-gray-600 text-white  hover:opacity-75 py-2 px-4 rounded-md"
                download
              >
                In English
              </a>
             
            </div>
          )}

          {/* Download Resume Button */}
          <button
            className="px-4 py-2 bg-designColor text-white rounded-md hover:bg-designColorDark transition duration-300 flex items-center gap-2 relative z-10"
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
      
      <style jsx>{`
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
          100% { transform: translateX(0); }
        }

        .animate-shake {
          animation: shake 0.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default Media;
