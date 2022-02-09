import React from 'react';
import image1 from "../images/road-map.svg";
import image3 from "../images/pre.svg";
import image4 from "../images/pre1.svg";
import image5 from "../images/sold1.svg";
import image6 from "../images/sold2.svg";
import image7 from "../images/sold3.svg";
import image8 from "../images/sold4.svg";

export const Roadmap = () => {
    return (
        <div id='roadmap-id' className='roadmap-wrapper'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="roadmap-title">
                            <img src={image1} alt="No image" />
                        </div>
                        <div className="roadmap-text">
                            <div className='roadmap-listing'>
                                <div>
                                    <span className='roadmap-icon like-icon'>
                                        <img src={image3} alt="No image" />
                                    </span>
                                    <ul>
                                        <li>15 free NFT giveaway mints for original Honeyz who will become our brand ambassadors</li>
                                        <li>    3 free NFT giveaway mints to Honeyz appointed as moderators on our Discord</li>
                                        <li>    10 free NFT giveaway mints via Discord</li>
                                        <li>    Host virtual events that bring together women in the NFT space to discuss
                                            the future of fashion, metaverse, crypto and NFTs! </li>
                                        <li>   instructions to join the presale list announced for 1,000 lucky people</li>
                                    </ul>
                                </div>
                                <div>
                                    <span className='roadmap-icon like-icon'>
                                        <img src={image4} alt="No image" />
                                    </span>
                                    <ul>
                                        <li>1,000 mints for people who are part of the pre-sale list</li>
                                        <li>1.0% of primary sales will be donated to organizations that support women in tech and crypto</li>
                                    </ul>
                                </div>
                                <div>
                                    <span className='roadmap-icon like-icon'>
                                        <img src={image5} alt="No image" />
                                    </span>
                                    <ul>
                                        <li>10 free NFT giveaway </li>
                                        <li>Anyone holding 1+ Honeyz NFT can enter a raffle to win 1 of 1 rare Honeyz</li>
                                    </ul>
                                </div>
                                <div>
                                    <span className='roadmap-icon like-icon'>
                                        <img src={image6} alt="No image" />
                                    </span>
                                    <ul>
                                        <li>Launch HoneyzDAO and add 1.25% of primary sales to the community wallet
                                            <ul>
                                                <li>Community vote announced for projects to invest in</li>
                                            </ul>
                                        </li>
                                        <li>20 free NFT mint giveaways</li>
                                        <li>1.5% of primary sales will be donated to organizations that support women in tech and crypto</li>
                                    </ul>
                                </div>
                                <div>
                                    <span className='roadmap-icon like-icon'>
                                        <img src={image7} alt="No image" />
                                    </span>
                                    <ul>
                                        <li>10 free NFT mint giveaways</li>
                                        <li>Anyone holding 1+ Honeyz NFT can enter a raffle to win 1 of 1 rare Honeyz</li>
                                        <li>Launch of Honeyz merch store </li>
                                    </ul>
                                </div>
                                <div>
                                    <span className='roadmap-icon like-icon'>
                                        <img src={image8} alt="No image" />
                                    </span>
                                    <ul>
                                        <li>Anyone holding 1+ Honeyz NFT can enter a raffle to win 10 rare 1 of 1 Honeyz</li>
                                        <li>Add 1.25% of primary sales to the community wallet
                                            <ul>
                                                <li>  Community vote announced for projects to invest in</li>
                                            </ul>

                                        </li>
                                        <li>2.5% of primary sales will be donated to organizations that support women in tech and crypto</li>
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
