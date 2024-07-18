import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ArrowRightCircle } from 'react-bootstrap-icons'; 
import projImg1 from "../assets/img/project1.jpg";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.jpg";
import projImg4 from "../assets/img/project5.jpg";
import projImg5 from "../assets/img/project6.avif";
import projImg6 from "../assets/img/project7.avif";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../App.css'; 

export const Projects = () => {
  const projects = [
    {
      title: "Diabetes Mellitus Prediction using Auto AI",
      description: "Design & Development",
      imgUrl: projImg1,
      url: "https://github.com/Hbattula/DIABETES-MELLITUS-PREDICTION-WITH-AUTO-AI"
    },
    {
      title: "Rainfall analysis in Tableau",
      description: "Visualization & Analysis",
      imgUrl: projImg2,
      url: "https://github.com/Hbattula/RAINFALL-ANALYSIS-MODEL-IN-INDIA-USING-TABLEAU"
    },
    {
      title: "Movie Rating Analysis",
      description: "Mining & Analysis",
      imgUrl: projImg3,
      url: "https://github.com/Hbattula/ITCS-6162-Knowledge-Discovery-in-Databases/blob/main/MOVIE%20DATABASE_Group14.pdf"
    },
    {
      title: "Fitness App",
      description: "Design & Development",
      imgUrl: projImg4,
      url: "https://github.com/Hbattula/Fitness-App"
    },
    {
      title: "Portfolio",
      description: "Design & Development",
      imgUrl: projImg5,
      url: "https://github.com/Hbattula/dportfolio"
    },
    {
      title: "Smart Note App",
      description: "Design & Development",
      imgUrl: projImg6,
      url: "https://github.com/Hbattula/SmartNoteProject"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Explore my projects!</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Explore my projects</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                  <div className="text-center mt-4">
                    <Button
                      className="github-button"
                      href="https://github.com/Hbattula"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Find More on GitHub <ArrowRightCircle size={25} />
                    </Button>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
