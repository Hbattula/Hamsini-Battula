// components/Hobbies.js

import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import Lottie from 'lottie-react';
import hobbiesAnimation from '../assets/img/hobbies.json'; // Adjust the path to your hobbies.json animation file
import './Hobbies.css';

export const Hobbies = () => {
  const hobbies = [
    {
      title: "Animation",
      description:"Animation is my creative playground, where I craft whimsical characters and bring imaginative worlds to life. I enjoy the artistry of storytelling through visuals, blending colors and movements to evoke wonder and joy.",
      iconClass: "bi bi-flower1", // Example of using Bootstrap icons
    },
    {
      title: "Writing",
      description: "Writing is my creative outlet, where I explore ideas and emotions through words. I enjoy crafting narratives that explore human connections, moments of introspection, and the beauty of everyday experiences.",
      iconClass: "bi bi-book",
    },
    {
      title: "Cooking",
      description: "Cooking is my culinary adventure, a journey of flavors and experimentation. I find joy in exploring recipes, mixing fresh ingredients, and creating dishes that bring people together around the table.",
      iconClass: "bi bi-egg",
    },
    {
      title: "Reading",
      description: "Reading is my cherished pastime, a quiet escape into different lives and places. I love diving into books that spark curiosity and empathy, discovering new perspectives and insights along the way.",
      iconClass: "bi bi-book",
    }
  ];

  return (
    <section className="hobbies" id="hobbies">
      <Container>
        <Row>
          <Col xs={12} md={6} className="mb-4">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1 className="section-title">Hobbies</h1>
                  <Tab.Container id="hobbies-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-3 justify-content-center" id="hobbies-tab">
                      {hobbies.map((hobby, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link className="Navlink" eventKey={`hobby-${index}`}>
                            <i className={hobby.iconClass}></i> {hobby.title}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {hobbies.map((hobby, index) => (
                        <Tab.Pane eventKey={`hobby-${index}`} key={index}>
                          <div className="hobby-card">
                            <div className="hobby-icon">
                              <i className={hobby.iconClass}></i>
                            </div>
                            <h2 style={{color:'#997AE4'}}>{hobby.title}</h2>
                            <p className="typing-text">{hobby.description}</p>
                          </div>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} className="mb-4 d-flex justify-content-center align-items-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""} style={{ maxWidth: '100%', height: 'auto' }}>
                  <Lottie animationData={hobbiesAnimation} className="lottie-animation" />
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
