import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter as Link } from "react-router-dom";

const StyleWrapper = styled.div`
   
`

class Navigation extends React.PureComponent {
    render() {
        return (
            <StyleWrapper>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </StyleWrapper>
        );
    }
}

Navigation.propTypes = {
    
}

export default Navigation;