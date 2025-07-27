import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isDark = location.pathname === '/';
  return (
    <nav className={`navbar ${isDark ? 'dark' : ''}`}>
      <div className="nav-content">
        <h1 className="logo">Geocal</h1>
        <ul className="nav-links">
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to='/'>Home</Link>
          </li>
          <li className={location.pathname === '/dashboard' ? 'active' : ''}>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className={location.pathname === '/solaroutput' ? 'active' : ''}>
            <Link to="/solaroutput">Solar Energy</Link>
          </li>
          <li className={location.pathname === '/windoutput' ? 'active' : ''}>
            <Link to="/windoutput">Wind Energy</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;