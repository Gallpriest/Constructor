import React from 'react';
import styles from './Editor-styles.css';
import Tools from '../../Components/Tools/Tools';

class Editor extends React.Component {

  handleInputType = (type) => {
    this.props.handleInputType(type);
  }

  render() {
    return (
      <section className={styles.editor}>
        <Tools 
          handleInputType={this.handleInputType} 
        />
      </section>
    )
  }
}

export default Editor;