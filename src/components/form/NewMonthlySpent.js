import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../page/Loading";
import MainFormButtonCommand from "../UI/MainFormButtonCommand";

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
    console.log("Je créé une nouvelle dépense mensuelle");
  };

  const sendNewMonthlySpentToApi = (e) => {
    // TODO send new monthly spent to API
  };

  const clearInput = (e) => {
    // TODO clear input
    console.log("Clear Input");
  };

  useEffect(() => {
    if (sessionStorage.getItem("idUserConnected") === null) {
      console.log("User no connected");
      navigate("/");
    } else {
      setLoading(true);
      setLoading(false);
    }
  }, []);

  return (
    <div className="app-main-container">
      {loading && <Loading />}
      {!loading && (
        <div className="main-form-container">
          <MainFormButtonCommand
            backButton={true}
            addButtonAttachMethod={displayConfirmPopup}
            clearFieldsButton={true}
            clearFieldsButtonAttachMethod={clearInput}
            addButton={true}
          />
        </div>
      )}
    </div>
  );
};

export default NewMonthlySpent;
