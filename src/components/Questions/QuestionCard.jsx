import React, { useState } from 'react';
import parse from 'html-react-parser';
import { AiOutlineEye } from 'react-icons/ai';
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

    if (!selectedAnswer.length) {
      alert('no answer selected');
      return;
    }

    setIsAnswerCorrect(prevIsAnswerCorrect => {
      return (prevIsAnswerCorrect = selectedAnswer === correctAnswer);
    });

    console.log(`Your answer is ${isAnswerCorrect ? 'correct' : 'wrong'}`);
  };

  const correctAnswerHandler = () => {
    console.log(`The correct answer is ${correctAnswer}`);
  };

  return (
    <div
      className={`${styles.questionCard} ${styles.correct}`}
      style={{
        backgroundColor: 'var(--clr-dark-500)',
        backgroundColor:
          isAnswerCorrect !== null &&
          (isAnswerCorrect ? 'var(--clr-green-400)' : 'var(--clr-red-400)'),
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

        <div className={styles.btnGroup}>
          <button className={`${styles.submitBtn} btn`} type="submit">
            submit
          </button>
          <button
            className={`${styles.answerBtn} btn`}
            type="button"
            onClick={correctAnswerHandler}>
            <AiOutlineEye />
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionCard;
