import React from 'react';
import styled from 'styled-components';
import GitHub from '../images/GitHub.png';
import LinkedIn from '../images/LinkedIn.png';

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

                    <div className="message">
                        You've heard a bit about me,
                        <br/>
                        I'd love to hear from you.
                    </div>
                    
                    <div className="contact-info">
                        <a href="https://www.linkedin.com/in/christopher-flinchbaugh/" target="_blank">
                            <img src={`${LinkedIn}`}></img>
                        </a>

                        <span onClick={ ()=>{ this.setState({ revealEmail: true})}}>
                        <a href="mailto:christopher.e.flinchbaugh@gmail.com">
                            <span className="email-icon">@</span>
                        </a>
                        </span>

                        <a href="https://github.com/cflinchbaugh" target="_blank">
                            <img src={`${GitHub}`}></img>
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