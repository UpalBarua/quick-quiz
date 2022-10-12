import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionCard from './QuestionCard';
import Result from '../Result/Result';
import styles from './Questions.module.css';
import '../../Utils.module.css';

const Questions = () => {
  const { name, questions } = useLoaderData().data;
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const correctCountHandler = answer => {
    setCorrectAnswers(prevCorrectAnswers => [...prevCorrectAnswers, answer]);
  };

  const wrongCountHandler = answer => {
    setWrongAnswers(prevWrongAnswers => [...prevWrongAnswers, answer]);
  };

  return (
    <>
      <div className="container">
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
