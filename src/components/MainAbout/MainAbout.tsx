import React from "react";
import "./MainAbout.css";
import { ChooseLanguage } from "../Language/ChooseLanguage";
import { Icons } from "./Icons/Icons";
import { Nav } from "../Nav/Nav";
import { AboutMe } from "../AllInfo/AboutMe";
import { LeftSite } from "../LeftSite/LeftSite";
import { RightSite } from "../RightSite/RightSite";

export const MainAbout = () => {
  return (
    <>
      <Nav />
      <div className="Place">
        <LeftSite />
        <RightSite />

        {/* <AboutMe/> */}

        {/* <ChooseLanguage/> */}
      </div>
    </>
  );
};
