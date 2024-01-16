import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";

import "./Bar.scss";

import "./Info.css";

export const AboutMe = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      const progress = (scrolled / (fullHeight - windowHeight)) * 100;
      setScrollProgress(Number((progress).toFixed(0)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="about">
      <ProgressBar
        completed={scrollProgress}
        maxCompleted={100}
        className="wrapper"
        barContainerClassName="container"
        bgColor="rgb(30, 80, 47)"
        labelClassName="label"
      />
      <Portfolio />
      <Skills />
    </div>
  );
};
