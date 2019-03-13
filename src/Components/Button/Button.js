import React from 'react';
import styles from './Button-styles.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      type,
      name,
      variants,
      onClick
    } = this.props;

    
    return (
      <button 
        type={type}
        onClick={onClick}
        className={styles.button}>
        { name }
      </button>
    )
  }
}

export default Button;