import React from 'react';
import imageFL from '../images/footer-logo.svg';
import imageFTwit from '../images/ftwitter-svg.svg';
import imageFDis from '../images/fdiscord-svg.svg';
import imageFInstagram from '../images/finstagram.svg';
import imageFlogomark from '../images/flogo-mark.svg';
import imageMobile from '../images/footer-m.svg';
import { HashLink } from 'react-router-hash-link';

export const Footer = () => {
    return (
        <div className='fotter-section'>
            <div class='container'>
                <div className='row content-row'>
                    <div className='col footer-logo'>
                        <img src={imageFL} alt='No image' className='desktop-show' />
                        <img src={imageMobile} alt='No image' className='mobile-show' />
                    </div>
                    <div className='col'>
                        <ul className='fotter-link'>
                            <HashLink smooth to={'/#home-id'}><li><a href='#'><span>Home</span></a></li></HashLink>
                            <HashLink smooth to={'/aboutus#about-id'}><li><a href='#'><span>About</span></a></li></HashLink>
                            <HashLink smooth to={'/benefits#benefits-id'}><li><a href='#'><span>Benefits</span></a></li></HashLink>
                            <HashLink smooth to={'/roadmap#roadmap-id'}><li><a href='#'><span>Roadmap</span></a></li></HashLink>
                            <HashLink smooth to={'/partners#partners-id'}><li><a href='#'><span>Partners</span></a></li></HashLink>
                            <HashLink smooth to={'/team#team-id'}><li><a href='#'><span>Team</span></a></li></HashLink>
                            <HashLink smooth to={'/faq#faq-id'}><li><a href='#'><span>Faq</span></a></li></HashLink>
                        </ul>
                    </div>
                    <div className='col'>
                        <ul className='social-logo'>
                            <li><a href='https://twitter.com/honeyznft'><img src={imageFTwit} alt='No image' /></a></li>
                            <li><a href='https://www.instagram.com/honeyznft/'><img src={imageFInstagram} alt='No image' /></a></li>
                            <li><a href='https://discord.gg/pT52wbTFJ7'><img src={imageFDis} alt='No image' /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class='container-fluid'>
                <div className='copyright-sec'>
                    <p>@2022 Honeyz All Rights Reserved. Honeyznft@gmail.com</p>
                </div>
            </div>
        </div>
    );
};
