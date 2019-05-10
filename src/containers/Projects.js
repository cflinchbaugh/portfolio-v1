import React from 'react';
import Project from '../components/Project';
import styled from 'styled-components';
import ProjectsData from '../data/projects';
import ProjectDetails from '../components/ProjectDetails';
import ProjectTest from '../components/ProjectTest';
import Dialog from '../components/Dialog';

const StyleWrapper = styled.section`
    box-sizing: border-box;
    // background: #FE8A75;
    // background: linear-gradient(to bottom, #fe8a7540 0%, #B5CBED 100%);
    height: 100vh;

    .section-heading {
        align-items: center;

        h1 {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    
        .description {
            text-align: center;
            margin: 20px;
        }
    }

    .active-project-details-wrapper {
        margin: 0 5vw;
    }

    .projects-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        .project-wrapper {
            margin: 10px;
        }
    }

    @media(min-width: 768px) {
        display: flex;
        
        .section-heading {
            display: flex;
            flex: 4;
            flex-direction: column;

            .description {
                display: flex;
                margin: 3vh 2vw 7vh 2vh;
            }
        }

        .active-project-details-wrapper {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }

        .dialog-wrapper {
            display: none;
        }

        .projects-wrapper {
            display: flex;
            flex: 1;
            flex-direction: row;
            width: 30vw;

            .column {
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 100%;
                width: 100%;

                .project-wrapper {
                    height: 10vh;
                    margin: 2vh;
                }
            }
        }
    }
`

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.handleClickProject = this.handleClickProject.bind(this);

        this.state = {
            activeProjectId: 'learnolotlData',
            showDialog: false
        }
    }

    render() {
        const projects = this.buildProjects(),
            activeProjectDetailsMarkup = this.buildActiveProjectMarkup(),
            data = ProjectsData[this.state.activeProjectId],
            test = (<ProjectTest {...data}/>);
            
        return (
            <StyleWrapper>
                {/* {test} */}

                <div className="section-heading">
                    <h1>Success is not an accident</h1>

                    <div className="description">
                        Creating content and devouring the latest changes in technology and design are a must.  Much of my work is proprietary and can fall into periods of large-scale development repetition.  To combat stagnation, I expand my horizons through personal projects.
                    </div>

                    <div className="active-project-details-wrapper">
                        {activeProjectDetailsMarkup}
                    </div>
                </div>

                <div className="projects-wrapper">
                    <div className="column">
                        {projects}
                    </div>
                </div>

            </StyleWrapper>
        );
    }

    buildActiveProjectMarkup() {
        let markup;

        const activeProjectDetails = this.buildActiveProjectDetails(),
            dialogData = {
                dynamicHeight: false,
                show: this.state.showDialog,
                size: 'large',
                handleClickOverlay: () => { this.setState({showDialog: false})},
                handleClickClose: () => { this.setState({showDialog: false})}
            };

        if (document.documentElement.clientWidth < 768) {
            markup = (
                <div className="dialog-wrapper">
                    <Dialog {...dialogData}>
                        {activeProjectDetails}
                    </Dialog>
                </div>
            );
        } else {
            markup = activeProjectDetails;
        }

        return markup;
    }

    buildProjects() {
        let projects = [];
        
        for (const key of Object.keys(ProjectsData)) {
            let projectData = {
                ...ProjectsData[key],
                key: key,
                onClick: this.handleClickProject,
                isActive: this.state.activeProjectId === key
            }

            projects.push((
                <div className="project-wrapper" key={key}>
                    <Project {...projectData} />
                </div>)
            );
        }

        return projects;
    }

    buildActiveProjectDetails() {
        let activeProjectDetails = '';

        if (this.state.activeProjectId !== null) {
            let data = ProjectsData[this.state.activeProjectId]

            activeProjectDetails = (<ProjectDetails {...data}/>);
        }
            
        return activeProjectDetails;
    }

    handleClickProject(id) {
        this.setState({
            activeProjectId: id,
            showDialog: true
        });
    }
}

export default Projects;