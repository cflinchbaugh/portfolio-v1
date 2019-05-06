import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(to bottom,#ffffff00 85%, #fe8a7540 100%);
    
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

    .arrow-wrapper {
        border: solid 2px;
        border-radius: 100%;
        padding: 20px;
        margin-top: 30px;
        
        .arrow {
            height: 10px;
            width: 10px;
            border-bottom: solid 2px;
            border-right: solid 2px;
            transform: rotate(45deg);
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
    constructor(props) {
        super(props);

        this.myRef = React.createRef();

        this.handleClickArrow = this.handleClickArrow.bind(this);
    
    }

    render() {
        return (
            <StyleWrapper>
                <div className="text-content-wrapper">
                    
                    <div className="initials">CF</div>

                    <div className="bio">
                        <div className="name">Chris Flinchbaugh</div>
                        <div className="title">Front-End Developer | UI/UX Engineer</div>
                    </div>

                    <div className="arrow-wrapper">
                        <div className="arrow" onClick={this.handleClickArrow}></div>
                    </div>
                </div>
            </StyleWrapper>
        );
    }

    handleClickArrow() {
        this.props.scroll(this.props.nextSection);
    }
}

export default Home;