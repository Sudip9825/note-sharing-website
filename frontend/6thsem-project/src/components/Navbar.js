import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
        <li className="navbar-item"><Link to="/notes" className="navbar-link">Notes</Link></li>
        <li className="navbar-item"><Link to="/upload" className="navbar-link">Upload</Link></li>
        <li className="navbar-item"><Link to="/dashboard" className="navbar-link">Dashboard</Link></li>
        <li className="navbar-item"><Link to="/login" className="navbar-link">Login</Link></li>
        <li className="navbar-item"><Link to="/signup" className="navbar-link">Signup</Link></li>
        <li className="navbar-item"><Link to="/admin" className="navbar-link">Admin</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;