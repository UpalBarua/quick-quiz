import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { ImQuestion } from 'react-icons/im';
import { Link, NavLink } from 'react-router-dom';
import '../../Utils.module.css';
import styles from './Navbar.module.css';

const activeStyles = {
  // textDecoration: 'underline',
  color: 'var(--clr-accent-300)',
};

const Navbar = ({ navOpen, navToggleHandler }) => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.navbar} container`}>
        {/* logo */}
        <NavLink className="logoLink" to="/">
          <h1 className={styles.logo}>
            QQ
            {/* <ImQuestion /> */}
          </h1>
        </NavLink>

        {/* nav menu */}
        <ul className={`${styles.menu} ${navOpen && styles.open}`}>
          <li className={styles.menuItem}>
            <NavLink
              className={`${styles.menuLink}`}
              to="/"
              end
              style={({ isActive }) => (isActive ? { ...activeStyles } : {})}>
              {' '}
              Home
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              className={styles.menuLink}
              to="/topics"
              style={({ isActive }) => (isActive ? { ...activeStyles } : {})}>
              Topics
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              className={styles.menuLink}
              to="/statistics"
              style={({ isActive }) => (isActive ? { ...activeStyles } : {})}>
              Statistics
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              className={styles.menuLink}
              to="/blogs"
              style={({ isActive }) => (isActive ? { ...activeStyles } : {})}>
              Blogs
            </NavLink>
          </li>
        </ul>

        {/* user */}
        <div className={styles.menuRight}>
          <NavLink className={styles.user} to="/user">
            <img
              className={styles.userImg}
              src="http://hawthornschoolforgirls.com/wp-content/uploads/2016/01/tutor-8.jpg"
              alt="user"
            />
            <span className={styles.userName}>Upal Barua</span>
          </NavLink>
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
