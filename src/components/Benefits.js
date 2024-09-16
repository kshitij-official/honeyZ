import React from 'react';
import image1 from '../images/benifits.svg';
import image2 from '../images/Desktop_BigHoneyz2.png'; 
import image3 from '../images/p-star.svg';
import image4 from '../images/placeholder2.svg';
export const Benefits = () => {
    return (
        <div id='benefits-id' className='benefits-wrap'>
            <div className='benefits-inner-wrap'>
                <div className='benefits-section'>
                    <div className='container-fluid'>
                        <div className='row align-items-stretch justify-content-between'>
                            <div className='col benefits-left'>
                                <img src={image2} className='desktop-show' alt='No image' />
                                {/* <img src={image4} className='mobile-show' alt='No image' /> */}
                            </div>
                            <div className='col benefits-right'>
                                <div className='benefits-text'>
                                    <img src={image1} alt='No image' />
                                    <ul className='benefits-listing'>
                                        <li>
                                            <span className='benefits-icon like-icon'>
                                                <img src={image3} alt='No image' />
                                            </span>
                                            <p>You have complete ownership and IP rights to your NFT</p>
                                        </li>
                                        <li>
                                            <span className='benefits-icon heel-icon'>
                                                <img src={image3} alt='No image' />
                                            </span>
                                            <p>  You will get invites to presale for all future drops </p></li>
                                        <li>
                                            <span className='benefits-icon female-icon'>
                                                <img src={image3} alt='No image' />
                                            </span>
                                            <p>5% of our primary sales and 10% of our secondary will be donated to organizations that support women in tech and crypto</p>
                                            <p className='chat-reply'>In the event that All Honeyz are minted, we will be able to donate between 25 and 30 ETH from Primary Sales alone. All donations will be reported on Discord and on this Website, along with Etherscan links.</p>
                                        </li>
                                        <li>
                                            <span className='benefits-icon diamond-icon'>
                                                <img src={image3} alt='No image' />
                                            </span>
                                            <p>We will launch HoneyzDAO which will own and govern a community wallet that will invest in emerging women lead projects. </p>
                                            <p className='chat-reply'>The community has and will always be central to empowering women in under representative industries. We believe in collaborative intelligence and that thousands of community members are smarter than a team of founders.</p>
                                            <p className='chat-reply'>10% of primary sales and 10% of net secondary sales will be sent to a community wallet. </p>
                                        </li>
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
