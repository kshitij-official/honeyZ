import React from 'react';
import image1 from "../images/logo.svg";
        
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
    <ul className='header-link navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Benefits</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Roadmap</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Partners</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Team</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Faq</a></li>
                    </ul>
                    </div>
      
    </nav>
  </div>
  <div className="col">
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
