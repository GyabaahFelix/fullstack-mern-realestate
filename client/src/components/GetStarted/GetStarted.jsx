import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Felix's Homes</span>
          <span className="secondaryText">
          Subscribe and get amazing deals!
            <br />
            Find your dream home today!
          </span>
          <button className="button">
            <a href="mailto:felixic360@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
