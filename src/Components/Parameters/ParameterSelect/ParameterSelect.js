import React from 'react';
import styles from './ParameterSelect-styles.css';


function RenderInput(props) {
  const handleBlur = (event) => {
    props.onBlur(props.index, event.target.value)
  }
  return (
    <input
      id={props.index}
      onBlur={handleBlur}
      className={styles.parameter__field_input_option}
      type="text"
    />
  )
}

class ParameterSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      numberOptions: null,
      options: []
    }
  }
  componentDidUpdate = () => {
    console.log(this.state.options);
  }

  handleOption = (index, value) => {
    const options = [...this.state.options];
    options[index] = value;
    this.setState({
      options
    })
  }

  handleSelectName = (event) => {
    let value = event.target.value;
    this.setState({ name: value }, () => {
      this.props.handleSettings(this.state);
    });
  }

  handleAmountOptions = (event) => {
    let amount = event.target.value;
    this.setState({ numberOptions: amount });
  }

  render() {
    const numberOfOptions = this.state.numberOptions;
    let optionsNumberArray = [];
    for (let i = 0; i < numberOfOptions; i++) {
      optionsNumberArray.push(<RenderInput key={i} index={i} onBlur={this.handleOption}/>);
    }

    return (
      <div className={styles.parameter__field}>
          <label className={styles.parameter__field_label}>
            <span className={styles.parameter__field_text}>Input's name</span>
            <input
              onChange={this.handleSelectName}
              className={styles.parameter__field_input}
              type="text"
            />
          </label>
          <label className={styles.parameter__field_label}>
            <span className={styles.parameter__field_text}>Number of options</span>
            <input
              onChange={this.handleAmountOptions}
              className={styles.parameter__field_input_small}
              type="text"
            />
          </label>
          <label className={styles.parameter__field_label}>
            <span className={styles.parameter__field_text}>Options</span>
            { optionsNumberArray }
          </label>
      </div>
    )
  }
}

export default ParameterSelect;