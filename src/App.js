import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import { CSSTransition } from 'react-transition-group';
import { motion } from 'framer-motion';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Hobbies } from './components/Hobbies';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AboutMe } from './components/AboutMe';

import handAnime from './assets/img/hand.json'; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      <CSSTransition
        in={loading}
        timeout={800}
        classNames="fade"
        unmountOnExit
      >
        <div className="loading-animation">
          <Lottie
            animationData={handAnime}
            autoplay
            className="lottie-animation"
          />
        </div>
      </CSSTransition>
      <CSSTransition
        in={!loading}
        timeout={800}
        classNames="fade"
        unmountOnExit
      >
        <div className="main-content">
          <NavBar />
          <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
            <Banner />
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
            <AboutMe />
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
            <Skills />
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
            <Hobbies />
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
            <Projects />
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
            <Contact />
          </motion.div>
          <Footer />
        </div>
      </CSSTransition>
    </div>
  );
}

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default App;
