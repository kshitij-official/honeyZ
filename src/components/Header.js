import React from 'react';
import image1 from "../images/logo.svg";
import image2 from "../images/logo-mob.svg";
import image3 from "../images/close.svg";
import image4 from "../images/placeholder.jpg";
        
export const Header = () => {
return (
  <div className="header-section">
    <div className="container">
<div className="row justify-content-between">
  <div className="col">
    <a className="logo-wrap" href='#'>
      <img src={image1} alt="No image"/>
    </a>
  </div>
  <div className="col">
    <nav className='header-menus navbar navbar-expand-lg navbar-light bg-image'>
    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse collapse">
    <a className="close-wrap mobile-show" href='#'>
      <img src={image3} alt="No image"/>
    </a>
    <a className="logo-wrap mobile-show" href='#'>
      <img src={image2} alt="No image"/>
    </a>
    <div className="col-mobile mobile-show">
  <a className="btn-mint" href="#">Mint coming soon</a>
  </div>
    <ul className='header-link navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Benefits</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Roadmap</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Partners</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Team</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Faq</a></li>
                    </ul>
                    <ul className='social-links mobile-show'>
                        <li><i className="icon-fa icon-twitter"> </i></li>
                        <li><i className="icon-fa icon-discord"></i></li>
                        <li><i className="icon-fa icon-instagram"></i></li>
                        <li><i className="icon-fa icon-logomark"></i></li>
                    </ul>
                    <div className="placeholder-mobile mobile-show">
                    <img src={image4} alt="No image"/>
                    </div>
                    </div>
      
    </nav>
  </div>
  <div className="col mobile-show">
  <a className="btn-mint" href="#">Mint coming soon</a>
  </div>
  <div className="col desktop-show">
  <ul className='social-links'>
                        <li><i className="icon-fa icon-twitter"> </i></li>
                        <li><i className="icon-fa icon-discord"></i></li>
                        <li><i className="icon-fa icon-instagram"></i></li>
                        <li><i className="icon-fa icon-logomark"></i></li>
                    </ul>
  </div>
</div>
</div>
  </div>



);
};
