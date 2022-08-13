import React from 'react';
import { useNavigate } from "react-router-dom";

const MainButtonCommand = ({addButton, backButton, mode}) => {

    const navigate = useNavigate();

  return (
    <div className='main-btn-command'>
        {addButton && <button>*Ajouter*</button>}
        {backButton && <button onClick={() => navigate("/menu")}>Retour</button>}
    </div>
  )

}

export default MainButtonCommand