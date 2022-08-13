import axios from "axios";
import SettingService from "./SettingService";

const ACCOUNT_API_BASE_URL = "/account";

class AccountService {
  postNewUser(user) {
    console.log("Post new user to the API app in order to create new account");
    return axios.post(SettingService.API_URL_BASE() + ACCOUNT_API_BASE_URL + "/new", user);
  }

  postUserForLogIn(user) {
    console.log("Post user at API app to attempt to authenticate");
    return axios.post(SettingService.API_URL_BASE() + ACCOUNT_API_BASE_URL + "/connect", user);
  }
}

export default new AccountService();
