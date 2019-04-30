import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Home from './Home';
import About from './About';
import Projects from './Projects';

const StyleWrapper = styled.div`
    
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
        <Projects />
        <About />

    </Router>
    </StyleWrapper>
  );
}

export default App;