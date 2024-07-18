import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MdCode, MdBuild, MdDesktopMac, MdSettings } from 'react-icons/md'; // Import specific icons from react-icons/md
import './AboutMe.css'; // Import your CSS file for AboutMe styling

export const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={12} className="mb-4">
            <div className="about-me-content">
              <h2 className="section-title">About Me</h2>
              <div className="feature-list">
                <div className="feature-item">
                  <MdCode className="feature-icon" style={{ fontSize: '48px', color: '#FF5733' }} />
                  <p>Passionate Coder</p>
                </div>
                <div className="feature-item">
                  <MdBuild className="feature-icon" style={{ fontSize: '48px', color: '#3366FF' }} />
                  <p>Problem Solver</p>
                </div>
                <div className="feature-item">
                  <MdDesktopMac className="feature-icon" style={{ fontSize: '48px', color: '#33FF9B' }} />
                  <p>Software Engineer</p>
                </div>
                <div className="feature-item">
                  <MdSettings className="feature-icon" style={{ fontSize: '48px', color: '#FF33E9' }} />
                  <p>Technology Enthusiast</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
