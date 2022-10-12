import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import '../../Utils.module.css';

const Hero = () => {
  return (
    <section className={`${styles.hero}`}>
      <div className={`${styles.heroContainer} container`}>
        <h2 className={styles.logo}>Quick Quiz</h2>
        <div className={styles.wrapper}>
          <p className={styles.title}>
            There are a list of webdev quizzes that will clear your coding
            concepts. Our webdev quiz covers javascript fundamentals, advance
            concepts, array, DOM, and other topics.
          </p>
          <div className={styles.btnGroup}>
            <Link className={`${styles.heroBtn} btn`} to="/topics">
              Start Quiz
            </Link>
            <Link className={`${styles.heroBtn} btn`} to="/blogs">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
