import React from 'react';
import styled from 'styled-components';
import GitHub from '../images/GitHub.png';
import LinkedIn from '../images/LinkedIn.png';
import Email from '../images/emailIcon.png';

const StyleWrapper = styled.section`
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
        height: 20vh;

        .message {
            text-align: center;
            margin-bottom: 20px;
        }
    }
    

    .contact-info {
        display: flex;
        
        a {
            display: inline-flex;
            flex-direction: row;
            margin: 0 5px;
            text-decoration: none;

            img {
                height: 32px;
                background-color: #cf0276;
                border-radius: 15px;
                padding: 5px;
                transition: background 0.15s;

                &:hover {
                    background-color: #970256;
                }
            }
        }
        
        .email-icon {
            color: white;
            font-size: 32px;
        }

    }
    
    .show {
        display: block;
    }

    .hide {
        display: none;
    }

    @media(min-width: 768px) {
        flex-direction: row;

        .text-content-wrapper {
            max-width: 1000px;
            justify-content: space-between;
        }
       
    }

`

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            revealEmail : false
        }

    }

    render() {
        const emailClass = this.state.revealEmail ? 'show' : 'hide';

        return (
            <StyleWrapper>
                <div className="text-content-wrapper">

                    <div className="message" data-aos="fade-in">
                        You've heard a bit about me,
                        <br/>
                        I'd love to hear from you.
                    </div>
                    
                    <div className="contact-info">
                        <a href="https://www.linkedin.com/in/christopher-flinchbaugh/" target="_blank" rel="noopener noreferrer">
                            <img src={`${LinkedIn}`} alt="LinkedIn Logo"></img>
                        </a>

                        <span onClick={ ()=>{ this.setState({ revealEmail: true})}}>
                        <a href="mailto:christopher.e.flinchbaugh@gmail.com">
                            {/* <span className="email-icon">@</span> */}
                            <img src={`${Email}`} alt="Email Logo"></img>
                        </a>
                        </span>

                        <a href="https://github.com/cflinchbaugh" target="_blank" rel="noopener noreferrer">
                            <img src={`${GitHub}`} alt="GitHub Logo"></img>
                        </a>
                    </div>

                    <div className={`${emailClass}`}>
                        christopher.e.flinchbaugh@gmail.com
                    </div>
                </div>
            </StyleWrapper>
        );
    }
}

export default Contact;