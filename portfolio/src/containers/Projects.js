import React from 'react';
import Project from '../components/Project';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    
`

class Projects extends React.Component {

    render() {
        const learnolotlData = {
                title: 'Learnolotl',
                description: 'Language learning Flash-Card web-app',
                link: 'https://cflinchbaugh.github.io/Learnolotl/',
                tags: ['React', 'Redux', 'Web App', 'Design', 'Tested'],
                moreInfo: 'This is my favorite project so far, it\'s fleshed out and has a lot of potential to grow.  The idea came from when I was first learning Japanese and was writing flashcards. I wanted to be able to reference all the different versions of a word (English/Romaji/Hiragana/Katakana/Kanji) without having to cover up part of the card, and since a real notecard only has two sides- that was difficult to do.',
                learned: 'I learned so much building this web-app.  Not only did I get to use the skills I sharpen in the office, I was able to take what I learned back and demonstrate the benefits of moving to React.'
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

                <Project {...learnolotlData} />
                <Project {...didiAndSmilingJohnsData} />
                <Project {...codePenData} />

                <Project {...webRtcData} />
                <Project {...learnolotlNativeData} />
                <Project {...fullStackData} />
            </StyleWrapper>
        );
    }
}

export default Projects;