import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TopicsCard.module.css';

const TopicsCard = ({ topic }) => {
  return (
    <div className={styles.card}>
      <img className={styles.topicImg} src={topic.logo} alt="" />
      <div className={styles.wrapper}>
        <h2 className={styles.name}>{topic.name}</h2>
        <p className={styles.questionCount}>{topic.total} Questions</p>
        <Link className={`${styles.cardBtn} btn`} to={`/questions/${topic.id}`}>
          Start practice
        </Link>
      </div>
    </div>
  );
};

export default TopicsCard;
