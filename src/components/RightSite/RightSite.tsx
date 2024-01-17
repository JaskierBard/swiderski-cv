import React from "react";
import "./RightSite.css";
import { CategoryButton } from "./CategoryButton";

export const RightSite = () => {
  return (
    <div className="right">
      <p></p>
      <CategoryButton label="Przycisk 1" content="Lorem ipsum 1..." />
      <CategoryButton label="Przycisk 2" content="Lorem ipsum 2..." />
      <CategoryButton label="Przycisk 3" content="Lorem ipsum 3..." />
      <CategoryButton label="Przycisk 4" content="Lorem ipsum 4..." />
    </div>
  );
};
