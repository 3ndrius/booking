import React from 'react'
import {NavLink} from "react-router-dom";

import './MainNavigation.css';

export default function MainNavigation(props) {
  return (
    <header className="main-navigation">
        <div className="nain-navigation__logo">
            <h1>Events</h1>
        </div>
       <nav className="main-navigation__bar">
        <ul className="main-navigation__list">
            <li className="main-navigation__item"> <NavLink to="/auth"> Authenticate </NavLink> </li>
            <li className="main-navigation__item"> <NavLink to="/events"> Events </NavLink> </li>
            <li className="main-navigation__item"> <NavLink to="/bookings"> Bookings </NavLink> </li>
        </ul>
       </nav>
    </header>
  )
}
