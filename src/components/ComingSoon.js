import React from 'react';
import image2 from "../images/BigWindow.svg";
export const ComingSoon = () => {
  return (
      <div className='coming-soom-wrap'>
          <div className="container">
<div className="row align-items-center">
  <div class="col coming-left">
    <div className="coming-text">
<p>
    The first metaverse fashion doll, we are a <br/>community of 10,000 fashion forward women who are owning <br/>
the blockchain runway.  Our mission is to create opportunities and educate women about web3 
and crypto while expressing self confidence 
through a unique sense of fashion.</p>
<a href='#' className='btn1'>Mint coming soon</a>
<a href='#' className='btn2'>Follow for pre-sale updates <span class="arrow"></span></a>
    </div>

  </div>
  <div className="col comin-right">
  <img src={image2} alt="No image"/>
  </div>
  
</div>
</div>
      </div>
  );
};
