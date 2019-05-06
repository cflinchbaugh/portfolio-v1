import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleWrapper = styled.button`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    border: none;

    &:hover {
        cursor: pointer;
    }

    .title-wrapper {
        padding: 10px;
        box-sizing: border-box;
        display: inline-flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        justify-content: center;
        border: solid;
        border-radius: 3px;
    }

    @media (min-width: 768px) {
        .active {
            background-color: #a1848c;
        }
    }
`

class Project extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleClickProject = this.handleClickProject.bind(this);
        
    }

    render() {
        const statusClass = this.props.isActive ? 'active' : 'inactive';

        return (
            <StyleWrapper onClick={this.handleClickProject}>
                <div className={`title-wrapper ${statusClass}`}>
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