import React from 'react'
import {NavLink} from "react-router-dom";

import AuthContext from '../../context/auth-context';

import './MainNavigation.css';

const MainNavigation = (props) => (
  <AuthContext.Consumer>
  {(context)=> {      
  return (
    <header className="main-navigation">
        <div className="nain-navigation__logo">
            <h1>Events</h1>
        </div>
       <nav className="main-navigation__bar">
        <ul className="main-navigation__list">
            {!context.token && <li className="main-navigation__item"> <NavLink to="/auth"> Authenticate </NavLink> </li>}
            <li className="main-navigation__item"> <NavLink to="/events"> Events </NavLink> </li>
            {context.token && <li className="main-navigation__item"> <NavLink to="/bookings"> Bookings </NavLink> </li>}
        </ul>
       </nav>
    </header>
    );
  }}
    </AuthContext.Consumer>
);
export default MainNavigation;
