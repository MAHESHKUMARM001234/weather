// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import wlogo from '../Images/wlogo.png'
import './Navbar.css'
const Navbar = () => {
  return (
    
    <header>
    <div className="menusection">
            <div>
                <img src={wlogo} alt="" width="150px" height="37px" />
            </div>
            <div className="menuoption">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  );
};

export default Navbar;
