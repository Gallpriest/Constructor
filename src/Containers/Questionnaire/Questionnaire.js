import React from 'react';
import styles from './Questionnaire-styles.css';
import Form from '../../Components/Form/Form';

class Questionnaire extends React.Component {
  render() {
    const { type } = this.props;
    return (
      <section className={styles.questionnaire}>
        <Form 
          type={type}
        />
      </section>
    )
  }
}

export default Questionnaire;