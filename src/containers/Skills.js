import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    
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
                <div>
                    Fresh Eyes: Reviewing content without preconceptions
                </div>

                <div>
                    Focus: Solving the root problem, identifying process gaps
                </div>
                

            </StyleWrapper>
        );
    }
}

export default Skills;