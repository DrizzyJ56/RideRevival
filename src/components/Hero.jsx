// import React, { useState } from "react";
// import { Link } from "react-router-dom";

import { Corvette, blackOverlay, logo2 } from "../assets";

const Hero = () => {
  //   const [active, setActive] = useState("");
  //   const [toggle, setToggle] = useState(false);
  return (
      <div
        style={{
          backgroundImage: `url(${Corvette})`,
        }}
        className="hero min-h-screen max-h-screen"
      >
        <div className="flex flex-col items-center mb-[10vh] text-center">
          <img src={logo2} className="w-[25vw]" />
          <div className="text-white flex flex-col items-center ml-[2vw]">
            <h1 className="text-[10vh] font-extrabold">Auto Detailing!</h1>
            <p className="mb-[5vh] text-4xl">
              Premium Car Ceramic Coating, Auto Detailing & Paint Protection
              Specialists In Baltimore, MD
            </p>
            <button className="btn btn-info text-xl text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
  );
};

export default Hero;
