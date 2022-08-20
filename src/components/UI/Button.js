import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ item, iditem, mode, method }) => {
  
  const navigate = useNavigate();

  return (
    <div>
      {iditem !== null && (
        <button onClick={() => navigate(`/${mode}${item}/${iditem}`)}>
          {mode === "modify" && "Modifier"}
          {mode === "delete" && "Supprimer"}
          {mode === "transform" && "Ajouter aux dépenses"}
        </button>
      )}
      {mode === "create" && <button onClick={method}>Ajouter</button>}
      {mode === "clearInputField" && (
        <button onClick={method}>Effacer les champs</button>
      )}
      {mode === "MyMonthlySpent" && (
        <button onClick={() => navigate(`/${mode}`)}>Annuler</button>
      )}
    </div>
  );
};

export default Button;
