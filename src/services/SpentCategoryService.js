import axios from "axios";
import SettingService from "./SettingService";

const SPENT_CATEGORY_API_BASE_URL =
  "/spentcategory";

class SpentCategoryService {
  getAllSpentCategories() {
    console.log("Send request to API to get all spent categories");
    return axios.get(SettingService.API_URL_BASE() + SPENT_CATEGORY_API_BASE_URL + "/getall");
  }
}

export default new SpentCategoryService();
