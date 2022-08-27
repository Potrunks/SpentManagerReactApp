import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MonthlySpentService from "../../services/MonthlySpentService";
import Loading from "../page/Loading";
import ConfirmButtonCommand from "./ConfirmButtonCommand";

const MonthlySpentCard = ({ mode }) => {
  const { iditem } = useParams();
  const [loading, setLoading] = useState(true);
  const [monthlySpent, setMonthlySpent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("idUserConnected") === null) {
      console.log("User no connected");
      navigate("/");
    } else {
      const fetchData = async () => {
        try {
          console.log("Start to fetch monthly spent id " + iditem);
          setLoading(true);
          const response = await MonthlySpentService.fetchOneById(iditem);
          setMonthlySpent(response.data);
          console.log("Monthly spent id " + iditem + " fetched successfully");
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, []);

  const methodForConfirm = (e) => {
    e.preventDefault();
    if (mode === "delete") {
      console.log("Start to delete the monthly spent by id :" + iditem);
      MonthlySpentService.deleteOneById(iditem).then((response) => {
        console.log("Monthly spent id " + iditem + " deleted successfully");
        navigate("/success");
      });
    } else if (mode === "add") {
      MonthlySpentService.transformMonthlySpentIntoSpent(
        iditem,
        sessionStorage.getItem("idUserConnected")
      ).then((response) => {
        console.log("Monthly spent id " + iditem + " tranformed successfully");
        navigate("/success");
      });
    }
  };

  return (
    <div className="app-main-container">
      {loading && <Loading />}
      {!loading && (
        <div className="monthly-spent-card-main-container">
          <div
            key={monthlySpent.idMonthlySpent}
            className="monthly-spent-card-container"
          >
            <div className="monthly-spent-card">
              <div className="monthly-spent-card-title">
                <span>{monthlySpent.nameMonthlySpent}</span>
              </div>
              <div className="monthly-spent-card-info">
                <span>Prix : {monthlySpent.valueMonthlySpent} euros</span>
                <span>Catégorie : {monthlySpent.nameMonthlySpentCategory}</span>
                {monthlySpent.commentMonthlySpent !== "" && (
                  <span className="monthly-spent-comment">
                    Commentaire : {monthlySpent.commentMonthlySpent}
                  </span>
                )}
              </div>
              <ConfirmButtonCommand
                methodForConfirm={methodForConfirm}
                iditem={iditem}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MonthlySpentCard;
