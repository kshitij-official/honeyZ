import React from 'react';
import image1 from "../images/team.svg";
import image2 from "../images/team-img.svg";


export const Team = () => {
    return (
        <div className='team-wrapper'>
<div className="container">
<div className="row">
<div className="col-12 text-center">
<div className="team-title-img">
<img src={image1} alt="No image"/>
</div>
    </div>
    </div>
    <div className='team-blocks row'>
<div class="col-2">
<div class="team-grid">
<div class="team-img">
<img src={image2} alt="No image"/>
</div>
<div class="team-title">
    <h3>Name </h3>
    <p>Title</p>
</div>
</div>
</div>
<div class="col-2">
<div class="team-grid">
<div class="team-img">
<img src={image2} alt="No image"/>
</div>
<div class="team-title">
    <h3>Name </h3>
    <p>Title</p>
</div>
</div>
</div>
<div class="col-2">
<div class="team-grid">
<div class="team-img">
<img src={image2} alt="No image"/>
</div>
<div class="team-title">
    <h3>Name </h3>
    <p>Title</p>
</div>
</div>
</div>
<div class="col-2">
<div class="team-grid">
<div class="team-img">
<img src={image2} alt="No image"/>
</div>
<div class="team-title">
    <h3>Name </h3>
    <p>Title</p>
</div>
</div>
</div>
<div class="col-2">
<div class="team-grid">
<div class="team-img">
<img src={image2} alt="No image"/>
</div>
<div class="team-title">
    <h3>Name </h3>
    <p>Title</p>
</div>
</div>
</div>
<div class="col-2">
<div class="team-grid">
<div class="team-img">
<img src={image2} alt="No image"/>
</div>
<div class="team-title">
    <h3>Name Title</h3>
</div>
</div>
</div>
</div>

    </div>
    </div>
    );
};
