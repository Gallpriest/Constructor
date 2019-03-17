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

    let classNames = variants ? `${styles.button} ${styles.button_form}` : styles.button;

    return (
      <button
        type={type}
        onClick={onClick}
        className={classNames}>
        { name }
      </button>
    )
  }
}

export default Button;