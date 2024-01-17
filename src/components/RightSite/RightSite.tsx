import React from "react";
import "./RightSite.css";
import { CategoryButton } from "./CategoryButton";
import dane from '../../data/aboutMe.json';

export const RightSite = () => {
  const {personalDetails} = dane.polish[0]
  return (
    <div className="right">
      <CategoryButton label={personalDetails['name']}content={personalDetails['website']} />
      <CategoryButton label="Przycisk 2" content="Lorem ipsum 2..." />
      <CategoryButton label="Przycisk 3" content="Lorem ipsum 3..." />
      <CategoryButton label="Przycisk 4" content="Lorem ipsum 4..." />
    </div>
  );
};
