import React from 'react';
import styles from './Application-styles.css';
import Editor from '../Editor/Editor';
import Questionnaire from '../Questionnaire/Questionnaire';

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newInput: {
        type: null,
        name: null,
        placeholder: null,
        numberOptions: null,
        options: [],
        category: null
      },
      inputsArray: []
    }
  }

  handleInputType = (type) => {
    let inputType = this.state.newInput = { type: type };
    this.setState({ newInput: inputType });
  }

  transferPrametersData = (inputData) => {
    let name = inputData.name;
    this.setState({
      newInput: {
        type: this.state.newInput.type,
        name: name,
        placeholder: inputData.placeholder,
        numberOptions: inputData.numberOptions,
        options: inputData.options,
        category: inputData.category
      }
    });
  }

  handleClickAddInput = (added) => {
    if (added) {
      let addedInput = this.state.newInput;
      this.setState(prevState => ({
        inputsArray: prevState.inputsArray.concat(addedInput),
        newInput: {
          name: null,
          placeholder: null,
          numberOptions: null,
          options: [],
          category: null
        }
      }));
    }
  }

  render() {
    return (
      <div className={styles.application}>
        <Editor
          handleInputType={this.handleInputType} 
          transferPrametersData={this.transferPrametersData}
          handleClickAddInput={this.handleClickAddInput}
        />
        <Questionnaire
          inputDataFlow={this.state.newInput}
          inputsCollection={this.state.inputsArray}
        />
      </div>
    )
  }
}

export default Application;