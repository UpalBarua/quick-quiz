import React, { useContext } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { toastContext } from '../../context/ToastContext';
import styles from './Toast.module.css';

const Toast = () => {
  const { toastProps, toastOpen, setToastOpen } = useContext(toastContext);
  const { icon, title, description, color } = toastProps;

  return (
    <div
      className={`${styles.toast} ${toastOpen && styles.open}`}
      onClick={() => setToastOpen(false)}>
      <div className={styles.icon} style={{ color: color }}>
        {icon}
      </div>
      <div className={styles.info}>
        <h3 className={styles.title} style={{ color: color }}>
          {title}
        </h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Toast;
