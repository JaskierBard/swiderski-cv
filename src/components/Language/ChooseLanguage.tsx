import React, { useState } from "react";
import "./ChooseLanguage.css";

let Languages: string[] = ["Polish", "UnitedKingdom", "Deutsch"];

export const ChooseLanguage = () => {
  const [selected, setSelected] = useState("Polish");
  const [toggleChoices, setToggleChoices] = useState(false);

  const handleMouseEnter = () => {
    setToggleChoices(true);
  };

  const handleMouseLeave = () => {
    setToggleChoices(false);
  };

  const selectLanguage = (language: string) => {
    setSelected(language);
    setToggleChoices(false);
    Languages = moveElementToFront(Languages, language);
  };

  function moveElementToFront<T>(array: T[], element: T): T[] {
    const newArray = array.filter((el) => el !== element);
    newArray.unshift(element);
    return newArray;
  }

  return (
    <div>
      <div className="choose_language" onMouseLeave={handleMouseLeave}>
        <img
          onMouseEnter={handleMouseEnter}
          className="language_icon"
          src={process.env.PUBLIC_URL + `/icons/${selected}.png`}
          alt={selected}
        />
        <div className="hidden">
          {toggleChoices &&
            Languages.map(
              (element, index) =>
                index > 0 && (
                  <img
                    key={element}
                    onClick={() => selectLanguage(element)}
                    className="language_icon"
                    src={process.env.PUBLIC_URL + `/icons/${element}.png`}
                    alt={element}
                  />
                )
            )}
        </div>
      </div>
    </div>
  );
};
