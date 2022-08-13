import React from "react";
import MonthlySpentCardButtonCommand from "./MonthlySpentCardButtonCommand";

const MonthlySpent = ({ monthlySpent }) => {
  return (
    <div key={monthlySpent.idMonthlySpent} className="monthly-spent-card-container">
      <div className="monthly-spent-card">
        <div className="monthly-spent-card-title">
          <span>{monthlySpent.nameMonthlySpent}</span>
        </div>
        <div className="monthly-spent-card-info">
          <span>Prix : {monthlySpent.valueMonthlySpent} euros</span>
          <span>Catégorie : {monthlySpent.nameMonthlySpentCategory}</span>
          {monthlySpent.commentMonthlySpent !== "" && (
            <span className="monthly-spent-comment">
              Commentaire : {monthlySpent.commentMonthlySpent}
            </span>
          )}
          <span>
            {monthlySpent.isActive && "Actif"}
            {!monthlySpent.isActive && "Non Actif"}
          </span>
        </div>
        <MonthlySpentCardButtonCommand monthlySpent={monthlySpent} />
      </div>
    </div>
  );
};

export default MonthlySpent;
