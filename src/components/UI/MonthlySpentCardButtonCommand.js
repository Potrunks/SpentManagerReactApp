import React from "react";
import Button from "./Button";

const MonthlySpentCardButtonCommand = ({monthlySpent}) => {

  return (
    <div className="item-card-btn-command">
      <Button item={"MonthlySpent"} iditem={monthlySpent.idMonthlySpent} mode={"transform"} />
      <Button item={"MonthlySpent"} iditem={monthlySpent.idMonthlySpent} mode={"modify"} />
      <Button item={"MonthlySpent"} iditem={monthlySpent.idMonthlySpent} mode={"delete"} />
    </div>
  );
};

export default MonthlySpentCardButtonCommand;
