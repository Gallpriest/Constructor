import React from 'react';
import styles from './Questionnaire-styles.css';
import Form from '../../Components/Form/Form';

class Questionnaire extends React.Component {
  render() {
    const { inputDataFlow, inputsCollection } = this.props;
    return (
      <section className={styles.questionnaire}>
        <Form 
          inputDataFlow={inputDataFlow}
          inputsCollection={inputsCollection}
        />
      </section>
    )
  }
}

export default Questionnaire;