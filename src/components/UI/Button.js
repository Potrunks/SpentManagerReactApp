import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ item, iditem, mode, method }) => {
  const navigate = useNavigate();

  return (
    <div>
      {iditem !== null && method === null && (
        <button onClick={() => navigate(`/${item}/${mode}/${iditem}`)}>
          {mode === "modify" && "Modifier"}
          {mode === "delete" && "Supprimer"}
          {mode === "transform" && "Ajouter aux dépenses"}
        </button>
      )}

      {iditem !== null && method !== null && (
        <button onClick={(e, iditem) => method(e, iditem)}>
        {mode === "confirm" && "Confirmer"}
      </button>
      )}

      {mode === "create" && <button onClick={(e) => method(e)}>Ajouter</button>}
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
