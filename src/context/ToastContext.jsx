import React, { createContext, useEffect, useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { MdDoNotDisturbAlt } from 'react-icons/md';
import { BsExclamationTriangle } from 'react-icons/bs';

export const toastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toastOpen, setToastOpen] = useState(false);
  const [toastProps, setToastProps] = useState({});

  const toastToggle = (type, texts) => {
    if (type === 'Success') {
      setToastProps({
        icon: <AiOutlineCheckCircle />,
        color: 'var(--clr-green-400)',
        title: texts.title,
        description: texts.description,
      });
    } else if (type === 'Warning') {
      setToastProps({
        icon: <MdDoNotDisturbAlt />,
        color: 'var(--clr-red-400)',
        title: texts.title,
        description: texts.description,
      });
    } else if (type === 'Primary') {
      setToastProps({
        icon: <BsExclamationTriangle />,
        color: 'var(--clr-accent-400)',
        title: texts.title,
        description: texts.description,
      });
    } else {
      setToastOpen({
        icon: <AiOutlineCheckCircle />,
        color: 'var(--clr-light-400)',
        title: 'title',
        description: 'description',
      });
    }

    setToastOpen(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setToastOpen(prevToastOpen => (prevToastOpen = false));
    }, 3000);

    return () => clearTimeout(timeout);
  }, [toastOpen]);

  return (
    <toastContext.Provider
      value={{ toastProps, toastOpen, setToastOpen, toastToggle }}>
      {children}
    </toastContext.Provider>
  );
};
