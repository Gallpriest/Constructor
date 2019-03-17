import React from 'react';
import styles from './Application-styles.css';
import Editor from '../Editor/Editor';
import Questionnaire from '../Questionnaire/Questionnaire';

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formName: '',
      newInput: {
        type: null,
        name: null,
        placeholder: null,
        numberOptions: null,
        options: [],
        category: null,
        title: null
      },
      inputsArray: []
    }
  }

  handleChangeNameForm = (formName) => {
    this.setState({
      formName
    })
  }

  handleInputType = (type) => {
    let inputType = this.state.newInput = { type: type };
    this.setState({ inputType });
  }

  transferPrametersData = (inputData) => {
    this.setState({
      newInput: {
        type: this.state.newInput.type,
        name: inputData.name,
        placeholder: inputData.placeholder,
        numberOptions: inputData.numberOptions,
        options: inputData.options,
        category: inputData.category,
        title: inputData.title
      }
    });
  }

  handleClickAddInput = (added) => {
    if (added) {
      let addedInput = this.state.newInput;
      this.setState(prevState => ({
        inputsArray: prevState.inputsArray.concat(addedInput),
        newInput: {
          type: null,
          name: null,
          placeholder: null,
          numberOptions: null,
          options: [],
          category: null,
          title: null
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
          handleChangeNameForm={this.handleChangeNameForm}
        />
        <Questionnaire
          formName={this.state.formName}
          inputDataFlow={this.state.newInput}
          inputsCollection={this.state.inputsArray}
        />
      </div>
    )
  }
}

export default Application;