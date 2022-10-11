import React from 'react';
import '../../Utils.module.css';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.wrapper} container`}>
        <h2 className={styles.title}>Quick Quiz</h2>
        <p className={styles.text}>copyright &copy; 2022 </p>
      </div>
    </footer>
  );
};

export default Footer;
