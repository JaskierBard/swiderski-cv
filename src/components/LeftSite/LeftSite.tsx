import React from "react";
import "./LeftSite.css";
import Slider from "../Slider/Slider";

export const LeftSite = () => {
  return (
    <div className="left">
      <h1 className="name">Mateusz Świderski</h1>
      <h2 className="x">Junior web developer</h2>

      <div className="container1">
        <img
          className="photo"
          src={process.env.PUBLIC_URL + "/images/cv.png"}
          alt="CV"
        />
        <div className="ring">
          <div className="circle"></div>
        </div>
      </div>

      {/* <Icons/> */}
      <section className="text">
        <Slider/>
        {/* <p>Obecnie:</p>
        <p>Poszukuję pracy V</p>
        <p>Gotowość do przeprowadzki</p>
        <p>Praca na pełen etat</p> */}
      </section>
    </div>
  );
};
