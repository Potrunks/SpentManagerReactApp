import axios from "axios";
import SettingService from "./SettingService";

const MONTHLY_SPENT_BASE_URL = "/monthlyspent";

class MonthlySpentService {
  fetchOneById(idMonthlySpent) {
    console.log("Start to fetch monthly spent by Id " + idMonthlySpent);
    return axios.get(
      SettingService.API_URL_BASE() +
        MONTHLY_SPENT_BASE_URL +
        "/getOne/" +
        idMonthlySpent
    );
  }

  deleteOneById(idMonthlySpent) {
    console.log("Start to delete monthly spent id " + idMonthlySpent);
    return axios.delete(
      SettingService.API_URL_BASE() +
        MONTHLY_SPENT_BASE_URL +
        "/delete/" +
        idMonthlySpent
    );
  }

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

  updateMonthlySpent(monthlySpent) {
    console.log("Modify monthly spent id " + monthlySpent.idMonthlySpent);
    return axios.put(
      SettingService.API_URL_BASE() + MONTHLY_SPENT_BASE_URL + "/update",
      monthlySpent
    );
  }

  transformMonthlySpentIntoSpent(idMonthlySpentToTransform, idUserConnected) {
    console.log(
      "Sending monthly spent list to the API to transform into spent"
    );
    return axios.post(
      SettingService.API_URL_BASE() +
        MONTHLY_SPENT_BASE_URL +
        "/transformInto/spent/" +
        idUserConnected +
        "/" +
        idMonthlySpentToTransform
    );
  }
}

export default new MonthlySpentService();
