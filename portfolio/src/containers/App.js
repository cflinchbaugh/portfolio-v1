import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Home from './Home';
import About from './About';
import Projects from './Projects';

const StyleWrapper = styled.div`
    .section-wrapper {
        padding: 40px 20px;
    }
`

function App() {
  return (
      <StyleWrapper>
    <Router>
        <Navigation />

        {/* <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} /> */}

        <div className="section-wrapper">
            <Home />
        </div>
        <div className="section-wrapper">
            <Projects />
        </div>
        <div className="section-wrapper">
            <About />
        </div>
    </Router>
    </StyleWrapper>
  );
}

export default App;