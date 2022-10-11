import React from 'react';
import styles from './BlogCard.module.css';

const BlogCard = ({ data }) => {
  const { question, answer, img } = data;

  return (
    <div className={styles.card}>
      <img className={styles.img} src={img} alt="" />
      <div className={styles.text}>
        <h3 className={styles.question}>{question}</h3>
        <p className={styles.answer}>{answer}</p>
      </div>
    </div>
  );
};

export default BlogCard;
