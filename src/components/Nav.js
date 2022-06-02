import React from 'react';
import { FaUser } from 'react-icons/fa';

function Nav() {
  return (
    <nav className='navbar'>
      <div className='leftCont'>
        <h1>Bookstore CMS</h1>
        <ul className='listCont'>
          <li>BOOKS</li>
          <li>CATEGORIES</li>
        </ul>
      </div>
      <div className='userCont'><FaUser /></div>
    </nav>
  )
}

export default Nav