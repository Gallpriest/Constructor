import React from 'react';
import styles from './Form-styles.css';
import Input from '../Input/Input';

class Form extends React.Component {
    render() {
        const { inputDataFlow, inputsCollection } = this.props;
        let type = inputDataFlow.type;
        let name = inputDataFlow.name;
        let placeholder = inputDataFlow.placeholder;

        // dynamic input changes via editor
        let formField = inputDataFlow ? <Input
                                        type={type}
                                        name={name}
                                        placeholder={placeholder}
                                    /> : '';

        // render complete array on inputs
        let allInputs = null;
        if (inputsCollection.length > 0) {
            allInputs = inputsCollection.map(input => <Input
                                                        key={input.name}
                                                        type={input.type}
                                                        name={input.name}
                                                        placeholder={input.placeholder}
                                                    />)
        }
        return (
            <form className={styles.form}>
                <div className={styles.form__wrap}>
                    { allInputs }
                    { formField }
                </div>
            </form>
        )
    }
}

export default Form;