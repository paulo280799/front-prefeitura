import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header className="header">
      <a className="logo"><Link to="/Dashboard" className="a">Sistema</Link></a>
      <input className="menu-btn" type="checkbox" id="menu-btn"></input>
      <label className="menu-icon" for="menu-btn"><span className="nav-icon"></span></label>
      <ul className="menu">
        <li><Link to="#" className="a">Home</Link></li>
        <li><Link to="#" className="a">Abouts</Link></li>
        <li><Link to="#" className="a">Services</Link></li>
        <li><Link to="#" className="a">contact</Link></li>
        <li><Link to="#" className="a">developed</Link></li>
      </ul>
    </header>
    
  );
}

export default NavBar;
