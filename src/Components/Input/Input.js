import React from 'react';
import styles from './Input-styles.css';


function RenderTagInput(props) {
    return (
        <label className={props.className}>
            <input
                type={props.type}
                name={props.category}
                placeholder={props.placeholder}
            />
            <span style={props.svg}></span>
            <div> { props.name } </div>
        </label>
    )
}

function RenderOptions(props) {
    return (
        <option> {props.name} </option>
    )
}

function RenderSelect(props) {
    let optionsArray = [];
    for (let i = 0; i < props.numberOptions; i++) {
        optionsArray.push(<RenderOptions key={i} name={props.options[i]}/>)
    }
    return (
        <label key={props.name} className={props.className}>
            <div> { props.name } </div>
            <select className={props.className}>
                { optionsArray }
            </select>
        </label>
    )
}

function RenderTextarea(props) {
    return (
        <label className={props.className}>
            <textarea
                name={props.name}
                placeholder={props.placeholder}
            >
            </textarea>
            <div> { props.name } </div>
        </label>
    )
}



class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {
            type,
            name,
            placeholder,
            numberOptions,
            options,
            category,
            title
        } = this.props;


        let classNameInput = '';
        let svg = {
            backgroundImage: 'url("./images/download.svg")'
        }
        let renderRequiredInput = null;

        switch(type) {
            case 'input':
                classNameInput += styles.input__text;
                renderRequiredInput = <RenderTagInput
                                                className={classNameInput}
                                                type={type}
                                                name={name}
                                                placeholder={placeholder}
                                            />;
                break;
            case 'checkbox':
                classNameInput += styles.input__checkbox;
                renderRequiredInput = <RenderTagInput
                                                className={classNameInput}
                                                type={type}
                                                name={name}
                                                title={title}
                                            />;
                break;
            case 'radio':
                classNameInput += styles.input__radio;
                renderRequiredInput = <RenderTagInput
                                                className={classNameInput}
                                                type={type}
                                                name={name}
                                                category={category}
                                            />;
                break;
            case 'textarea':
                classNameInput += styles.input__textarea;
                renderRequiredInput = <RenderTextarea
                                                className={classNameInput}
                                                type={type}
                                                name={name}
                                                placeholder={placeholder}
                                            />;
                break;
            case 'select':
                classNameInput += styles.input__select;
                renderRequiredInput = <RenderSelect
                                        className={classNameInput}
                                        name={name}
                                        numberOptions={numberOptions}
                                        options={options}
                                    />
                break;
            case 'file':
                classNameInput += styles.input__file;
                renderRequiredInput = <RenderTagInput
                                                className={classNameInput}
                                                type={type}
                                                name={name}
                                                placeholder={placeholder}
                                                svg={svg}
                                            />;
                break;
            default:
                classNameInput +=styles.input__hidden;
                break;
        }

        return (
            <div className={styles.input__item}>
                <div className={styles.input__title}>
                    { title }
                </div>
                { renderRequiredInput }
            </div>
        )
    }
}

export default Input;