import React from 'react';
import imageFL from "../images/footer-logo.svg";
import imageFTwit from "../images/ftwitter-svg.svg";
import imageFDis from "../images/fdiscord-svg.svg";
import imageFInstagram from "../images/finstagram.svg";
import imageFlogomark from "../images/flogo-mark.svg";
import imageMobile from "../images/footer-m.svg";

export const Footer = () => {
    return (
        <div className='fotter-section'>
            <div class="container">
                <div className="row content-row">
                    <div className="col footer-logo">
                        <img src={imageFL} alt="No image" className='desktop-show' />
                        <img src={imageMobile} alt="No image" className='mobile-show' />
                    </div>
                    <div className="col">
                        <ul className='fotter-link'>
                            <li><a href='#'><span>Home</span></a></li>
                            <li><a href='#'><span>About</span></a></li>
                            <li><a href='#'><span>Benefits</span></a></li>
                            <li><a href='#'><span>Roadmap</span></a></li>
                            <li><a href='#'><span>Partners</span></a></li>
                            <li><a href='#'><span>Team</span></a></li>
                            <li><a href='#'><span>Faq</span></a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className='social-logo'>
                            <li><img src={imageFTwit} alt="No image" /></li>
                            <li><img src={imageFDis} alt="No image" /></li>
                            <li><img src={imageFInstagram} alt="No image" /></li>
                            <li><img src={imageFlogomark} alt="No image" /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div className='copyright-sec'>
                    <p>@2022 Honeyz All Rights Reserved. Honeyznft@gmail.com</p>
                </div>
            </div>
        </div>
    );
};
