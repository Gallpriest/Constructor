import React from 'react';
import styles from './Form-styles.css';
import Input from '../Input/Input';

class Form extends React.Component {
    render() {
        const { type } = this.props;
        let formField = type ? <Input
                                type={type}
                            /> : '';
        return (
            <form className={styles.form}>
                { formField }
            </form>
        )
    }
}

export default Form;