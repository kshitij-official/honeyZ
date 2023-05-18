import React from "react";
import image1 from "../images/team.svg";
import image2 from "../images/Test_DesktopAliciaTeam2.png";
import image3 from "../images/Desktop_AmandaHoneyz.png";
import image4 from "../images/Desktop_AyeshaHoneyz.png";
import image5 from "../images/NEWShirza_DesktopTeam.png";
import image6 from "../images/NEWKyeria_DesktopTeam.png";
import image7 from "../images/Desktop_NicoleHoneyz.png";
import image8 from "../images/Desktop_TamoorHoneyz.png";
import image9 from "../images/Desktop_BenHoneyz.png";

export const Team = () => {
  return (
    <div id="team-id" className="team-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="team-title-img">
              <img src={image1} alt="No image" />
            </div>
          </div>
        </div>
        <div className="team-blocks row">
          <div class="col">
            <div class="team-grid">
              <div class="team-img">
                <img src={image2} alt="No image" />
              </div>
              <div class="team-title">
                <h3>Alicia</h3>
                <p>Head Designer </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="team-grid">
              <div class="team-img">
                <img src={image3} alt="No image" />
              </div>
              <div class="team-title">
                <h3>Amanda</h3>
                <p>Marketing Lead</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="team-grid">
              <div class="team-img">
                <img src={image4} alt="No image" />
              </div>
              <div class="team-title">
                <h3>Ayesha</h3>
                <p>Marketing &amp; Project Consultant</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="team-grid">
              <div class="team-img">
                <img src={image5} alt="No image" />
              </div>
              <div class="team-title">
                <h3>Shirza</h3>
                <p>Marketing &amp; Collaborations </p>
              </div>
            </div>
          </div>
          {/* <div class="w-100"></div> */}
          <div class="col">
            <div class="team-grid">
              <div class="team-img">
                <img src={image6} alt="No image" />
              </div>
              <div class="team-title">
                <h3>Kyeria</h3>
                <p>Influencer Outreach</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="team-grid">
              <div class="team-img">
                <img src={image7} alt="No image" />
              </div>
              <div class="team-title">
                <h3>Nicole</h3>
                <p>Influencer Outreach</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="team-grid">
              <div class="team-img">
                <img src={image8} alt="No image" />
              </div>
              <div class="team-title">
                <h3>Tamoor</h3>
                <p>Project Advisor</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="team-grid">
              <div class="team-img">
                <img src={image9} alt="No image" />
              </div>
              <div class="team-title">
                <h3>Ben</h3>
                <p>Tech Advisor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
