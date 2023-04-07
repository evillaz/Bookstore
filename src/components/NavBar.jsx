import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Books' },
  { path: 'categories', text: 'Categories' },
];

const NavBar = () => (
  <>
    <nav>
      <h1>Bookstore CMS</h1>
      <ul>
        {links.map((link) => (
          <React.Fragment key={link.text}>
            <li>
              <NavLink to={link.path}>
                {link.text}
              </NavLink>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  </>
);

export default NavBar;
