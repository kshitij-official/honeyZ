import React from "react";
import image1 from "../images/about-us1.svg";
import image2 from "../images/Desktop_BigHoneyz1.png";
import image3 from "../images/heart-s.svg";
import image4 from "../images/heel-s.svg";
import image5 from "../images/figure.svg";
import image6 from "../images/diamond.svg";
import image7 from "../images/Mobile3test1.png";

export const AboutUs = () => {
  return (
    <div id="about-id" className="about-wrap">
      <div className="about-inner-wrap">
        <div className="about-section">
          <div className="container-fluid">
            <div className="row align-items-stretch justify-content-between">
              <div className="col about-left">
                <div className="about-text">
                  <img src={image1} alt="No image" />
                  <ul className="about-listing">
                    <li>
                      <span className="about-icon like-icon">
                        <img src={image3} alt="No image" />
                      </span>
                      <p>
                      Honeyz is the first metaverse fashion doll, we are a community of 10,000 fashion forward women who are owning the blockchain runway. 
                      </p>
                    </li>
                    <li>
                      <span className="about-icon heel-icon">
                        <img src={image4} alt="No image" />
                      </span>
                      <p>
                        {" "}
                        Part of the beauty of traditional fashion is the ability to wear a story, using physical materials as a tool of self-expression. Now that the digital space is transforming the world around us, it’s time for fashion to be reimagined, too.{" "}
                      </p>
                    </li>
                    <li>
                      <span className="about-icon diamond-icon">
                        <img src={image6} alt="No image" />
                      </span>
                      <p>
                      All Honeyz are the most creative fashionistas but some of them are more rare than others. These dolls  are based on more than 278 hand drawn traits.{" "}
                      </p>
                    </li>
                    <li>
                      <span className="about-icon female-icon">
                        <img src={image5} alt="No image" />
                      </span>
                      <p>
                        {" "}
                        We believe that women will be on the forefront of tech and web3, part of our proceeds will go towards driving that mission forward:{" "}<br /><br />
                        - 5 % of primary sales and 10% of secondary sales will go towards organizations which aim to close the gender gaps in technology.<br />
                        - 2.5% of primary sales and 10% of secondary sales will be invested  into emerging women lead projects via HoneyzDAO that will be owned and governed by our community.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col about-right">
                <img src={image2} className="desktop-show" alt="No image" />
                <img src={image7} className="mobile-show" alt="No image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
