import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    .modal-overlay {
        display: none;
    }

    .modal-overlay.active {
        display: block;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: gray;
        opacity: 0.7;
        position: fixed;
        z-index: 10;
    }

    .modal-wrapper {
        display: none;
    }

    .modal-wrapper.active {
        display: flex;
        align-items: center;
        justify-items: center;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 11;
        padding: 0;

        .modal {
            height: 100%;
            width: 100%;
            max-width: 900px;
            display: flex;
            flex-direction: column;
            background-color: white;
            border-radius: 5px;
            box-shadow: 3px 3px 10px gray;
            padding: 20px;

            &:hover {
                cursor: default;
            }
            
            .modal-header-wrapper {
                display: flex;
                justify-content: flex-end;

                .close {
                    &:hover {
                        cursor: pointer;
                    }
                }
            }

            .modal-body-wrapper {
                display: flex;
                flex-grow: 1;
                flex-direction: column;
                justify-content: center;
                height: auto;
                overflow-y: hidden;
            }
            
            &.dynamic-height {
                height: 100%;
            }
        }
    }

    @media(min-width: 768px) {
        .modal-wrapper.active {
            padding: 0 12.5%;

            .modal {
                height: 590px;
                margin: 0 auto;

                &.dynamic-height {
                    height: auto;
                }

                &.small {
                    max-width: 550px;
                }

                &.medium {
                    max-width: 900px;
                }

                &.large {
                    max-width: 1180px;
                    height: 750px;
                }
            }
        }
    }
    
`

class Dialog extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleClickOverlay = this.handleClickOverlay.bind(this);
    }

    render() {
        const heightClass = this.props.dynamicHeight ? 'dynamic-height' : 'fixed-height',
            showClass = this.props.show ? 'active' : 'hide';

        return (
            <StyleWrapper>
                <div className={`modal-overlay ${showClass}`}>
                </div>

                <div className={`modal-wrapper ${showClass} ${this.props.size}`}
                    onClick={this.handleClickOverlay}>

                    <div className={`modal ${heightClass}`} roll="dialog">
                        <div className="modal-header-wrapper">
                            <div className="close" onClick={this.props.handleClickClose}>X</div>
                        </div>

                        <div className="modal-body-wrapper">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </StyleWrapper>
        );
    }

    handleClickOverlay(e) {
        if (e.target.className.indexOf('modal-wrapper') >= 0 && this.props.handleClickOverlay) {
            this.props.handleClickOverlay();
        }
    }
    
}

Dialog.defaultProps = {
    size: 'medium'
}

Dialog.propTypes = {
    dynamicHeight: PropTypes.bool.isRequired,
    show: PropTypes.bool.isRequired,
    size: PropTypes.oneOf([
        'small',
        'medium',
        'large'
    ]),
    children: PropTypes.node.isRequired,
    handleClickOverlay: PropTypes.func.isRequired,
    handleClickClose: PropTypes.func.isRequired
}

export default Dialog;