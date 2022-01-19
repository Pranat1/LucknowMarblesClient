import React from 'react';
import { NavLink } from 'react-router-dom';

import './MainNavigation.css';

const mainNavigation = props => (
  <header className="main-navigation">
    <div className="main-navigation__logo">
      <h1>Lucknow Marbles</h1>
    </div>
    <nav className="main-navigation__items">
      <ul>

        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/purchase">Purchase</NavLink>
        </li>
        <li>
          <NavLink to="/attributes">Attributes</NavLink>
        </li>
        <li>
          <NavLink to="/sale">Sale</NavLink>
        </li>
        
      </ul>
    </nav>
  </header>
);

export default mainNavigation;