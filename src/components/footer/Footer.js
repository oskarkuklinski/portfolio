import React from 'react';
import "./Footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="Footer">
            <p>drop me a message</p>
            <div>
                <FontAwesomeIcon className="Footer-icon" icon={faEnvelope} />
                <a href="https://www.linkedin.com/in/oskar-kuklinski-a63019171/" target="_blank"><FontAwesomeIcon className="Footer-icon" icon={faLinkedin} /></a>
                <a href="https://github.com/oskarkuklinski" target="_blank"><FontAwesomeIcon className="Footer-icon" icon={faGithub} /></a>
                <a href="https://www.facebook.com/oskar.kuklinski" target="_blank"><FontAwesomeIcon className="Footer-icon" icon={faFacebook} /></a>
                <a href="https://codepen.io/osioo" target="_blank"><FontAwesomeIcon className="Footer-icon" icon={faCodepen} /></a>
            </div>
            <p>@2019 Oskar Kuklinski</p>
        </div>
    );
}

export default Footer;