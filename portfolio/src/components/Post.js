import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tag from './Tag'

const StyleWrapper = styled.div`
    border: solid 1px gray;
    margin: 10px 0;
`

class Post extends React.PureComponent {

    render() {
        const tags = this.buildTagsMarkup();

        return (
            <StyleWrapper>
                <h2>{this.props.title}</h2>
                <div>{this.props.description}</div>
                <a href={this.props.link} target='_blank'>{this.props.link}</a>
                <div>
                    {tags}
                </div>
            </StyleWrapper>
        );
    }

    buildTagsMarkup() {
        return this.props.tags.map((tag, idx) => {
            return (<Tag tag={tag} key={idx}/>);
        });
    }
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    tags: PropTypes.array
}

export default Post;