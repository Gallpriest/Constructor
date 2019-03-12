import React from 'react';
import styles from './Options-styles.css';
import Type from '../Type/Type';
import Parameters from '../Parameters/Parameters';

class Options extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isChosen: null
        }
    }

    handleTypeIsChosen = (type) => {
        let inputType = type;
        this.setState({ isChosen: inputType });
        this.props.handleInputType(inputType);
    }

    render() {
        const dataTypes = [
            { type: 'input' },
            { type: 'select' },
            { type: 'checkbox' },
            { type: 'radio' },
            { type: 'textarea' },
            { type: 'file' }
        ];
        const title = 'Please, choose one of input types:';
        const typesFilter = dataTypes.map(item => <Type 
                                                key={item.type} 
                                                typeName={item.type} 
                                                isChosen={this.state.isChosen}
                                                handleTypeIsChosen={this.handleTypeIsChosen}
                                            />);
        const params = <Parameters type={this.state.isChosen} />

        return (
            <div className={styles.options}>
                <h4 className={styles.options__title}>
                    { title }
                </h4>
                <div className={styles.options__filter}>
                    { typesFilter }
                </div>
                <div className={styles.options__parameters}>
                    { params }
                </div>
            </div>
        )
    }
}

export default Options;