import React from 'react';
import { Link } from 'react-router-dom';
import { BiMessageSquareError } from 'react-icons/bi';
import styles from './PageNotFound.module.css';
import '../../Utils.module.css';

const PageNotFound = () => {
  return (
    <div className={`${styles.errorPage} container`}>
      <h2 className={styles.title}>
        <span>404!</span>
        <BiMessageSquareError />
      </h2>
      <p className={styles.text}>Oops! Page Not Found</p>
      <p className={styles.message}>
        Sorry, the page you requested could not be found
      </p>
      <Link className={`${styles.homeBtn} btn`} to="/">
        Go Home
      </Link>
    </div>
  );
};

export default PageNotFound;
