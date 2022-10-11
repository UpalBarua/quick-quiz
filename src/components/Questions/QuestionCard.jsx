import React, { useState } from 'react';
import parse from 'html-react-parser';
import styles from './QuestionCard.module.css';

const QuestionCard = ({ questionData }) => {
  const { question, options, id, correctAnswer } = questionData;
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const answerSelectHandler = answer => {
    return () => {
      setSelectedAnswer(prevSelectedAnswer => (prevSelectedAnswer = answer));
    };
  };

  const answerSubmitHandler = event => {
    event.preventDefault();
    setIsAnswerCorrect(prevIsAnswerCorrect => {
      return (prevIsAnswerCorrect = selectedAnswer === correctAnswer);
    });
  };

  return (
    <div
      className={`${styles.questionCard} ${styles.correct}`}
      style={{
        backgroundColor: 'var(--clr-dark-500)',
        backgroundColor:
          isAnswerCorrect !== null && (isAnswerCorrect ? 'lime' : 'red'),
      }}>
      {parse(question)}
      <form className={styles.optionsContainer} onSubmit={answerSubmitHandler}>
        {options.map(option => (
          // NEED TO CHECK THIS PART AND TRY TO CHANGE THE KEY
          <div key={option} className={styles.option}>
            <input
              className={styles.radioInput}
              type="radio"
              name={id}
              id={id}
              // value={option}
              onChange={answerSelectHandler(option)}></input>
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
