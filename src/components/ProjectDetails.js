import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tag from './Tag'

const StyleWrapper = styled.div`
    border: solid 1px;
    padding: 20px;

    .project-title {
        font-size: 2em;
        font-family: 'Ubuntu Condensed', sans-serif;
    }

    .project-description {
        font-size: .85em;
    }

    .project-content-wrapper {
        margin: 10px 0;
    }

    .project-text-content-wrapper {
        div {
            margin-bottom: 10px;
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
        margin-right: 10px;
    }

    @media(min-width: 768px) {
        .project-content-wrapper {
            display: flex;
        }
    
        .project-text-content-wrapper {
            flex: 2;
        }
        .project-images-placeholder {
            flex: 1;
        }
    }

`

class ProjectDetails extends React.PureComponent {
    render() {
        const links = this.buildLinksMarkup(), 
            tags = this.buildTagsMarkup();

        return (
            <StyleWrapper>
                <div className="project-title">
                    {this.props.title}
                </div>
                
                <div className="project-description">
                    {this.props.description}
                </div>

                
                <div className="project-content-wrapper">
                    <div className="project-text-content-wrapper">
                        
                        <div>{this.props.moreInfo}</div>
                        <div>{this.props.learned}</div>
                    </div>

                    {/* <div className="project-images-placeholder">
                    </div> */}
                </div>
                
                <div className="project-link-wrapper">
                    {links}
                </div>
                
                <div className="poject-tags-wrapper">
                    {tags}
                </div>
            </StyleWrapper>
        );
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
                <div className="tag-wrapper">
                    <Tag tag={tag} key={idx}/>
                </div>
            );
        });
    }


}

ProjectDetails.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    moreInfo: PropTypes.string,
    learned: PropTypes.string.isRequired,
    links: PropTypes.array, 
    tags: PropTypes.array
}

export default ProjectDetails;