import React, { useState } from 'react';
import "./Header.scss";
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    const [flag, setFlag] = useState(false);
    return (
        <nav className="Header">
            <a onClick={() => (flag === true) ? setFlag(false) : setFlag(true)} className={(flag === false) ? "Header-iconholder" : "hidden"}>
                <FontAwesomeIcon className="Header-icon" icon={faBars}></FontAwesomeIcon>
            </a>
            <a onClick={() => (flag === true) ? setFlag(false) : setFlag(true)} className={(flag === true) ? "Header-iconholder" : "hidden"}>
                <FontAwesomeIcon className="Header-icon" icon={faTimes}></FontAwesomeIcon>
            </a>
            <ul className={(flag === true) ? "dropped" : "hidden"}>
                <li><NavLink onClick={() => setFlag(false)} exact={true} className="Header-link" activeClassName="Header-active" to='/'>about</NavLink></li>
                <li><NavLink onClick={() => setFlag(false)} className="Header-link" activeClassName="Header-active" to='/resume'>resume</NavLink></li>
                <li><NavLink onClick={() => setFlag(false)} className="Header-link" activeClassName="Header-active" to='/portfolio'>portfolio</NavLink></li>
            </ul>
        </nav>
    );
}

export default Header;