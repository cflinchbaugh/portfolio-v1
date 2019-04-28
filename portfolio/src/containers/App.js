import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from '../components/Navigation';
import Home from './Home';
import About from './About';
import Projects from './Projects';

function App() {
  return (
    <Router>
      <div>
        <Navigation />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;