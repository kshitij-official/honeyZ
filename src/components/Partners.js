import React from 'react';
import image1 from "../images/patner.svg";
import image2 from "../images/DesktopPartner_Honeybum.png";
import image3 from "../images/DesktopPartner_TBA.png";

export const Partners = () => {
    return (
        <div id='partners-id' className='patners-wrapper'>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="patners-title">
                            <img src={image1} alt="No image" />
                        </div>
                    </div>
                </div>
                <div className='patner-blocks row'>
                    <div class="col-6">
                        <a href="https://www.honeybum.com"><img src={image2} alt="No image" /></a>
                    </div>

                    <div class="col-6">
                    <a href='https://twitter.com/honeyznft'><img src={image3} alt="No image" /></a>
                    </div>
                </div>

            </div>
        </div>
    );
};
