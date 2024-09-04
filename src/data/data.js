import { FaMobile, FaServer, FaCode, FaCheckCircle, FaProjectDiagram, FaBullhorn } from "react-icons/fa";
import angularLogo from "../assets/images/angular.png";
import reactLogo from "../assets/images/react.png";
import nodejsLogo from "../assets/images/nodejs.png";
import expressLogo from "../assets/images/express.png";
import laravelLogo from "../assets/images/laravel.png";

import htmlLogo from "../assets/images/html.png";
import cssLogo from "../assets/images/css.png";
import javaLogo from "../assets/images/java.png";
import jsLogo from "../assets/images/javascript.jpg";
import tsLogo from "../assets/images/typescript.png";
import pythonLogo from "../assets/images/python.png";
import phpLogo from "../assets/images/php.png";
import SonarQube from "../assets/images/SonarQube.png"; 
import figmaLogo from "../assets/images/figma.png";

import flutterLogo from "../assets/images/flutter.png"; 
import dartLogo from "../assets/images/dart.png";     
import awsS3Logo from "../assets/images/aws-s3.png";
import apiGatewayLogo from "../assets/images/api-gateway.png";
import lambdaLogo from "../assets/images/lambda.png";
import terraformLogo from "../assets/images/terraform.png";
import dockerLogo from "../assets/images/docker.png";
import ghayth1 from "../assets/images/ghayth1.jpeg";
import ghayth2 from "../assets/images/ghayth2.jpeg";

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <FaCode />, // Icon for Web Development
    title: "Web Development",
    des: "Building responsive and interactive websites using modern web technologies and frameworks.",
    photos: [angularLogo, reactLogo, nodejsLogo, expressLogo, laravelLogo],
    languages: [htmlLogo, cssLogo, javaLogo, jsLogo, tsLogo, pythonLogo, phpLogo],
  },
  {
    id: 2,
    icon: <FaMobile />, // Icon for Mobile Development
    title: "Mobile Development",
    des: "Creating mobile applications for Android platforms with a focus on performance and user experience.",
    photos: [flutterLogo], // Framework: Flutter
    languages: [dartLogo], // Programming Language: Dart
  },
{
  id: 3,
  icon: <FaServer />, // Icon for Deployment
  title: "Deployment",
  des: "Deploying applications to cloud and on-premise servers, ensuring scalability, security, and uptime.",
  photos: [awsS3Logo, apiGatewayLogo, lambdaLogo, terraformLogo, dockerLogo], // Add logos for deployment tools
},

  {
    id: 4,
    icon: <FaCheckCircle />, // Icon for Unit Testing
    title: "Unit Testing",
    des: "Writing and running tests to ensure code reliability and performance through automated testing frameworks.",
    photos: [SonarQube], // Add logos for deployment tools
    
  },
  {
    id: 5,
    icon: <FaProjectDiagram />, // Icon for Project Development
    title: "UX/UI Design",
    des: "Creating visually appealing and user-friendly interfaces that enhance the overall experience and usability of a product or service.",
    photos: [figmaLogo], // Add logos for deployment tools

  },
  {
    id: 6,
    icon: <FaBullhorn />, // Icon for Pitching
    title: "Pitching",
    des: "Effectively communicating ideas, products, and project concepts to stakeholders and clients.",
    photos: [ghayth1, ghayth2], 
  }
  ,
];
