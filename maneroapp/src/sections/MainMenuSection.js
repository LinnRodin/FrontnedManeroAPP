import React from 'react';
import { NavLink } from 'react-router-dom';

const MainMenuSection = () => {
  return (
    <nav className="mainmenu container">
      <nav className="navbar container">
        <div className="dropdown">
          <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span>
              <i className="fa-regular fa-bars me-3"></i>
            </span>
          </button>
          <div className="dropdown-menu">
            <NavLink className="dropdown-item" to="/" end>
              Home
            </NavLink>
            <NavLink className="dropdown-item" to="/categories" end>
              Categories
            </NavLink>
            <NavLink className="dropdown-item" to="/bestsellers" end>
              Products
            </NavLink>
            <NavLink className="dropdown-item" to="/contacts" end>
              Contacts
            </NavLink>
          </div>
        </div>

        <NavLink className="logo" to="/" end>
          Manero
        </NavLink>

        <div className="menu-icons">
          <div className="menu-links">
            <a id="cart" className="menu-link" href="#">
              <span className="badge rounded-pill bg-theme">$99</span>
              <i className="fa-sharp fa-regular fa-bag-shopping me-2"></i>
            </a>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default MainMenuSection;
