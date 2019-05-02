import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    border: solid 1px gray;
    padding: 5px 10px;
    display: inline-flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    box-sizing: border-box;

    &:hover {
        cursor: pointer;
    }

    .project {
        display: flex;
        flex: 1;
    }

    @media (min-width: 768px) {

    }
`

class Project extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleClickProject = this.handleClickProject.bind(this);
        
    }

    render() {
        return (
            <StyleWrapper>
                <div className="project" onClick={this.handleClickProject}>
                    {this.props.title}
                </div>
            </StyleWrapper>
        );
    }

    handleClickProject() {
        this.props.onClick(this.props.id);
    }

}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    moreInfo: PropTypes.string,
    learned: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired,
    tags: PropTypes.array
}

export default Project;