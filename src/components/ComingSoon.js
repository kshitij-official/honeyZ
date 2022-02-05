import React from "react";
import image2 from "../images/BigWindow.svg";
import image3 from "../images/heartsplaceholder.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ComingSoon = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    // slidesToScroll: 6,
    rows: 1,
    // slidesPerRow: 6,
    // centerMode: true,
    // variableWidth: true,
    // autoplay: true,
    // centerPadding: "60px",
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: "40px",
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: "40px",
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
    // centerPadding: '60px',
    // centerMode: true
  };
  return (
    <div className="coming-soom-wrap">
      <div className="coming-section">
        <div className="container">
          <div className="row align-items-center">
            <div class="col coming-left">
              <div className="coming-text">
                <p>
                  The first metaverse fashion doll, we are a <br />
                  community of 10,000 fashion forward women who are owning{" "}
                  <br />
                  the blockchain runway. Our mission is to create opportunities
                  and educate women about web3 and crypto while expressing self
                  confidence through a unique sense of fashion.
                </p>
                <a href="#" className="btn1">
                  Mint coming soon
                </a>
                <a href="#" className="btn2">
                  Follow for pre-sale updates <span class="arrow"></span>
                </a>
              </div>
            </div>
            <div className="col comin-right">
              <img src={image2} alt="No image" />
            </div>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <img src={image3} alt="No image" />
        </div>
        <div>
          <img src={image3} alt="No image" />
        </div>
        <div>
          <img src={image3} alt="No image" />
        </div>
        <div>
          <img src={image3} alt="No image" />
        </div>
        <div>
          <img src={image3} alt="No image" />
        </div>
        <div>
          <img src={image3} alt="No image" />
        </div>
        <div>
          <img src={image3} alt="No image" />
        </div>
        <div>
          <img src={image3} alt="No image" />
        </div>
        <div>
          <img src={image3} alt="No image" />
        </div>
        <div>
          <img src={image3} alt="No image" />
        </div>
        <div>
          <img src={image3} alt="No image" />
        </div>
        <div>
          <img src={image3} alt="No image" />
        </div>
        <div>
          <img src={image3} alt="No image" />
        </div>
      </Slider>
      {/* <section className="center slider d-flex">
        <div className="p-3">
          <h2> Single Item</h2>
          <Slider {...settings}>
            <div>
            <img src={image3} alt="No image"/>
            </div>
            <div>
            <img src={image3} alt="No image"/>
            </div>
            <div>
            <img src={image3} alt="No image"/>
            </div>
            <div>
            <img src={image3} alt="No image"/>
            </div>
            <div>
            <img src={image3} alt="No image"/>
            </div>
            <div>
            <img src={image3} alt="No image"/>
            </div>
          </Slider>
        </div>
      </section> */}
    </div>
  );
};
