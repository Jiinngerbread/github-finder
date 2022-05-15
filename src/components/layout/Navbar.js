import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Logo from './logo192.png';

const Navbar = ({title}) => {
  return (
    <nav className='navbar bg-light'>
      <img 
        className='round-img'
        src={Logo}
        style={{ width:'40px' }}
        alt="Github Logo"
        />
      <h1> 
        {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;