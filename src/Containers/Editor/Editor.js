import React from 'react';
import styles from './Editor-styles.css';
import Tools from '../../Components/Tools/Tools';

class Editor extends React.Component {

  handleInputType = (type) => {
    this.props.handleInputType(type);
  }

  transferPrametersData = (inputData) => {
    this.props.transferPrametersData(inputData)
  }

  handleClickAddInput = (added) => {
    this.props.handleClickAddInput(added);
  }

  render() {
    return (
      <section className={styles.editor}>
        <Tools 
          handleInputType={this.handleInputType} 
          transferPrametersData={this.transferPrametersData}
          handleClickAddInput={this.handleClickAddInput}
        />
      </section>
    )
  }
}

export default Editor;