import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Main = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navToggleHandler = () => {
    setNavOpen(prevNavOpen => !prevNavOpen);
  };

  return (
    <>
      <header className="header">
        <Navbar navOpen={navOpen} navToggleHandler={navToggleHandler} />
      </header>
      <Outlet>
        <h1>Hey</h1>
      </Outlet>
    </>
  );
};

export default Main;
