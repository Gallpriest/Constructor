import React from 'react';
import styles from './ParameterTextarea-styles.css';

class ParameterTextarea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      placeholder: null
    }
  }

  handleTextareaName = (event) => {
    let value = event.target.value;
    this.setState({ name: value }, () => {
      this.props.handleSettings(this.state);
    });
  }

  handleTextareaPlaceholder = (event) => {
    let value = event.target.value;
    this.setState({ placeholder: value }, () => {
      this.props.handleSettings(this.state);
    });
  }

  render() {
    return (
      <div className={styles.parameter__field}>
        <label className={styles.parameter__field_label}>
          <span className={styles.parameter__field_text}>Textarea name</span>
          <input
            onChange={this.handleTextareaName}
            className={styles.parameter__field_input}
            type="text"
          />
        </label>
        <label className={styles.parameter__field_label}>
          <span className={styles.parameter__field_text}>Textarea placeholder</span>
          <input
            onChange={this.handleTextareaPlaceholder}
            className={styles.parameter__field_input}
            type="text"
          />
        </label>
      </div>
    )
  }
}

export default ParameterTextarea;