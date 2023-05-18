import React, { useEffect } from 'react';
import image1 from "../images/logo.svg";
import image2 from "../images/logo-mob.svg";
import image3 from "../images/close.svg";
import image4 from "../images/Mobile_SidebarHoneyz2.png";
import { HashLink } from 'react-router-hash-link';

export const Header = () => {
  const handleNav = () => {
    var element = document.getElementById("mobile-nav");
    element.classList.add("mobile-open");
    // document.body.classList.add('mobile-open');
  }
  const handleNavClose = () => {
    var element = document.getElementById("mobile-nav");
    element.classList.remove("mobile-open");
    // document.body.classList.remove('mobile-open');
  }
  // useEffect(() => {
  //   document.addEventListener("mousedown", handleNavClose);
  //   return () => {
  //     document.removeEventListener("mousedown", handleNavClose);
  //   }
  // }, []);
  return (
    <div className="header-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col">
            <a className="logo-wrap" href='/'>
              <img src={image1} alt="No image" />
            </a>
          </div>
          <div className="col">
            <nav className='header-menus navbar navbar-expand-lg navbar-light bg-image'>
              <button className="navbar-toggler collapsed" onClick={handleNav} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div id="mobile-nav" className="navbar-collapse collapse" >
                <a className="close-wrap mobile-show" onClick={handleNavClose}>
                  <img src={image3} alt="No image" />
                </a>
                <a className="logo-wrap mobile-show">
                  <img src={image2} alt="No image" />
                </a>
                <div className="col-mobile mobile-show">
                  <a className="btn-mint" href="https://discord.gg/pT52wbTFJ7">Get on presale</a>
                </div>
                <ul className='header-link navbar-nav me-auto mb-2 mb-lg-0'>
                  <HashLink smooth to={'/#home-id'}><li className="nav-item"><a className="nav-link" href="#">Home</a></li></HashLink>
                  <HashLink smooth to={'/aboutus#about-id'}><li className="nav-item"><a className="nav-link" href='#'>About</a></li></HashLink>
                  <HashLink smooth to={'/benefits#benefits-id'}><li className="nav-item"><a className="nav-link" href="#">Benefits</a></li></HashLink>
                  <HashLink smooth to={'/roadmap#roadmap-id'}><li className="nav-item"><a className="nav-link" href="#">Roadmap</a></li></HashLink>
                  <HashLink smooth to={'/partners#partners-id'}><li className="nav-item"><a className="nav-link" href="#">Partners</a></li></HashLink>
                  <HashLink smooth to={'/team#team-id'}><li className="nav-item"><a className="nav-link" href="#">Team</a></li></HashLink>
                  <HashLink smooth to={'/faq#faq-id'}><li className="nav-item"><a className="nav-link" href="#">Faq</a></li></HashLink>
                </ul>
                <ul className='social-links mobile-show'>
                  <li><a href="https://twitter.com/honeyznft"><i className="icon-fa icon-twitter"></i></a></li>
                  <li><a href="https://discord.gg/pT52wbTFJ7"><i className="icon-fa icon-discord"></i></a></li>
                  <li><a href="https://instagram.com/honeyznft"><i className="icon-fa icon-instagram"></i></a></li>
                </ul>
                <div className="placeholder-mobile mobile-show">
                  <img src={image4} alt="No image" />
                </div>
              </div>
            </nav>
          </div>
          <div className="col mobile-show">
            <a className="btn-mint" href="https://discord.gg/pT52wbTFJ7">Get on presale</a>
          </div>
          <div className="col desktop-show">
            <ul className='social-links'>
                  <li><a href="https://twitter.com/honeyznft"><i className="icon-fa icon-twitter"></i></a></li>
                  <li><a href="https://discord.gg/pT52wbTFJ7"><i className="icon-fa icon-discord"></i></a></li>
                  <li><a href="https://instagram.com/honeyznft"><i className="icon-fa icon-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
