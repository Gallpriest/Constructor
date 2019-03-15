import React from 'react';
import styles from './Input-styles.css';

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {
            type,
            name,
            placeholder,
            numberOfOptions,
            options,
            category
        } = this.props;


        let classNameInput = '';
        let svg = {
            backgroundImage: 'url("./images/download.svg")'
        }
        let fileClassName = null;

        switch(type) {
            case 'input':
                classNameInput += styles.input__text;
                break;
            case 'checkbox':
                classNameInput += styles.input__checkbox;
                break;
            case 'radio':
                classNameInput += styles.input__radio;
                break;
            case 'textarea':
                classNameInput += styles.input__textarea;
                break;
            case 'select':
                classNameInput += styles.input__select;
                break;
            case 'file':
                classNameInput += styles.input__file;
                fileClassName = svg;
                break;
            default:
                classNameInput +=styles.input__hidden;
                break;
        }

        return (
            <label className={classNameInput}>
                <input
                    type={type}
                    name={category}
                    placeholder={placeholder}
                />
                <span style={fileClassName}></span>
                <div> { name } </div>
            </label>

        )
    }
}

export default Input;