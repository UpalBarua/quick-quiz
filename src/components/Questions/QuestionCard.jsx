import React from 'react';
import parse from 'html-react-parser';
import styles from './QuestionCard.module.css';

const QuestionCard = ({ questionData }) => {
  const { question, options, id } = questionData;

  return (
    <div className={styles.questionCard}>
      {parse(question)}
      <form className={styles.optionsContainer}>
        {options.map(option => (
          // NEED TO CHECK THIS PART AND TRY TO CHANGE THE KEY
          <div key={option} className={styles.option}>
            <input
              type="radio"
              className={styles.radioInput}
              name={id}
              id={id}></input>
            <label htmlFor={id}>{option}</label>
          </div>
        ))}
        <button className={`${styles.submitBtn} btn`} type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default QuestionCard;
