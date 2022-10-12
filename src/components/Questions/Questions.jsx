import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import '../../Utils.module.css';
import Result from '../Result/Result';
import QuestionCard from './QuestionCard';
import styles from './Questions.module.css';

const Questions = () => {
  const { name, questions } = useLoaderData().data;
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const correctCountHandler = answer => {
    setCorrectAnswers(prevCorrectAnswers => {
      if (
        !(prevCorrectAnswers.includes(answer) && wrongAnswers.includes(answer))
      ) {
        return [...prevCorrectAnswers, answer];
      }
    });
  };

  const wrongCountHandler = answer => {
    setWrongAnswers(prevWrongAnswers => {
      if (
        !(prevWrongAnswers.includes(answer) && correctAnswers.includes(answer))
      ) {
        return [...prevWrongAnswers, answer];
      }
    });
  };

  return (
    <>
      <div className={`container`}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Quiz of {name}</h2>
          {questions.map(question => (
            <QuestionCard
              key={question.id}
              questionData={question}
              correctCountHandler={correctCountHandler}
              wrongCountHandler={wrongCountHandler}
            />
          ))}
        </div>
      </div>
      <Result correctAnswers={correctAnswers} wrongAnswers={wrongAnswers} />
    </>
  );
};

export default Questions;
