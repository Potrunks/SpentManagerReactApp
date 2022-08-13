import React from "react";
import MainTitleList from "./MainTitleList";
import MonthlySpent from "./MonthlySpent";

const MonthlySpentList = ({ monthlySpentList, titleToDisplay }) => {
  return (
    <div className="monthly-spent-main-container">
      <MainTitleList titleToDisplay={titleToDisplay} />
      {monthlySpentList.map((monthlySpent) => (
        <MonthlySpent monthlySpent={monthlySpent} />
      ))}
    </div>
  );
};

export default MonthlySpentList;
