import axios from "axios";
import SettingService from "./SettingService";

const SALARY_API_BASE_URL = "/salary";

class SalaryService {

    getSalaryByID(idSalary) {
        console.log("Send salary id " + idSalary + " request to the API");
        return axios.get(SettingService.API_URL_BASE() + SALARY_API_BASE_URL + "/get/" + idSalary);
    }

    updateSalary(idUserConnected, salary) {
        console.log("Send salary id " + salary.idSalary + " request to the API");
        return axios.put(SettingService.API_URL_BASE() + SALARY_API_BASE_URL + "/update/" + idUserConnected, salary);
    }
}

export default new SalaryService();