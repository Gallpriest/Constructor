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
        name: null
      },
      inputsArray: []
    }
  }

  handleInputType = (type) => {
    let inputType = this.state.newInput = { type: type };
    this.setState({ newInput: inputType });
  }

  componentDidUpdate = () => {
    console.log(this.state.newInput);
  }

  render() {
    let type = this.state.newInput.type;
    return (
      <div className={styles.application}>
        <Editor
          handleInputType={this.handleInputType} 
        />
        <Questionnaire
          type={type} 
        />
      </div>
    )
  }
}

export default Application;