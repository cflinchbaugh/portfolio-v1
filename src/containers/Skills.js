import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    background: linear-gradient(to bottom, #fe8a7540 0%, #B5CBED 100%);

    .heading {
        font-size: 1.25em;
    }

    .skills-wrapper {
        display: flex;
        flex-direction: column;
        
        .skill {
            margin: 20px;

            .skill-heading {
                font-weight: bold;
            }
        }
    }
    

    @media(min-width: 768px) {
        .skills-wrapper {
            flex-direction: row;
            width: 90vw;
            
            .skill {
                font-size: .85em;
                border: solid 1px;
                padding: 20px;
                width: 30%;
                margin: 10px;
            }
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
                <div className="heading">
                    What sets me apart?
                </div>

                <div className="skills-wrapper">
                    <div className="skill">
                        <div className="skill-heading">
                            Communication
                        </div>

                        <div>
                            I specialize in <i>people</i>.  Identifying and communicating core messages to audiences every day is my mission.
                        </div>
                    </div>

                    <div className="skill">
                        <div className="skill-heading">
                            Fresh Eyes
                        </div>

                        <div>
                            Reviewing content without preconceptions is essential to not missing the forest for the trees. Implementing the best solutions, not just the most convenient, is my strategy.
                        </div>
                    </div>

                    <div className="skill">
                        <div className="skill-heading">
                            Focus
                        </div>
                        
                        <div>
                            Solving the root problem, identifying process gaps, and ensuring consistency is my drive.
                        </div>
                    </div>
                </div>
                

            </StyleWrapper>
        );
    }
}

export default Skills;