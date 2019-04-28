import React from 'react';
import Post from '../components/Post.js'
import styled from 'styled-components';

const StyleWrapper = styled.div`
    
`

class Projects extends React.Component {

    render() {
        const learnolotlData = {
                title: 'Learnolotl',
                description: 'Language learning Flash-Card web-app',
                link: 'https://cflinchbaugh.github.io/Learnolotl/',
                tags: ['React', 'Redux', 'Web App', 'Design', 'Tested']
            },
            didiAndSmilingJohnsData = {
                title: 'DiDi & Smiling Johns',
                description: 'Small business website',
                link: 'http://didiandsmilingjohns.com',
                tags: ['Website', 'Design', 'WordPress']
            },
            codePenData = {
                title: 'Code Pens',
                description: 'CSS Challenges',
                link: 'https://codepen.io/cflinchbaugh/',
                tags: ['CSS', 'Design', 'Miscellaneous']
            },
            webRtcData = {
                title: 'WebRTC-React',
                description: 'WebRTC chat',
                link: 'https://github.com/cflinchbaugh/webrtc-react',
                tags: ['WebRTC', 'on-going', 'client-side']
            },
            learnolotlNativeData = {
                title: 'Learnolotl Native',
                description: 'An enhanced version of the Learnolotl web-app written in React Native and tested on Android devices',
                link: 'https://cflinchbaugh.github.io/Learnolotl/',
                tags: ['React Native', 'Native App', 'Design']
            },
            fullStackData = {
                title: 'Full Stack',
                description: 'A sample full-stack application with REST capabilities, connected to MongoDB',
                link: 'https://cflinchbaugh.github.io/Learnolotl/',
                tags: ['React', 'Redux', 'Client-Side', 'Server-Side', 'Full-Stack', 'MongoDB', 'Design', 'Tested']
            }

        return (
            <StyleWrapper>
                <h1>Projects</h1>

                <h2>Stable</h2>
                <Post {...learnolotlData} />
                <Post {...didiAndSmilingJohnsData} />
                <Post {...codePenData} />

                <h2>Beta</h2>
                <Post {...webRtcData} />
                <Post {...learnolotlNativeData} />
                <Post {...fullStackData} />
            </StyleWrapper>
        );
    }
}

export default Projects;