import React, { useState } from "react";
import "./RightSite.css";

type Props = {
    label: string;
    content: string;
};

export const CategoryButton: React.FC<Props>= ({ label, content }) => {
  const [isContentVisible, setContentVisible] = useState(false);

  const toggleContent = () => {
    setContentVisible(!isContentVisible);
  };

  return (
    <>
      <div className="categoryTab">
        <div className="tab" onClick={toggleContent}>
          <div className="dot">
            <div className="smallDot"></div>
          </div>
          <div className="label">{label}</div>
        </div>
      </div>
      <div>
        {isContentVisible && <div className="content">{content}</div>}
      </div>
    </>
  );
};
