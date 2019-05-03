import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    
    .text-content-wrapper {
        flex-direction: column;
        align-items: center;
        
        display: flex;
        flex-grow: 1;
        justify-content: center;
    }
    
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
        font-family: 'Ubuntu Condensed', sans-serif;
    }

    .contact-info {
        a {
            margin: 0 5px;
        }
    }

    @media(min-width: 768px) {
        flex-direction: row;

        .text-content-wrapper {
            max-width: 1000px;
        }
        
        .bio,
        .initials {
            display: flex;
            flex: 1;
            justify-content: center;
        }

        .bio {
            flex-direction: column;
        }
    }

`

class Home extends React.Component {

    render() {
        return (
            <StyleWrapper>
                <div className="text-content-wrapper">
                    
                    <div className="initials">CF</div>

                    <div className="bio">
                        <div className="name">Chris Flinchbaugh</div>
                        <div className="title">Front-End Developer | UI/UX Engineer</div>
                    </div>

                        
                    
                    
                    {/* <div className="contact-info">
                        <a href="https://www.linkedin.com/in/christopher-flinchbaugh/">LinkedIn</a>
                        <a href="https://github.com/cflinchbaugh">GitHub</a>
                        <a href="mailto:christopher.e.flinchbaugh@gmail.com">Contact</a>
                    </div> */}
                </div>
            </StyleWrapper>
        );
    }
}

export default Home;