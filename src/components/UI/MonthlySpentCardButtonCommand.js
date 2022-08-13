import React from "react";
import { useNavigate } from "react-router-dom";

const MonthlySpentCardButtonCommand = ({monthlySpent}) => {

    const navigate = useNavigate();

  return (
    <div className="monthly-spent-card-btn-command">
      <button onClick={() => navigate(`/modifyMonthlySpent/${monthlySpent.idMonthlySpent}`)}>
        Modifier
      </button>
      <button onClick={() => navigate(`/deleteMonthlySpent/${monthlySpent.idMonthlySpent}`)}>
        Supprimer
      </button>
    </div>
  );
};

export default MonthlySpentCardButtonCommand;
