import React from 'react';
import styles from './ParameterFile-styles.css';

class ParameterFile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      placeholder: null
    }
  }

  handleFileName = (event) => {
    let value = event.target.value;
    this.setState({ name: value }, () => {
      this.props.handleSettings(this.state);
    });
  }

  render() {
    return (
      <div className={styles.parameter__field}>
        <label className={styles.parameter__field_label}>
          <span className={styles.parameter__field_text}>File's name</span>
          <input
            onChange={this.handleFileName}
            className={styles.parameter__field_input}
            type="text"
          />
        </label>
      </div>
    )
  }
}

export default ParameterFile;