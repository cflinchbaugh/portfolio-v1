import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    margin: 3px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
        cursor: pointer;
    }

    .hide {
        display: none;
    }

    label {
        // override browser default cursor state for labels
        &:hover {
            cursor: pointer;
        }
    }

    .checkbox-label {
        display: flex;
        align-items: center;
        margin-right: 5px;

    }
    
    .checkbox {
        height: 10px
        width: '10px';
        background-color: white;
        margin-right: 5px;
        user-select: none;
        transition: background-color .15s;      
        display: flex;
        align-items: center;
        justify-content: center;

    }

    .checkbox.checkbox-enabled {
        &:hover {
            
        }
    }
    

    .checkbox-image-wrapper {
        border-radius: 100%;
        border: solid;
        box-sizing: border-box;
        padding: 10px;
        margin: 5px;
        transition: background-color .25s;
 
        .checkbox-image {
            height: 50px;
            overflow: hidden;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            width: 50px;
            
            
            padding: 5px;
        }
    }

    .checkbox-image-wrapper.checked {
        background-color: #cf0276;
    }

    .checkbox-image-wrapper.unchecked {
        &:hover {
            background-color: #98004b;
        }
    }

    
`;

function CheckboxPresentation(props) {
    let styleWrapperData = {
            onClick: props.handleClick,
            size: props.size
        },
        hiddenInputData = {
            id: props.id,
            name: props.id,
            checked: props.checked,
            onChange: props.handleClick,
            'aria-label': props.ariaLabel,
            disabled: props.disabled
        },
        disabledCheckboxClass = props.disabled ? 'checkbox-disabled' : 'checkbox-enabled',
        disabledLabelClass = props.disabled ? 'checkbox-label-disabled' : 'checkbox-label-enabled',
        label = typeof(props.label) === 'undefined' ? 
            '' : (<div className={`checkbox-label ${disabledLabelClass} unselectable`}>{ props.label }</div>),
        hoverClass = props.hovered ? 'hover' : '',
        checkedClass= props.checked ? 'checked' : 'unchecked';

    return (
        <StyleWrapper {...styleWrapperData}>
            <input type="checkbox" className="hide" {...hiddenInputData}/>

            <span className={`checkbox ${hoverClass} ${disabledCheckboxClass}`}>
                <div className="f-icon f-icon-checkmark"></div>
                <span className="ripple"></span>
            </span>

            <div className={`checkbox-image-wrapper ${checkedClass}`}>
                <div className="checkbox-image" style={{backgroundImage: `url(${props.image})`}}>
                    {/* Image */}
                </div>
            </div>
            

            {label}
        </StyleWrapper>
    );
}

CheckboxPresentation.defaultProps = {
    disabled: false,
    hovered: false
};

CheckboxPresentation.propTypes = {
    ariaLabel: PropTypes.string,
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    handleClick: PropTypes.func.isRequired,
    hovered: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    size: PropTypes.oneOf(['small', 'large']),
};

export default CheckboxPresentation;