import React from 'react';
import styles from './Result.module.css';
import '../../Utils.module.css';

const Result = ({ correctAnswers, wrongAnswers }) => {
  return (
    <div className={styles.result}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.answerGroup}>
          <p className={styles.label}>
            Correct
            <span className={styles.rightAnswer}> {correctAnswers.length}</span>
          </p>
          <p className={styles.label}>
            Wrong
            <span className={styles.wrongAnswer}> {wrongAnswers.length}</span>
          </p>
        </div>
        <button
          className={`${styles.resetBtn} btn`}
          onClick={() => window.location.reload(false)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Result;
