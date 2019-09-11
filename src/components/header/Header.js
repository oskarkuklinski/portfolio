import React from 'react';
import "./Header.scss";
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="Header">
            <ul>
                <li><NavLink exact={true} className="Header-link" activeClassName="Header-active" to='/'>about</NavLink></li>
                <li><NavLink className="Header-link" activeClassName="Header-active" to='/resume'>resume</NavLink></li>
                <li><NavLink className="Header-link" activeClassName="Header-active" to='/portfolio'>portfolio</NavLink></li>
            </ul>
        </nav>
    );
}

export default Header;