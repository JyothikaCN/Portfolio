// src/components/Project.js

import React, { useState } from 'react';
import './Project.css';
import projectsData from '../data/projectsData';

import app1Image from '../images/website.jpg';
import app2Image from '../images/app.jpg';
import nlp1Image from '../images/nlp.jpg';

const projectImages = {
  1: app1Image,
  2: app2Image,
  3: nlp1Image,
};

const Project = () => {
  const [expandedProjects, setExpandedProjects] = useState([]);

  const toggleExpand = (projectId) => {
    if (expandedProjects.includes(projectId)) {
      setExpandedProjects(expandedProjects.filter(id => id !== projectId));
    } else {
      setExpandedProjects([...expandedProjects, projectId]);
    }
  };

  return (
    <div className="projects-container">
      <h1>PROJECTS</h1>
      {projectsData.map((project) => (
        <div className="project" key={project.id}>
          <div className="project-image-container">
            <img
              src={projectImages[project.id]}
              alt={project.title}
              className="project-image"
            />
          </div>
          <div className="project-text">
            <p className="project-title">{project.title}</p>
            <p className={`project-description ${expandedProjects.includes(project.id) ? 'expanded' : ''}`}>
              {project.description}
            </p>
            <button className="read-more-button" onClick={() => toggleExpand(project.id)}>
              {expandedProjects.includes(project.id) ? 'Read less' : 'Read more'}
            </button>
            <div className="project-links">
              <a href={project.githubLink} className="project-link">
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
