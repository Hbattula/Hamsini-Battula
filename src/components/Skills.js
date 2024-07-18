import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Zoom, Slide } from "react-awesome-reveal";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    { name: "React", proficiency: 90 },
    { name: "React-Native", proficiency: 90 },
    { name: "Spring Boot", proficiency: 70 },
    { name: "Web Dev", proficiency: 90 },
    { name: "Python", proficiency: 86 },
    { name: "Cloud", proficiency:70 },
    { name: "Type-Script", proficiency:90 },
    { name: "Java", proficiency:90 },
    { name: "node.js", proficiency:70 },
    { name: "express.js", proficiency:70 },
    { name: "databases", proficiency:95 },
    { name: "Javascript", proficiency:90 }

  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Zoom>
              <div className="skill-bx wow zoomIn">
                <h2>Skills</h2>
                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                  {skills.map((skill, index) => (
                    <div className="item" key={index}>
                      <Slide direction="down">
                        <h6>{skill.name}</h6>
                        <Progress 
                          type="circle" 
                          percent={skill.proficiency} 
                          status="active" 
                          theme={{
                            active: {
                              symbol: `${skill.proficiency}%`,
                              trailColor: 'rgba(255,255,255,0.2)',
                              color: '#b68cfa'

                            }
                          }}
                        />
                      </Slide>
                    </div>
                  ))}
                </Carousel>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    </section>
  );
};
