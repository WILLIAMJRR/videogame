import React from 'react';
import Headercss from '../style/header.css'

const Header = () => {
  return (
    <header>
      <a
        role='button'
        className='navbar-burger'
        aria-label='menu'
        aria-expanded='false'
      >
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
      </a>
    </header>
  );
};

export default Header;
