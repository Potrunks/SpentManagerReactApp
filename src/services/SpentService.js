import axios from "axios";
import SettingService from "./SettingService";

const SPENT_API_BASE_URL = "/spent";

class SpentService {
  newSpent(spent) {
    return axios.post(SettingService.API_URL_BASE() + SPENT_API_BASE_URL + "/new", spent);
  }

  getSpentsPeriodInProgress() {
    console.log("Get all the spents during period spent in progress");
    return axios.get(SettingService.API_URL_BASE() + SPENT_API_BASE_URL + "/getAllByPeriodSpentInProgress/");
  }

  getSpentsPeriodByID(idPeriodSpent) {
    console.log(
      "Get all the spents during period spent by id : " + idPeriodSpent
    );
    return axios.get(
      SettingService.API_URL_BASE() + SPENT_API_BASE_URL + "/getAllByPeriodSpent/" + idPeriodSpent
    );
  }

  deleteExpenseById(idSpent) {
    console.log("Start to post the spent id " + idSpent + " to the API");
    return axios.delete(SettingService.API_URL_BASE() + SPENT_API_BASE_URL + "/delete/" + idSpent);
  }

  getSpentByID(idSpent) {
    console.log(
      "Start to send the spent " + idSpent + " to the API for fetch data"
    );
    return axios.get(SettingService.API_URL_BASE() + SPENT_API_BASE_URL + "/get/" + idSpent);
  }

  updateSpentByID(idSpent, spent) {
    console.log("Start to send spent id " + idSpent + " to the API for update");
    return axios.put(SettingService.API_URL_BASE() + SPENT_API_BASE_URL + "/update/" + idSpent, spent);
  }
}

export default new SpentService();
