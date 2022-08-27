import React from "react";
import ConfirmCard from "../UI/ConfirmCard";

const DeleteMonthlySpentConfirm = () => {
  return (
    <div className="app-main-container">
      <ConfirmCard titleToDisplay={"Etes-vous sur pour la suppression ?"} mode={"delete"} />
    </div>
  );
};

export default DeleteMonthlySpentConfirm;
