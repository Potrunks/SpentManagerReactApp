import React from "react";
import MainTitleList from "./MainTitleList";
import MonthlySpentCardButtonCommand from "./MonthlySpentCardButtonCommand";
import activePicture from "./active.png";
import inactivePicture from "./inactive.png";

const MonthlySpentList = ({ monthlySpentList, titleToDisplay }) => {
  return (
    <div className="item-list-main-container">
      <MainTitleList titleToDisplay={titleToDisplay} />
      {monthlySpentList.map((monthlySpent) => (
        <div key={monthlySpent.idMonthlySpent} className="item-card-container">
      <div className="item-card">
        <div className="item-card-title">
          <span>{monthlySpent.nameMonthlySpent}</span>
        </div>
        <div className="item-card-info">
          <span>Prix : {monthlySpent.valueMonthlySpent} euros</span>
          <span>Catégorie : {monthlySpent.nameMonthlySpentCategory}</span>
          {monthlySpent.commentMonthlySpent !== "" && (
            <span className="comment">
              Commentaire : {monthlySpent.commentMonthlySpent}
            </span>
          )}
          <div className="state">
            {monthlySpent.isActive && <img src={activePicture}></img>}
            {!monthlySpent.isActive && <img src={inactivePicture}></img>}
          </div>
        </div>
        <MonthlySpentCardButtonCommand monthlySpent={monthlySpent} />
      </div>
    </div>
      ))}
    </div>
  );
};

export default MonthlySpentList;
