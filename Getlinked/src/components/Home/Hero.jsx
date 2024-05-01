import React from "react";
import RegisterBtn from "../RegisterBtn";
const HeroSection = ({}) => {
  return (
    <section className="hero section-pad">
      <h4 className="align-right heading italic">
        Igniting a Revolution in{" "}
        <span className="underlined">HR Innovation</span>
      </h4>
      <div
        className="grid-container "
        style={{ gridTemplateColumns: "60% 40%" }}
      >
        <div>
          <p className="big-heading">getlinked Tech</p>
          <p className="big-heading ">
            Hackathon <span className="accent-1">1.0</span>
          </p>
          <p className="paragraph">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
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
