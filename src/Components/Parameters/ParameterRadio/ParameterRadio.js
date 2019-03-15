import React from 'react';
import styles from './ParameterRadio-styles.css';

class ParameterRadio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      category: null
    }
  }

  handleRadioName = (event) => {
    let value = event.target.value;
    this.setState({ name: value }, () => {
      this.props.handleSettings(this.state);
    });
  }

  handleRadioCategory = (event) => {
    let value = event.target.value;
    this.setState({ category: value }, () => {
      this.props.handleSettings(this.state);
    });
  }

  render() {
    return (
      <div className={styles.parameter__field}>
        <label className={styles.parameter__field_label}>
          <span className={styles.parameter__field_text}>Radio's name</span>
          <input
            onChange={this.handleRadioName}
            className={styles.parameter__field_input}
            type="text"
          />
        </label>
        <label className={styles.parameter__field_label}>
          <span className={styles.parameter__field_text}>Radio's category</span>
          <input
            onChange={this.handleRadioCategory}
            className={styles.parameter__field_input}
            type="text"
          />
        </label>
      </div>
    )
  }
}

export default ParameterRadio;