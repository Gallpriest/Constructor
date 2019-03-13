import React from 'react';
import styles from './ParameterInput-styles.css';

class ParameterInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      placeholder: null
    }
  }

  handleInputName = (event) => {
    let value = event.target.value;
    this.setState({ name: value });
    this.props.handleSettings(value, this.state.placeholder);
  }

  handleInputPlaceholder = (event) => {
    let value = event.target.value;
    this.setState({ placeholder: value });
    this.props.handleSettings(this.state.name, value);
  }

  render() {
    return (
      <div className={styles.parameter__field}>
        <label className={styles.parameter__field_label}>
          <span className={styles.parameter__field_text}>Input's name</span>
          <input 
            onChange={this.handleInputName}
            className={styles.parameter__field_input}
            type="text"
          />
        </label>
        <label className={styles.parameter__field_label}>
          <span className={styles.parameter__field_text}>Input's placeholder</span>
          <input 
            onChange={this.handleInputPlaceholder}
            className={styles.parameter__field_input}
            type="text" 
          />
        </label>
      </div>
    )
  }
}

export default ParameterInput;