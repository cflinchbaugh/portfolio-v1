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

    .skill {
        margin: 10px;
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
                
                <div className="skill">
                    Communication: I specialize in <strong>people</strong>.  Identifying and communicating core messages to intended internal and external audiences every day is my mission.
                </div>

                <div className="skill">
                    Fresh Eyes: Reviewing content without preconceptions is essential to not missing the forest for the trees. Ensuring the best solutions are implemented, not just the most convenient, is my strategy.
                </div>

                <div className="skill">
                    Focus: Solving the root problem, identifying process gaps, and ensuring consistency is my drive.
                </div>
                

            </StyleWrapper>
        );
    }
}

export default Skills;