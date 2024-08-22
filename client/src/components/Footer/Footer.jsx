import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div>
          {/* left side */}
          <img src="./logofelix.jpg" alt="" width={120} className="logofelix"/>

          <span className="secondaryText">
            We strive to build spaces that foster <br />
            connection and well-being for all.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Location</span>
          <span>P.O BOX LG25,University of Ghana,Legon</span>

          <div className="flexCenter f-menu">
            <span>Properties</span>
            <span>Services</span>
            <span>Resources</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
