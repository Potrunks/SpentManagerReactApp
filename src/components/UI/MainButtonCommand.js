import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const MainButtonCommand = ({ addButton, backButton, item }) => {
  const navigate = useNavigate();

  return (
    <div className="main-btn-command">
      {addButton && (
        <Button method={null} item={item} iditem={null} mode={"new"} />
      )}
      {backButton && (
        <Button method={null} item={null} iditem={null} mode={"back"} />
      )}
    </div>
  );
};

export default MainButtonCommand;
