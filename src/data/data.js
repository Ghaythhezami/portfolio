import { FaBullhorn, FaChartLine, FaChartPie, FaTachometerAlt } from "react-icons/fa";
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

import flutterLogo from "../assets/images/flutter.png"; 
import dartLogo from "../assets/images/dart.png";     
import awsS3Logo from "../assets/images/aws-s3.png";
import apiGatewayLogo from "../assets/images/api-gateway.png";
import lambdaLogo from "../assets/images/lambda.png";
import terraformLogo from "../assets/images/terraform.png";
import dockerLogo from "../assets/images/docker.png";
import dash from "../assets/images/dash.jpg";
import ba from "../assets/images/ba.jpg";
import t1 from "../assets/images/t1.jpg";
import t2 from "../assets/images/t2.jpg";


// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <FaChartLine /> , // Icon for Web Development
    title: "Data Analysis",
    des: "As a data analyst, I excel in conducting comprehensive analyses across diverse datasets and fields. My responsibilities encompass the entire data lifecycle, including data gathering, cleaning, and preprocessing. I perform exploratory data analysis and create detailed visualizations to uncover patterns and insights. Additionally, I specialize in feature engineering, model building, and implementing machine learning algorithms. I ensure robust model validation and manage model deployment to production environments. My goal is to transform raw data into actionable insights that drive informed decision-making.",
    photos: [t1,t2], 

  },
  {
    id: 2,
    icon: <FaChartPie />, // Icon for Mobile Development
    title: "Business Analysis",
    des: "As a business analyst, I identify business needs and provide solutions by analyzing data, conducting market research, and gathering requirements through stakeholder interviews. I create detailed documentation and collaborate with cross-functional teams to ensure clarity and alignment. Using SWOT analysis, gap analysis, and cost-benefit analysis, I aid organizations in making informed decisions, optimizing processes, and achieving strategic goals.",
    photos: [ba], 

  },
{
  id: 3,
  icon: <FaTachometerAlt />, // Icon for Deployment
  title: "Dashboarding",
  des: "In my role, I create interactive dashboards that consolidate key metrics and data insights using tools like Tableau, Power BI, and Excel. I integrate data from multiple sources and employ visualizations such as charts and gauges to highlight trends and performance. My deep understanding of each chart and its implications enables me to present and explain findings clearly and effectively. I articulate the significance of various visualizations, ensuring stakeholders grasp the insights and their relevance to strategic decision-making. This approach facilitates real-time monitoring, goal tracking, and data-driven planning.",
  photos: [dash], // Add logos for deployment tools
},

  {
    id: 4,
    icon: <FaBullhorn />, // Icon for Unit Testing
    title: "Pitching",
    des: "I have honed my pitching and debating skills through my active involvement with TIMUN TBS, where I participated in numerous simulations and debating scenarios. This experience sharpened my ability to articulate and defend positions effectively, enhancing my persuasive communication. Additionally, as a member of the Sponsoring and Treasury Department, I engaged in various workshops and training sessions focused on securing sponsorships and raising funds. These activities refined my skills in leveraging persuasive techniques to attract sponsors and garner financial support. This blend of practical experience in debating and strategic pitching has equipped me with a compelling ability to present ideas and drive impactful outcomes.",
    
  }
  ,
];
