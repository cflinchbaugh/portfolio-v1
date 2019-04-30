import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    .label,
    .contents {
        position: fixed;
        right: 50px;
        transition: bottom .15s, background-color .25s;
    }
    
    .label {
        padding: 5px 30px;
        background: #262c4a;
        border-radius: 5px 5px 0 0;
        color: white;

        &.closed {
            bottom: 0;
        }

        &.open {
            bottom: 380px
        }

        &:hover {
            cursor: pointer;
            background-color: #161a2f;
        }
    }

    .contents {
        display: flex;
        border-radius: 5px 0;
        overflow: hidden;

        &.closed {
            bottom: -380px;
        }

        &.open {
            bottom: 0;
        }
    }
       
`

class Drawer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleTabClick = this.handleTabClick.bind(this);

        this.state = {
            open: false
        }
    }

    render() {
        const stateClass = this.state.open ? 'open' : 'closed';

        return (
            <StyleWrapper>
                <div className={`label  ${stateClass}`} onClick={this.handleTabClick}>
                    {this.props.label}
                </div>

                <div className={`contents ${stateClass}`}>
                    {this.props.children}
                </div>
            </StyleWrapper>
        );
    }

    handleTabClick() {
        this.setState((prevState) => {
            return {
                open: !prevState.open
            }
        });
    }
}

Drawer.propTypes = {
    label: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired
}

export default Drawer;