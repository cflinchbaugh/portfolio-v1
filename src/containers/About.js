import React from 'react';
import styled from 'styled-components';
import Drawer from '../components/Drawer';
import laptopImage from '../images/laptop.png';
import readingImage from '../images/reading.png';
import travelImage from '../images/travel.png';
import spotifyImage from '../images/spotify.png';

const StyleWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    
    color: white;

    background-image: url(${readingImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    .triangle-topper {
        width: 0;
        height: 0;
        border-left: 1225px solid transparent;
        border-right: 250px solid transparent;
        border-bottom: 200px solid blue;
    }

    .about-content-wrapper {
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        background: #00000099;
        margin: 5vh 5vw;
        padding: 2vh 2vw;

        p {
            width: 50vw;
            margin: 0 10px 0 0;
        }
    }
    
    iframe {
        flex: 1;
    }

`

class About extends React.Component {
    constructor(props) {
        super(props);

        this.updateShowInterest = this.updateShowInterest.bind(this);
        
        this.state = {
            activeInterest: null
        }
    }

    render() {
        const drawerData = {
                label: <img src={`${spotifyImage}`} alt="Spotify Logo"></img>
            },
            imageUrl = this.buildImageUrl();


        return (
            <StyleWrapper style={{backgroundImage: `url(${imageUrl})`}}>

                <div>
                    <div className="about-content-wrapper">
                        <h1>When the laptop closes...</h1>

                        {/* <p>
                            If you're looking for my education & professional background, see <a href="https://www.linkedin.com/in/christopher-flinchbaugh/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
                        </p> */}

                        <p className="about-summary">
                            Between dev-times you can find me studying Japanese, listening to lo-fi while sketching, or putting off my backlog of games in favor of some exercise.
                        </p>
                    </div>

                    {/* <div onClick={() => {this.updateShowInterest('reading')}}>Reading</div>
                    <div onClick={() => {this.updateShowInterest('travel')}}>Travel</div>
                    <div onClick={() => {this.updateShowInterest('exercise')}}>Exercise</div> */}

                </div>

                <Drawer {...drawerData}>
                    <iframe src="https://open.spotify.com/embed/user/cflinchbaugh/playlist/7HkhlScz0CvGHRJaMORxYw" 
                        width="300" 
                        height="380" 
                        frameBorder="0" 
                        allowtransparency="true" 
                        allow="encrypted-media"
                        title="Spotify Playlist">
                    </iframe>
                </Drawer>
            </StyleWrapper>
        );
    }

    buildImageUrl() {
        let imageUrl;

        switch(this.state.activeInterest) {
            case 'reading':
                imageUrl = readingImage;
                break;
            
            case 'travel':
                imageUrl = travelImage;
                break;

            default:
                imageUrl = laptopImage;
        }
        
        return imageUrl;
    }

    updateShowInterest(interest) {
        this.setState((prevState) => {
            const updatedInterest = (interest === prevState.activeInterest) ? null : interest;

            return {
                activeInterest: updatedInterest
            }
        });
    }
}

export default About;