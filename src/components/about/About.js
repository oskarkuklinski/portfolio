import React, { Component } from 'react';
import "./About.scss";
import profilePhoto from '../../images/oskarkuklinski-profile.jpg';

class About extends React.Component {
    render() {
        return (
            <div className="About-container">
                <div className="About-left">
                    <h1>about me</h1>
                    <h2>My name is <span className="highlight">{this.props.data.name}</span> and I am <span className="highlight">{this.props.data.role}</span> currently based in <span className="highlight">{this.props.data.city}</span></h2>
                </div>
                <div className="About-right">
                    <img src={profilePhoto}></img>
                    <h3>Recent graduate with an ambitious drive to gain experience in developing innovative and creative web and mobile solutions. When I'm not coding, you'll find me creating workout plans, planning backpacking adventures and learning new languages.</h3>
                </div>
            </div>
        );
    }
}

export default About;