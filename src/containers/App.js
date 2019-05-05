import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const StyleWrapper = styled.div`
    font-family: 'PT Sans', sans-serif;
    font-size: 1.2em;
    
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y proximity;

    section {
        scroll-snap-align: start;
        min-height: 100%;
    }
`

function App() {
  return (
      <StyleWrapper>
    <Router>
        {/* <Navigation /> */}

        {/* <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} /> */}

        <Home />
        <Skills />
        <Projects />
        <About />
        <Contact />

    </Router>
    </StyleWrapper>
  );
}

export default App;