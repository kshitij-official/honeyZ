import React from 'react';
import image2 from "../images/BigWindow.svg";
import image3 from "../images/heartsplaceholder.png";

export const ComingSoon = () => {
return (
    <div className='coming-soom-wrap'>
        <div className='coming-section'>
        <div className="container">
<div className="row align-items-center">
<div className="col coming-left">
  <div className="coming-text">
<p>
  The first metaverse fashion doll, we are a <br/>community of 10,000 fashion forward women who are owning <br/>
the blockchain runway.  Our mission is to create opportunities and educate women about web3 
and crypto while expressing self confidence 
through a unique sense of fashion.</p>
<a href='#' className='btn1'>Mint coming soon</a>
<a href='#' className='btn2'>Follow for pre-sale updates <span class="arrow"></span></a>

<div className="col mobile-show">
  <ul className='social-links'>
                        <li><i className="icon-fa icon-twitter"> </i></li>
                        <li><i className="icon-fa icon-discord"></i></li>
                        <li><i className="icon-fa icon-instagram"></i></li>
                        <li><i className="icon-fa icon-logomark"></i></li>
                    </ul>
  </div>
  </div>

</div>
<div className="col comin-right">
<img src={image2} alt="No image"/>
</div>

</div>
</div>
</div> 
    <section className="center slider d-flex justify-content-center">
  <div className='p-3'>
  <img src={image3} alt="No image"/>
  </div>
  <div className='p-3'>
  <img src={image3} alt="No image"/>
  </div>
  <div className='p-3'>
  <img src={image3} alt="No image"/>
  </div>
  <div className='p-3'>
  <img src={image3} alt="No image"/>
  </div>
  <div className='p-3'>
  <img src={image3} alt="No image"/>
  </div>
  <div className='p-3'>
  <img src={image3} alt="No image"/>
  </div>
  <div className='p-3'>
  <img src={image3} alt="No image"/>
  </div>  
  <div className='p-3'>
  <img src={image3} alt="No image"/>
  </div>
  <div className='p-3'>
  <img src={image3} alt="No image"/>
  </div>
 
  
</section>
</div>
);
};
