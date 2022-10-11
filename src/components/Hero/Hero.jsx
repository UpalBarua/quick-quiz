import React from 'react';
import { Link } from 'react-router-dom';
import '../../Utils.module.css';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={`${styles.hero} container`}>
      <h2 className={styles.logo}>Quick Quiz</h2>
      <div className={styles.wrapper}>
        <p className={styles.title}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          illum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo, provident? Lorem ipsum dolor sit amet
        </p>
        <div className={styles.btnGroup}>
          <Link className={`${styles.heroBtn} btn`} to="/topic">
            Start Quiz
          </Link>
          <Link className={`${styles.heroBtn} btn`} to="/blog">
            Blog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
