import React from "react";
import Button from "./Button";

const MonthlySpentCardButtonCommand = ({monthlySpent}) => {

  return (
    <div className="item-card-btn-command">
      <Button method={null} item={"monthlySpent"} iditem={monthlySpent.idMonthlySpent} mode={"transform"} />
      <Button method={null} item={"monthlySpent"} iditem={monthlySpent.idMonthlySpent} mode={"modify"} />
      <Button method={null} item={"monthlySpent"} iditem={monthlySpent.idMonthlySpent} mode={"delete"} />
    </div>
  );
};

export default MonthlySpentCardButtonCommand;
