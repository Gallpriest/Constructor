import React from 'react';
import styles from './ParameterCheckbox-styles.css';

class ParameterCheckbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      title: null
    }
  }

  handleCheckboxName = (event) => {
    let value = event.target.value;
    this.setState({ name: value }, () => {
      this.props.handleSettings(this.state);
    });
  }

  
  handleCheckboxTitle = (event) => {
    let value = event.target.value;
    this.setState({ title: value }, () => {
      this.props.handleSettings(this.state);
    });
  }

  render() {

    return (
      <div className={styles.parameter__field}>
        <label className={styles.parameter__field_label}>
            <span className={styles.parameter__field_text}>Checkbox title</span>
            <input
              onChange={this.handleCheckboxTitle}
              className={styles.parameter__field_input}
              type="text"
            />
        </label>
        <label className={styles.parameter__field_label}>
            <span className={styles.parameter__field_text}>Checkbox name</span>
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