import React, { useContext, useEffect, useRef, useState } from 'react';
import parse from 'html-react-parser';
import { AiOutlineEye } from 'react-icons/ai';
import { toastContext } from '../../context/ToastContext';
import styles from './QuestionCard.module.css';

const QuestionCard = ({
  questionData,
  correctCountHandler,
  wrongCountHandler,
}) => {
  const { question, options, id, correctAnswer } = questionData;
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [cardBg, setCardBg] = useState('var(--clr-dark-400)');
  const { toastToggle } = useContext(toastContext);
  const formRef = useRef();

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

    formRef.current.disabled = 'true';
  };

  const correctAnswerHandler = () => {
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
      <div className={styles.question}>{parse(question)}</div>
      <form className={styles.optionsContainer} onSubmit={answerSubmitHandler}>
        <fieldset ref={formRef}>
          {options.map(option => (
            <div key={option} className={styles.option}>
              <input
                className={styles.radioInput}
                type="radio"
                name={id}
                id={id}
                onChange={answerSelectHandler(option)}></input>
              <label htmlFor={id}>{option}</label>
            </div>
          ))}

          <div className={styles.btnGroup}>
            <button className={`${styles.submitBtn} btn`} type="submit">
              Submit
            </button>
            <button
              className={`${styles.answerBtn} btn`}
              type="button"
              onClick={correctAnswerHandler}>
              <AiOutlineEye />
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default QuestionCard;
