import React from 'react';
import image1 from '../images/road-map.svg';
import image3 from '../images/Roadmap01.svg';
import image4 from '../images/HoneyzDAO.svg';
import image5 from '../images/Rare-items.svg';
import image6 from '../images/Honeyz-merch-store.svg';
import image7 from '../images/Virtual-events.svg';
import image8 from '../images/Raffles.svg';

export const Roadmap = () => {
    return (
        <div id='roadmap-id' className='roadmap-wrapper'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <div className='roadmap-title'>
                            <img src={image1} alt='No image' />
                        </div>
                        <div className='roadmap-text'>
                            <div className='roadmap-listing'>
                                <div>
                                    <span className='roadmap-icon like-icon'>
                                        <img src={image3} alt='No image' />
                                    </span>
                                    <ul>
                                        <li>5% of primary sales and 10% of net secondary sales donated to Baddies in Tech</li>
                                    </ul>
                                </div>
                                <div>
                                    <span className='roadmap-icon like-icon'>
                                        <img src={image4} alt='No image' />
                                    </span>
                                    <ul>
                                        <li>10% of primary sales and 10% of net secondary invested into emerging women lead projects</li>
                                    </ul>
                                </div>
                                <div>
                                    <span className='roadmap-icon like-icon'>
                                        <img src={image5} alt='No image' />
                                    </span>
                                    <ul>
                                        <li>New items will become available which will be compatible with your Honeyz and used to make her more rare</li>
                                    </ul>
                                </div>
                                <div>
                                    <span className='roadmap-icon like-icon'>
                                        <img src={image6} alt='No image' />
                                    </span>
                                    <ul>
                                        <li>Limited collection of in-house designed merchandise to be released<br />10% of net proceeds will be sent to the HoneyzDAO</li>
                                    </ul>
                                </div>
                                <div>
                                    <span className='roadmap-icon like-icon'>
                                        <img src={image7} alt='No image' />
                                    </span>
                                    <ul>
                                        <li>Fashion shows, and other ongoing events that bring Honeyz together in fashion and web3</li>
                                    </ul>
                                </div>
                                <div>
                                    <span className='roadmap-icon like-icon'>
                                        <img src={image8} alt='No image' />
                                    </span>
                                    <ul>
                                        <li>1:1 Honeyz raffles &amp; airdrops of future collections</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
