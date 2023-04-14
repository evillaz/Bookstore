import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import styles from '../styles/NavBar.module.css';

const links = [
  { path: '/', text: 'BOOKS' },
  { path: 'categories', text: 'CATEGORIES' },
];

const NavBar = () => (
  <>
    <nav className={styles.panel}>
      <ul className={styles.wrapper}>
        <li>
          <h1 className={styles.title}>Bookstore CMS</h1>
        </li>
        {links.map((link) => (
          <React.Fragment key={link.text}>
            <li
              className={styles.link}
            >
              <NavLink to={link.path}>
                {link.text}
              </NavLink>
            </li>
          </React.Fragment>
        ))}
      </ul>
      <FaRegUserCircle
        fontSize="2.3rem"
        color="#0290ff"
      />
    </nav>
  </>
);

export default NavBar;
