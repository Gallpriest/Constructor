import React from 'react';
import styles from './Tools-styles.css';
import Options from '../Options/Options';

class Tools extends React.Component {

  handleInputType = (type) => {
    this.props.handleInputType(type);
  }

  render() {
    return (
      <div className={styles.tools}>
        <div className={styles.tools__options}>
          <Options 
            handleInputType={this.handleInputType} 
          />
        </div>
      </div>
    )
  }
}

export default Tools;