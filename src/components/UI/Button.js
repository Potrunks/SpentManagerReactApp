import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ item, iditem, mode, method }) => {
  const navigate = useNavigate();

  return (
    <div>
      {iditem !== null && (
        <button onClick={() => navigate(`/${item}/${mode}/${iditem}`)}>
          {mode === "modify" && "Modifier"}
          {mode === "delete" && "Supprimer"}
          {mode === "transform" && "Ajouter aux dépenses"}
        </button>
      )}

      {mode === "create" && <button onClick={method}>Ajouter</button>}
      {mode === "clearInputField" && (
        <button onClick={method}>Effacer les champs</button>
      )}
      {mode === "back" && <button onClick={() => navigate(-1)}>Retour</button>}

      {iditem === null && method === null && mode !== "back" && (
        <button onClick={() => navigate(`/${item}/${mode}`)}>
          {item === "monthlySpent" &&
            mode === "getAllByIdUser" &&
            "Mes dépenses mensuelles"}
            {item === "monthlySpent" &&
            mode === "new" &&
            "Créer dépense mensuelle"}
        </button>
      )}
    </div>
  );
};

export default Button;
