import React from 'react';
import styles from './Wrap-styles.css';
import Application from '../Application/Application';


class Wrap extends React.Component {
  render() {
    return (
      <div className={styles.wrap}>
        <Application />
      </div>
    )
  }
}

export default Wrap;