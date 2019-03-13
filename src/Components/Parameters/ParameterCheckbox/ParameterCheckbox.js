import React from 'react';
import styles from './ParameterCheckbox-styles.css';

class ParameterCheckbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null
    }
  }

  handleCheckboxName = (event) => {
    let value = event.target.value;
    this.setState({ name: value });
    this.props.handleSettings(value);
  }

  render() {

    return (
      <div className={styles.parameter__field}>
        <label className={styles.parameter__field_label}>
            <span className={styles.parameter__field_text}>Input's name</span>
            <input
              onChange={this.handleCheckboxName}
              className={styles.parameter__field_input}
              type="text"
            />
        </label>
      </div>
    )
  }
}

export default ParameterCheckbox;