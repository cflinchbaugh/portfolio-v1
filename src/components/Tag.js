import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    display: inline-block;
    padding: 3px 5px;
    border-radius: 5px;
    background-color: green;
    color: white;
    font-size: .75em;
    font-family: sans-serif;
`

class Tag extends React.PureComponent {
    render() {
        return (
            <StyleWrapper>
                {this.props.tag}
            </StyleWrapper>
        );
    }
}

Tag.propTypes = {
    tag: PropTypes.string.isRequired
}

export default Tag;