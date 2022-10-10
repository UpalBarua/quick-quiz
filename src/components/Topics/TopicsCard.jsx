import React from 'react';
import styles from './TopicsCard.module.css';

const TopicsCard = ({ topic }) => {
  return (
    <div className={styles.card}>
      <img src={topic.logo} alt="" className={styles.topicImg} />
      <div className={styles.wrapper}>
        <h2 className={styles.name}>{topic.name}</h2>
        <p className={styles.questionCount}>{topic.total} Questions!</p>
        <button className={`${styles.cardBtn} btn`}>Start practice</button>
      </div>
    </div>
  );
};

export default TopicsCard;
