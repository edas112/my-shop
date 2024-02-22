import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import User from '../User/User';
import './Navbar.scss';

function Navbar() {
  return (
    <nav className="nav-conteiner">
      <h1> My Shop 🍎</h1>

      <ul>
        <li>
          <NavLink to="/">Al items</NavLink> 🍎
        </li>
        <li>
          <NavLink to="/my-card">My card</NavLink> 🍎
        </li>
        <li>
          <NavLink to="/favorite">Favorites</NavLink> 🍎
        </li>
      </ul>

      <User />
    </nav>
  );
}

export default Navbar;
