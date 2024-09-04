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
  projectNine 
} from "../../assets/index"; // Make sure the path is correct

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="Awards"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        
      <ProjectsCard
  title="1st Place - Promise Hackathon"
  des="Achieved first place in the Promise Hackathon, an event implemented by the American Embassy focusing on innovative problem-solving."
  src={projectTwo}
  place="1st"
/>
<ProjectsCard
  title="1st Place - Best Entrepreneurial Project Idea"
  des="Awarded the first place for the best entrepreneurial project idea in my institute, demonstrating innovation and business acumen."
  src={projectOne}
  place="1st"
/>
<ProjectsCard
  title="1st Place - Metaverse Hackathon"
  des="Secured first place in the Metaverse Hackathon organized by Hackathon Tunisia, showcasing excellence in virtual world development."
  src={projectThree}
  place="1st"
/>
<ProjectsCard
  title="1st Place - DIP Hackathon"
  des="Won first place in the DIP Hackathon organized by Leaders International, recognizing outstanding project development and execution."
  src={projectFour}
  place="1st"
/>
<ProjectsCard
  title="2nd Place - Hack4Justice"
  des="Runner-up in the Hack4Justice competition by HiiL Innovation Hub MENA, focusing on justice innovation solutions."
  src={projectFive}
  place="1st"
/>
<ProjectsCard
  title="2nd Place - SN MENA Hackathon"
  des="Achieved second place in the SN MENA Hackathon organized by GIZ Tunisia and HackUp, demonstrating technical and collaborative skills."
  src={projectSix}
  place="1st"
/>
<ProjectsCard
  title="Finalist - Ichmilni Race"
  des="Finalist in the Ichmilni Race by Tunisie Telecom and Enactus Tunisia, highlighting leadership and team collaboration skills."
  src={projectSeven}
  place="2nd"
/>
<ProjectsCard
  title="Finalist - Tunisia IoT & AI Challenge"
  des="Finalist in the Tunisia IoT & AI Challenge held at NOVATION CITY, organized in collaboration with ARSII Association and Ecole Polytechnique de Sousse. Demonstrated innovative solutions in IoT and AI technologies."
  src={projectNine}
  place="2nd"
/>
<ProjectsCard
  title="Finalist - Safran Race"
  des="Reached the finals in the Safran Race organized by Safran and Enactus Tunisia, focusing on innovative business solutions."
  src={projectEight}
  place="2nd"
/>

      </div>
    </section>
  );
};

export default Projects;
