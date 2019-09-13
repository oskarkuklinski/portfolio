import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Project.scss";

const Project = (props) => {
    return (
        <div className="Project-container">
            <NavLink className="Project-link" exact={true} activeClassName="Header-active" to={props.data.url}>
                <img src={props.data.img}></img>
                <span>{props.data.title}</span>
            </NavLink>
        </div>
    );
}

export default Project;