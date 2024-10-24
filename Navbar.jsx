import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Expense Tracker</h2>
      </div>
      <ul className="navbar-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#tracker">Tracker</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
