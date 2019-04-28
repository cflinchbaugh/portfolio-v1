import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tag from './Tag'

const StyleWrapper = styled.div`
    .project-title {
        font-size: 2em;
    }

    .project-content-wrapper {
        margin-bottom: 20px;
    }

    .project-text-content-wrapper {
        margin-right: 20px;

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

class ProjectDialogContent extends React.PureComponent {
    render() {
        const links = this.buildLinksMarkup(), 
            tags = this.buildTagsMarkup();

        return (
            <StyleWrapper>
                <div className="project-title">
                    {this.props.title}
                </div>
                
                <div className="project-content-wrapper">
                    <div className="project-text-content-wrapper">
                        <div>{this.props.description}</div>
                        <div>{this.props.moreInfo}</div>
                        <div>{this.props.learned}</div>
                    </div>

                    <div className="project-images-placeholder">
                    </div>
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
            return (<Tag tag={tag} key={idx}/>);
        });
    }


}

ProjectDialogContent.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    moreInfo: PropTypes.string,
    learned: PropTypes.string.isRequired,
    links: PropTypes.array, 
    tags: PropTypes.array
}

export default ProjectDialogContent;