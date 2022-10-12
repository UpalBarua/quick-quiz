import React from 'react';
import '../../Utils.module.css';
import styles from './Result.module.css';

const Result = ({ correctAnswers, wrongAnswers }) => {
  return (
    <div className={styles.result}>
      <div className={styles.wrapper + ' ' + 'container'}>
        {/* <h3 className={styles.resultTitle}>Result</h3> */}
        <div className={styles.answerGroup}>
          <p className={styles.label}>
            Correct
            <span className={styles.answer}> {correctAnswers.length}</span>
          </p>
          <p className={styles.label}>
            Wrong
            <span className={styles.answer}> {wrongAnswers.length}</span>
          </p>
        </div>
        <button className={`${styles.resetBtn} btn`}>Reset</button>
      </div>
    </div>
  );
};

export default Result;
