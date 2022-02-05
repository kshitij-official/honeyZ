import React from 'react';
import image1 from "../images/about-us1.svg";
import image2 from "../images/placeholder.jpg";
import image3 from "../images/heart-s.svg";
import image4 from "../images/heel-s.svg";
import image5 from "../images/figure.svg";
import image6 from "../images/diamond.svg";

export const AboutUs = () => {
return (
    <div className='about-wrap'>
        <div className='about-inner-wrap'>
        <div className='about-section'>
        <div className="container-fluid">
<div className="row align-items-stretch justify-content-between">
<div className="col about-left">
<div className="about-text">
<img src={image1} alt="No image"/>
<ul className='about-listing'>
<li>
    <span className='about-icon like-icon'>
    <img src={image3} alt="No image"/>
    </span>
   <p>Honeyz is the first metaverse fashion doll. We are a community of 10,000 fashion forward women who are owning the blockchain runway.</p>
    </li>
<li>
    <span className='about-icon heel-icon'>
<img src={image4} alt="No image"/>
</span>
  <p>  Part of the beauty of traditional fashion is the ability to wear a story, using physical materials as a tool of self-expression. Now that the digital space is transforming the world around us, it’s time for fashion to be reimagined, too. </p></li>
<li>
    <span className='about-icon female-icon'>
<img src={image5} alt="No image"/>
</span>
<p>5 % of all proceeds will go towards organizations which aim to close the gender gaps in technology as well as creating new opportunities in order to educate women. </p></li>
<li>
    <span className='about-icon diamond-icon'>
    <img src={image6} alt="No image"/> 
</span>
   <p> All Honeyz are the most creative fashionistas but some of them are more rare than others. These dolls are based on more than 200 hand drawn traits. </p></li>
</ul>
</div>

</div>
<div className="col about-right">
<img src={image2} alt="No image"/>
</div>

</div>
</div>
</div> 
</div> 
    </div>
);
};
