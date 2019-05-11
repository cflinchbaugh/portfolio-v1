const learnolotlData = {
        id: 'learnolotlData',
        title: 'Learnolotl',
        summary: 'Language learning Flash-Card web-app',
        description: 'Learnolotl is a web-app I wrote to study Japanese. When I was first learning Japanese, I wanted to be able to reference all the different versions of a word (English/Romaji/Hiragana/Katakana/Kanji) on a single, hand-written flashcard.  Since a real notecard only has two sides- that was difficult to do.  I set out to solve that single problem and planned out the project with multiple milestones, a style guide, and an in-depth readme.',
        learned: 'Before I started this project, I had little experience working with React.  Throughout the project I learned a lot from the official documentation and after my hands-on experience grew, I was able to demonstrate the benefits the framework has over BackboneJS it allowed me to convince my employers to switch from BackboneJS to React because of the benefits I was able to demonstrate (including memory management concerns, rapid development time, and improved performance).',
        loved: 'This is my favorite project so far, because it is something that I use frequently.  I love that it\'s fleshed out enough to solve the original problem yet still has a lot of potential to grow.  Going through the exercise of branding it, creating a style guide, and designing a logo was also a real treat and gave me the opportunity to implement more art and design than usual.',
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
        id: 'didiAndSmilingJohnsData',
        title: 'DiDi & Smiling Johns',
        summary: 'Small business website',
        description: 'This is a website I designed and coded for a local business to help unify their branding and improve their web presence.  They were looking to show each professional as an individual with their own specialties and prices, but also provide cohesion to reflect how closely they work together.  To achieve this, I focused on separating out each person and providing them a card with their details, but grouped everyone together, included groupshot images, and increased the use of their branding colors to provide unity.',
        learned: 'I have experience working with clients through my profession, but this project allowed me to be the direct point of contact for every step of the process.  I was responsible of the entire project, so I was able to put my full skillset to use and work with the client to identify problems, provide recommendations, create designs, gather feedback, develop the final code, and deploy it.  Standing up a website is not something I regularly do, so there were many opportunities to gain experience throughout the deployment process.',
        loved: 'This was the most rewarding work I\'ve done because I was able to interact with the client and see their joy when the project wrapped.  The owners still reach out to me with compliments the website receives which is absolutely rewarding, every time.',
        links: [{
            label: 'Website',
            url: 'http://didiandsmilingjohns.com',
        }],
        tags: ['Website', 'Design', 'WordPress']
    },
    codePenData = {
        id: 'codePenData',
        title: 'CodePen',
        summary: 'Miscellaneous Challenges',
        description: 'Unlike the other projects I have listed, CodePen is not a single application, it is a collection of many small demos I have created.  For me, it is a place to experiment with techniques that do not warrant entire projects. I tend to focus on CSS and Animation challenges, but I also enjoy seeing what other developers are creating for inspiration.',
        learned: 'Through CodePen I\'ve gained experience using CSS properties like ::after to reduce my reliance on divs and other HTML tags that can sometimes clutter the DOM, improving code clarity and maintainability.  The experience I gained using HTML Canvas, however, was definitely the most eye-opening regarding just how far the web has come.',
        loved: 'My favorite CodePen is the "Daily Profit" which I built using CSS Shapes.  But the best part about CodePen is it allows me to step away from bigger projects and focus on learning just one thing.',
        links: [{
            label: 'Gallery',
            url: 'https://codepen.io/cflinchbaugh/'
        }],
        tags: ['CSS', 'Design', 'Miscellaneous']
    },
    webRtcData = {
        id: 'webRtcData',
        title: 'WebRTC-React',
        summary: 'WebRTC chat',
        description: 'WebRTC chat',
        learned: 'Learned: This project opened my eyes to just how much more my apps could be doing and how far the web has come.  I went through the process of building multiple WebRTC apps, but this is my favorite because I was able to take what I had learned and implement it in the framework with which I\'m most comfortable.',
        loved: 'Loved: This project opened my eyes to just how much more my apps could be doing and how far the web has come.  I went through the process of building multiple WebRTC apps, but this is my favorite because I was able to take what I had learned and implement it in the framework with which I\'m most comfortable.',
        links: [{
            label: 'Repo',
            url: 'https://github.com/cflinchbaugh/webrtc-react'
        }],
        tags: ['WebRTC', 'on-going', 'client-side']
    },
    learnolotlNativeData = {
        id: 'learnolotlNativeData',
        title: 'Learnolotl Native',
        summary: 'An enhanced version of the Learnolotl web-app written in React Native and tested on Android devices',
        description: 'An enhanced version of the Learnolotl web-app written in React Native and tested on Android devices',
        learned: 'Learned: This project is still in it\'s early stages, but I\'m excited with how far it has already come.  I stripped down the functionality compared to the web-app and instead focused on simplicity while I learn the ins-and-outs of React Native and Android development',
        loved: 'Loved: This project is still in it\'s early stages, but I\'m excited with how far it has already come.  I stripped down the functionality compared to the web-app and instead focused on simplicity while I learn the ins-and-outs of React Native and Android development',
        links: [{
            label: 'Repo',
            url: 'https://github.com/cflinchbaugh/LearnolotlNative'
        }],
        tags: ['React Native', 'Native App', 'Design']
    },
    fullStackData = {
        id: 'fullStackData',
        title: 'Full Stack',
        summary: 'A sample full-stack application with REST capabilities, connected to MongoDB',
        description: 'A sample full-stack application with REST capabilities, connected to MongoDB',
        learned: 'Learned: It was only a matter of time before I started my journey towards full-stack development and with this app fully-functioning, I have a great template to begin building or enhanding other apps.  Configuring and manipulating MongoDB was a challenge because many of the errors thrown during development were obtuse, but after digging deep into StackOverflow and stepping back to consider where things could have been misconfigured, I was able to add all the features I set out to implement.',
        loved: 'Loved: It was only a matter of time before I started my journey towards full-stack development and with this app fully-functioning, I have a great template to begin building or enhanding other apps.  Configuring and manipulating MongoDB was a challenge because many of the errors thrown during development were obtuse, but after digging deep into StackOverflow and stepping back to consider where things could have been misconfigured, I was able to add all the features I set out to implement.',
        links: [{
            label: 'Repo',
            url: 'https://github.com/cflinchbaugh/fullstack'
        }],
        tags: ['React', 'Redux', 'Client-Side', 'Server-Side', 'Full-Stack', 'MongoDB', 'Design', 'Tested']
    }

export default {
    learnolotlData,
    didiAndSmilingJohnsData,
    codePenData,
    webRtcData,
    learnolotlNativeData,
    fullStackData
}