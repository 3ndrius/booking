import React from 'react'
import {NavLink} from "react-router-dom";

export default function MainNavigation(props) {
  return (
    <header>
        <div className="nain-navigation__logo">
            <h1>Events</h1>
        </div>
       <div className="main-navigation__item">
        <ul>
            <li> <NavLink to="/auth"> Authenticate </NavLink> </li>
            <li> <NavLink to="/events"> Events </NavLink> </li>
            <li> <NavLink to="/bookings"> Bookings </NavLink> </li>
        </ul>
       </div>
    </header>
  )
}
