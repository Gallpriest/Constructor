import React from 'react';
import styles from './Form-styles.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

class Form extends React.Component {
    render() {
        const { inputDataFlow, inputsCollection, formName } = this.props;
        let type = inputDataFlow.type;
        let name = inputDataFlow.name;
        let placeholder = inputDataFlow.placeholder;
        let numberOptions = inputDataFlow.numberOptions;
        let options = inputDataFlow.options;
        let category = inputDataFlow.category;

        // dynamic input changes via editor
        let formField = inputDataFlow ? <Input
                                        type={type}
                                        name={name}
                                        placeholder={placeholder}
                                        numberOptions={numberOptions}
                                        options={options}
                                        category={category}
                                    /> : '';

        // render complete array on inputs
        let allInputs = null;
        if (inputsCollection.length > 0) {
            allInputs = inputsCollection.map(input => <Input
                                                        key={input.name}
                                                        type={input.type}
                                                        name={input.name}
                                                        placeholder={input.placeholder}
                                                        numberOptions={input.numberOptions}
                                                        options={input.options}
                                                        category={input.category}
                                                    />)
        };

        let submitButton = <Button
                            type="submit"
                            name="Submit"
                            variants={true}
                        />;

        return (
            <form method='POST' action="/" className={styles.form}>
                <div className={styles.form__wrap}>
                    <div className={styles.form__name}>
                    { formName }
                    </div>
                    { allInputs }
                    { formField }
                    <div className={styles.form__button}>
                    { submitButton }
                    </div>
                </div>
            </form>
        )
    }
}

export default Form;