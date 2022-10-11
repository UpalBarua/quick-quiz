import React from 'react';
import { useLoaderData } from 'react-router-dom';
import '../../Utils.module.css';
import QuestionCard from './QuestionCard';
import styles from './Questions.module.css';

const Questions = () => {
  const { name, questions } = useLoaderData().data;

  return (
    <div className={`container`}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Quiz of {name}</h2>
        {questions.map(question => (
          <QuestionCard key={question.id} questionData={question} />
        ))}
      </div>
    </div>
  );
};

export default Questions;
