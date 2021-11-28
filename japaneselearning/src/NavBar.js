import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
    const navStyle = {
        color: 'white'
    };

    return (
        <div className="nav-bar">
            <NavLink exact to="/" className="nav-link" activeStyle={{backgroundColor: 'darkslategray'}}>
                Home
            </NavLink>
            <NavLink to="/kana" className="nav-link" activeStyle={{backgroundColor: 'darkslategray'}}>
                Kana
            </NavLink>
            <NavLink to="/vocab" className="nav-link" activeStyle={{backgroundColor: 'darkslategray'}}>
                Vocabulary
            </NavLink>
        </div>
    );
}
export default NavBar;