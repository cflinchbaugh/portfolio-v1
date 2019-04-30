import React from 'react';
import styled from 'styled-components';
import Drawer from '../components/Drawer';

const StyleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

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

        p {
            flex: 2;
            margin: 0 10px 0 0;
        }

    }
    
    iframe {
        flex: 1;
    }

`

class About extends React.Component {

    render() {
        const drawerData = {
            label: 'Music'
        }

        return (
            <StyleWrapper>
                <h1>About</h1>
                <div>
                    <div className="about-content-wrapper">
                        <p>
                            If you're looking for my eduction & professional background, see <a href="https://www.linkedin.com/in/christopher-flinchbaugh/" target="_blank">LinkedId</a>.
                        </p>

                        <p>
                            Between dev-times you can find me studying Japanese, listening to lo-fi while sketching, or putting off my backlog of games in favor of some exercise.
                        </p>
                    </div>

                    <div>
                        TODO: https://www.austingrandt.com/writing/how-i-made-simple-spotify-widget-embed-music-any-page/
                    </div>

                    

                </div>

                <Drawer {...drawerData}>
                    <iframe src="https://open.spotify.com/embed/user/cflinchbaugh/playlist/7HkhlScz0CvGHRJaMORxYw" 
                        width="300" 
                        height="380" 
                        frameBorder="0" 
                        allowtransparency="true" 
                        allow="encrypted-media">
                    </iframe>
                </Drawer>
            </StyleWrapper>
        );
    }
}

export default About;