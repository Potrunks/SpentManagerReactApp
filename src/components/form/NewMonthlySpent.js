import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewMonthlySpent = () => {

  const [monthlySpent, setMonthlySpent] = useState({
    valueMonthlySpent: "",
    nameMonthlySpent: "",
    commentMonthlySpent: "",
    idSpentCategorySelected: "",
    isActive: false,
    idUserCreator: sessionStorage.getItem("idUserConnected"),
  });
  const [loading, setLoading] = useState(true);
  const [spentCategories, setSpentCategories] = useState(null);
  const confirmMessage =
    "Etes-vous sur de vouloir créer cette dépense mensuelle ?";
  const [confirmPopup, setConfirmPopup] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setMonthlySpent({ ...monthlySpent, [e.target.name]: value });
  };

  const displayConfirmPopup = (e) => {
    // TODO Display confirm popup when create new monthly spent
  }

  const sendNewMonthlySpentToApi = (e) => {
    // TODO send new monthly spent to API
  }

  return (
    <div className="app-main-container">
      {loading && <Loading />}
      {!loading && (
        <div className="main-form-container">
          <div className="main-title-form">
            <span>Ajouter une dépense</span>
          </div>
          <div className="API-error-box" id="API-error-box">
            <span></span>
          </div>
          <div className="main-input-field" id="form">
            <div className="input-field">
              <span>Prix (euros)</span>
              <input
                type="number"
                placeholder=""
                id="valueSpent"
                name="valueSpent"
                value={spent.valueSpent}
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
            <div className="input-field">
              <span>Nom</span>
              <input
                type="text"
                placeholder=""
                id="nameSpent"
                name="nameSpent"
                value={spent.nameSpent}
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
            <div className="input-field">
              <span>Commentaire</span>
              <input
                type="text"
                placeholder=""
                id="commentSpent"
                name="commentSpent"
                value={spent.commentSpent}
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
            <div className="main-select-container">
              <span>Catégorie de la dépense</span>
              <select
                id="idSpentCategorySelected"
                name="idSpentCategorySelected"
                onChange={(e) => handleChange(e)}
                className="select-form"
              >
                <option value="">Choisissez une catégorie...</option>
                {spentCategories.map((spentCategory) => (
                  <option
                    key={spentCategory.idSpentCategory}
                    value={spentCategory.idSpentCategory}
                  >
                    {spentCategory.nameSpentCategory}
                  </option>
                ))}
              </select>
            </div>
            <div className="main-select-container">
              <span>Par qui ?</span>
              <select
                id="idUserExpenser"
                name="idUserExpenser"
                onChange={(e) => handleChange(e)}
                className="select-form"
              >
                <option value="">Choisissez un utilisateur...</option>
                {users.map((user) => (
                  <option
                    key={user.idUser}
                    value={user.idUser}
                  >
                    {user.firstNameUser}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="main-button-container">
            <button
              onClick={(e) => {
                displayConfirmPopup(e);
              }}
            >
              Ajouter
            </button>
            <button onClick={clearInput}>Effacer les champs</button>
            <button onClick={() => navigate("/menu")}>Annuler</button>
          </div>
        </div>
      )}
      {confirmPopup && (
        <Confirm
          parentSetConfirmPopup={setConfirmPopup}
          parentMethodToConfirm={createNewSpent}
          parentConfirmMessage={confirmMessage}
        />
      )}
    </div>
  );
};

export default NewMonthlySpent;
