import React from 'react';
import '../styles/Navbar.css'

const Navbar = () => {
    return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        SPACE-T
      </a>
      <div className="navigation-menu">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Planètes</a>
          </li>
          <li>
            <a href="/">Coming Soon</a>
          </li>
        </ul>
      </div>
    </nav>
    );
};

export default Navbar;