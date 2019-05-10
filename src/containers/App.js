import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

import AOS from 'aos';
import 'aos/dist/aos.css';

const StyleWrapper = styled.div`
  font-family: 'PT Sans', sans-serif;
  font-size: 1.2em;

  // height: 100vh;
  // overflow-y: scroll;
  // scroll-snap-type: y proximity;


  section {
      scroll-snap-align: start;
      min-height: 100%;
  }
`

class App extends React.Component {
  constructor(props) {
      super(props)
      
      this.skillsRef = React.createRef();

      AOS.init({
          duration: 1200,
      });
  
  }
  
  scroll(ref) {
      ref.current.scrollIntoView({behavior: 'smooth'})
  }

  render() {
    const homeData = {
      scroll: this.scroll,
      nextSection: this.skillsRef
    }

    return (
        <StyleWrapper>
          <Router>
            <div id="home">
              <Home {...homeData}/>
            </div>
            
            <div id="skills" ref={this.skillsRef}>
              <Skills />
            </div>
            
            <div id="projects">
              <Projects />
            </div>

            <div id="about">
              <About />
            </div>

            <div id="contact">
              <Contact />
            </div>
          </Router>
      </StyleWrapper>
    );
  }
}

export default App;