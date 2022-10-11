import React from 'react';
import '../../Utils.module.css';
import styles from './PageNotFound.module.css';

const FailedToLoadData = () => {
  return (
    <div className={`${styles.wrapper} container`}>
      <h2 className={styles.message}>Failed to load data! try again later.</h2>
    </div>
  );
};

export default FailedToLoadData;
