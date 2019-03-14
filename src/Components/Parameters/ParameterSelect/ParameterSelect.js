import React from 'react';
import styles from './ParameterSelect-styles.css';


function RenderInput(index, method) {
  return (
    <input
      key={index}
      id={index}
      onBlur={method}
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
    console.log(this.state.options)
  }

  handleOption = (event) => {
    let optionName = event.target.value;
    let inputID = event.target.getAttribute('id');
    let optionsArray = [];
    optionsArray.concat(this.state.options);

    console.log(optionsArray);
    let counter = this.state.numberOptions;
    let newOption = {
      id: inputID,
      name: optionName
    };

    if (optionsArray.length > 0) {
      console.log('true');
      for (let i = 0; i < counter; i++) {
        console.log(optionsArray[i].id);
        console.log(newOption.id);
        if (optionsArray[i].id === newOption.id) {
          optionsArray[i].name = newOption.name;
        } else {
          optionsArray.push(optionName);
          return;
        }
      }
    } else {
      console.log('false');
      optionsArray.push(optionName);
    }

    this.setState({
      options: this.state.options.concat(optionsArray) 
    });
  }

  handleSelectName = (event) => {
    let value = event.target.value;
    this.setState({ name: value });
    this.props.handleSettings(value);
  }

  handleAmountOptions = (event) => {
    let amount = event.target.value;
    this.setState({ numberOptions: amount });
  }

  render() {
    const numberOfOptions = this.state.numberOptions;
    let optionsNumberArray = [];
    for (let i = 0; i < numberOfOptions; i++) {
      optionsNumberArray.push(RenderInput(i, this.handleOption));
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