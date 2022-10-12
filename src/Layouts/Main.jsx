import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Toast from '../components/Toast/Toast';
import { ToastProvider } from '../context/ToastContext';

const Main = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navToggleHandler = () => {
    setNavOpen(prevNavOpen => !prevNavOpen);
  };

  return (
    <ToastProvider>
      <Navbar navOpen={navOpen} navToggleHandler={navToggleHandler} />
      <Outlet />
      <Footer />
      <Toast />
    </ToastProvider>
  );
};

export default Main;
