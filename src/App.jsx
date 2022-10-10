import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const navToggleHandler = () => {
    setNavOpen(prevNavOpen => !prevNavOpen);
    console.log(navOpen);
  };

  return (
    <div>
      <header className="header">
        <Navbar navOpen={navOpen} navToggleHandler={navToggleHandler} />
      </header>
    </div>
  );
}

export default App;
