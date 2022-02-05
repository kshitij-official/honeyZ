import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imageFL from "../images/footer-logo.svg";
import imageFTwit from "../images/twitter.svg";
import imageFDis from "../images/discord.svg";
import imageFInstagram from "../images/instagram.svg";
import imageFlogomark from "../images/logo-mark.svg";

export const Footer = () => {
    return (
        <div className='fotter-section'>
            <div className="row content-row">
                <div className="col-3 col-md-">
                    <img src={imageFL} alt="No image"/>
                </div>
                <div className="col-6">
                    <ul className='fotter-link'>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Benefits</a></li>
                        <li><a>Roadmap</a></li>
                        <li><a>Partners</a></li>
                        <li><a>Team</a></li>
                        <li><a>Faq</a></li>
                    </ul>
                </div>
                <div className="col-3">
                    <ul className='social-logo'>
                        <li><img src={imageFTwit} alt="No image"/></li>
                        <li><img src={imageFDis} alt="No image"/></li>
                        <li><img src={imageFInstagram} alt="No image"/></li>
                        <li><img src={imageFlogomark} alt="No image"/></li>
                    </ul>
                </div>
            </div>
            <div className='row copyright-sec'>
                <p>@2022 Honeyz All Rights Reserved. Honeyznft@gmail.com</p>
            </div>
        </div>
    );
};
