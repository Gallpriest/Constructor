import React from 'react';
import styles from './Parameters-styles.css';
import Button from '../Button/Button';
import ParameterFile from './ParameterFile/ParameterFile';
import ParameterInput from './ParameterInput/ParameterInput';
import ParameterSelect from './ParameterSelect/ParameterSelect';
import ParameterCheckbox from './ParameterCheckbox/ParameterCheckbox';
import ParameterRadio from './ParameterRadio/ParameterRadio';
import ParameterTextarea from './ParameterTextarea/ParameterTextarea';

class Parameters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputSettings: {
                name: null,
                placeholder: null,
                numberOptions: null,
                options: [],
                category: null
            }
        }
    }

    handleClickAddInput = () => {
        if (this.state.inputSettings.name !== null) {
            let inputAdded = true;
            this.props.handleClickAddInput(inputAdded);
            this.setState({
                inputSettings: {
                    name: null,
                    placeholder: null,
                    numberOptions: null,
                    options: [],
                    category: null
                }
            })
        } else {
            alert('Please, fill the parameters')
        }
    }

    handleSettings = (obj) => {
        this.setState({
            inputSettings: {
                name: obj.name,
                placeholder: obj.placeholder,
                numberOptions: obj.numberOptions,
                options: obj.options,
                category: obj.category
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
                chosenParameter = <ParameterRadio handleSettings={this.handleSettings} />;
                break;
            case 'textarea':
                chosenParameter = <ParameterTextarea handleSettings={this.handleSettings} />;
                break;
            case 'select':
                chosenParameter = <ParameterSelect handleSettings={this.handleSettings} />;
                break;
            case 'file':
                chosenParameter = <ParameterFile handleSettings={this.handleSettings} />;
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