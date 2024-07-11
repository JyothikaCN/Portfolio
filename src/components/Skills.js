// src/components/Skills.js

import React from 'react';
import './Skills.css';
import 'devicon/devicon.min.css';


const Skills = () => {
  const languages = [
    { name: 'Python', iconClass: 'devicon-python-plain' },
    { name: 'C', iconClass: 'devicon-c-plain' },
    { name: 'Java', iconClass: 'devicon-java-plain' },
    { name: 'MySQL', iconClass: 'devicon-mysql-original' },
    { name: 'HTML', iconClass: 'devicon-html5-plain' },
    { name: 'CSS', iconClass: 'devicon-css3-plain' },
    { name: 'JavaScript', iconClass: 'devicon-javascript-plain' },
    { name: 'C++', iconClass: 'devicon-cplusplus-plain' }
  ];

  const tools = [
    { name: 'Git', iconClass: 'devicon-git-plain' },
    { name: 'Jupyter Notebook', iconClass: 'devicon-jupyter-plain' },
    { name: 'VS Code', iconClass: 'devicon-visualstudio-plain' }
  ];

  return (
    <div className="skills">
        <h1>SKILLS</h1>
      <h2>Languages</h2>
      <div className="skills-grid">
        {languages.map((language, index) => (
          <div className="skill" key={index}>
            <i className={language.iconClass}></i>
            <span>{language.name}</span>
          </div>
        ))}
      </div>

      <h2>Tools/Technologies</h2>
      <div className="skills-grid" id='tools'>
        {tools.map((tool, index) => (
          <div className="skill" key={index}>
            <i className={tool.iconClass}></i>
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
