// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>China Tourism</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#places">Places to Explore</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
