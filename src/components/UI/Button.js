import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ item, iditem, mode }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/${mode}${item}/${iditem}`)}
    >
      {mode === "modify" && "Modifier"}
      {mode === "delete" && "Supprimer"}
      {mode === "transform" && "Ajouter aux dépenses"}
    </button>
  );
};

export default Button;
