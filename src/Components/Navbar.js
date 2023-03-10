import React from 'react';
import '../styles/Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav">
      <nav className="navigation">
        <div className="brand-nam">
          <NavLink to={'/'}>
            <img src={'Logo2'} alt="" width={100} height={100} />
          </NavLink>

        </div>
        <div className="navigation-menu">
          <ul>
            <li>
              <NavLink to={'/'}></NavLink>
            </li>
            <li>
              <NavLink to={'/Accueil'}> Accueil</NavLink>
            </li>
            <li>
              <NavLink to={'/coming'}> Planetes</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;