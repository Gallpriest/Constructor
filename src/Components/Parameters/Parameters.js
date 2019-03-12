import React from 'react';
import styles from './Parameters-styles.css';

class Parameters extends React.Component {
  render() {

    const { type } = this.props;

    switch(type) {
        case 'input':

            break;
        case 'checkbox':

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
            break;
    }

    return (
      <div className={styles.parameters}>

      </div>
    )
  }
}

export default Parameters;