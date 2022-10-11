import React from 'react';
import { BiMessageSquareError } from 'react-icons/bi';
import '../../Utils.module.css';
import styles from './FailedToLoadData.module.css';

const FailedToLoadData = () => {
  return (
    <div className={`${styles.wrapper} container`}>
      <BiMessageSquareError className={styles.icon} />
      <h2 className={styles.title}>Unable to load the data!</h2>
      <p className={styles.message}>
        Please check your internet connection or try again later.
      </p>
      <button
        className={`${styles.reloadBtn} btn`}
        onClick={() => window.location.reload(false)}>
        Reload
      </button>
    </div>
  );
};

export default FailedToLoadData;
