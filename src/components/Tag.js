import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    display: inline-block;
    padding: 7px 8.5px;
    border-radius: 5px;
    background-color: #63264A;
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