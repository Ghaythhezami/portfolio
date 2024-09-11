import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['Python', 'R']
    },
    {
      category: 'Data Analysis and Visualization',
      items: [
        'Python (Pandas, NumPy, Matplotlib, Seaborn)',
        'R (dplyr, ggplot2, tidyverse)',
        'Power BI',
        'Tableau',
        'Excel'
      ]
    },
    {
      category: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB', 'Microsoft SQL Server', 'Oracle']
    },
    {
      category: 'Big Data Technologies',
      items: ['Apache Spark', 'Hadoop', 'Hive', 'Pig']
    },
    {
      category: 'Machine Learning and Modeling',
      items: ['Scikit-learn', 'TensorFlow', 'Keras', 'XGBoost', 'H2O.ai', 'Weka']
    },
    {
      category: 'Statistical Analysis',
      items: ['R (caret, stats)', 'SAS', 'MATLAB', 'STATA', 'EViews']
    },
    {
      category: 'Data Engineering and ETL',
      items: ['Apache Airflow', 'Talend', 'Alteryx', 'Informatica']
    },
    {
      category: 'Cloud Platforms',
      items: [
        'AWS (SageMaker, Redshift, Lambda)',
        'Google Cloud Platform (BigQuery, Dataflow)',
        'Microsoft Azure (Azure ML, Azure SQL)'
      ]
    },
    {
      category: 'Version Control and Collaboration',
      items: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Confluence']
    },
    {
      category: 'Data Cleaning and Transformation',
      items: ['OpenRefine', 'Trifacta', 'DataRobot']
    },
    {
      category: 'Deployment and Monitoring',
      items: ['Docker', 'Kubernetes', 'Flask', 'Django', 'Prometheus', 'Grafana']
    },
    {
      category: 'Business Intelligence Tools',
      items: ['Looker', 'Qlik Sense', 'Google Data Studio']
    },
    {
      category: 'Data Integration',
      items: ['Fivetran', 'Stitch']
    },
    {
      category: 'Development Environments',
      items: ['Jupyter Notebook', 'RStudio', 'PyCharm', 'Visual Studio Code']
    },
    {
      category: 'Project Management and Agile Tools',
      items: ['JIRA', 'Trello', 'Asana']
    },
    {
      category: 'Scrum Tools',
      items: ['Scrumwise', 'VersionOne']
    }
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
      {skills.map((skill, index) => (
        <div className="p-1 border rounded-md shadow-sm" key={index}>
          <div className="py-1 font-titleFont">
            <p className="text-xs text-designColor tracking-[2px] uppercase">{skill.category}</p>
            <h2 className="text-xs font-bold">{skill.category}</h2>
          </div>
          <div className="flex flex-col gap-1">
            {skill.items.map((item, i) => (
              <div className="overflow-x-hidden" key={i}>
                <p className="text-xs uppercase font-medium">{item}</p>
                <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
                  <span className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md" />
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
