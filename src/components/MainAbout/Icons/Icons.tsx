import React, { useState } from "react";
import "./Icons.css";

const emailToCopy = "example@example.com";

export const Icons = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(emailToCopy);
      console.log("Text copied to clipboard");
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Unable to copy text to clipboard:", err);
    }
  };

  return (
    <div className="icons">
      {copied ? (
        <p className="copied-text">Copied!</p>
      ) : (
        <img
          className="icon"
          onClick={handleCopyClick}
          src={process.env.PUBLIC_URL + "/icons/Mail.png"}
          alt="mail-icon"
        />
      )}
    </div>
  );
};
