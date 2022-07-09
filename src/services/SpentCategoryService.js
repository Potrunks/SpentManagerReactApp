import axios from "axios";

const SPENT_CATEGORY_API_BASE_URL =
  "https://spent-manager-spring-app.herokuapp.com/spentmanager/spentcategory";

class SpentCategoryService {
  getAllSpentCategories() {
    console.log("Send request to API to get all spent categories");
    return axios.get(SPENT_CATEGORY_API_BASE_URL + "/getall");
  }
}

export default new SpentCategoryService();
