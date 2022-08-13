import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainButtonCommand from "../UI/MainButtonCommand";
import MainTitleDisplay from "../UI/MainTitleDisplay";
import MonthlySpentList from "../UI/MonthlySpentList";

const MonthlySpentManager = () => {
  const navigate = useNavigate();
  const [monthlySpentList, setMonthlySpentList] = useState(null);

  useEffect(() => {
    if (sessionStorage.getItem("idUserConnected") === null) {
      console.log("User no connected");
      navigate("/");
    } else {
      const fetchData = async () => {
        console.log("Start to fetch Monthly spent list");
        // recupérer la list
      };
    }
  }, []);

  return (
    <div className="app-main-container">
      <MainTitleDisplay titleToDisplay={"Dépenses Mensuelles"} />
      <MainButtonCommand
        addButton={true}
        backButton={true}
        mode={"MonthlySpent"}
      />
      <MonthlySpentList
        monthlySpentList={monthlySpentList}
        titleToDisplay={"Mes Dépenses Mensuelles"}
      />
    </div>
  );
};

export default MonthlySpentManager;
