import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import '../../Utils.module.css';
import styles from './Navbar.module.css';

const Navbar = ({ navOpen, navToggleHandler }) => {
  return (
    <nav className={styles.navbar + ' container'}>
      {/* logo */}
      <a className="logoLink" href="/">
        <h1 className={styles.logo}>Quick Quiz</h1>
      </a>

      {/* nav menu */}
      <ul
        className={
          !navOpen ? `${styles.menu} ${styles.open}` : `${styles.menu}`
        }>
        <li className={styles.menuItem}>
          <a className={styles.menuLink} href="">
            Topics
          </a>
        </li>
        <li className={styles.menuItem}>
          <a className={styles.menuLink} href="">
            Statistics
          </a>
        </li>
        <li className={styles.menuItem}>
          <a className={styles.menuLink} href="">
            Blogs
          </a>
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
          <span className={styles.userText}>John Doe</span>
        </a>
        <button
          className={styles.navToggle + ' btn'}
          onClick={navToggleHandler}>
          {!navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
