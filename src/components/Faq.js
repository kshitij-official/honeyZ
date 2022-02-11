import React from 'react';
import image1 from "../images/2_DesktopFAQ.png";

export const Faq = () => {
    return (
        <div id='faq-id' className='faq-wrapper'>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="faq-section">
                            <img src={image1} alt="No image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
