import React from 'react';
import Project from '../components/Project';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    h1 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

class Projects extends React.Component {

    render() {
        const learnolotlData = {
                title: 'Learnolotl',
                description: 'Language learning Flash-Card web-app',
                moreInfo: 'This is my favorite project so far, it\'s fleshed out and has a lot of potential to grow.  The idea came from when I was first learning Japanese and was writing flashcards. I wanted to be able to reference all the different versions of a word (English/Romaji/Hiragana/Katakana/Kanji) without having to cover up part of the card, and since a real notecard only has two sides- that was difficult to do.',
                learned: 'I learned so much building this web-app.  Not only did I get to use the skills I sharpen in the office, I was able to take what I learned back and demonstrate the benefits of moving to React.',
                links: [{
                    label: 'Demo',
                    url: 'https://cflinchbaugh.github.io/Learnolotl/',
                }, {
                    label: 'Repo',
                    url: 'https://github.com/cflinchbaugh/Learnolotl',
                }],
                tags: ['React', 'Redux', 'Web App', 'Design', 'Tested'],
            },
            didiAndSmilingJohnsData = {
                title: 'DiDi & Smiling Johns',
                description: 'Small business website',
                learned: 'This was the most rewarding work I\'ve done because it was for a small-business and I was able to interact with the client throught the entire process.  Not only did I learn a lot about client interaction, but I was able to see their joy when the project wrapped.  Configuring and deploying the website was also a profound learning experience because it helped me see how much more goes on beyond the parts of a project I am most intimately involved with at the office.',
                links: [{
                    label: 'Website',
                    url: 'http://didiandsmilingjohns.com',
                }],
                tags: ['Website', 'Design', 'WordPress']
            },
            codePenData = {
                title: 'Code Pens',
                description: 'CSS Challenges',
                learned: 'Codepens challenge me to experiment with new CSS techniques and help me grow as a developer.  Never one to get too comfortable, I love seeing what other devs are doing to push the boundaries and I make time to produce something fun when I need to step away from one of my on-going projects.',
                links: [{
                    label: 'Gallery',
                    url: 'https://codepen.io/cflinchbaugh/'
                }],
                tags: ['CSS', 'Design', 'Miscellaneous']
            },
            webRtcData = {
                title: 'WebRTC-React',
                description: 'WebRTC chat',
                learned: 'This project opened my eyes to just how much more my apps could be doing and how far the web has come.  I went through the process of building multiple WebRTC apps, but this is my favorite because I was able to take what I had learned and implement it in the framework with which I\'m most comfortable.',
                links: [{
                    label: 'Repo',
                    url: 'https://github.com/cflinchbaugh/webrtc-react'
                }],
                tags: ['WebRTC', 'on-going', 'client-side']
            },
            learnolotlNativeData = {
                title: 'Learnolotl Native',
                description: 'An enhanced version of the Learnolotl web-app written in React Native and tested on Android devices',
                learned: 'This project is still in it\'s early stages, but I\'m excited with how far it has already come.  I stripped down the functionality compared to the web-app and instead focused on simplicity while I learn the ins-and-outs of React Native and Android development',
                links: [{
                    label: 'Repo',
                    url: 'https://github.com/cflinchbaugh/LearnolotlNative'
                }],
                tags: ['React Native', 'Native App', 'Design']
            },
            fullStackData = {
                title: 'Full Stack',
                description: 'A sample full-stack application with REST capabilities, connected to MongoDB',
                learned: 'It was only a matter of time before I started my journey towards full-stack development and with this app fully-functioning, I have a great template to begin building or enhanding other apps.  Configuring and manipulating MongoDB was a challenge because many of the errors thrown during development were obtuse, but after digging deep into StackOverflow and stepping back to consider where things could have been misconfigured, I was able to add all the features I set out to implement.',
                links: [{
                    label: 'Repo',
                    url: 'https://github.com/cflinchbaugh/fullstack'
                }],
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