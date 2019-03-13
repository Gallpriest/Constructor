import React from 'react';
import styles from './ParameterCheckbox-style.css';

class ParameterCheckbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      placeholder: null
    }
  }

  handleCheckboxName = (event) => {
    let value = event.target.value;
    this.setState({ name: value });
    this.props.handleSettings(value, this.state.placeholder);
  }

  handleCheckboxPlaceholder = (event) => {
    let value = event.target.value;
    this.setState({ placeholder: value });
    this.props.handleSettings(this.state.name, value);
  }

  render() {

    return (
      <div className={styles.parameter__field}>
        <label>
          <span>Checkbox's name</span>
          <input 
            type="text"
          />
        </label>
      </div>
    )
  }
}

export default ParameterCheckbox;