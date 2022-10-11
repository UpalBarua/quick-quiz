import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const Main = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navToggleHandler = () => {
    setNavOpen(prevNavOpen => !prevNavOpen);
  };

  return (
    <>
      <Navbar navOpen={navOpen} navToggleHandler={navToggleHandler} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
