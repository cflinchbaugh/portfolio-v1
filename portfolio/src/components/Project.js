import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dialog from './Dialog';
import ProjectDetails from './ProjectDetails';

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

    .image-placeholder {
        height: 100px;
        width: 150px;
        border: solid 1px;
    }

    @media (min-width: 768px) {

    }
`

class Project extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleClickProject = this.handleClickProject.bind(this);
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);

        this.state = {
            dialogShow: false
        }
    }

    render() {
        const dialogData = {
                dynamicHeight: true,
                show: this.state.dialogShow,
                size: 'large',
                handleClickOverlay: this.closeDialog,
                handleClickClose: this.closeDialog
            },
            projectDetailsData = {
                title: this.props.title,
                description: this.props.description,
                moreInfo: this.props.moreInfo,
                learned: this.props.learned,
                links: this.props.links,
                tags: this.props.tags
            }

        return (
            <StyleWrapper>
                {/* <div onClick={this.openDialog}> */}
                <div onClick={this.handleClickProject}>
                    {this.props.title}

                    <div className="image-placeholder">
                        Image
                    </div>
                </div>

                <Dialog {...dialogData}>
                    <ProjectDetails {...projectDetailsData} />
                </Dialog>
            </StyleWrapper>
        );
    }

    handleClickProject() {
        this.props.onClick(this.props.id);
    }

    openDialog() {
        this.setState({
            dialogShow: true
        })
    }

    closeDialog() {
        this.setState({
            dialogShow: false
        })
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