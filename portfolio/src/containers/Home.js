import React from 'react';
import styled from 'styled-components';
import Projects from './Projects';

const StyleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .bio {
        div {
            text-align: center;
        }
    }

    .name {
        font-size: 2em;
    }
    .initials {
        font-size: 10em;
    }

    .contact-info {
        a {
            margin: 0 5px;
        }
    }

`

class Home extends React.Component {

    render() {
        return (
            <StyleWrapper>
                <div className="bio">
                    <div className="name">Chris Flinchbaugh</div>
                    <div className="title">Front-End Developer | UI/UX Engineer</div>
                </div>
                    
                <div className="initials">CF</div>
                
                <div className="contact-info">
                    <a href="https://www.linkedin.com/in/christopher-flinchbaugh/">LinkedIn</a>
                    <a href="https://github.com/cflinchbaugh">GitHub</a>
                    <a href="mailto:christopher.e.flinchbaugh@gmail.com">Contact</a>
                </div>
            </StyleWrapper>
        );
    }
}

export default Home;