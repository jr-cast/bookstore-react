import React from 'react';
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Nav() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <nav className="navbar">
      <div className="leftCont">
        <h1>Bookstore CMS</h1>
        <ul className="listCont">
          {links.map((link) => (
            <li className="nav-link" key={link.id}>
              <NavLink to={link.path} activeclassname="active-link" exact="true">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="userCont"><FaUser /></div>
    </nav>
  );
}

export default Nav;
