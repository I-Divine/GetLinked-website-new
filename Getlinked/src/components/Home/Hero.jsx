import React from "react";
import Typewriter from "typewriter-effect";

import RegisterBtn from "../RegisterBtn";
const HeroSection = ({}) => {
  return (
    <section className="hero section-pad">
      <h4 className="align-right heading italic">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Streamlining Recruitment")
              .pauseFor(500)
              .deleteAll()
              .typeString("Unlocking Opportunities")
              .pauseFor(500)
              .deleteAll()
              .typeString("Igniting a Revolution in HR Innovation")
              .start();
          }}
        />
      </h4>
      <div
        className="grid-container "
        style={{ gridTemplateColumns: "50% 50%" }}
      >
        <div>
          <p className="big-heading">getlinked Tech</p>
          <p className="big-heading ">
            Hackathon <span className="accent-1">1.0</span>
          </p>
          <p className="paragraph">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize.
          </p>

          <RegisterBtn size={"font-larger"} />
        </div>
        <div className="img-container align-end">
          <img
            src="/images/man-wearing-smart-glasses-touching-virtual-screen 1.png"
            alt=""
          />
        </div>
      </div>
      <hr />
    </section>
  );
};

export default HeroSection;
