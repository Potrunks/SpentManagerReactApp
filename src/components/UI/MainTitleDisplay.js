import React, { useEffect, useState } from "react";

const MainTitleDisplay = ({ titleToDisplay, mode }) => {
  const [mainTitleClass, setMainTitleClass] = useState("");

  useEffect(() => {
    const loadMainTitle = () => {
      switch (mode) {
        case "main":
          setMainTitleClass("main-title-display big-title");
          break;

        case "list":
          setMainTitleClass("main-title-list");
          break;

        case "form":
          setMainTitleClass("main-title-form");
          break;

        default:
          break;
      }
    };
    loadMainTitle();
  }, [mode]);

  return (
    <div className={mainTitleClass}>
      <span>{titleToDisplay}</span>
    </div>
  );
};

export default MainTitleDisplay;
