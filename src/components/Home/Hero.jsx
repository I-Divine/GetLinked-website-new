import React, { useEffect, useState } from "react";
import { useIsShown } from "./useShown";
import Typewriter from "typewriter-effect";

import RegisterBtn from "../RegisterBtn";

const HeroSection = ({}) => {
  const { isShown, ref } = useIsShown();

  return (
    <>
      <section className="hero section-pad" ref={ref}>
        <h4
          className={`align-right heading italic hidden ${
            isShown ? "show" : ""
          }`}
        >
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
          <div className={`hidden ${isShown ? "show" : ""}`}>
            <h2 className="big-heading">getlinked Tech</h2>
            <h2 className="big-heading ">
              Hackathon <span className="accent-1">1.0</span>
            </h2>
            <p className="paragraph">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize.
            </p>
            <div className="register-container" style={{ textAlign: "center" }}>
              <RegisterBtn size={"font-larger"} />
            </div>
          </div>
          <div className="img-container align-end">
            <img
              src="/images/man-wearing-smart-glasses-touching-virtual-screen 1.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};

export default HeroSection;
