import React from 'react';
import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col sm={6} md={4}>
      <a href={url} target="_blank" rel="noopener noreferrer" className="project-card">
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} className="project-img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </a>
    </Col>
  );
};
