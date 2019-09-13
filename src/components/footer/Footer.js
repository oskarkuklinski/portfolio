import React, { useState } from 'react';
import "./Footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    // Hooks
    const [copyMessage, setCopyMessage] = useState("Copy my e-mail address to your clipboard");
    
    const copyToClipboard = () => {
        navigator.clipboard.writeText("osio.kuklinski@gmail.com");
        setCopyMessage('Copied!')
    }
    
    const refreshMessage = () => {
        setTimeout(() => { setCopyMessage('Copy my e-mail address to your clipboard') }, 300);
        
    }
    
    return (
        <div className="Footer">
            <p>drop me a message</p>
            <div>
                <a onClick={copyToClipboard} onMouseLeave={refreshMessage} data-tip={copyMessage}>
                    <FontAwesomeIcon className="Footer-icon" icon={faEnvelope} />
                </a>
                <a href="https://www.linkedin.com/in/oskar-kuklinski-a63019171/" target="_blank" data-tip="Connect with me on LinkedIn">
                    <FontAwesomeIcon className="Footer-icon" icon={faLinkedin} />
                </a>
                <a href="https://github.com/oskarkuklinski" target="_blank" data-tip="Check my work on GitHub">
                    <FontAwesomeIcon className="Footer-icon" icon={faGithub} />
                </a>
                <a href="https://www.facebook.com/oskar.kuklinski" target="_blank" data-tip="Drop me a message on Facebook">
                    <FontAwesomeIcon className="Footer-icon" icon={faFacebook} />
                </a>
                <a href="https://codepen.io/osioo" target="_blank" data-tip="See my projects on CodePen">
                    <FontAwesomeIcon className="Footer-icon" icon={faCodepen} />
                </a>
            </div>
            <p>@2019 Oskar Kuklinski</p>
        </div>
    );
}

export default Footer;