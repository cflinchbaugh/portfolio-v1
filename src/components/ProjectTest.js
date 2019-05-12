import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tag from './Tag'
import Checkbox from './Checkbox';
import learnedImage from '../images/learned.png';
import lovedImage from '../images/loved.png';
import linkImage from '../images/link.png';

const StyleWrapper = styled.div`
    min-height: 100vh;
    max-width: 100vw;

    .project-title {
        font-size: 2em;
        font-family: 'Ubuntu Condensed', sans-serif;
    }

    .project-summary {
        font-size: .85em;
        padding-bottom: 10px;
    }

    .project-content-wrapper {
        margin: 10px 0;
    }

    .project-text-content-wrapper {
        .active-content-text {
            word-break: break-word;
        }
    }
    
    .project-images-placeholder {
        height: 100px;
        border: solid 1px;
    }

    .image {
        width: 100vw;
        height: 30vh;
        background-size: cover;
        background-color: #98004b;
    }

    .project-link-wrapper {
        margin-bottom: 20px;

        a {
            margin-right: 20px;
        }
    }

    .tag-wrapper {
        display: inline-block;
        margin: 5px;
    }

    .content-icons-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }

    .content {
        padding: 10px;
        box-sizing: border-box;
    }

    .content-text-label {
        font-weight: bold;
        font-size: 1em;
    }

    @media(min-width: 768px) {
        display: flex;
        position: relative;

        .image,
        .content {
            height: 100vh;
            display: inline-flex;
            flex-direction: column;
        }

        .image {
            width: 30%;
            background-color: #98004b;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
        
        .image.default {
            order: 1;
        }

        .image.alternate {
            order: 2;
        }

        .content {
            width: 70%;
            justify-content: flex-end;
            order: 2;
        }

        .content.default {
            order: 2;
        }

        .content.alternate {
            order: 1;
        }

        .project-identifier-wrapper {
            position: absolute;
            top: 15vh;
            left: 25vw;
            background: #ffffff86;
            padding: 5px 10px;
            
            .project-title {
                font-size: 3.5em;
            }
            .project-summary {
                font-size: 1.5em;
            }
        }

        .content-icons-wrapper {
            display: flex;
            justify-content: flex-end;
        }


        .project-content-wrapper {
            display: flex;
        }
        .project-content-wrapper.default {
            align-self: flex-end;
        }


        .project-content-wrapper.alternate {
            align-self: flex-start;

            .active-content-text {
                text-align: left;
            }
        }

        
    
        .project-text-content-wrapper {
            display: flex;
            flex-direction: column;
            text-align: right;
            box-sizing: border-box;
            margin: 5vh 5vw;
            width: 40vw;
            justify-content: space-between;
            
        }

        .content-text-label {
            font-weight: bold;
            font-size: 1em;
        }

        .active-content-text {
            overflow-y: auto;
            height: 30vh;
            margin: 10px;
            padding: 20px;
            font-size: .9em;
        }
    }


`

class ProjectDetails extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleClickLearned = this.handleClickLearned.bind(this);
        this.handleClickLoved = this.handleClickLoved.bind(this);

        this.state = {
            activeContentText: 'description'
        }
    }

    render() {
        const links = this.buildLinksMarkup(), 
            tags = this.buildTagsMarkup(),
            activeContentText = this.buildActiveContentText(),
            learnedCheckboxData = {
                ariaLabel: 'learned',
                checked: this.state.activeContentText === 'learned',
                handleChangeCheckbox: this.handleClickLearned,
                id: 'learned',
                label: 'Learned',
                image: learnedImage
                //<a href="https://icons8.com/icon/2070/brain">Brain icon by Icons8</a>
            },
            lovedCheckboxData = {
                ariaLabel: 'loved',
                checked: this.state.activeContentText === 'loved',
                handleChangeCheckbox: this.handleClickLoved,
                id: 'loved',
                label: 'Loved',
                image: lovedImage
                //<a href="https://icons8.com/icon/14945/romance">Romance icon by Icons8</a>
            },
            imageUrl = this.props.imageUrl,
            configClass = this.props.config

        return (
            <StyleWrapper>
                <div className={`image ${configClass}`}
                    data-aos="fadein" 
                    style={{backgroundImage: `url(${imageUrl})`}}
                    >
                </div>

                <div className={`content ${configClass}`}>
                    <div className="project-identifier-wrapper"  data-aos="fadein">
                        <div className="project-title">
                            {this.props.title}
                        </div>
                        
                        <div className="project-summary">
                            {this.props.summary}
                        </div>

                        <div className="project-link-wrapper">
                            {links}
                            {/* <div>Icons made by <a href="https://www.flaticon.com/authors/creaticca-creative-agency" title="Creaticca Creative Agency">Creaticca Creative Agency</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
                        </div>
                    </div>

                    <div className={`project-content-wrapper ${configClass}`}>
                        <div className="project-text-content-wrapper" data-aos="fadein" data-aos-delay="750">
                            <div className="active-content-text" >
                                {activeContentText}
                            </div>
                            
                            <div className="content-icons-wrapper">
                                <Checkbox {...learnedCheckboxData}/>
                                <Checkbox {...lovedCheckboxData}/>
                            </div>
                            
                        </div>
                    </div>
                    
                    
                    
                    {/* <div className="poject-tags-wrapper">
                        {tags}
                    </div> */}

                </div>
            </StyleWrapper>
        );
    }


    handleClickLearned(checked) {
        let activeText = checked ? 'learned' : 'description';

        this.setState({
            activeContentText: activeText
        });
    }

    handleClickLoved(checked) {
        let activeText = checked ? 'loved' : 'description';

        this.setState({
            activeContentText: activeText
        });
    }

    buildActiveContentText() {
        let activeContentText = '';

        switch(this.state.activeContentText) {
            case ('learned'):
                activeContentText = (
                    <React.Fragment>
                        <div className="content-text-label">
                            Learned
                        </div>
                        <div>
                            {this.props.learned}
                        </div>
                    </React.Fragment>
                )

                break;

            case ('loved'):
                activeContentText = (
                    <React.Fragment>
                        <div className="content-text-label">
                            Loved
                        </div>
                        <div>
                            {this.props.loved}
                        </div>
                    </React.Fragment>
                )

                break;

            case ('description'):
                activeContentText = (
                    <React.Fragment>
                        <div className="content-text-label">
                            Description
                        </div>
                        <div>
                            {this.props.description}
                        </div>
                    </React.Fragment>
                )

                break;
        }

        return activeContentText;
    }

    buildLinksMarkup() {
        let linksMarkup = [];

        this.props.links.forEach((linkData, idx) => {
            linksMarkup.push(
                <a href={linkData.url} target='_blank' key={idx}>
                    <img src={`${linkImage}`}></img>
                    {linkData.label}
                </a>
            );
        });

        return linksMarkup;
    }

    buildTagsMarkup() {
        return this.props.tags.map((tag, idx) => {
            return (
                <div className="tag-wrapper" key={idx}>
                    <Tag tag={tag} />
                </div>
            );
        });
    }


}

ProjectDetails.defaultProps = {
    config: 'default'
}

ProjectDetails.propTypes = {
    config: PropTypes.oneOf(['default', 'alternate']),
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    moreInfo: PropTypes.string,
    learned: PropTypes.string.isRequired,
    loved: PropTypes.string.isRequired,
    links: PropTypes.array, 
    tags: PropTypes.array
}

export default ProjectDetails;