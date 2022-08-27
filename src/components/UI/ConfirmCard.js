import React from "react";
import MainTitleDisplay from "./MainTitleDisplay";
import MonthlySpentCard from "./MonthlySpentCard";

const ConfirmCard = ({mode, titleToDisplay}) => {
  return (
    <div>
      <MainTitleDisplay mode={"main"} titleToDisplay={titleToDisplay} />
      <MonthlySpentCard mode={mode} />
    </div>
  );
};

export default ConfirmCard;
