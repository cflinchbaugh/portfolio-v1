import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    background: linear-gradient(to bottom, #fe8a7540 0%, #B5CBED 100%);

   .content-wrapper {
       width: 100vw;
       max-width: 100%;
       padding: 5vw;
       box-sizing: border-box;
    }

    .primary {
        font-size: 1.5em;
        font-weight: bold;
        text-align: right;
        margin-bottom: 10px;

        .leading {
            font-size: .5em;
        }

        .main {
            font-size: 2em;
        }

        .sub {
            display: flex;
            justify-content: flex-end;
            font-size: .7em;
            margin-top: -15px;
            margin-right: 10px;
        }

    }

    .content-1,
    .content-2 {
        font-size: 16px;
    }

    .content-1 {
        border-bottom: solid 1px;
        padding-bottom: 14px;
        margin-bottom: 14px;
    }
    

    @media(min-width: 768px) {
        .content-wrapper {
            width: 80vw;
            max-width: 1200px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .primary,
        .content-1,
        .content-2,
        .image {
            display: inline-block;
        }

        .row-primary,
        .row-secondary {
            justify-content: center;
            display: flex;
            width: 100%;
        }

        .row-primary {
            display: flex;
        }

        .primary {
            font-size: 3em;

            .sub {
                font-size: .8em;
                margin-top: -30px;
            }
        }

        .content-1,
        .content-2 {
            padding: 50px;
        }
    
        .content-1 {
            width: 50%;
            box-sizing: border-box;
            padding: 0 0 0 30px;
            border-bottom: none;
        }
        
        .content-2 {
            width: 100%;
            text-align: right;
            padding: 40px 70px 0 20%;
        }
    
        .image-wrapper {
            height: 300px;
            width: 50%;
            // background-color: rebeccapurple;
        }
        
    }

    @media(min-width: 1024px) {
        .primary {
            width: 70%;

            .main {
                font-size: 3.25em;
            }

            .sub {
                margin-top: -50px;
            }
        }

        .content-1,
        .content-2 {
            height: 200px; //TODO: ?
        }
    
        .content-1 {
            width: 30%;
        }

        .content-2 {
            width: 40%;
        }

        .image-wrapper {
            height: 300px;
            width: 50%;
            margin-top: 20px;
        }
        
    }
    
`

class Skills extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        return (
            <StyleWrapper>
                <div className="content-wrapper">
                    <div className="row-primary">
                        <div className="primary" data-aos="fade-in">
                            <span className="leading">One</span>
                            <span className="main">BOLD</span>
                            <span className="sub">Developer</span>
                        </div>

                        <div className="content-1" data-aos="fade-in" data-aos-delay="1000">
                            <strong>I specialize in <i>people</i>.</strong>
                            <br/>
                            Providing meaningful design feedback, shaping coding best-practices, and communicating between lines of business are all paths that lead me to the heart of development- creating an application that solves problems for real people.
                        </div>
                    </div>

                    <div className="row-secondary">
                        <div className="content-2" data-aos="fade-in" data-aos-delay="1000">
                            <strong>I solve <i>problems</i>.</strong>
                            <br/>
                            I am passionate about finding the root problem, identifying process gaps, and ensuring consistency.  I analyzing designs and code without preconceptions to ensure never missing the forest for the trees. 
                        </div>

                        <div className="image-wrapper">
                        
                        </div>
                    </div>
                </div>

            </StyleWrapper>
        );
    }
}

export default Skills;