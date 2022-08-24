import axios from "axios";
import SettingService from "./SettingService";

const MONTHLY_SPENT_BASE_URL = "/monthlyspent";

class MonthlySpentService {
  fetchAllByUser(userConnected) {
    console.log(
      "Communicate with spent manager API to fetch all Monthly spent of the user connected " +
        userConnected.firstNameUser
    );
    return axios.post(
      SettingService.API_URL_BASE() +
        MONTHLY_SPENT_BASE_URL +
        "/getAll/byUserConnected",
      userConnected
    );
  }

  newMonthlySpent(monthlySpent) {
    console.log(
      "Send the monthly spent " +
        monthlySpent.nameMonthlySpent +
        " to API : " +
        SettingService.API_URL_BASE() +
        MONTHLY_SPENT_BASE_URL +
        "/new"
    );
    return axios.post(
      SettingService.API_URL_BASE() + MONTHLY_SPENT_BASE_URL + "/new",
      monthlySpent
    );
  }
}

export default new MonthlySpentService();
