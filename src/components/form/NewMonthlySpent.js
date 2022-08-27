import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../page/Loading";
import ErrorMessage from "../UI/ErrorMessage";
import MainFormButtonCommand from "../UI/MainFormButtonCommand";
import MainTitleDisplay from "../UI/MainTitleDisplay";
import Field from "../UI/Field";
import Confirm from "../Popup/Confirm";
import SpentCategoryService from "../../services/SpentCategoryService";
import InputTestService from "../../services/InputTestService";
import MonthlySpentService from "../../services/MonthlySpentService";

const NewMonthlySpent = () => {
  const [monthlySpent, setMonthlySpent] = useState({
    valueMonthlySpent: "",
    nameMonthlySpent: "",
    commentMonthlySpent: "",
    idSpentCategorySelected: "",
    isActive: "",
    idUserCreator: sessionStorage.getItem("idUserConnected"),
  });
  const [loading, setLoading] = useState(true);
  const [spentCategories, setSpentCategories] = useState([]);
  const confirmMessage =
    "Etes-vous sur de vouloir créer cette dépense mensuelle ?";
  const [confirmPopup, setConfirmPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setMonthlySpent({ ...monthlySpent, [e.target.name]: value });
  };

  const handleCheckbox = (e) => {
    const checked = e.target.checked;
    setMonthlySpent({ ...monthlySpent, [e.target.name]: checked });
  };

  const displayConfirmPopup = (e) => {
    if (
      InputTestService.verifyIntegrityNewMonthlySpent(monthlySpent) === true &&
      confirmPopup === false
    ) {
      setConfirmPopup(true);
    }
  };

  const sendNewMonthlySpentToApi = (e) => {
    setConfirmPopup(false);
    console.log("Start to post a new monthly spent for the API");
    MonthlySpentService.newMonthlySpent(monthlySpent)
      .then((response) => {
        if (response.data.error !== undefined) {
          setErrorMessage(response.data.error);
          document.getElementById("API-error-box").style.display = "flex";
        } else {
          console.log("New monthly spent successfully sent to the API");
          navigate("/success");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearInput = (e) => {
    e.preventDefault();
    setMonthlySpent({
      valueMonthlySpent: "",
      nameMonthlySpent: "",
      commentMonthlySpent: "",
    });
  };

  useEffect(() => {
    if (sessionStorage.getItem("idUserConnected") === null) {
      console.log("User no connected");
      navigate("/");
    } else {
      setLoading(true);
      console.log("Start loading...");
      const fetchData = async () => {
        try {
          const response = await SpentCategoryService.getAllSpentCategories();
          setSpentCategories(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
      setLoading(false);
      console.log("Data loaded");
    }
  }, []);

  return (
    <div className="app-main-container">
      {loading && <Loading />}
      {!loading && (
        <div className="main-form-container">
          <MainTitleDisplay
            mode={"form"}
            titleToDisplay={"Ajouter Dépense Mensuelle"}
          />
          <ErrorMessage message={errorMessage} />
          <div className="main-input-field" id="form">
            <Field
              onChange={(e) => handleChange(e)}
              property={monthlySpent.valueMonthlySpent}
              idAndName={"valueMonthlySpent"}
              placeholder={""}
              type={"number"}
              label={"Prix (euros)"}
            />
            <Field
              onChange={handleChange}
              property={monthlySpent.nameMonthlySpent}
              idAndName={"nameMonthlySpent"}
              placeholder={""}
              type={"text"}
              label={"Nom"}
            />
            <Field
              onChange={handleChange}
              property={monthlySpent.commentMonthlySpent}
              idAndName={"commentMonthlySpent"}
              placeholder={""}
              type={"text"}
              label={"Commentaire"}
            />
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
            <Field
              type={"checkbox"}
              property={monthlySpent.isActive}
              onChange={handleCheckbox}
              label={"Dépense Mensuelle Active ?"}
              idAndName={"isActive"}
            />
          </div>
          <MainFormButtonCommand
            backButton={true}
            addButtonAttachMethod={displayConfirmPopup}
            clearFieldsButton={true}
            clearFieldsButtonAttachMethod={clearInput}
            addButton={true}
          />
        </div>
      )}
      {confirmPopup && (
        <Confirm
          parentSetConfirmPopup={setConfirmPopup}
          parentMethodToConfirm={sendNewMonthlySpentToApi}
          parentConfirmMessage={confirmMessage}
        />
      )}
    </div>
  );
};

export default NewMonthlySpent;
