import React, { useContext, useEffect, useRef, useState } from 'react';
import parse from 'html-react-parser';
import { AiOutlineEye } from 'react-icons/ai';
import styles from './QuestionCard.module.css';
import { toastContext } from '../../context/ToastContext';

const QuestionCard = ({
  questionData,
  correctCountHandler,
  wrongCountHandler,
}) => {
  const { question, options, id, correctAnswer } = questionData;
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const { toastToggle } = useContext(toastContext);
  const [cardBg, setCardBg] = useState('var(--clr-dark-500)');

  const answerSelectHandler = answer => {
    return () => {
      setSelectedAnswer(answer);
    };
  };

  useEffect(() => {
    setIsAnswerCorrect(selectedAnswer === correctAnswer);
  }, [selectedAnswer]);

  const answerSubmitHandler = event => {
    event.preventDefault();

    if (!selectedAnswer.length) {
      toastToggle('Primary', {
        title: 'No Input',
        description: "You didn't choose any answer!",
      });
      return;
    }

    // setIsAnswerCorrect(selectedAnswer === correctAnswer);

    if (isAnswerCorrect) {
      toastToggle('Success', {
        title: 'Correct',
        description: 'Your answer was correct!',
      });
      setCardBg('var(--clr-green-400)');
      correctCountHandler(selectedAnswer);
    } else {
      toastToggle('Warning', {
        title: 'Incorrect',
        description: 'Your answer was incorrect!',
      });
      setCardBg('var(--clr-red-400)');
      wrongCountHandler(selectedAnswer);
    }
  };

  const correctAnswerHandler = () => {
    console.log(`The correct answer is ${correctAnswer}`);
    toastToggle('Success', {
      title: 'Correct answer',
      description: `${correctAnswer}`,
    });
  };

  return (
    <div
      className={`${styles.questionCard} ${styles.correct}`}
      style={{
        backgroundColor: cardBg,
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
