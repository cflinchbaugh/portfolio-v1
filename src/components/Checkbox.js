import React from 'react';
import PropTypes from 'prop-types';
import CheckboxPresentation from'./CheckboxPresentation';

class Checkbox extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        let checkBoxData = {
                ariaLabel: this.props.ariaLabel,
                className: 'hide',
                checked: this.props.checked,
                disabled: this.props.disabled,
                handleClick: this.handleClick,
                hovered: this.props.hovered,
                id: this.props.id,
                image: this.props.image,
                label: this.props.label,
                name: this.props.id,
            };

        return (
            <CheckboxPresentation {...checkBoxData}/>
        );
    }

    handleClick(e) {
        // Both are required to stop event bubbling
        e.stopPropagation();
        e.preventDefault();

        if (!this.props.disabled) {
            const newCheckedValue = !this.props.checked;
            
            this.props.handleChangeCheckbox(newCheckedValue);
        }
    }

}


Checkbox.defaultProps = {
    disabled: false
}

Checkbox.propTypes = {
    ariaLabel: PropTypes.string,
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    handleChangeCheckbox: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
};

export default Checkbox;