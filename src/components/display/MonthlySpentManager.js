import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MonthlySpentService from "../../services/MonthlySpentService";
import MainButtonCommand from "../UI/MainButtonCommand";
import MainTitleDisplay from "../UI/MainTitleDisplay";
import MonthlySpentList from "../UI/MonthlySpentList";
import Loading from "../page/Loading";

const MonthlySpentManager = () => {
  const navigate = useNavigate();
  const [userConnected, setUserConnected] = useState({
    idUser: sessionStorage.getItem("idUserConnected"),
    firstNameUser: sessionStorage.getItem("firstNameUserConnected"),
  });
  const [monthlySpentList, setMonthlySpentList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("idUserConnected") === null) {
      console.log("User no connected");
      navigate("/");
    } else {
      const fetchData = async () => {
        setLoading(true);
        console.log(
          "Start to fetch Monthly spent list of user " +
            sessionStorage.getItem("firstNameUserConnected")
        );
        try {
          const responseFetchAllMonthlySpent =
            await MonthlySpentService.fetchAllByUser(userConnected);
          setMonthlySpentList(responseFetchAllMonthlySpent.data);
          console.log("data fetch successfully");
          console.log(responseFetchAllMonthlySpent.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, []);

  return (
    <div className="app-main-container">
      {loading && <Loading />}
      {!loading && <MainTitleDisplay titleToDisplay={"Dépenses Mensuelles"} />}
      {!loading && (
        <MainButtonCommand
          addButton={true}
          backButton={true}
          mode={"MonthlySpent"}
        />
      )}
      {!loading && (
        <MonthlySpentList
          monthlySpentList={monthlySpentList}
          titleToDisplay={"Mes Dépenses Mensuelles"}
        />
      )}
    </div>
  );
};

export default MonthlySpentManager;
