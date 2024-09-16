import React from 'react';
import image1 from '../images/road-map2.svg';
import image2 from '../images/heel.svg';
import image3 from '../images/hexagon.svg';
import image4 from '../images/meta-logo.svg';
import image5 from '../images/eth.svg';

export const RoadmapTwo = () => {
return (
    <div className='roadmap2-wrapper'>
    <div className='container'>
    <div className='row'>
    <div className='col-12 text-center'>
    <div className='roadmap-title'>
<img src={image1} alt='No image'/>
</div>
<div className='roadmap-blocks row'>
<div class='col-3'>
<div className='roadmap-inner'>
<div className='roadmap-img'>
<img src={image2} alt='No image'/>
</div>
<h2>Metaverse fashion shows</h2>
<p> Attend exclusive fashion events and new drop release parties</p>
</div>
</div>
<div class='col-3'>
<div className='roadmap-inner'>
<div className='roadmap-img'>
<img src={image3} alt='No image'/>
</div>
<h2>Fashion NFT launchpad</h2>
<p>Collaborate with designers on unique drops </p>
</div>
</div>
<div class='col-3'>
<div className='roadmap-inner'>
<div className='roadmap-img'>
<img src={image4} alt='No image'/>
</div>
<h2>Metaverse Fashion Boutique</h2>
<p>Purchase land on Mana and launch the first of a kind digital fashion boutique that will return part profits to community members</p>
</div>
</div>
<div class='col-3'>
<div className='roadmap-inner'>
<div className='roadmap-img'>
<img src={image5} alt='No image'/>
</div>
<h2>NFT Staking</h2>
<p>Earn passive income </p>
</div>
</div>
</div>
        </div>
        </div>
        </div>
        </div>
);
};
