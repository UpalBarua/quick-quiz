import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../../Utils.module.css';
import styles from './Navbar.module.css';

const Navbar = ({ navOpen, navToggleHandler }) => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.navbar} container`}>
        {/* logo */}
        <Link className="logoLink" to="/">
          <h1 className={styles.logo}>Quick Quiz</h1>
        </Link>
        {/* nav menu */}
        <ul className={`${styles.menu} ${navOpen && styles.open}`}>
          <li className={styles.menuItem}>
            <Link className={styles.menuLink} to="/">
              Home
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.menuLink} to="/topics">
              Topics
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.menuLink} to="/statistics">
              Statistics
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.menuLink} to="/blogs">
              Blogs
            </Link>
          </li>
        </ul>
        {/* user */}
        <div className={styles.menuRight}>
          <a className={styles.user} href="">
            <img
              className={styles.userImg}
              src="http://hawthornschoolforgirls.com/wp-content/uploads/2016/01/tutor-8.jpg"
              alt="user"
            />
            <span className={styles.userName}>John Doe</span>
          </a>
          <button
            className={styles.navToggle + ' btn'}
            onClick={navToggleHandler}>
            {!navOpen ? <AiOutlineMenu /> : <AiOutlineClose />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
