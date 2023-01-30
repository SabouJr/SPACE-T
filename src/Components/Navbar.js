import React from 'react';
import '../styles/Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        SPACE-T
      </a>
      <div className="navigation-menu">
        <ul>
          <li>
            <NavLink to={'/'}></NavLink>
          </li>
          <li>
            <NavLink to={'/Accueil'}> Accueil</NavLink>
          </li>
          <li>
<<<<<<< Updated upstream
            <NavLink to={'/coming'}> Accueilll</NavLink>
=======
            <NavLink to={'/coming'}> couille bite</NavLink>
>>>>>>> Stashed changes
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;