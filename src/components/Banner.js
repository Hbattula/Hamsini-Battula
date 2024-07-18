import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Lottie from 'lottie-react';
import hiAnimation from '../assets/img/hi.json'; 
import { motion } from 'framer-motion';
 

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Hi!! I am Hamsini!"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById('about-me');
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      className="banner" 
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "I am Hamsini!" ]'><span className="wrap">{text}</span></span></h1>
                  <p style = {{color:'#fff'}}>I specialize in creating dynamic and beautiful web applications. Let's build something amazing together!</p>

                  <button onClick={scrollToAboutMe} className="about-button">More about me <ArrowRightCircle size={25} /></button>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`animate__animated ${isVisible ? "animate__zoomIn" : ""}`} style={{ position: 'relative', maxWidth: '100%', height: 'auto' }}>
                  <div style={{ maxWidth: '80%', margin: '0 auto' }}>
                    <Lottie animationData={hiAnimation} className="lottie-animation" />
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};
