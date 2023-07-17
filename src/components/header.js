import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <h1 style={{ marginLeft: '20px' }}>Norbit Bug Tracker</h1>
      <nav>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
          <li style={{ marginRight: '10px' }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ marginRight: '10px' }}>
            <Link to="/login">Login</Link>
          </li>
          <li style={{ marginRight: '10px' }}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
