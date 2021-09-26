import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
    const navStyle = {
        color: 'white'
    };

    return (
        <div className="nav-bar">
            <NavLink to="/" activeStyle>
                Home
            </NavLink>
            <NavLink to="/vocab" activeStyle>
                Vocabulary
            </NavLink>
        </div>
    );
}
export default NavBar;