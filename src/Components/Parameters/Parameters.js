import React from 'react';
import styles from './Parameters-styles.css';
import Button from '../Button/Button';
import ParameterInput from './ParameterInput/ParameterInput';
import ParameterCheckbox from './ParameterCheckbox/ParameterCheckbox';

class Parameters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputSettings: {
                name: null,
                placeholder: null
            }
        }
    }

    handleClickAddInput = () => {
        if (this.state.inputSettings.name !== null) {
            let inputAdded = true;
            this.props.handleClickAddInput(inputAdded);
        } else {
            alert('Please, fill the parameters')
        }
    }

    handleSettings = (name, placeholder) => {
        this.setState({
            inputSettings: {
                name: name,
                placeholder: placeholder
            }
        }, () => {
            let inputObject = this.state.inputSettings
            this.props.transferPrametersData(inputObject);
        });
    }

    render() {

        const { type } = this.props;
        const paramsTitle = 'Please, add required parameters:'
        const paramsClassNames = type !== null ? `${styles.parameters} ${styles.parameters_active}` : styles.parameters;
        const saveButton = <Button
                                name="Add"
                                type="button"
                                onClick={this.handleClickAddInput}
                            />;
        let chosenParameter = null;

        switch(type) {
            case 'input':
                chosenParameter = <ParameterInput handleSettings={this.handleSettings} />;
                break;
            case 'checkbox':
                chosenParameter = <ParameterCheckbox handleSettings={this.handleSettings} />;
                break;
            case 'radio':

                break;
            case 'textarea':

                break;
            case 'select':

                break;
            case 'file':

                break;
            default:
                chosenParameter = null;
                break;
        }

        return (
        <div className={paramsClassNames}>
            <div className={styles.parameters__title}>
                { paramsTitle }
            </div>
                { chosenParameter }
            <div className={styles.parameters__button}>
                { saveButton }
            </div>
        </div>
        )
    }
}

export default Parameters;