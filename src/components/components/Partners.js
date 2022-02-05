import React from 'react';
import image1 from "../images/patner.svg";
import image2 from "../images/PartnersWindow.png";

export const Partners = () => {
return (
    <div className='patners-wrapper'>
<div className="container">
<div className="row">
<div className="col-12 text-center">
<div className="patners-title">
<img src={image1} alt="No image"/>
</div>
    </div>
    <div className='patner-blocks row'>
<div class="col-6">
<img src={image2} alt="No image"/>
</div>

<div class="col-6">
<img src={image2} alt="No image"/>
</div>
</div>
</div>
    </div>
    </div>
);
};
