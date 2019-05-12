import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tag from './Tag'
import Checkbox from './Checkbox';
import learnedImage from '../images/learned.png';
import lovedImage from '../images/loved.png';

const StyleWrapper = styled.div`
    height: 100vh;
    max-width: 100vw;

    .project-title {
        font-size: 2em;
        font-family: 'Ubuntu Condensed', sans-serif;
    }

    .project-summary {
        font-size: .85em;
    }

    .project-content-wrapper {
        margin: 10px 0;
    }

    .project-text-content-wrapper {
        .active-content-text {
            word-break: break-word;
            margin: 10px;
        }
    }
    
    .project-images-placeholder {
        height: 100px;
        border: solid 1px;
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
                font-size: 5em;
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
            align-self: flex-end;
        }
    
        .project-text-content-wrapper {
            display: flex;
            flex-direction: column;
            text-align: right;
            box-sizing: border-box;
            margin: 5vh 5vw;
            height: 40vh;
            width: 40vw;
            justify-content: space-between;
            overflow-y: auto;
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
                    data-aos-delay="500">
                </div>

                <div className={`content ${configClass}`}>
                    <div className="project-identifier-wrapper"  data-aos="fadein">
                        <div className="project-title">
                            {this.props.title}
                        </div>
                        
                        <div className="project-summary">
                            {this.props.summary}
                        </div>
                    </div>

                    
                    <div className="project-content-wrapper">
                        <div className="project-text-content-wrapper" data-aos="fadein" data-aos-delay="1000">
                            <div className="active-content-text" >
                                {activeContentText}
                            </div>
                            
                            <div className="content-icons-wrapper">
                                <Checkbox {...learnedCheckboxData}/>
                                <Checkbox {...lovedCheckboxData}/>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="project-link-wrapper">
                        {links}
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
                activeContentText = this.props.learned;
                break;

            case ('loved'):
                activeContentText = this.props.loved;
                break;

            case ('description'):
                activeContentText = this.props.description;
                break;
        }

        return activeContentText;
    }

    buildLinksMarkup() {
        let linksMarkup = [];

        this.props.links.forEach((linkData, idx) => {
            linksMarkup.push(
                <a href={linkData.url} target='_blank' key={idx}>
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