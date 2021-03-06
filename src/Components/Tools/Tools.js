import React from 'react';
import styles from './Tools-styles.css';
import Options from '../Options/Options';

class Tools extends React.Component {

  handleInputType = (type) => {
    this.props.handleInputType(type);
  }

  transferPrametersData = (inputData) => {
    this.props.transferPrametersData(inputData)
  }

  handleClickAddInput = (added) => {
    this.props.handleClickAddInput(added);
  }

  handleChangeNameForm = (formName) => {
    this.props.handleChangeNameForm(formName)
  }

  render() {
    return (
      <div className={styles.tools}>
        <div className={styles.tools__options}>
          <Options
            handleInputType={this.handleInputType}
            transferPrametersData={this.transferPrametersData}
            handleClickAddInput={this.handleClickAddInput}
            handleChangeNameForm={this.handleChangeNameForm}
          />
        </div>
      </div>
    )
  }
}

export default Tools;