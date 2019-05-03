import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #FE8A75;
    background: linear-gradient(to right, #B5CBED 0%,#FE8A75 100%);
    
    .text-content-wrapper {
        flex-direction: column;
        align-items: center;
        
        display: flex;
        flex-grow: 1;
        justify-content: center;
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
       
    }

`

class Contact extends React.Component {

    render() {
        return (
            
            <StyleWrapper>
                <div className="text-content-wrapper">

                    <div className="message">
                        You've heard a bit about me, I'd love to hear from you.
                    </div>
                    
                    <div className="contact-info">
                        <a href="https://www.linkedin.com/in/christopher-flinchbaugh/">LinkedIn</a>
                        <a href="https://github.com/cflinchbaugh">GitHub</a>
                        <a href="mailto:christopher.e.flinchbaugh@gmail.com">Contact</a>
                    </div>
                </div>
            </StyleWrapper>
        );
    }
}

export default Contact;