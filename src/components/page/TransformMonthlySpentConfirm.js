import React from "react";
import ConfirmCard from "../UI/ConfirmCard";

const TransformMonthlySpentConfirm = () => {
  return (
    <div className="app-main-container">
      <ConfirmCard titleToDisplay={"Etes-vous sur pour l'ajout au dépenses ?"} mode={"add"} />
    </div>
  );
};

export default TransformMonthlySpentConfirm;
