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
       padding: 5vw;
       box-sizing: border-box;
   }

   .primary {
        span {
            margin-right: 5px;
        }
        
        .leading {
        }

        .main {
            font-size: 2em;
            font-weight: bold;
        }

        .sub {
            font-size: 1.25em
        }
   }
    

    // @media(min-width: 768px) {
    //     .content-wrapper {
    //         width: 80vw;
    //         max-width: 1200px;
    //         display: flex;
    //         flex-wrap: wrap;
    //         justify-content: center;
    //     }

    //     .primary,
    //     .content-1,
    //     .content-2,
    //     .image {
    //         display: inline-block;
    //     }

    //     .row-primary,
    //     .row-secondary {
    //         justify-content: center;
    //         display: flex;
    //         width: 100%;
    //     }

    //     .row-primary {
    //         flex-direction: column;
    //     }

    //     .primary {
    //         width: 70%;
    //         font-size: 3em;
    //         font-weight: bold;
    //         text-align: right;

    //         .leading {
    //             font-size: .5em;
    //         }

    //         .main {
    //             font-size: 3.25em;
    //         }

    //         .sub {
    //             display: flex;
    //             justify-content: flex-end;
    //             font-size: .8em;
    //             margin-top: -50px;
    //             margin-right: 10px;
    //         }
    //     }

    //     .content-1,
    //     .content-2 {
    //         padding: 50px;
    //     }
    
    //     .content-1 {
    //         width: 50%;
    //         box-sizing: border-box;
    //     }
    //     .content-2 {
    //         width: 40%;
    //         text-align: right;
    //         padding: 40px 70px 0 20%;
    //     }
    
    //     .image-wrapper {
    //         height: 300px;
    //         width: 50%;
    //         // background-color: rebeccapurple;
    //     }
        
    // }

    @media(min-width: 1200px) {
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

        .primary {
            width: 70%;
            font-size: 3em;
            font-weight: bold;
            text-align: right;

            .leading {
                font-size: .5em;
            }

            .main {
                font-size: 3.25em;
            }

            .sub {
                display: flex;
                justify-content: flex-end;
                font-size: .8em;
                margin-top: -50px;
                margin-right: 10px;
            }
        }

        .content-1,
        .content-2 {
            padding: 50px;
            height: 200px;
            
            // border: solid 1px;
        }
    
        .content-1 {
            width: 30%;
            box-sizing: border-box;
        }
        .content-2 {
            width: 40%;
            text-align: right;
            padding: 40px 70px 0 20%;
        }
    
        .image-wrapper {
            height: 300px;
            width: 50%;
            // background-color: rebeccapurple;
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
                        <div className="primary">
                            <span className="leading">One</span>
                            <span className="main">BOLD</span>
                            <span className="sub">Developer</span>
                        </div>

                        <div className="content-1">
                                I specialize in <i>people</i>.  Identifying and communicating core messages to audiences every day is my mission.
                                Solving the root problem, identifying process gaps, and ensuring consistency is my drive.
                        </div>
                    </div>

                    <div className="row-secondary">
                        <div className="content-2">
                                Reviewing content without preconceptions is essential to not missing the forest for the trees. Implementing the best solutions, not just the most convenient, is my strategy.
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